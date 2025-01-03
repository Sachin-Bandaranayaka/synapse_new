'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="container mx-auto px-4 py-32 sm:px-6 lg:px-8 lg:py-40 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <motion.div
                        className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h1 {...fadeIn}>
                            <motion.span
                                className="block text-base font-semibold text-primary"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Welcome to Synapse Labs
                            </motion.span>
                            <motion.span
                                className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="block text-gray-900 dark:text-white">
                                    Engineering the Future
                                </span>
                                <span className="block text-primary">
                                    of Digital Solutions
                                </span>
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            We specialize in creating cutting-edge web applications, mobile apps, and custom software solutions that help businesses thrive in the digital age.
                        </motion.p>
                        <motion.div
                            className="mt-8 sm:mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="sm:flex sm:justify-center lg:justify-start space-x-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="rounded-md shadow-lg"
                                >
                                    <Link
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-dark md:px-10 md:py-4 md:text-lg transition-all duration-300 shadow-md hover:shadow-xl"
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-3 sm:mt-0"
                                >
                                    <Link
                                        href="/portfolio"
                                        className="flex w-full items-center justify-center rounded-md border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 py-3 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 md:px-10 md:py-4 md:text-lg transition-all duration-300"
                                    >
                                        View Our Work
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="relative mx-auto w-full rounded-lg shadow-xl lg:max-w-md">
                            <div className="relative block w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                <span className="sr-only">Watch our video</span>
                                <div className="relative aspect-video w-full transform transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                        alt="Team working on project"
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-lg" />
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg
                                                className="h-20 w-20 text-primary filter drop-shadow-lg"
                                                fill="currentColor"
                                                viewBox="0 0 84 84"
                                            >
                                                <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 