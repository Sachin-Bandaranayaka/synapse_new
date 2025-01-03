import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import PostModel from '@/models/Post';
import { connectDB } from '@/lib/mongodb';

function generateSlug(title: string): string {
    if (!title) return '';
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '9');
        const category = searchParams.get('category');
        const tag = searchParams.get('tag');
        const search = searchParams.get('search');

        const query: any = { status: 'published' };

        if (category) {
            query.categories = category;
        }

        if (tag) {
            query.tags = tag;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ];
        }

        await connectDB();

        const skip = (page - 1) * limit;
        const totalPosts = await PostModel.countDocuments(query);
        const totalPages = Math.ceil(totalPosts / limit);

        const posts = await PostModel.find(query)
            .sort({ publishedAt: -1 })
            .skip(skip)
            .limit(limit)
            .select('-content')
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
        return NextResponse.json(
            { message: error.message || 'Something went wrong!' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await connectDB();

        // Set default values and generate initial slug
        const postData = {
            ...body,
            author: {
                name: 'Admin',
                image: '/images/avatar.png'
            },
            status: body.status || 'draft',
            publishedAt: body.status === 'published' ? new Date() : undefined,
            slug: generateSlug(body.title) // Generate initial slug
        };

        // Create new post
        const post = new PostModel(postData);

        // Save the post (this will trigger the pre-save hooks)
        await post.save();

        return NextResponse.json(
            { message: 'Post created successfully!', post },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Post creation error:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            return NextResponse.json(
                {
                    message: 'Validation failed',
                    errors: Object.keys(error.errors).reduce((acc: any, key) => {
                        acc[key] = error.errors[key].message;
                        return acc;
                    }, {})
                },
                { status: 400 }
            );
        }

        // Handle duplicate key errors
        if (error.code === 11000) {
            return NextResponse.json(
                {
                    message: 'A post with this slug already exists',
                    errors: { slug: 'Must be unique' }
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                message: error.message || 'Failed to create post',
                errors: error.errors || {}
            },
            { status: 500 }
        );
    }
} 