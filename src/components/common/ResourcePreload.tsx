import React from 'react';

interface ResourcePreloadProps {
    resources: Array<{
        href: string;
        as: 'script' | 'style' | 'image' | 'font';
        type?: string;
        crossOrigin?: 'anonymous' | 'use-credentials';
    }>;
}

export default function ResourcePreload({ resources }: ResourcePreloadProps) {
    return (
        <>
            {resources.map((resource, index) => (
                <link
                    key={index}
                    rel="preload"
                    href={resource.href}
                    as={resource.as}
                    type={resource.type}
                    crossOrigin={resource.crossOrigin}
                />
            ))}
        </>
    );
}
