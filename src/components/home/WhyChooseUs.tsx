'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaRocket, FaUsers, FaChartLine, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const features = [
    {
        name: 'AI-Powered Solutions',
        description: 'Leverage cutting-edge AI technology to automate tasks and make smarter business decisions.',
        icon: FaRobot,
    },
    {
        name: 'SME-Focused Development',
        description: 'Tailored solutions designed specifically for Sri Lankan small and medium enterprises.',
        icon: FaUsers,
    },
    {
        name: 'Rapid Implementation',
        description: '80% faster deployment with our streamlined development process and ready-to-use AI components.',
        icon: FaRocket,
    },
    {
        name: 'Data-Driven Results',
        description: 'Make informed decisions with AI-powered analytics and performance tracking.',
        icon: FaChartLine,
    },
    {
        name: 'Enterprise Security',
        description: 'Bank-grade security measures to protect your business data and customer information.',
        icon: FaShieldAlt,
    },
    {
        name: 'Cost-Effective',
        description: 'Affordable solutions that deliver enterprise-level features for SME budgets.',
        icon: FaDollarSign,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative isolate bg-gray-50 py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-emerald-200 opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Sri Lankan SMEs Choose Us
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We bring enterprise-level AI solutions within reach of small and medium businesses
                    </p>
                </div>

                <motion.div
                    className="mx-auto mt-16 max-w-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.name}
                                    className="relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center gap-x-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                            <Icon className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold leading-8 text-gray-900">
                                            {feature.name}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-base leading-7 text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-emerald-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
}
