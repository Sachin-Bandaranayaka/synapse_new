'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from '@/components/common/ThemeToggle';
import { motion } from 'framer-motion';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-100 dark:bg-gray-900/70 dark:border-gray-800 transition-all duration-300">
            <nav className="container mx-auto px-0 sm:px-2 lg:px-4" aria-label="Top">
                <div className="flex items-center justify-between h-32">
                    <div className="flex items-center pl-2">
                        <Link href="/" className="relative w-[32rem] h-28">
                            <Image
                                src="/images/logo.png"
                                alt="Synapse Labs"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 pr-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <ThemeToggle />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div
                    initial={false}
                    animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            </nav>
        </header>
    );
} 