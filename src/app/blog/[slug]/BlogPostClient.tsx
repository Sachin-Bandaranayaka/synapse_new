'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import type { Post } from '@/models/Post';

interface BlogPostClientProps {
    post: Post;
    slug: string;
}

export default function BlogPostClient({ post, slug }: BlogPostClientProps) {
    const { trackEvent } = useAnalytics();

    useEffect(() => {
        // Track post view
        trackEvent({
            name: 'blog_post_view',
            properties: {
                title: post.title,
                slug: slug,
            },
        });
    }, [post.title, slug, trackEvent]);

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                </h1>
                <p className="text-lg text-gray-600">
                    {post.excerpt}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                    Published on {new Date(post.createdAt).toLocaleDateString()}
                </div>
            </header>

            <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
