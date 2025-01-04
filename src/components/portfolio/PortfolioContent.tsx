'use client';

import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'QuickFind.lk - Service Discovery Platform',
        description: 'A comprehensive e-commerce platform connecting service providers with customers across Sri Lanka. Features include service listings, provider profiles, and seamless booking.',
        techStack: ['Next.js', 'React', 'Node.js', 'MongoDB'],
        image: '/projects/quickfind.jpg',
        link: '/portfolio/quickfind',
    },
    {
        title: 'LULU Enterprises Sales Management System',
        description: 'An end-to-end sales management solution featuring a Kotlin-based Android app for invoice generation and inventory management, plus a web analytics dashboard.',
        techStack: ['Kotlin', 'Android', 'React', 'Node.js', 'MongoDB'],
        image: '/projects/lulu-sales.jpg',
        link: '/portfolio/lulu-enterprises',
    },
    {
        title: 'Professional Bartender Portfolio',
        description: 'A dynamic portfolio website for Mr. Manjana featuring an online booking system and an integrated blog platform for sharing expertise and recipes.',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Prisma'],
        image: '/projects/bartender-portfolio.jpg',
        link: '/portfolio/manjana',
    },
];

export default function PortfolioContent() {
    return (
        <MainLayout>
            <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                            Our Success Stories
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We transform businesses through innovative technology solutions. 
                            From e-commerce platforms to mobile apps, we deliver results that matter.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative bg-gray-900 py-24 sm:py-32">
                <div className="container">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
                            >
                                <div className="relative h-56">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-gray-300 text-sm">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={project.link}
                                        className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        View Case Study
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
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