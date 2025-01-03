'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { PencilIcon, TrashIcon, PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Post {
    _id: string;
    title: string;
    excerpt: string;
    status: 'draft' | 'published';
    createdAt: string;
    updatedAt: string;
}

export default function Posts() {
    const { data: session } = useSession();
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<'all' | 'draft' | 'published'>('all');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/dashboard/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                setError('Failed to load posts');
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (postId: string) => {
        if (!confirm('Are you sure you want to delete this post?')) {
            return;
        }

        try {
            const response = await fetch(`/api/dashboard/posts/${postId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            setPosts(posts.filter(post => post._id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const filteredPosts = posts
        .filter(post => selectedStatus === 'all' || post.status === selectedStatus)
        .filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {error}
                </h1>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Blog Posts
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage your blog posts.
                </p>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row gap-4">
                {/* Search Bar */}
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search posts..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>

                {/* Status Filter */}
                <div className="sm:w-48">
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value as 'all' | 'draft' | 'published')}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-gray-700"
                    >
                        <option value="all">All Posts</option>
                        <option value="draft">Drafts</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                {/* Create New Post Button */}
                <div>
                    <Link
                        href="/dashboard/posts/new"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        <PlusIcon className="h-5 w-5 mr-2" />
                        New Post
                    </Link>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredPosts.map((post) => (
                        <li key={post._id}>
                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                                            {post.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.status === 'published'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                }`}>
                                                {post.status}
                                            </span>
                                            <span className="ml-2">
                                                Last updated on {new Date(post.updatedAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Link
                                            href={`/dashboard/posts/${post._id}/edit`}
                                            className="p-2 text-gray-400 hover:text-gray-500"
                                        >
                                            <PencilIcon className="h-5 w-5" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            className="p-2 text-red-400 hover:text-red-500"
                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 