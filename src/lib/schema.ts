import { siteConfig } from './metadata';

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: [
        siteConfig.links.twitter,
        siteConfig.links.github,
        siteConfig.links.linkedin,
    ],
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'Sri Lanka',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@synapselabs.lk',
    },
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/images/logo.png`,
        },
    },
};

export function getServiceSchema(service: {
    name: string;
    description: string;
    image: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
        image: `${siteConfig.url}${service.image}`,
    };
}

export function getProjectSchema(project: {
    name: string;
    description: string;
    image: string;
    datePublished: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        image: `${siteConfig.url}${project.image}`,
        datePublished: project.datePublished,
        creator: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
    };
}
