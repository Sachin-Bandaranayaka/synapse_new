'use client';

import { useTheme } from './theme-provider';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full p-2 hover:bg-gray-800 transition-colors"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <FaSun className="h-5 w-5 text-yellow-500" />
            ) : (
                <FaMoon className="h-5 w-5 text-blue-500" />
            )}
        </motion.button>
    );
}
