'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
    category: string;
}

export default function PortfolioManagement() {
    const { data: session } = useSession();
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState<PortfolioItem>({
        id: '',
        title: '',
        description: '',
        image: '',
        link: '',
        technologies: [],
        category: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement save functionality
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Portfolio Management
                </h1>
                <button
                    onClick={() => {
                        setIsEditing(true);
                        setCurrentItem({
                            id: '',
                            title: '',
                            description: '',
                            image: '',
                            link: '',
                            technologies: [],
                            category: '',
                        });
                    }}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                >
                    Add New Project
                </button>
            </div>

            {/* Portfolio Items List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="relative h-48">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {item.description}
                            </p>
                            <div className="mt-4 flex justify-end space-x-2">
                                <button
                                    onClick={() => {
                                        setIsEditing(true);
                                        setCurrentItem(item);
                                    }}
                                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        // TODO: Implement delete functionality
                                    }}
                                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit/Add Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            {currentItem.id ? 'Edit Project' : 'Add New Project'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={currentItem.title}
                                    onChange={(e) =>
                                        setCurrentItem({ ...currentItem, title: e.target.value })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Description
                                </label>
                                <textarea
                                    value={currentItem.description}
                                    onChange={(e) =>
                                        setCurrentItem({ ...currentItem, description: e.target.value })
                                    }
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    value={currentItem.image}
                                    onChange={(e) =>
                                        setCurrentItem({ ...currentItem, image: e.target.value })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Project Link
                                </label>
                                <input
                                    type="text"
                                    value={currentItem.link}
                                    onChange={(e) =>
                                        setCurrentItem({ ...currentItem, link: e.target.value })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Technologies (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    value={currentItem.technologies.join(', ')}
                                    onChange={(e) =>
                                        setCurrentItem({
                                            ...currentItem,
                                            technologies: e.target.value.split(',').map((t) => t.trim()),
                                        })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Category
                                </label>
                                <select
                                    value={currentItem.category}
                                    onChange={(e) =>
                                        setCurrentItem({ ...currentItem, category: e.target.value })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    <option value="web">Web Development</option>
                                    <option value="mobile">Mobile App</option>
                                    <option value="desktop">Desktop Application</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm text-white bg-primary rounded-md hover:bg-primary-dark"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
} 