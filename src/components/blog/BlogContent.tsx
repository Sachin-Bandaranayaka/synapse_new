'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Post } from '@/types/post';

interface BlogContentProps {
    posts: Post[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function BlogContent({ posts, currentPage, totalPages, onPageChange }: BlogContentProps) {
    const { trackEvent } = useAnalytics();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handlePostClick = (postTitle: string) => {
        trackEvent({
            name: 'blog_post_view',
            properties: {
                title: postTitle
            }
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <article
                    key={post._id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    <Link href={`/blog/${post.slug}`} onClick={() => handlePostClick(post.title)}>
                        <div className="relative h-48">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                <span className="mx-2">•</span>
                                <span>{post.author.name}</span>
                            </div>
                        </div>
                    </Link>
                </article>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="col-span-full flex justify-center space-x-2 mt-8">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`px-4 py-2 rounded ${currentPage === page
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
} 