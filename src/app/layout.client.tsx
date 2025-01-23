'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import BackToTop from '@/components/ui/back-to-top';
import ChatWidget from '@/components/chat/chat-widget';
import AuthProvider from "@/components/providers/AuthProvider";
import OrganizationJsonLd from '@/components/seo/JsonLd';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Header />
                <OrganizationJsonLd />
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
                <BackToTop />
                <ChatWidget />
            </AuthProvider>
        </ThemeProvider>
    );
}
