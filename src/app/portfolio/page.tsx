import { Metadata } from 'next';
import PortfolioContent from '@/components/portfolio/PortfolioContent';

export const metadata: Metadata = {
    title: 'Portfolio - Our Latest Software Development Projects',
    description: 'Explore our portfolio of successful web development, mobile app, and custom software projects. See how we help businesses achieve their digital goals.',
    openGraph: {
        title: 'Portfolio - Synapse Labs Projects',
        description: 'View our successful software development projects.',
        images: ['/portfolio-og.jpg'],
    },
};

export default function Portfolio() {
    return <PortfolioContent />;
} 