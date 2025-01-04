'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const caseStudies = [
    {
        id: 1,
        title: 'AI-Driven Healthcare Diagnostics Platform',
        description: 'Developing an advanced medical imaging analysis system that improved diagnostic accuracy by 45% for a leading healthcare provider.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
        tags: ['Healthcare', 'AI/ML', 'Image Processing'],
        link: '/case-studies/healthcare-diagnostics',
        stats: {
            accuracyImprovement: '45%',
            timeReduction: '60%',
            costSavings: '35%'
        }
    },
    {
        id: 2,
        title: 'FinTech Fraud Detection System',
        description: 'Implementing a real-time fraud detection system that reduced fraudulent transactions by 92% for a major financial institution.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
        tags: ['FinTech', 'Security', 'Real-time Analytics'],
        link: '/case-studies/fraud-detection',
        stats: {
            fraudReduction: '92%',
            falsePositives: '-75%',
            processingTime: '100ms'
        }
    },
    {
        id: 3,
        title: 'Smart Manufacturing Optimization',
        description: 'Revolutionizing production efficiency with IoT and AI, resulting in 40% increased throughput for an automotive manufacturer.',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070',
        tags: ['Manufacturing', 'IoT', 'Process Optimization'],
        link: '/case-studies/smart-manufacturing',
        stats: {
            throughputIncrease: '40%',
            downtimeReduction: '65%',
            qualityImprovement: '35%'
        }
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function CaseStudyList() {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {caseStudies.map((study) => (
                <motion.div
                    key={study.id}
                    variants={item}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <Link href={study.link} className="block">
                        <div className="relative h-48 group">
                            <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {study.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {study.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {study.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center text-primary-600 dark:text-primary-400">
                                <span>Read Case Study</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
