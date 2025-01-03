import React from 'react';
import Head from 'next/head';
import OrganizationSchema from './OrganizationSchema';
import WebsiteSchema from './WebsiteSchema';
import BreadcrumbSchema from './BreadcrumbSchema';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    breadcrumbs?: Array<{ name: string; item: string }>;
    noindex?: boolean;
    alternateLanguages?: Array<{ lang: string; url: string }>;
}

export default function SEO({
    title,
    description,
    canonical,
    ogImage = '/og-default.jpg',
    breadcrumbs,
    noindex = false,
    alternateLanguages
}: SEOProps) {
    const fullTitle = `${title} | Synapse Labs`;

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            
            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={`https://synapselabs.lk${canonical}`} />}
            
            {/* Robots */}
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
            
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`https://synapselabs.lk${ogImage}`} />
            <meta property="og:site_name" content="Synapse Labs" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`https://synapselabs.lk${ogImage}`} />
            
            {/* Alternate Languages */}
            {alternateLanguages?.map((alt) => (
                <link
                    key={alt.lang}
                    rel="alternate"
                    hrefLang={alt.lang}
                    href={`https://synapselabs.lk${alt.url}`}
                />
            ))}
            
            {/* Schemas */}
            <OrganizationSchema />
            <WebsiteSchema />
            {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
        </Head>
    );
}
