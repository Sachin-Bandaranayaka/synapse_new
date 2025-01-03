import React from 'react';

interface BreadcrumbProps {
    items: Array<{
        name: string;
        item: string;
    }>;
}

export default function BreadcrumbSchema({ items }: BreadcrumbProps) {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://synapselabs.lk${item.item}`
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
    );
}
