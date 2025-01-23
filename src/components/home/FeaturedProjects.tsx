'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'QuickFind.lk',
        description: 'A comprehensive service discovery platform connecting users with local businesses and service providers.',
        image: '/images/quickfind.png',
        link: '/portfolio/quickfind',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
    },
    {
        name: 'LULU Enterprises',
        description: 'Mobile-first sales management system with real-time tracking and analytics.',
        image: '/images/lulu.png',
        link: '/portfolio/lulu-enterprises',
        tech: ['React Native', 'Firebase', 'Node.js', 'MongoDB']
    },
    {
        name: 'Professional Bartender',
        description: 'Portfolio website with booking system and blog for professional bartender Mr. Manjana.',
        image: '/images/manjana.png',
        link: '/portfolio/manjana',
        tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL']
    },
    {
        name: 'Coming Soon',
        description: 'An exciting new project currently in development. Stay tuned for updates!',
        image: '/images/coming-soon.png',
        link: '#',
        tech: ['Under Development'],
        inDevelopment: true
    }
];

export default function FeaturedProjects() {
    return (
        <section className="relative bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Take a look at some of our recent work
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (
                        <motion.article
                            key={project.name}
                            className={`relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white border ${project.inDevelopment ? 'border-blue-500/50' : 'border-gray-100'} hover:border-blue-500 transition-all duration-300 shadow-sm`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    className="h-full w-full object-cover"
                                    width={500}
                                    height={400}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            </div>

                            <div className="relative p-8 flex flex-col items-start gap-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                                    <Link href={project.link} className="hover:text-blue-400 transition-colors">
                                        {project.name}
                                    </Link>
                                </h3>
                                <p className="text-sm leading-6 text-gray-600">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.link}
                                    className="mt-4 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors"
                                >
                                    View Case Study <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
