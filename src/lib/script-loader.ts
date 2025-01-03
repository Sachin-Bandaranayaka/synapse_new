type ScriptPriority = 'high' | 'medium' | 'low';

interface ScriptConfig {
    src: string;
    priority: ScriptPriority;
    async?: boolean;
    defer?: boolean;
    onload?: () => void;
}

const scriptLoadingStrategy: Record<ScriptPriority, { async: boolean; defer: boolean }> = {
    high: { async: true, defer: false },    // Load ASAP, for critical scripts
    medium: { async: true, defer: true },   // Load after parsing, for important but non-critical
    low: { async: false, defer: true }      // Load last, for non-essential scripts
};

export function loadScript(config: ScriptConfig): void {
    const script = document.createElement('script');
    const strategy = scriptLoadingStrategy[config.priority];

    script.src = config.src;
    script.async = config.async ?? strategy.async;
    script.defer = config.defer ?? strategy.defer;

    if (config.onload) {
        script.onload = config.onload;
    }

    // Add data attributes for monitoring
    script.setAttribute('data-priority', config.priority);
    script.setAttribute('data-loading-time', Date.now().toString());

    // Add performance monitoring
    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
            if (entry.entryType === 'resource' && entry.name === config.src) {
                console.debug(`Script ${config.src} loaded in ${entry.duration}ms`);
                // Report if loading time exceeds threshold
                if (entry.duration > 1000) {
                    console.warn(`Script ${config.src} took too long to load: ${entry.duration}ms`);
                }
            }
        });
    });

    observer.observe({ entryTypes: ['resource'] });
    document.head.appendChild(script);
}
