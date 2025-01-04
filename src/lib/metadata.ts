export const siteConfig = {
    name: 'Synapse Labs',
    description: 'Leading software development company in Sri Lanka, delivering innovative solutions for businesses worldwide.',
    url: 'https://synapselabs.lk',
    ogImage: '/images/og-image.jpg',
    links: {
        twitter: 'https://twitter.com/synapselabs',
        github: 'https://github.com/synapselabs',
        linkedin: 'https://linkedin.com/company/synapselabs',
    },
    keywords: [
        'Software Development',
        'Web Development',
        'Mobile App Development',
        'Custom Software Solutions',
        'Sri Lanka',
        'IT Services',
        'Digital Transformation',
        'Technology Consulting',
    ],
};

export type SiteConfig = typeof siteConfig;

export const defaultMetadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: 'Synapse Labs' }],
    creator: 'Synapse Labs',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: '@synapselabs',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};
