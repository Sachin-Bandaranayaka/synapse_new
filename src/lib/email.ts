import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailTemplate = 'NEW_MESSAGE' | 'NEW_POST' | 'WELCOME' | 'SUBSCRIPTION';

interface EmailData {
    [key: string]: any;
}

interface SendEmailParams {
    to: string;
    subject: string;
    template: EmailTemplate;
    data: EmailData;
}

const templates = {
    NEW_MESSAGE: (data: EmailData) => ({
        subject: 'New Contact Form Submission',
        html: `
            <h2>New Message from ${data.name}</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
        `,
    }),
    NEW_POST: (data: EmailData) => ({
        subject: 'New Blog Post Published',
        html: `
            <h2>${data.title}</h2>
            <p>${data.excerpt}</p>
            <a href="${data.url}">Read More</a>
        `,
    }),
    WELCOME: (data: EmailData) => ({
        subject: 'Welcome to Synapse Labs',
        html: `
            <h2>Welcome ${data.name}!</h2>
            <p>Thank you for joining Synapse Labs. We're excited to have you on board.</p>
        `,
    }),
    SUBSCRIPTION: (data: EmailData) => ({
        subject: 'Newsletter Subscription Confirmed',
        html: `
            <h2>Thank you for subscribing!</h2>
            <p>You've been added to our newsletter list. We'll keep you updated with our latest news and updates.</p>
        `,
    }),
};

export async function sendEmail({ to, subject, template, data }: SendEmailParams) {
    try {
        const emailContent = templates[template](data);

        const result = await resend.emails.send({
            from: 'Synapse Labs <no-reply@synapselabs.com>',
            to,
            subject: emailContent.subject,
            html: emailContent.html,
        });

        return result;
    } catch (error: any) {
        console.error('Error sending email:', error);
        throw new Error(error.message || 'Failed to send email');
    }
} 