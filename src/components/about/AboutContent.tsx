'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const values = [
    {
        name: 'Innovation',
        description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
        icon: FaLightbulb,
    },
    {
        name: 'Collaboration',
        description: 'We work closely with our clients, ensuring their vision is realized through our technical expertise.',
        icon: FaHandshake,
    },
    {
        name: 'Excellence',
        description: 'We maintain high standards in our work, focusing on quality, performance, and user experience.',
        icon: FaRocket,
    },
];

const teamMembers = [
    {
        name: 'Sachin Bandaranayaka',
        role: 'CEO & Founder',
        image: '/images/team/sachin.png',
        bio: 'Visionary leader and software engineer with expertise in building innovative digital solutions.',
    },
    {
        name: 'Kithmina Siriwardana',
        role: 'CTO',
        image: '/team/placeholder.jpg',
        bio: 'Innovative technology leader specializing in cloud architecture and modern software solutions.',
    },
    {
        name: 'Kalana Sumanaweera',
        role: 'Lead Developer & Co-founder',
        image: '/images/team/kalana-sumanaweera.jpg',
        bio: 'Expert full-stack developer and technical architect with a passion for building scalable applications.',
    },
];

export default function AboutContent() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative isolate">
                {/* Background */}
                <div className="absolute inset-x-0 top-0 h-[1000px] bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
                
                {/* Gradient Blob */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-emerald-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
                </div>

                <div className="relative px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white">
                                About Synapse Labs
                            </h1>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                                We are a passionate team of developers, designers, and digital craftsmen based in Sri Lanka,
                                dedicated to transforming businesses through innovative software solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="relative bg-gray-900 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500 transition-all duration-300">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">Our Mission</h3>
                            <p className="text-sm sm:text-base text-gray-300">
                                To deliver high-quality, customized digital solutions that drive business growth and enhance user experiences. 
                                We strive to be at the forefront of technology, helping businesses navigate the digital landscape with confidence.
                            </p>
                        </div>
                        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500 transition-all duration-300">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">Our Vision</h3>
                            <p className="text-sm sm:text-base text-gray-300">
                                To become a leading app and web development agency in Sri Lanka with a strong global presence, 
                                known for innovative solutions and exceptional client service. We aim to be the bridge between 
                                technological innovation and business success.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative bg-gray-900 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Our Values</h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                            The principles that guide our work and relationships
                        </p>
                    </div>
                    <motion.div 
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.name}
                                    className="flex flex-col bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mb-4" />
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{value.name}</h3>
                                    <p className="text-sm sm:text-base text-gray-300">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative bg-gray-900 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Our Team</h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                            Meet the talented individuals who make our vision a reality
                        </p>
                    </div>
                    <motion.div 
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.name}
                                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-blue-500 transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative w-full aspect-square mb-4 sm:mb-6 overflow-hidden rounded-xl">
                                    <Image
                                        className="object-cover"
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">{member.name}</h3>
                                <p className="text-xs sm:text-sm text-blue-400 mb-2 sm:mb-4">{member.role}</p>
                                <p className="text-sm sm:text-base text-gray-300">{member.bio}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
