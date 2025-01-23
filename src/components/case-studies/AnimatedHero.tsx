'use client';

import { motion } from 'framer-motion';

interface AnimatedHeroProps {
    title: string;
    description: string;
}

export default function AnimatedHero({ title, description }: AnimatedHeroProps) {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-[var(--background)] to-gray-900">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <motion.div 
                    className="mx-auto max-w-4xl lg:mx-0 lg:flex-shrink-0 lg:pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
