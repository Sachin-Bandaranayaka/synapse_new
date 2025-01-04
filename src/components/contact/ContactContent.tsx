'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useAnalytics } from '@/hooks/useAnalytics';

const contactInfo = [
    {
        name: 'Office Location',
        description: 'Kurunegala, Sri Lanka',
        icon: FaMapMarkerAlt,
        link: 'https://goo.gl/maps/YOUR_LOCATION',
    },
    {
        name: 'Phone Number',
        description: '+94 70 507 5429',
        icon: FaPhone,
        link: 'tel:+94705075429',
    },
    {
        name: 'Email',
        description: 'info@thesynapselabs.com',
        icon: FaEnvelope,
        link: 'mailto:info@thesynapselabs.com',
    },
];

const socialLinks = [
    {
        name: 'GitHub',
        icon: FaGithub,
        link: 'https://github.com/yourusername',
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        link: 'https://linkedin.com/company/synapse-labs',
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        link: 'https://twitter.com/yourusername',
    },
];

export default function ContactContent() {
    const { trackEvent } = useAnalytics();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string | null;
    }>({ type: null, message: null });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            trackEvent({
                name: 'contact_form_submit',
                properties: {
                    name: formData.name,
                    email: formData.email,
                    hasPhone: Boolean(formData.phone),
                    hasCompany: Boolean(formData.company),
                },
            });

            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! We\'ll get back to you soon.',
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
            });
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Failed to send message. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative isolate">
            {/* Background */}
            <div className="absolute inset-x-0 top-0 h-[1000px] bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
            
            {/* Gradient Blob */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-emerald-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            {/* Hero Section */}
            <div className="relative px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                                Get in Touch
                            </h1>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                                Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-32">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto max-w-xl lg:mx-0"
                        >
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex gap-x-4 rounded-2xl bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-all duration-300"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 group-hover:bg-blue-400 transition-colors duration-300">
                                            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">{item.name}</h3>
                                            <p className="mt-1 text-gray-300">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/50 hover:bg-blue-500 transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl bg-gray-800/50 p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="mt-2 block w-full rounded-lg border-0 bg-gray-700/50 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="mt-2 block w-full rounded-lg border-0 bg-gray-700/50 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                        Phone (optional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="mt-2 block w-full rounded-lg border-0 bg-gray-700/50 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                                        Company (optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="mt-2 block w-full rounded-lg border-0 bg-gray-700/50 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="mt-2 block w-full rounded-lg border-0 bg-gray-700/50 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            {submitStatus.message && (
                                <div
                                    className={`rounded-lg p-4 ${
                                        submitStatus.type === 'success'
                                            ? 'bg-green-900/50 text-green-200'
                                            : 'bg-red-900/50 text-red-200'
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-300 ${
                                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
