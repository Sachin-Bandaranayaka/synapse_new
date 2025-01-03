import { NextRequest, NextResponse } from 'next/server';
import { runSEOChecks } from '@/lib/seo-test';

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();
        
        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        const results = await runSEOChecks(url);
        
        return NextResponse.json(results);
    } catch (error) {
        console.error('Error in SEO test:', error);
        return NextResponse.json(
            { error: 'Failed to run SEO tests' },
            { status: 500 }
        );
    }
}
