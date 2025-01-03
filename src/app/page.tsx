import MainLayout from '@/components/layout/MainLayout';
import NewsletterSubscribe from '@/components/common/NewsletterSubscribe';
import HeroSection from '@/components/home/HeroSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <NewsletterSubscribe />
    </MainLayout>
  );
}
