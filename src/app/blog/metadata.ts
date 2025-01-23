import { Metadata } from 'next';
import { siteConfig } from '@/lib/metadata';

export const blogMetadata: Metadata = {
    title: {
        default: 'Blog | Synapse Labs',
        template: `%s | Blog | ${siteConfig.name}`,
    },
    description: 'Insights on AI, technology, and digital transformation for Sri Lankan SMEs. Learn about the latest trends, best practices, and success stories.',
    keywords: [
        'AI Blog',
        'Technology Blog',
        'Sri Lanka Tech',
        'Digital Transformation',
        'SME Technology',
        'AI Solutions',
        'Tech Insights',
        'Business Technology',
        'CashCoach',
        'FinTech Sri Lanka',
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${siteConfig.url}/blog`,
        title: 'Blog | Synapse Labs',
        description: 'Insights on AI, technology, and digital transformation for Sri Lankan SMEs. Learn about the latest trends, best practices, and success stories.',
        siteName: siteConfig.name,
        images: [
            {
                url: '/images/blog/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Synapse Labs Blog',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | Synapse Labs',
        description: 'Insights on AI, technology, and digital transformation for Sri Lankan SMEs',
        images: ['/images/blog/og-image.jpg'],
    },
    alternates: {
        canonical: `${siteConfig.url}/blog`,
        types: {
            'application/rss+xml': `${siteConfig.url}/blog/feed.xml`,
        },
    },
};
