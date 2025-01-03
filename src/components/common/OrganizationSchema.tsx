import React from 'react';

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Synapse Labs',
    url: 'https://synapselabs.lk',
    logo: 'https://synapselabs.lk/logo.png',
    sameAs: [
        'https://www.linkedin.com/company/synapse-labs',
        'https://twitter.com/synapselabs',
        // Add other social media profiles
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+94-XXXXXXXXX',
        contactType: 'customer service',
        areaServed: 'LK',
        availableLanguage: ['en']
    }
};

export default function OrganizationSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
