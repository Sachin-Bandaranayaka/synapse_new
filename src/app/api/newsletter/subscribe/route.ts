import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        await connectDB();

        // Check if subscriber already exists
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json(
                { error: 'Email already subscribed' },
                { status: 400 }
            );
        }

        // Create new subscriber
        const subscriber = await Subscriber.create({
            email,
            createdAt: new Date(),
        });

        // Send welcome email
        await sendEmail({
            to: email,
            subject: 'Welcome to Our Newsletter',
            template: 'SUBSCRIPTION',
            data: {
                email,
            },
        });

        return NextResponse.json(subscriber);
    } catch (error: any) {
        console.error('Error in newsletter subscription:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to subscribe' },
            { status: 500 }
        );
    }
} 