'use client';

import Header from './Header';
import PageTransition from '@/components/common/PageTransition';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <PageTransition>
            {children}
        </PageTransition>
    );
}