'use client';

import MainLayout from '@/components/layout/MainLayout';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

const contactInfo = [
    {
        name: 'Office Location',
        description: 'Kurunegala, Sri Lanka',
        icon: FaMapMarkerAlt,
    },
    {
        name: 'Phone Number',
        description: '+94 70 507 5429',
        icon: FaPhone,
    },
    {
        name: 'Email',
        description: 'info@thesynapselabs.com',
        icon: FaEnvelope,
    },
];

export default function ContactForm() {
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

            // Track successful form submission
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
        <MainLayout>
            {/* Hero Section */}
            <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            Contact Us
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Get in touch with us to discuss your project or any questions you may have.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                        {contactInfo.map((item) => (
                            <div
                                key={item.name}
                                className="text-center bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.name}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData({ ...formData, company: e.target.value })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                                />
                            </div>

                            {submitStatus.message && (
                                <div
                                    className={`p-4 rounded-md ${submitStatus.type === 'success'
                                        ? 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200'
                                        : 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200'
                                        }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
} 