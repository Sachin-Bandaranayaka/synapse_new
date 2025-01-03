import React from 'react';

interface ArticleSchemaProps {
    title: string;
    description: string;
    publishedTime: string;
    modifiedTime?: string;
    author: {
        name: string;
        url?: string;
    };
    image?: string;
    section?: string;
    tags?: string[];
}

export default function ArticleSchema({
    title,
    description,
    publishedTime,
    modifiedTime,
    author,
    image,
    section = 'Technology',
    tags = []
}: ArticleSchemaProps) {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image ? [`https://synapselabs.lk${image}`] : undefined,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
            '@type': 'Person',
            name: author.name,
            url: author.url
        },
        publisher: {
            '@type': 'Organization',
            name: 'Synapse Labs',
            logo: {
                '@type': 'ImageObject',
                url: 'https://synapselabs.lk/logo.png'
            }
        },
        articleSection: section,
        keywords: tags.join(', '),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://synapselabs.lk'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
    );
}
