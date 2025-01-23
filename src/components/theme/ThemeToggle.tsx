'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
                <MoonIcon className="h-5 w-5" aria-hidden="true" />
            )}
        </motion.button>
    );
}
