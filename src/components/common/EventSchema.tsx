import React from 'react';

interface EventSchemaProps {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: {
        type: 'Place' | 'VirtualLocation';
        name: string;
        address?: string;
        url?: string;
    };
    image?: string;
    performer?: {
        name: string;
        jobTitle?: string;
    };
    organizer?: {
        name: string;
        url?: string;
    };
    offers?: {
        price: number;
        priceCurrency: string;
        availability: 'InStock' | 'SoldOut' | 'PreOrder';
        validFrom: string;
    };
}

export default function EventSchema({
    name,
    description,
    startDate,
    endDate,
    location,
    image,
    performer,
    organizer = {
        name: 'Synapse Labs',
        url: 'https://synapselabs.lk'
    },
    offers
}: EventSchemaProps) {
    const eventSchema = {
        '@context': 'https://schema.org',
        '@type': location.type === 'VirtualLocation' ? 'VirtualEvent' : 'Event',
        name,
        description,
        startDate,
        endDate,
        location: location.type === 'Place' ? {
            '@type': 'Place',
            name: location.name,
            address: location.address
        } : {
            '@type': 'VirtualLocation',
            name: location.name,
            url: location.url
        },
        image: image ? `https://synapselabs.lk${image}` : undefined,
        performer: performer ? {
            '@type': 'Person',
            name: performer.name,
            jobTitle: performer.jobTitle
        } : undefined,
        organizer: {
            '@type': 'Organization',
            name: organizer.name,
            url: organizer.url
        },
        ...(offers && {
            offers: {
                '@type': 'Offer',
                price: offers.price,
                priceCurrency: offers.priceCurrency,
                availability: `https://schema.org/${offers.availability}`,
                validFrom: offers.validFrom
            }
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
    );
}
