'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CaseStudyCard from './case-study-card';
import { sampleCaseStudies } from '@/types/case-study';
import Link from 'next/link';
import LazyLoad from '@/components/ui/lazy-load';

export default function CaseStudiesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { 
        amount: 0.2,
        once: true 
    });

    return (
        <section ref={ref} className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <LazyLoad animation="fade" className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Case Studies
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                        Explore how we've helped businesses transform their digital presence and achieve remarkable results.
                    </p>
                </LazyLoad>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none"
                >
                    {sampleCaseStudies.map((study, index) => (
                        <CaseStudyCard key={study.id} caseStudy={study} index={index} />
                    ))}
                </motion.div>

                <LazyLoad animation="slide-up" className="mt-16 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                        >
                            View All Case Studies
                        </Link>
                    </motion.div>
                </LazyLoad>
            </div>
        </section>
    );
}
