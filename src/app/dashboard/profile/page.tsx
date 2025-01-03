'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Profile() {
    const { data: session } = useSession();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: session?.user?.name || '',
        email: session?.user?.email || '',
        bio: '',
        location: '',
        company: '',
        website: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement profile update
        setIsEditing(false);
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Profile Settings
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage your account settings and preferences.
                </p>
            </div>

            <div className="overflow-hidden bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center space-x-5">
                        <div className="flex-shrink-0">
                            {session?.user?.image ? (
                                <Image
                                    className="h-16 w-16 rounded-full"
                                    src={session.user.image}
                                    alt={session.user.name || ''}
                                    width={64}
                                    height={64}
                                />
                            ) : (
                                <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                            )}
                        </div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                {session?.user?.name}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {session?.user?.email}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        {isEditing ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="bio"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Bio
                                    </label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        rows={3}
                                        value={formData.bio}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                bio: e.target.value,
                                            })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>

                                <div className="flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Bio
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-900 dark:text-white">
                                        No bio provided yet.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 