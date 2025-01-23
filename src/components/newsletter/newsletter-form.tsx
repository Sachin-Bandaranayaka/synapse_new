'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            // TODO: Implement newsletter subscription API
            // const response = await fetch('/api/subscribe', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email }),
            // });

            // Simulated success for now
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setStatus('success');
            setMessage('Thank you for subscribing! Check your email for confirmation.');
            setEmail('');
        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="relative isolate bg-white py-16 sm:py-24">
            {/* Background gradient */}
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-blue-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-50 px-6 py-12 shadow-sm ring-1 ring-gray-200 sm:rounded-3xl sm:px-24 xl:py-16">
                    <motion.div
                        className="mx-auto max-w-2xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Stay Updated
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Subscribe to our newsletter for the latest insights on technology, development, and digital innovation.
                        </p>
                        <motion.form
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full min-w-0 flex-auto rounded-full border-0 bg-white px-6 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                                disabled={status === 'loading'}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex-none rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                            >
                                {status === 'loading' ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        className="flex items-center justify-center"
                                    >
                                        <FaPaperPlane className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    'Subscribe'
                                )}
                            </motion.button>
                        </motion.form>
                        {message && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-4 text-sm ${
                                    status === 'success' ? 'text-green-600' : 'text-red-600'
                                }`}
                            >
                                {message}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-blue-200 opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
}
