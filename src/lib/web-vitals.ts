import { Metric, onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed() {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
        const nav = navigator as any;
        if (nav.connection && 'effectiveType' in nav.connection) {
            return nav.connection.effectiveType;
        }
    }
    return '';
}

function sendToVercelAnalytics(metric: Metric) {
    const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    
    if (!analyticsId) {
        console.warn('Analytics ID not found');
        return;
    }

    const body = {
        dsn: analyticsId,
        id: metric.id,
        page: window.location.pathname,
        href: window.location.href,
        event_name: metric.name,
        value: metric.value.toString(),
        speed: getConnectionSpeed(),
    };

    try {
        const blob = new Blob([new URLSearchParams(body).toString()], {
            type: 'application/x-www-form-urlencoded',
        });

        if (navigator.sendBeacon) {
            navigator.sendBeacon(vitalsUrl, blob);
        } else {
            fetch(vitalsUrl, {
                body: blob,
                method: 'POST',
                credentials: 'omit',
                keepalive: true,
            });
        }
    } catch (error) {
        console.error('Error sending web vitals:', error);
    }
}

export function reportWebVitals(onPerfEntry?: (metric: Metric) => void) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        try {
            onCLS(onPerfEntry);
            onFID(onPerfEntry);
            onFCP(onPerfEntry);
            onLCP(onPerfEntry);
            onTTFB(onPerfEntry);
        } catch (error) {
            console.error('Error reporting web vitals:', error);
        }
    }

    // Also send to Vercel Analytics
    try {
        onCLS(sendToVercelAnalytics);
        onFID(sendToVercelAnalytics);
        onFCP(sendToVercelAnalytics);
        onLCP(sendToVercelAnalytics);
        onTTFB(sendToVercelAnalytics);
    } catch (error) {
        console.error('Error sending to Vercel Analytics:', error);
    }
}

// Types for web vitals metrics
export interface WebVitalsMetric {
    id: string;
    name: string;
    value: number;
    rating?: 'good' | 'needs-improvement' | 'poor';
    delta?: number;
    entries?: PerformanceEntry[];
}
