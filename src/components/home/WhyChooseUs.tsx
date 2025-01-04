'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const features = [
    {
        name: 'Innovative Solutions',
        description: 'We think outside the box to deliver creative solutions that set you apart from the competition.',
        icon: FaLightbulb,
    },
    {
        name: 'Rapid Development',
        description: 'Our agile approach ensures quick delivery without compromising on quality.',
        icon: FaRocket,
    },
    {
        name: 'Expert Team',
        description: 'Our team of seasoned developers brings years of experience across various technologies.',
        icon: FaUsers,
    },
    {
        name: 'Clean Code',
        description: 'We write maintainable, scalable code following industry best practices.',
        icon: FaCode,
    },
    {
        name: 'Mobile First',
        description: 'All our solutions are designed with mobile responsiveness in mind.',
        icon: FaMobileAlt,
    },
    {
        name: 'Results Driven',
        description: 'We focus on delivering measurable business value and ROI.',
        icon: FaChartLine,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Why Choose Us
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        We combine technical expertise with business acumen to deliver exceptional results
                    </p>
                </div>

                <motion.div
                    className="mx-auto mt-16 max-w-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.name}
                                    className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center gap-x-4">
                                        <Icon className="h-8 w-8 text-blue-400" />
                                        <h3 className="text-lg font-semibold leading-8 text-white">
                                            {feature.name}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-base leading-7 text-gray-300">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
