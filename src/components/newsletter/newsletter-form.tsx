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
        <section className="bg-gray-900 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-800/50 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-16">
                    <div className="absolute -top-20 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-500 to-emerald-500 opacity-20" />
                    </div>

                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Stay Updated
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Subscribe to our newsletter for the latest insights on technology, development, and digital innovation.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
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
                                className="w-full min-w-0 flex-auto rounded-full border-0 bg-gray-700/50 px-6 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                                disabled={status === 'loading'}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex-none rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <FaPaperPlane className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    'Subscribe'
                                )}
                            </motion.button>
                        </form>
                        {message && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-4 text-sm ${
                                    status === 'success' ? 'text-green-400' : 'text-red-400'
                                }`}
                            >
                                {message}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
