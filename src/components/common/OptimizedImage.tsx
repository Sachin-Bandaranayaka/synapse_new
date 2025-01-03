'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        // Set up intersection observer for viewport detection
        if (!priority) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setIsInView(true);
                            observer.disconnect();
                        }
                    });
                },
                {
                    rootMargin: '50px 0px', // Start loading slightly before the image enters viewport
                    threshold: 0.1
                }
            );

            const element = document.querySelector(`[data-image-src="${src}"]`);
            if (element) {
                observer.observe(element);
            }

            return () => observer.disconnect();
        } else {
            setIsInView(true);
        }
    }, [src, priority]);

    // Generate srcSet for responsive images
    const generateSrcSet = () => {
        const widths = [width / 2, width, width * 2];
        return widths.map(w => `${src}?w=${w} ${w}w`).join(', ');
    };

    return (
        <div 
            className={`relative overflow-hidden ${className}`}
            style={{ aspectRatio: `${width}/${height}` }}
            data-image-src={src}
        >
            {(priority || isInView) && (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`
                        duration-700 ease-in-out
                        ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
                    `}
                    onLoadingComplete={() => setIsLoading(false)}
                    priority={priority}
                    quality={90}
                    sizes={`(max-width: 768px) 100vw, ${width}px`}
                    loading={priority ? 'eager' : 'lazy'}
                />
            )}
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
        </div>
    );
}
