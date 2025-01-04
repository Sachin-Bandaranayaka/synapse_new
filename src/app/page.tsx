'use client';

import HeroSection from '@/components/home/HeroSection';
import CTASection from '@/components/home/CTASection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TechStack from '@/components/home/TechStack';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/faq-section';
import NewsletterForm from '@/components/newsletter/newsletter-form';
import CaseStudiesSection from '@/components/case-studies/case-studies-section';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhyChooseUs />
            <FeaturedProjects />
            <CaseStudiesSection />
            <TechStack />
            <TestimonialsSection />
            <FAQSection />
            <NewsletterForm />
            <CTASection />
        </main>
    );
}
