import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import PostModel from '@/models/Post';
import { connectDB } from '@/lib/mongodb';

// Get a single post
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
        const post = await PostModel.findById(params.id).lean();

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}

// Update a post
export async function PUT(
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

        const body = await request.json();
        await connectDB();

        const post = await PostModel.findByIdAndUpdate(
            params.id,
            { ...body },
            { new: true, runValidators: true }
        ).lean();

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}

// Delete a post
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
        const post = await PostModel.findByIdAndDelete(params.id).lean();

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Post deleted successfully' });
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
} 