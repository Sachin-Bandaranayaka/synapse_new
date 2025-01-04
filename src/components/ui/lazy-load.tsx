'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface LazyLoadProps {
    children: React.ReactNode;
    threshold?: number;
    rootMargin?: string;
    className?: string;
    once?: boolean;
    animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'none';
}

const animations = {
    'fade': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    'slide-up': {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    },
    'slide-down': {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    },
    'slide-left': {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    },
    'slide-right': {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    },
    'zoom': {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    'none': {
        hidden: {},
        visible: {}
    }
};

export default function LazyLoad({
    children,
    threshold = 0.1,
    rootMargin = "50px",
    className = "",
    once = true,
    animation = 'fade'
}: LazyLoadProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { 
        amount: threshold,
        margin: rootMargin,
        once 
    });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (isInView && !hasLoaded) {
            setHasLoaded(true);
        }
    }, [isInView, hasLoaded]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animations[animation]}
            transition={{ 
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
                staggerChildren: 0.1
            }}
            className={`will-change-transform ${className}`}
        >
            {hasLoaded ? children : null}
        </motion.div>
    );
}
