'use client';

import { useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useAnalytics } from '@/hooks/useAnalytics';
import type { Post } from '@/models/Post';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

export default function BlogPost({ params }: BlogPostProps) {
    const { trackEvent } = useAnalytics();
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/posts/${params.slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPost(data);

                // Track post view
                trackEvent({
                    name: 'blog_post_view',
                    properties: {
                        title: data.title,
                        slug: params.slug,
                    },
                });
            } catch (error) {
                setError('Failed to load post');
                console.error('Error fetching post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [params.slug, trackEvent]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {error || 'Post not found'}
                </h1>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {post.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                </p>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Published on {new Date(post.createdAt).toLocaleDateString()}
                </div>
            </header>

            <div className="prose dark:prose-invert max-w-none">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
} 