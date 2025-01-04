type MetricType = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB';

interface PerformanceMetric {
    name: MetricType;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
}

const thresholds = {
    CLS: { good: 0.1, poor: 0.25 },
    FID: { good: 100, poor: 300 },
    LCP: { good: 2500, poor: 4000 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 }
};

export function getRating(name: MetricType, value: number): PerformanceMetric['rating'] {
    if (value <= thresholds[name].good) return 'good';
    if (value <= thresholds[name].poor) return 'needs-improvement';
    return 'poor';
}

export function reportPerformanceMetric(metric: PerformanceMetric) {
    // Send to analytics
    if (window.gtag) {
        window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: metric.name,
            value: Math.round(metric.value),
            metric_rating: metric.rating,
            non_interaction: true,
        });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metric.name}: ${metric.value} (${metric.rating})`);
    }
}

// Performance budget monitoring
export function checkPerformanceBudget(metrics: PerformanceMetric[]) {
    const budgetViolations = metrics.filter(metric => metric.rating === 'poor');
    
    if (budgetViolations.length > 0) {
        console.warn('Performance budget violations:', 
            budgetViolations.map(v => `${v.name}: ${v.value}`)
        );
        
        // Send alert to monitoring system
        if (process.env.NEXT_PUBLIC_PERFORMANCE_WEBHOOK) {
            fetch(process.env.NEXT_PUBLIC_PERFORMANCE_WEBHOOK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ violations: budgetViolations })
            }).catch(console.error);
        }
    }
}

// Reduce layout thrashing
export function batchDOMReads(callback: () => void) {
    window.requestAnimationFrame(() => {
        const start = performance.now();
        callback();
        const duration = performance.now() - start;
        
        if (duration > 16.67) { // Longer than one frame (60fps)
            console.warn(`[Performance] Long task detected: ${Math.round(duration)}ms`);
        }
    });
}

// Optimize animations
export function optimizeAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.001ms');
    } else {
        document.documentElement.style.setProperty('--animation-duration', '200ms');
    }

    return { prefersReducedMotion };
}
