'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: 'QuickFind.lk',
        description: 'A comprehensive online marketplace connecting buyers and sellers across Sri Lanka.',
        image: '/images/projects/quickfind.jpg',
        link: 'https://quickfind.lk',
        tags: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS']
    },
    {
        title: 'LOLC Securities',
        description: 'A modern investment platform for stock trading and portfolio management.',
        image: '/images/projects/lolc.jpg',
        link: 'https://www.lolcsecurities.com',
        tags: ['React', 'Node.js', 'MongoDB', 'Material UI']
    },
    {
        title: 'Manjana Wiman Portfolio',
        description: 'A professional portfolio website showcasing bartending and hospitality expertise.',
        image: '/images/projects/manjana.jpg',
        link: 'https://manjanawiman.com',
        tags: ['Next.js', 'Tailwind CSS', 'Framer Motion']
    }
];

export default function PortfolioSection() {
    return (
        <section className="relative isolate bg-white py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-emerald-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Success Stories
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Discover how we've helped businesses transform their digital presence
                    </p>
                </div>

                <motion.div
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="relative flex flex-col overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-blue-500 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="flex-1">
                                    <Link href={project.link} target="_blank" className="block mt-2">
                                        <h3 className="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                    </Link>
                                    <p className="mt-4 text-base leading-7 text-gray-600">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-emerald-200 opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
}
