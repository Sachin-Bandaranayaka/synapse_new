import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from '@/lib/metadata';
import Script from 'next/script';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { Analytics } from '@vercel/analytics/react';
import RootLayoutClient from './layout.client';

const inter = Inter({ 
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [organizationSchema, websiteSchema],
                        }),
                    }}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            </head>
            <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col overscroll-none`}>
                <RootLayoutClient>
                    {children}
                </RootLayoutClient>
                <Analytics />
            </body>
        </html>
    );
}
