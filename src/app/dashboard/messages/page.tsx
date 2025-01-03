'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
    EnvelopeIcon,
    CheckCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline';

interface Message {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    status: 'new' | 'in-progress' | 'completed';
    createdAt: string;
}

export default function Messages() {
    const { data: session } = useSession();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<'all' | 'new' | 'in-progress' | 'completed'>('all');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('/api/dashboard/messages');
                if (!response.ok) {
                    throw new Error('Failed to fetch messages');
                }
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                setError('Failed to load messages');
                console.error('Error fetching messages:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMessages();
    }, []);

    const handleStatusChange = async (messageId: string, newStatus: Message['status']) => {
        try {
            const response = await fetch(`/api/dashboard/messages/${messageId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) {
                throw new Error('Failed to update message status');
            }

            setMessages(messages.map(message =>
                message._id === messageId
                    ? { ...message, status: newStatus }
                    : message
            ));
        } catch (error) {
            console.error('Error updating message status:', error);
        }
    };

    const filteredMessages = selectedStatus === 'all'
        ? messages
        : messages.filter(message => message.status === selectedStatus);

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
                    Messages
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage and respond to contact form submissions.
                </p>
            </div>

            {/* Filters */}
            <div className="mb-6">
                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value as any)}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                >
                    <option value="all">All Messages</option>
                    <option value="new">New</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* Messages List */}
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredMessages.map((message) => (
                        <li key={message._id}>
                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <div className="ml-4">
                                            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                                {message.name}
                                            </h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {message.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <select
                                            value={message.status}
                                            onChange={(e) => handleStatusChange(message._id, e.target.value as Message['status'])}
                                            className="rounded-md border-gray-300 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
                                        >
                                            <option value="new">New</option>
                                            <option value="in-progress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${message.status === 'new'
                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                            : message.status === 'in-progress'
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            }`}>
                                            {message.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        {message.message}
                                    </p>
                                </div>
                                {(message.phone || message.company) && (
                                    <div className="mt-2">
                                        {message.phone && (
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Phone: {message.phone}
                                            </p>
                                        )}
                                        {message.company && (
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Company: {message.company}
                                            </p>
                                        )}
                                    </div>
                                )}
                                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Received on {new Date(message.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 