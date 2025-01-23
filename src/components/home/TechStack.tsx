'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAndroid, FaApple, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiKotlin, SiFirebase } from 'react-icons/si';

const technologies = [
    { name: 'React', Icon: FaReact, color: 'text-blue-500', description: 'A JavaScript library for building user interfaces' },
    { name: 'Next.js', Icon: SiNextdotjs, color: 'text-gray-900', description: 'A React-based framework for building server-rendered and statically generated websites' },
    { name: 'Node.js', Icon: FaNodeJs, color: 'text-green-500', description: 'A JavaScript runtime environment for building server-side applications' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-cyan-500', description: 'A utility-first CSS framework for building custom user interfaces' },
    { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-500', description: 'A NoSQL database for building scalable and flexible data storage solutions' },
    { name: 'Android', Icon: FaAndroid, color: 'text-green-500', description: 'An operating system for building mobile applications' },
    { name: 'iOS', Icon: FaApple, color: 'text-gray-900', description: 'An operating system for building mobile applications' },
    { name: 'Kotlin', Icon: SiKotlin, color: 'text-purple-500', description: 'A programming language for building Android applications' },
    { name: 'Firebase', Icon: SiFirebase, color: 'text-yellow-500', description: 'A platform for building web and mobile applications' },
    { name: 'AWS', Icon: FaAws, color: 'text-orange-500', description: 'A cloud computing platform for building scalable and secure applications' },
];

export default function TechStack() {
    return (
        <section className="relative isolate bg-white py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-blue-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Tech Stack
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We use cutting-edge technologies to build robust and scalable solutions
                    </p>
                </div>

                <motion.div
                    className="mx-auto mt-16 max-w-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="relative flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <tech.Icon className={`h-16 w-16 mb-4 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                                <h3 className="text-base font-semibold text-gray-900 text-center">
                                    {tech.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 text-center">
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-blue-200 opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
}
