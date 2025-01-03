'use client';

import { useSession } from 'next-auth/react';
import {
    ChartBarIcon,
    EnvelopeIcon,
    DocumentTextIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

const stats = [
    {
        name: 'Total Posts',
        value: '12',
        icon: DocumentTextIcon,
        change: '+2.1%',
        changeType: 'positive',
    },
    {
        name: 'Messages',
        value: '24',
        icon: EnvelopeIcon,
        change: '+5.4%',
        changeType: 'positive',
    },
    {
        name: 'Profile Views',
        value: '156',
        icon: UserGroupIcon,
        change: '+8.1%',
        changeType: 'positive',
    },
    {
        name: 'Engagement Rate',
        value: '24.57%',
        icon: ChartBarIcon,
        change: '+3.2%',
        changeType: 'positive',
    },
];

export default function Dashboard() {
    const { data: session } = useSession();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Welcome back, {session?.user?.name}!
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Here's what's happening with your account today.
                </p>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                    >
                        <dt>
                            <div className="absolute rounded-md bg-primary p-3">
                                <item.icon
                                    className="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                                {item.name}
                            </p>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {item.value}
                            </p>
                            <p
                                className={`ml-2 flex items-baseline text-sm font-semibold ${item.changeType === 'positive'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                    }`}
                            >
                                {item.change}
                            </p>
                        </dd>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    Recent Activity
                </h2>
                <div className="mt-4 overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow">
                    <div className="p-6">
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            No recent activity to show.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 