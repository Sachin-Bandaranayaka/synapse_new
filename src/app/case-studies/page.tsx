import { Metadata } from 'next';
import CaseStudyList from '@/components/case-studies/CaseStudyList';

export const metadata: Metadata = {
    title: 'Case Studies | Synapse Labs',
    description: 'Explore our success stories and case studies showcasing how we\'ve helped businesses achieve their goals through innovative solutions.',
};

export default function CaseStudies() {
    return (
        <main className="flex-grow">
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Case Studies
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Discover how we've helped businesses transform their operations and achieve remarkable results through our innovative solutions.
                        </p>
                    </div>
                    <CaseStudyList />
                </div>
            </section>
        </main>
    );
}
