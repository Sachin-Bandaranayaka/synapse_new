'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Thank you for subscribing to our newsletter!');
                setEmail('');
            } else {
                throw new Error(data.message || 'Something went wrong!');
            }
        } catch (error) {
            setStatus('error');
            setMessage(error instanceof Error ? error.message : 'Something went wrong!');
        }
    };

    return (
        <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Subscribe to Our Newsletter
                </h2>
                <p className="mt-4 text-lg text-white/80">
                    Get the latest updates on technology trends and industry insights
                    delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:justify-center">
                    <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                        />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={status === 'loading'}
                            className="block w-full rounded-md bg-white px-4 py-3 font-medium text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                        </motion.button>
                    </div>
                </form>
                {status !== 'idle' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 text-sm ${status === 'success' ? 'text-green-200' : 'text-red-200'}`}
                    >
                        {message}
                    </motion.div>
                )}
            </div>
        </div>
    );
} 