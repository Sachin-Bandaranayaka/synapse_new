import React from 'react';

interface ProductSchemaProps {
    name: string;
    description: string;
    image?: string;
    category?: string;
    brand?: string;
    offers?: {
        price: number;
        priceCurrency: string;
        availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    }[];
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
}

export default function ProductSchema({
    name,
    description,
    image,
    category = 'Software',
    brand = 'Synapse Labs',
    offers,
    aggregateRating
}: ProductSchemaProps) {
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image: image ? `https://synapselabs.lk${image}` : undefined,
        category,
        brand: {
            '@type': 'Brand',
            name: brand
        },
        ...(offers && {
            offers: offers.map(offer => ({
                '@type': 'Offer',
                price: offer.price,
                priceCurrency: offer.priceCurrency,
                availability: `https://schema.org/${offer.availability || 'InStock'}`
            }))
        }),
        ...(aggregateRating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: aggregateRating.ratingValue,
                reviewCount: aggregateRating.reviewCount
            }
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
    );
}
