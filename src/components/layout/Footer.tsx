'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter as FaXTwitter, FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

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
        { name: 'X', href: '#', icon: FaXTwitter },
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
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            {/* Main Footer Content */}
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-8">
                        <Link href="/" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors duration-300">
                            Synapse Labs
                        </Link>
                        <p className="text-base text-gray-400">
                            Leading software development company in Sri Lanka, delivering innovative solutions for businesses worldwide.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-4">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Services
                        </h3>
                        <ul className="space-y-4">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <item.icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                                    <span className="text-base text-gray-400">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-800/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            {new Date().getFullYear()} Synapse Labs. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}