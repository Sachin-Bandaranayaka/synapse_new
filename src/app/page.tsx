'use client';

import HeroSection from '@/components/home/HeroSection';
import CTASection from '@/components/home/CTASection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PortfolioSection from '@/components/home/PortfolioSection';
import TechStack from '@/components/home/TechStack';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/faq-section';
import NewsletterForm from '@/components/newsletter/newsletter-form';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhyChooseUs />
            <PortfolioSection />
            <TechStack />
            <TestimonialsSection />
            <FAQSection />
            <NewsletterForm />
            <CTASection />
        </main>
    );
}
