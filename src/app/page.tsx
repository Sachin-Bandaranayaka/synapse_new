import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TechStack from '@/components/home/TechStack';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </MainLayout>
  );
}
