import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Message from '@/models/Message';

export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        await connectDB();

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');

        const skip = (page - 1) * limit;
        const totalMessages = await Message.countDocuments();
        const totalPages = Math.ceil(totalMessages / limit);

        const messages = await Message.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();

        return NextResponse.json({
            messages,
            pagination: {
                currentPage: page,
                totalPages,
                totalMessages,
            },
        });
    } catch (error: any) {
        console.error('Error fetching messages:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch messages' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        await connectDB();
        const newMessage = await Message.create({
            name,
            email,
            message,
            status: 'new',
        });

        return NextResponse.json(newMessage);
    } catch (error: any) {
        console.error('Error creating message:', error);
        return NextResponse.json(
            { message: error.message || 'Failed to create message' },
            { status: 500 }
        );
    }
} 