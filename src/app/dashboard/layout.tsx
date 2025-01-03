'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import {
    HomeIcon,
    UserCircleIcon,
    DocumentTextIcon,
    ChatBubbleLeftIcon,
    ArrowLeftOnRectangleIcon,
    Bars3Icon,
    XMarkIcon,
    BriefcaseIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
    { name: 'Portfolio', href: '/dashboard/portfolio', icon: BriefcaseIcon },
    { name: 'Blog Posts', href: '/dashboard/posts', icon: DocumentTextIcon },
    { name: 'Messages', href: '/dashboard/messages', icon: ChatBubbleLeftIcon },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Mobile sidebar */}
            <div
                className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                <div className="fixed inset-0 flex">
                    <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-gray-800">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <XMarkIcon className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        <nav className="flex-1 space-y-1 px-2 py-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center rounded-md px-2 py-2 text-base font-medium ${pathname === item.href
                                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <item.icon
                                        className={`mr-4 h-6 w-6 flex-shrink-0 ${pathname === item.href
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-400 dark:text-gray-300 group-hover:text-gray-500'
                                            }`}
                                    />
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => signOut()}
                                className="group flex w-full items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <ArrowLeftOnRectangleIcon className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                                Sign Out
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                <div className="flex min-h-0 flex-1 flex-col bg-white dark:bg-gray-800">
                    <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                Synapse Labs
                            </h1>
                        </div>
                        <nav className="mt-5 flex-1 space-y-1 px-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${pathname === item.href
                                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <item.icon
                                        className={`mr-3 h-6 w-6 flex-shrink-0 ${pathname === item.href
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-400 dark:text-gray-300 group-hover:text-gray-500'
                                            }`}
                                    />
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => signOut()}
                                className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <ArrowLeftOnRectangleIcon className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                                Sign Out
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col lg:pl-64">
                <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>
                <main className="flex-1">
                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
} 