import React from 'react';

export default function WebsiteSchema() {
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Synapse Labs',
        url: 'https://synapselabs.lk',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://synapselabs.lk/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
    );
}
