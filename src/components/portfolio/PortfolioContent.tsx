'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A modern e-commerce platform built with Next.js and Stripe',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        link: '/portfolio/e-commerce',
    },
    {
        title: 'Healthcare App',
        description: 'Mobile healthcare application for patient management',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
        link: '/portfolio/healthcare',
    },
    {
        title: 'Educational Platform',
        description: 'Online learning platform with interactive courses',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
        link: '/portfolio/education',
    },
];

export default function PortfolioContent() {
    return (
        <MainLayout>
            <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            Our Portfolio
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Explore our latest projects and see how we help businesses achieve their digital goals.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
                <div className="container">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={project.link}
                                        className="mt-4 inline-block text-primary hover:text-primary-dark transition-colors"
                                    >
                                        Learn more →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
} 