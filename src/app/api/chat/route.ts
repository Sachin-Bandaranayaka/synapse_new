import { NextResponse } from 'next/server';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

const SYSTEM_PROMPT = `You are a helpful AI assistant for Synapse Labs, a digital innovation company. 
You help potential clients understand our services and guide them through the process of starting a project.
Our main services include:
- Web Development
- Mobile App Development
- Custom Software Solutions
- AI/ML Integration
- Cloud Solutions
- Digital Transformation

Be concise, professional, and helpful. If you don't know something specific about the company, be honest and guide them to contact our team.`;

async function fetchWithRetry(url: string, options: RequestInit, retries = 2, delay = 1000): Promise<Response> {
    try {
        console.log('Making API request to:', url);
        console.log('Request headers:', JSON.stringify(options.headers, null, 2));
        
        const response = await fetch(url, options);
        console.log('Response status:', response.status);
        
        if (response.ok) {
            console.log('Request successful');
            return response;
        }
        
        // Don't retry auth errors
        if (response.status === 401) {
            console.error('Authentication error - API key might be invalid');
            return response;
        }
        
        console.error(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
        if (retries > 0) {
            console.log(`Retrying request... (${retries} attempts left)`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchWithRetry(url, options, retries - 1, delay * 2);
        }
        console.error('All retry attempts failed:', error);
        throw error;
    }
}

export async function POST(req: Request) {
    try {
        console.log('Chat API request received');
        const { messages } = await req.json();

        if (!process.env.DEEPSEEK_API_KEY) {
            console.error('DeepSeek API key not configured in environment');
            return NextResponse.json(
                { error: 'Configuration error' },
                { status: 500 }
            );
        }

        // Log API key length for debugging (never log the full key)
        console.log('API key length:', process.env.DEEPSEEK_API_KEY.length);
        console.log('API key prefix:', process.env.DEEPSEEK_API_KEY.substring(0, 5) + '...');

        console.log('Sending request to DeepSeek API:', {
            model: 'deepseek-chat',
            messageCount: messages.length,
            systemPromptLength: SYSTEM_PROMPT.length,
        });

        const response = await fetchWithRetry(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages.map((msg: any) => ({
                        role: msg.sender === 'user' ? 'user' : 'assistant',
                        content: msg.text
                    }))
                ],
                temperature: 0.7,
                max_tokens: 1000,
                top_p: 0.95,
                stream: false,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('DeepSeek API Error Response:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData,
                url: DEEPSEEK_API_URL,
            });
            
            if (response.status === 401) {
                return NextResponse.json(
                    { error: 'Authentication error - Please check your API key' },
                    { status: 401 }
                );
            }
            
            throw new Error(`API request failed: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.choices?.[0]?.message?.content) {
            console.error('Unexpected API response format:', JSON.stringify(data, null, 2));
            throw new Error('Invalid response format from API');
        }

        console.log('Successful response from DeepSeek API');
        
        return NextResponse.json({
            message: data.choices[0].message.content
        });
    } catch (error) {
        console.error('Chat API Error:', error);
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            cause: error.cause,
        });
        
        // Check for specific error types
        if (error instanceof TypeError && error.message.includes('fetch')) {
            const cause = (error as any).cause;
            if (cause?.code === 'ENOTFOUND') {
                return NextResponse.json(
                    { error: 'Unable to reach AI service. Please try again later.' },
                    { status: 503 }
                );
            }
            return NextResponse.json(
                { error: 'Network error - Please check your connection' },
                { status: 503 }
            );
        }
        
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
