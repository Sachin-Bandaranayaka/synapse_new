'use client';

import { useCallback } from 'react';

type EventName =
    | 'page_view'
    | 'blog_post_view'
    | 'contact_form_submit'
    | 'newsletter_subscribe'
    | 'post_created'
    | 'post_updated'
    | 'post_deleted'
    | 'message_status_updated'
    | 'theme_changed';

interface AnalyticsEvent {
    name: EventName;
    properties?: Record<string, any>;
}

declare global {
    interface Window {
        umami?: {
            track: (name: string, properties?: Record<string, any>) => void;
        };
    }
}

export function useAnalytics() {
    const trackEvent = useCallback(({ name, properties = {} }: AnalyticsEvent) => {
        // Track the event using window.umami if available
        if (typeof window !== 'undefined' && window.umami) {
            window.umami.track(name, properties);
        }

        // Log the event to the console in development
        if (process.env.NODE_ENV === 'development') {
            console.log('Analytics Event:', { name, properties });
        }
    }, []);

    return { trackEvent };
} 