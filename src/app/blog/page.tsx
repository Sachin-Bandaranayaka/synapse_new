'use client';

import { useEffect, useState } from 'react';
import BlogContent from '@/components/blog/BlogContent';
import MainLayout from '@/components/layout/MainLayout';
import { Post } from '@/types/post';

interface BlogResponse {
    posts: Post[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalPosts: number;
    };
}

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/posts?page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data: BlogResponse = await response.json();
                setPosts(data.posts);
                setTotalPages(data.pagination.totalPages);
            } catch (error) {
                setError('Failed to load posts');
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [currentPage]);

    if (isLoading) {
        return (
            <MainLayout>
                <div className="container py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse"
                            >
                                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
                                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout>
        );
    }

    if (error || !posts) {
        return (
            <MainLayout>
                <div className="container py-24">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {error || 'No posts found'}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Please try again later.
                        </p>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="container py-24">
                <BlogContent
                    posts={posts}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </MainLayout>
    );
} 