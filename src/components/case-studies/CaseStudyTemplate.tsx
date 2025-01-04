'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Stat {
    label: string;
    value: string;
    description: string;
}

interface CaseStudyTemplateProps {
    title: string;
    subtitle: string;
    heroImage: string;
    clientDescription: string;
    challenge: string;
    solution: string;
    implementation: string;
    results: string;
    stats: Stat[];
    testimonial?: {
        quote: string;
        author: string;
        position: string;
    };
    technologies: string[];
}

export default function CaseStudyTemplate({
    title,
    subtitle,
    heroImage,
    clientDescription,
    challenge,
    solution,
    implementation,
    results,
    stats,
    testimonial,
    technologies
}: CaseStudyTemplateProps) {
    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Hero Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {subtitle}
                    </p>
                </header>

                {/* Hero Image */}
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                        >
                            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="prose dark:prose-invert max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">About the Client</h2>
                        <p>{clientDescription}</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                        <p>{challenge}</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                        <p>{solution}</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Implementation</h2>
                        <p>{implementation}</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Results</h2>
                        <p>{results}</p>
                    </section>

                    {testimonial && (
                        <section className="mb-12">
                            <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                                <p className="text-xl mb-4">{testimonial.quote}</p>
                                <footer>
                                    <strong className="text-gray-900 dark:text-white">
                                        {testimonial.author}
                                    </strong>
                                    <br />
                                    <span className="text-gray-600 dark:text-gray-400">
                                        {testimonial.position}
                                    </span>
                                </footer>
                            </blockquote>
                        </section>
                    )}

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </motion.div>
        </article>
    );
}
