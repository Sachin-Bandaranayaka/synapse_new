'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const navigation = {
    main: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Apps', href: '/services/mobile-apps' },
        { name: 'Custom Software', href: '/services/custom-software' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
    social: [
        { name: 'Facebook', href: '#', icon: FaFacebook },
        { name: 'Twitter', href: '#', icon: FaTwitter },
        { name: 'LinkedIn', href: '#', icon: FaLinkedin },
        { name: 'GitHub', href: '#', icon: FaGithub },
    ],
};

const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Kurunegala, Sri Lanka' },
    { icon: FaEnvelope, text: 'info@thesynapselabs.com' },
    { icon: FaPhone, text: '+94 70 507 5429' },
];

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-8">
                        <Link href="/" className="text-2xl font-heading font-bold text-primary-dark dark:text-white hover:text-primary transition-colors duration-300">
                            Synapse Labs
                        </Link>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                            Leading software development company in Sri Lanka, delivering innovative solutions for businesses worldwide.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-4">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Services
                        </h3>
                        <ul className="space-y-4">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                                    <item.icon className="h-5 w-5 text-primary" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        © {new Date().getFullYear()} Synapse Labs. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 