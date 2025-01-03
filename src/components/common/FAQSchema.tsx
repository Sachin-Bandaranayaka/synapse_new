import React from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    questions: FAQItem[];
    mainEntity?: string;
}

export default function FAQSchema({ questions, mainEntity = 'FAQ' }: FAQSchemaProps) {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}

export function FAQ({ questions }: { questions: FAQItem[] }) {
    return (
        <div className="space-y-6">
            {questions.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.question}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
    );
}
