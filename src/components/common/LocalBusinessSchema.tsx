import React from 'react';

interface OpeningHoursSpecification {
    dayOfWeek: string[];
    opens: string;
    closes: string;
}

interface LocalBusinessSchemaProps {
    name: string;
    description: string;
    image?: string;
    telephone?: string;
    email?: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion?: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        latitude: number;
        longitude: number;
    };
    openingHours?: OpeningHoursSpecification[];
    priceRange?: string;
    paymentAccepted?: string[];
    areaServed?: string[];
}

export default function LocalBusinessSchema({
    name,
    description,
    image,
    telephone,
    email,
    address,
    geo,
    openingHours,
    priceRange,
    paymentAccepted,
    areaServed
}: LocalBusinessSchemaProps) {
    const businessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name,
        description,
        image: image ? `https://synapselabs.lk${image}` : undefined,
        telephone,
        email,
        address: {
            '@type': 'PostalAddress',
            ...address
        },
        ...(geo && {
            geo: {
                '@type': 'GeoCoordinates',
                latitude: geo.latitude,
                longitude: geo.longitude
            }
        }),
        ...(openingHours && {
            openingHoursSpecification: openingHours.map(hours => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: hours.dayOfWeek,
                opens: hours.opens,
                closes: hours.closes
            }))
        }),
        priceRange,
        ...(paymentAccepted && { paymentAccepted }),
        ...(areaServed && {
            areaServed: areaServed.map(area => ({
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: geo?.latitude,
                    longitude: geo?.longitude
                },
                geoRadius: '50km',
                name: area
            }))
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
    );
}
