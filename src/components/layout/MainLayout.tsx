'use client';

import Header from './Header';
import Footer from './Footer';
import PageTransition from '@/components/common/PageTransition';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100">
            <div className="fixed inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
            <Header />
            <main className="flex-grow pt-16 relative">
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
        </div>
    );
}