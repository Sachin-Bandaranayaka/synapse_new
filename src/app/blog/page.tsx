'use client';

import { useEffect, useState } from 'react';
import BlogContent from '@/components/blog/BlogContent';
import MainLayout from '@/components/layout/MainLayout';
import { Post } from '@/types/post';
import { motion } from 'framer-motion';

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

    return (
        <MainLayout>
            <div className="relative isolate">
                {/* Background */}
                <div className="absolute inset-x-0 top-0 h-[1000px] bg-gradient-to-b from-gray-50 via-gray-50 to-white" />
                
                {/* Gradient Blob */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-emerald-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
                </div>

                {/* Hero Section */}
                <div className="relative px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                                Insights & Articles
                            </h1>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                                Explore our latest thoughts on technology, development, and digital innovation.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-white rounded-2xl overflow-hidden h-[400px] shadow-sm border border-gray-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <div className="animate-pulse">
                                            <div className="h-48 bg-gray-100" />
                                            <div className="p-6 space-y-4">
                                                <div className="h-4 bg-gray-100 rounded w-3/4" />
                                                <div className="h-4 bg-gray-100 rounded w-1/2" />
                                                <div className="h-4 bg-gray-100 rounded w-5/6" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : error ? (
                            <motion.div
                                className="text-center py-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="text-red-600">{error}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                                >
                                    Try Again
                                </button>
                            </motion.div>
                        ) : (
                            <BlogContent
                                posts={posts}
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}