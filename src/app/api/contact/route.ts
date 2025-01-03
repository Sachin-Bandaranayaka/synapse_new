import { NextResponse } from 'next/server';
import Contact from '@/models/Contact';
import { connectDB } from '@/lib/mongodb';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Connect to database
        await connectDB();

        // Create new contact message
        const contact = await Contact.create({
            name,
            email,
            message,
            status: 'unread',
            createdAt: new Date(),
        });

        // Send email notification
        await sendEmail({
            to: process.env.ADMIN_EMAIL!,
            subject: 'New Contact Form Submission',
            template: 'NEW_MESSAGE',
            data: {
                name,
                email,
                message,
            },
        });

        return NextResponse.json(contact);
    } catch (error: any) {
        console.error('Error in contact form submission:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
} 