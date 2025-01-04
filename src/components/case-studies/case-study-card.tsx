'use client';

import Link from 'next/link';
import { CaseStudy } from '@/types/case-study';
import { FaArrowRight } from 'react-icons/fa';
import LazyLoad from '@/components/ui/lazy-load';
import OptimizedImage from '@/components/ui/optimized-image';

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
    index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
    return (
        <LazyLoad
            animation="slide-up"
            threshold={0.2}
            rootMargin="100px"
            className="relative isolate flex flex-col gap-8 lg:flex-row"
        >
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <OptimizedImage
                    src={caseStudy.coverImage}
                    alt={caseStudy.title}
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover"
                    sizes="(min-width: 1024px) 16rem, (min-width: 640px) 50vw, 100vw"
                    priority={index === 0}
                    loadingAnimation
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="group">
                <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-400">{caseStudy.industry}</span>
                    <span className="text-gray-400">{caseStudy.duration}</span>
                </div>
                <div className="relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400">
                        <Link href={`/case-studies/${caseStudy.slug}`}>
                            <span className="absolute inset-0" />
                            {caseStudy.title}
                        </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-400 line-clamp-2">{caseStudy.challenge}</p>
                </div>
                <div className="mt-6 flex border-t border-gray-700 pt-6">
                    <div className="relative flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-white">
                                <span className="absolute inset-0" />
                                {caseStudy.client}
                            </p>
                            <div className="flex items-center gap-4 mt-1">
                                <div className="flex flex-wrap gap-1">
                                    {caseStudy.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {caseStudy.technologies.length > 3 && (
                                    <span className="text-gray-400 text-xs">
                                        +{caseStudy.technologies.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1" />
                    <div className="flex items-center gap-x-2 text-blue-400 group-hover:text-blue-300">
                        <span className="text-sm font-semibold">View Case Study</span>
                        <FaArrowRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </LazyLoad>
    );
}
