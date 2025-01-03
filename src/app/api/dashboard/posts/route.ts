import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Post from '@/models/Post';

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
        const limit = parseInt(searchParams.get('limit') || '9');
        const status = searchParams.get('status') || 'published';

        const skip = (page - 1) * limit;

        const query = status === 'all' ? {} : { status };
        const totalPosts = await Post.countDocuments(query);
        const totalPages = Math.ceil(totalPosts / limit);

        const posts = await Post.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();

        return NextResponse.json({
            posts,
            pagination: {
                currentPage: page,
                totalPages,
                totalPosts,
            },
        });
    } catch (error: any) {
        console.error('Error fetching posts:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to fetch posts' },
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
        await connectDB();

        const post = await Post.create({
            ...body,
            author: {
                name: session.user?.name,
                image: session.user?.image,
            },
        });

        return NextResponse.json(post);
    } catch (error: any) {
        console.error('Error creating post:', error);
        return NextResponse.json(
            { message: error.message || 'Failed to create post' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { searchParams } = new URL(request.url);
        const postId = searchParams.get('id');

        if (!postId) {
            return NextResponse.json(
                { message: 'Post ID is required' },
                { status: 400 }
            );
        }

        await connectDB();
        const post = await Post.findOneAndDelete({
            _id: postId,
            'author.name': session.user?.name,
        });

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Post deleted successfully' });
    } catch (error: any) {
        console.error('Error deleting post:', error);
        return NextResponse.json(
            { message: error.message || 'Failed to delete post' },
            { status: 500 }
        );
    }
} 