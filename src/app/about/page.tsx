import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us - Software Development Team in Sri Lanka',
    description: 'Learn about Synapse Labs, a passionate team of developers and designers in Sri Lanka dedicated to creating innovative software solutions.',
    openGraph: {
        title: 'About Synapse Labs - Software Development Team in Sri Lanka',
        description: 'Learn about our team, mission, and values at Synapse Labs. We are dedicated to delivering innovative software solutions.',
        images: ['/about-og.jpg'],
    },
};

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
        image: '/team/placeholder.jpg',
        bio: 'Expert full-stack developer and technical architect with a passion for building scalable applications.',
    },
    {
        name: 'Sarah Williams',
        role: 'UI/UX Designer',
        image: '/team/placeholder.jpg',
        bio: 'Creative designer with a passion for user-centered design.',
    },
];

export default function About() {
    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Synapse Labs</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            We are a passionate team of developers, designers, and digital craftsmen based in Sri Lanka,
                            dedicated to transforming businesses through innovative software solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Mission</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                Deliver high-quality, customized digital solutions that drive business growth and enhance user experiences.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Vision</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                To become a leading app and web development agency in Sri Lanka with a strong global presence, known for innovative solutions and exceptional client service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Meet the talented individuals who make our vision a reality.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="flex flex-col items-start">
                                <div className="relative w-full aspect-[3/2]">
                                    <Image
                                        className="rounded-2xl object-cover"
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{member.name}</h3>
                                <p className="text-base leading-7 text-primary">{member.role}</p>
                                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Values</h2>
                        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Innovation</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.
                                </p>
                            </div>
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Excellence</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    We strive for excellence in every project, ensuring the highest quality standards.
                                </p>
                            </div>
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Collaboration</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    We believe in working closely with our clients to achieve their goals together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
} 