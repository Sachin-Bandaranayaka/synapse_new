import { siteConfig } from '../metadata';
import { Post } from '@/types/post';

export function generateBlogPostSchema(post: Post) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
            '@type': 'Person',
            name: post.author.name,
            image: post.author.image,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/blog/${post.slug}`,
        },
        keywords: post.tags.join(', '),
    };
}

export function generateBlogListSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${siteConfig.name} Blog`,
        description: 'Insights on AI, technology, and digital transformation for Sri Lankan SMEs',
        url: `${siteConfig.url}/blog`,
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`,
            },
        },
    };
}
