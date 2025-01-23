'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa6';

const testimonials = [
    {
        content: "Synapse Labs transformed our vision into reality with their innovative solutions. Their expertise in web development and commitment to quality helped us create a platform that perfectly serves our users' needs.",
        author: {
            name: "Mr. Uditha Chathuranga",
            role: "Associate Manager & Investment Advisor"
        },
        company: "LOLC Securities Ltd",
        subtitle: "Owner of QuickFind.lk",
        image: "/images/testimonials/uditha.jpg"
    },
    {
        content: "The team at Synapse Labs delivered an exceptional sales management system that streamlined our operations. Their technical prowess and attention to detail exceeded our expectations.",
        author: {
            name: "Mr. Anuruddha Rajakaruna",
            role: "Associate Manager & Investment Advisor"
        },
        company: "LOLC Securities Ltd",
        subtitle: "Owner of LULU Enterprises",
        image: "/images/testimonials/anuruddha.jpg"
    },
    {
        content: "Synapse Labs created a stunning portfolio website that perfectly captures my professional identity. Their creative approach and understanding of my needs resulted in a website that truly stands out.",
        author: {
            name: "Mr. Manjana Wiman",
            role: "Professional Bartender & Barista"
        },
        company: "Angel Beach Unawatuna",
        image: "/images/testimonials/manjana.jpg"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="relative isolate bg-white py-24 sm:py-32">
            {/* Background gradient */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-blue-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Client Success Stories
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Hear what our clients have to say about their experience working with us
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.figure
                            key={testimonial.author.name}
                            className="relative rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-blue-500 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-x-4 mb-6">
                                <FaQuoteLeft className="h-8 w-8 text-blue-600" aria-hidden="true" />
                            </div>
                            <blockquote className="text-gray-600">
                                <p className="text-base leading-relaxed">{`"${testimonial.content}"`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                                <div className="relative h-12 w-12 flex-none">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                    <div className="text-gray-600">{testimonial.author.role}</div>
                                    {testimonial.company && (
                                        <div className="text-gray-600">{testimonial.company}</div>
                                    )}
                                    {testimonial.subtitle && (
                                        <div className="text-blue-600 text-sm">{testimonial.subtitle}</div>
                                    )}
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-blue-200 opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
}
