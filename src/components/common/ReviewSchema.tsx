import React from 'react';

interface Review {
    author: string;
    reviewBody: string;
    reviewRating: number;
    datePublished: string;
    position?: string;
    company?: string;
}

interface ReviewSchemaProps {
    itemReviewed: {
        name: string;
        description: string;
        image?: string;
    };
    reviews: Review[];
}

export default function ReviewSchema({ itemReviewed, reviews }: ReviewSchemaProps) {
    const aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: (reviews.reduce((acc, review) => acc + review.reviewRating, 0) / reviews.length).toFixed(1),
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: itemReviewed.name,
        description: itemReviewed.description,
        image: itemReviewed.image ? `https://synapselabs.lk${itemReviewed.image}` : undefined,
        aggregateRating,
        review: reviews.map(review => ({
            '@type': 'Review',
            author: {
                '@type': 'Person',
                name: review.author,
                ...(review.position && { jobTitle: review.position }),
                ...(review.company && { worksFor: {
                    '@type': 'Organization',
                    name: review.company
                }})
            },
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.reviewRating,
                bestRating: 5,
                worstRating: 1
            },
            reviewBody: review.reviewBody,
            datePublished: review.datePublished
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
    );
}
