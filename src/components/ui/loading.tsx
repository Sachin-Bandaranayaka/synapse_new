'use client';

import { motion } from 'framer-motion';

export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-[200px]">
            <motion.div
                className="w-12 h-12 border-4 border-blue-400 rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
}

export function LoadingPage() {
    return (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
                className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <LoadingSpinner />
                <p className="text-gray-300">Loading...</p>
            </motion.div>
        </div>
    );
}

export function LoadingDots() {
    return (
        <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
}
