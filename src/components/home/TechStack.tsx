'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAndroid, FaApple, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiKotlin, SiFirebase } from 'react-icons/si';

const technologies = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Android', icon: FaAndroid, color: 'text-green-400' },
    { name: 'iOS', icon: FaApple, color: 'text-gray-300' },
    { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-400' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-400' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
];

export default function TechStack() {
    return (
        <section className="relative bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Our Technology Stack
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        We use cutting-edge technologies to build robust and scalable solutions
                    </p>
                </div>

                <motion.div 
                    className="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {technologies.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <motion.div
                                    key={tech.name}
                                    className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <Icon className={`h-12 w-12 ${tech.color}`} />
                                    <span className="mt-4 text-sm text-gray-400">{tech.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
