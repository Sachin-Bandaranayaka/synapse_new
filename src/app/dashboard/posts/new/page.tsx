'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

export default function NewPost() {
    const router = useRouter();
    const { data: session } = useSession();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const excerpt = formData.get('excerpt') as string;
        const coverImage = (formData.get('coverImage') as string).trim();
        const categories = formData.get('categories') as string;
        const tags = formData.get('tags') as string;
        const status = formData.get('status') as string;

        try {
            const response = await fetch('/api/dashboard/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    slug: generateSlug(title),
                    content,
                    excerpt,
                    coverImage,
                    categories: categories ? categories.split(',').map(cat => cat.trim()) : [],
                    tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
                    status,
                    author: {
                        name: session?.user?.name || 'Anonymous',
                        image: session?.user?.image,
                    },
                    publishedAt: status === 'published' ? new Date().toISOString() : null,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            router.push('/dashboard/posts');
        } catch (error) {
            console.error('Error creating post:', error);
            setError('Failed to create post. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
            {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded mb-6">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                        Excerpt
                    </label>
                    <textarea
                        id="excerpt"
                        name="excerpt"
                        required
                        rows={3}
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        rows={10}
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="coverImage" className="block text-sm font-medium mb-2">
                        Cover Image URL
                    </label>
                    <input
                        type="url"
                        id="coverImage"
                        name="coverImage"
                        required
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="categories" className="block text-sm font-medium mb-2">
                        Categories (comma-separated)
                    </label>
                    <input
                        type="text"
                        id="categories"
                        name="categories"
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="tags" className="block text-sm font-medium mb-2">
                        Tags (comma-separated)
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                <div>
                    <label htmlFor="status" className="block text-sm font-medium mb-2">
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        required
                        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark disabled:opacity-50"
                >
                    {isSubmitting ? 'Creating...' : 'Create Post'}
                </button>
            </form>
        </div>
    );
} 