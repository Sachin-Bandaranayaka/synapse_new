'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

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
        <header className="fixed w-full bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-800">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8" aria-label="Global">
                <motion.div 
                    className="flex lg:flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className="-m-1.5 p-1.5 text-lg sm:text-xl font-bold tracking-tight">
                        Synapse Labs
                    </Link>
                </motion.div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="ml-2 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-sm lg:text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/contact"
                            onClick={(e) => handleNavClick(e, '/contact')}
                            className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-2.5 border border-blue-500 text-sm font-medium rounded-full text-blue-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900/95 backdrop-blur-xl px-4 py-4 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 text-lg sm:text-xl font-bold tracking-tight">
                            Synapse Labs
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 rounded-xl hover:bg-gray-700/50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                onClick={(e) => handleNavClick(e, '/contact')}
                                className="block mt-4 px-4 py-3 text-center text-base font-medium text-white bg-blue-500 hover:bg-blue-400 transition-colors duration-300 rounded-xl"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}