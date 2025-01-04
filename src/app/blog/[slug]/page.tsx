import BlogPostClient from './BlogPostClient';
import type { Post } from '@/models/Post';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

async function getPost(slug: string): Promise<Post> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    
    return response.json();
}

export default async function BlogPost({ params }: BlogPostProps) {
    try {
        const post = await getPost(params.slug);
        return <BlogPostClient post={post} slug={params.slug} />;
    } catch (error) {
        return (
            <div className="text-center py-12">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Failed to load blog post
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Please try again later
                </p>
            </div>
        );
    }
}