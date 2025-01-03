import React from 'react';
import Link from 'next/link';

interface SEOLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
    type?: 'internal' | 'external' | 'resource';
}

export default function SEOLink({
    href,
    children,
    className = '',
    title,
    type = 'internal'
}: SEOLinkProps) {
    const isExternal = type === 'external' || href.startsWith('http');
    const isResource = type === 'resource';

    // Common props for all link types
    const commonProps = {
        className,
        title: title || (typeof children === 'string' ? children : undefined)
    };

    // Handle external links
    if (isExternal) {
        return (
            <a
                href={href}
                {...commonProps}
                target="_blank"
                rel="noopener noreferrer"
                // Add hreflang if the link is to a known language variant
                {...(href.includes('synapselabs.lk/si') && { hrefLang: 'si' })}
                {...(href.includes('synapselabs.lk/ta') && { hrefLang: 'ta' })}
            >
                {children}
            </a>
        );
    }

    // Handle resource links (PDFs, docs, etc.)
    if (isResource) {
        return (
            <a
                href={href}
                {...commonProps}
                target="_blank"
                rel="noopener"
                type={getResourceMimeType(href)}
            >
                {children}
            </a>
        );
    }

    // Handle internal links
    return (
        <Link
            href={href}
            {...commonProps}
            {...(href.startsWith('/blog') && { prefetch: true })}
        >
            {children}
        </Link>
    );
}

function getResourceMimeType(href: string): string {
    const extension = href.split('.').pop()?.toLowerCase();
    const mimeTypes: Record<string, string> = {
        pdf: 'application/pdf',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ppt: 'application/vnd.ms-powerpoint',
        pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        zip: 'application/zip',
        rar: 'application/x-rar-compressed',
        txt: 'text/plain',
        csv: 'text/csv'
    };

    return extension ? mimeTypes[extension] || 'application/octet-stream' : 'application/octet-stream';
}
