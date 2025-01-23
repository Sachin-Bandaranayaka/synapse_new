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
        <footer className="bg-gray-50 border-t border-gray-100" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            {/* Main Footer Content */}
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-8">
                        <Link href="/" className="text-2xl font-heading font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                            Synapse Labs
                        </Link>
                        <p className="text-base text-gray-600">
                            Leading software development company in Sri Lanka, delivering innovative solutions for businesses worldwide.
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <item.icon className="h-5 w-5 text-blue-600" />
                                    <span className="text-gray-600">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Services</h3>
                        <ul className="space-y-4">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Connect With Us</h3>
                        <div className="flex space-x-4">
                            {navigation.social.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-100 border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-sm text-gray-600">
                            {new Date().getFullYear()} Synapse Labs. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}