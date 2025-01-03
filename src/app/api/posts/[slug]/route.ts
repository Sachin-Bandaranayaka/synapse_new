import { NextResponse } from 'next/server';
import PostModel from '@/models/Post';
import { connectDB } from '@/lib/mongodb';

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        await connectDB();

        const post = await PostModel.findOne({
            slug: params.slug,
            status: 'published',
        });

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Something went wrong!' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const body = await request.json();
        await connectDB();

        const post = await PostModel.findOneAndUpdate(
            { slug: params.slug },
            body,
            { new: true, runValidators: true }
        );

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Something went wrong!' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        await connectDB();

        const post = await PostModel.findOneAndDelete({ slug: params.slug });

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: 'Post deleted successfully!' }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || 'Something went wrong!' },
            { status: 500 }
        );
    }
} 