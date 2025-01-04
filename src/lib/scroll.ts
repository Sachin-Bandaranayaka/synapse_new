export function smoothScrollTo(targetY: number, duration: number = 500) {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

    function easeInOutQuad(t: number): number {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function step() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo({
            top: startY + difference * easeInOutQuad(progress),
            behavior: 'auto' // Using auto for smoother custom animation
        });

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

export function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        const targetY = element.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(targetY);
    }
}

export function scrollToTop(duration: number = 500) {
    smoothScrollTo(0, duration);
}
