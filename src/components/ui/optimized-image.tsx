'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { batchDOMReads } from '@/lib/performance';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
    fallback?: string;
    lowQualitySrc?: string;
    loadingAnimation?: boolean;
}

export default function OptimizedImage({
    src,
    alt,
    fallback = '/images/coming-soon.png',
    lowQualitySrc,
    loadingAnimation = true,
    className = '',
    priority = false,
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src);

    useEffect(() => {
        if (!lowQualitySrc) return;

        const img = new Image();
        img.src = typeof src === 'string' ? src : '';

        const loadHighQuality = () => {
            batchDOMReads(() => {
                setCurrentSrc(src);
                setIsLoading(false);
            });
        };

        img.onload = loadHighQuality;
        img.onerror = () => {
            setError(true);
            setIsLoading(false);
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, lowQualitySrc]);

    const handleImageLoad = () => {
        if (!lowQualitySrc) {
            setIsLoading(false);
        }
    };

    const handleImageError = () => {
        setError(true);
        setIsLoading(false);
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                {isLoading && loadingAnimation && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gray-800 animate-pulse"
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0.5 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    {...props}
                    src={error ? fallback : currentSrc}
                    alt={alt}
                    className={`transition-opacity duration-300 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoadingComplete={handleImageLoad}
                    onError={handleImageError}
                    loading={priority ? undefined : 'lazy'}
                    quality={90}
                />
            </motion.div>
        </div>
    );
}
