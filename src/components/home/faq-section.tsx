'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    {
        question: 'What services does Synapse Labs offer?',
        answer: 'We offer a comprehensive range of software development services including web development, mobile app development, custom software solutions, and AI integration. Our expertise spans across various technologies and industries.',
    },
    {
        question: 'How long does it typically take to complete a project?',
        answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex custom software solution could take 3-6 months. We provide detailed timelines during our initial consultation.',
    },
    {
        question: 'Do you provide ongoing support after project completion?',
        answer: 'Yes, we offer comprehensive post-launch support and maintenance services. We can create custom support packages tailored to your needs, ensuring your software continues to perform optimally.',
    },
    {
        question: 'What technologies do you specialize in?',
        answer: 'We specialize in modern web technologies like React, Next.js, and Node.js, as well as mobile development frameworks. We also have expertise in AI/ML technologies and cloud platforms like AWS and Azure.',
    },
    {
        question: 'How do you handle project communication?',
        answer: 'We maintain clear communication through regular meetings, progress reports, and dedicated project management tools. You\'ll have a direct line to your project team and regular updates on development progress.',
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-b border-gray-200 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left hover:bg-white/80 rounded-lg px-4 transition-colors"
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-6 flex-none text-gray-500"
                >
                    <FaChevronDown className="h-4 w-4" />
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 px-4 text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQSection() {
    return (
        <section className="relative isolate bg-white py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-emerald-200 opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Find answers to common questions about our services, process, and expertise
                    </p>
                </div>
                <motion.div
                    className="mx-auto mt-16 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="divide-y divide-gray-200 rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
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
