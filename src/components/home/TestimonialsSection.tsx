'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa6';

const testimonials = [
    {
        content: "Synapse Labs transformed our vision into reality with their innovative solutions. Their expertise in web development and commitment to quality helped us create a platform that perfectly serves our users' needs.",
        author: "Mr. Uditha Chathuranga",
        position: "Associate Manager & Investment Advisor",
        company: "LOLC Securities Ltd",
        subtitle: "Owner of QuickFind.lk",
        image: "/images/testimonials/uditha.jpg"
    },
    {
        content: "The team at Synapse Labs delivered an exceptional sales management system that streamlined our operations. Their technical prowess and attention to detail exceeded our expectations.",
        author: "Mr. Anuruddha Rajakaruna",
        position: "Associate Manager & Investment Advisor",
        company: "LOLC Securities Ltd",
        subtitle: "Owner of LULU Enterprises",
        image: "/images/testimonials/anuruddha.jpg"
    },
    {
        content: "Synapse Labs created a stunning portfolio website that perfectly captures my professional identity. Their creative approach and understanding of my needs resulted in a website that truly stands out.",
        author: "Mr. Manjana Wiman",
        position: "Professional Bartender & Barista",
        company: "Angel Beach Unawatuna",
        image: "/images/testimonials/manjana.jpg"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Client Testimonials
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                        Hear what our clients have to say about working with us
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            className="flex flex-col justify-between rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 ring-1 ring-gray-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            <div>
                                <div className="flex flex-col items-center text-center mb-8">
                                    <div className="mb-4">
                                        <Image
                                            className="h-32 w-32 rounded-full object-cover ring-4 ring-blue-400/20"
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            width={128}
                                            height={128}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold leading-6 text-white">
                                            {testimonial.author}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-2">
                                            {testimonial.position}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.company}
                                        </p>
                                        {testimonial.subtitle && (
                                            <p className="text-sm text-blue-400 mt-1">
                                                {testimonial.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="relative">
                                    <FaQuoteLeft className="absolute -top-4 -left-2 h-8 w-8 text-blue-500/20" aria-hidden="true" />
                                    <p className="text-gray-300 text-lg leading-7 pl-6">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
