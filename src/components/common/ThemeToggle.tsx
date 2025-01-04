'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-yellow-500 dark:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <FaMoon className="h-5 w-5" />
            ) : (
                <FaSun className="h-5 w-5" />
            )}
        </motion.button>
    );
}