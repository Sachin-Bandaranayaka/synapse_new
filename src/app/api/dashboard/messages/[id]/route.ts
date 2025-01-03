import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Message from '@/models/Message';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        await connectDB();
        const message = await Message.findById(params.id).lean();

        if (!message) {
            return NextResponse.json(
                { message: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(message);
    } catch (error: any) {
        console.error('Error fetching message:', error);
        return NextResponse.json(
            { message: error.message || 'Failed to fetch message' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        await connectDB();
        const message = await Message.findByIdAndDelete(params.id);

        if (!message) {
            return NextResponse.json(
                { message: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Message deleted successfully' });
    } catch (error: any) {
        console.error('Error deleting message:', error);
        return NextResponse.json(
            { message: error.message || 'Failed to delete message' },
            { status: 500 }
        );
    }
} 