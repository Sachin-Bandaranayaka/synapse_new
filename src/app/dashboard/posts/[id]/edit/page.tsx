'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';

// Dynamic import of the MDEditor component
const MDEditor = dynamic(
    () => import('@uiw/react-md-editor'),
    { ssr: false }
);

interface Post {
    _id: string;
    title: string;
    excerpt: string;
    content: string;
    status: 'draft' | 'published';
}

export default function EditPost({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { data: session } = useSession();
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/dashboard/posts/${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError('Failed to load post');
                console.error('Error fetching post:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [params.id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!post) return;

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch(`/api/dashboard/posts/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            });

            if (!response.ok) {
                throw new Error('Failed to update post');
            }

            router.push('/dashboard/posts');
        } catch (error) {
            setError('Failed to update post');
            console.error('Error updating post:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <button
                    onClick={() => router.back()}
                    className="mt-4 text-primary hover:text-primary-dark"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Edit Post
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Make changes to your blog post.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    required
                                    value={post.title}
                                    onChange={(e) =>
                                        setPost({ ...post, title: e.target.value })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="excerpt"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Excerpt
                                </label>
                                <textarea
                                    id="excerpt"
                                    name="excerpt"
                                    rows={2}
                                    required
                                    value={post.excerpt}
                                    onChange={(e) =>
                                        setPost({ ...post, excerpt: e.target.value })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="content"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Content
                                </label>
                                <div className="mt-1" data-color-mode="light">
                                    <MDEditor
                                        value={post.content}
                                        onChange={(value) =>
                                            setPost({ ...post, content: value || '' })
                                        }
                                        preview="edit"
                                        height={400}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Status
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={post.status}
                                    onChange={(e) =>
                                        setPost({ ...post, status: e.target.value as 'draft' | 'published' })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
} 