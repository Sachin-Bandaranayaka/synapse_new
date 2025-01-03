'use client';

import Header from './Header';
import Footer from './Footer';
import PageTransition from '@/components/common/PageTransition';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow pt-16">
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
        </div>
    );
} 