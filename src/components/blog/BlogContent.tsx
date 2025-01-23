'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Post } from '@/types/post';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaTag } from 'react-icons/fa';

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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {posts.map((post) => (
                    <motion.article
                        key={post._id}
                        className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 shadow-sm"
                        variants={item}
                    >
                        <Link href={`/blog/${post.slug}`} onClick={() => handlePostClick(post.title)}>
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <FaCalendar className="w-4 h-4" />
                                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaClock className="w-4 h-4" />
                                        <span>{post.readingTime} min read</span>
                                    </div>
                                </div>
                                
                                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <div
                                            key={tag}
                                            className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600"
                                        >
                                            <FaTag className="w-3 h-3" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                        }`}
                    >
                        Previous
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => onPageChange(i + 1)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                                currentPage === i + 1
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
}