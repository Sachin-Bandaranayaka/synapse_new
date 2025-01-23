'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/theme/ThemeToggle';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(href);
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8" aria-label="Global">
                <motion.div 
                    className="flex lg:flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className="-m-1.5 p-1.5 text-lg sm:text-xl font-bold tracking-tight text-gray-900">
                        Synapse Labs
                    </Link>
                </motion.div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="ml-2 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <Link
                        href="/contact"
                        className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Contact Us
                    </Link>
                    <ThemeToggle />
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="-m-1.5 p-1.5 text-lg font-bold tracking-tight text-gray-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Synapse Labs
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-200">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                                <div className="mt-4">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}