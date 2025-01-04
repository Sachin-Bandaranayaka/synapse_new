'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaMobile } from 'react-icons/fa';

const features = [
    {
        name: 'Web Development',
        description: 'Modern web applications built with cutting-edge technologies',
        icon: FaCode,
    },
    {
        name: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications',
        icon: FaMobile,
    },
    {
        name: 'Custom Software',
        description: 'Tailored solutions for your unique business needs',
        icon: FaRocket,
    },
];

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function HeroSection() {
    return (
        <div className="relative isolate">
            {/* Background */}
            <div className="absolute inset-x-0 top-0 h-[1000px] bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
            
            {/* Gradient Blob */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-emerald-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            {/* Hero Content */}
            <div className="relative px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                                Engineering Digital Excellence
                            </h1>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4">
                                We create innovative software solutions that transform businesses. 
                                From web applications to mobile apps, we're your partner in digital success.
                            </p>
                            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto"
                                >
                                    <Link
                                        href="/contact"
                                        className="w-full sm:w-auto flex justify-center rounded-full bg-blue-500 px-6 sm:px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-all duration-300"
                                    >
                                        Start Your Project
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto"
                                >
                                    <Link
                                        href="/portfolio"
                                        className="w-full sm:w-auto flex justify-center rounded-full px-6 sm:px-8 py-3 text-sm font-semibold text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                                    >
                                        View Our Work
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 px-4">
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:gap-6 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.name}
                                    className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-blue-500 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <dt className="inline-flex items-center gap-x-3 text-white">
                                        <feature.icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                                        <span className="text-sm sm:text-base">{feature.name}</span>
                                    </dt>
                                    <dd className="mt-3 text-sm sm:text-base text-gray-400">{feature.description}</dd>
                                </motion.div>
                            ))}
                        </dl>
                    </div>

                    {/* Stats */}
                    <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 px-4">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                                >
                                    <div className="flex flex-col gap-y-3 border border-gray-800 rounded-2xl p-6 sm:p-8">
                                        <dt className="text-sm sm:text-base leading-7 text-gray-400">Projects Completed</dt>
                                        <dd className="order-first text-2xl sm:text-3xl font-semibold tracking-tight text-white">3</dd>
                                    </div>
                                    <div className="flex flex-col gap-y-3 border border-gray-800 rounded-2xl p-6 sm:p-8">
                                        <dt className="text-sm sm:text-base leading-7 text-gray-400">Happy Clients</dt>
                                        <dd className="order-first text-2xl sm:text-3xl font-semibold tracking-tight text-white">3+</dd>
                                    </div>
                                    <div className="flex flex-col gap-y-3 border border-gray-800 rounded-2xl p-6 sm:p-8">
                                        <dt className="text-sm sm:text-base leading-7 text-gray-400">Team Members</dt>
                                        <dd className="order-first text-2xl sm:text-3xl font-semibold tracking-tight text-white">10+</dd>
                                    </div>
                                    <div className="flex flex-col gap-y-3 border border-gray-800 rounded-2xl p-6 sm:p-8">
                                        <dt className="text-sm sm:text-base leading-7 text-gray-400">Years Experience</dt>
                                        <dd className="order-first text-2xl sm:text-3xl font-semibold tracking-tight text-white">1+</dd>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}