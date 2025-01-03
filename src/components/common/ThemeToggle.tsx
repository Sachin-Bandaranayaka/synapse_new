'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const { trackEvent } = useAnalytics();

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        toggleTheme();

        // Track theme change
        trackEvent({
            name: 'theme_changed',
            properties: {
                from: theme,
                to: newTheme,
            },
        });
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
            ) : (
                <SunIcon className="h-5 w-5" />
            )}
        </motion.button>
    );
} 