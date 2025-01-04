import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import AuthProvider from "@/components/providers/AuthProvider";
import { Analytics } from '@vercel/analytics/react';
import OrganizationJsonLd from '@/components/seo/JsonLd';
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Synapse Labs - AI-Powered Digital Solutions & Software Development',
    template: '%s | Synapse Labs',
  },
  description: 'Leading software development company in Sri Lanka specializing in AI solutions, web development, mobile apps, and custom software. Transform your business with our cutting-edge artificial intelligence and development services.',
  keywords: [
    'AI development',
    'artificial intelligence',
    'machine learning',
    'software development',
    'web development',
    'mobile apps',
    'Sri Lanka',
    'custom software',
    'Next.js',
    'React',
    'software company',
    'IT services',
    'digital solutions',
    'Kurunegala',
    'AI solutions',
    'data analytics',
    'intelligent automation',
  ],
  authors: [{ name: 'Synapse Labs' }],
  creator: 'Synapse Labs',
  publisher: 'Synapse Labs',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Synapse Labs',
    title: 'Synapse Labs - AI-Powered Digital Solutions & Software Development',
    description: 'Leading software development company in Sri Lanka specializing in AI solutions, web development, mobile apps, and custom software. Transform your business with our cutting-edge artificial intelligence and development services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Synapse Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synapse Labs - AI-Powered Digital Solutions & Software Development',
    description: 'Leading software development company in Sri Lanka specializing in AI solutions, web development, mobile apps, and custom software. Transform your business with our cutting-edge artificial intelligence and development services.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          src={`
            (function() {
              try {
                const onPerfEntry = function(metric) {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Web Vitals',
                    event_label: metric.name,
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    metric_id: metric.id,
                    metric_value: metric.value,
                    metric_rating: metric.rating,
                    non_interaction: true,
                  });
                };

                import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
                  onCLS(onPerfEntry);
                  onFID(onPerfEntry);
                  onFCP(onPerfEntry);
                  onLCP(onPerfEntry);
                  onTTFB(onPerfEntry);
                });
              } catch (e) {
                console.error('Error loading web-vitals:', e);
              }
            })();
          `}
        />
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <OrganizationJsonLd />
            {children}
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
