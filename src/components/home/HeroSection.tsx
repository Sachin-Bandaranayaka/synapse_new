'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="relative isolate overflow-hidden">
            {/* Background gradient */}
            <div 
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-emerald-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Hero content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex flex-wrap justify-center rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <span className="mb-1 sm:mb-0">Transforming ideas into digital reality.</span>{' '}
                            <Link href="/contact" className="font-semibold text-blue-500 relative">
                                <span className="relative" aria-hidden="true">Get in touch <span aria-hidden="true">&rarr;</span></span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="mt-8 sm:mt-10 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                            Building the Future of Digital Innovation
                        </h1>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-2 sm:px-0">
                            We are a team of passionate developers and designers, crafting exceptional digital experiences that drive business growth and user engagement.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                        >
                            Start Your Project
                        </Link>
                        <Link href="/case-studies" className="text-sm font-semibold leading-6 text-white">
                            View Our Work <span aria-hidden="true">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-emerald-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    );
}