'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const initialMessages: Message[] = [
    {
        id: '1',
        text: 'Hi! How can I help you today? Feel free to ask about our services, starting a project, or anything else!',
        sender: 'bot',
        timestamp: new Date(),
    },
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: newMessage,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setNewMessage('');
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to get response');
            }

            const data = await response.json();
            
            if (!data.message) {
                throw new Error('Invalid response format');
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.message,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Chat Error:', error);
            let errorMessage = 'Sorry, I encountered an error. Please try again later.';
            
            if (error instanceof Error) {
                if (error.message.includes('network') || error.message.includes('fetch')) {
                    errorMessage = 'Network error. Please check your connection and try again.';
                } else if (error.message.includes('authentication')) {
                    errorMessage = 'Authentication error. Please contact support.';
                }
            }
            
            const errorResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: errorMessage,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 rounded-full bg-blue-500 p-3 sm:p-4 text-white shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                <FaComments className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop for mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 right-0 z-50 w-full sm:bottom-24 sm:right-8 sm:w-96 overflow-hidden rounded-t-2xl sm:rounded-2xl bg-gray-800 shadow-xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between bg-gray-700 p-4">
                                <h3 className="text-lg font-semibold text-white">Chat with us</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-full p-1 text-gray-400 hover:bg-gray-600 hover:text-white"
                                >
                                    <FaTimes className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="h-[60vh] sm:h-96 overflow-y-auto p-4">
                                <div className="space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${
                                                message.sender === 'user' ? 'justify-end' : 'justify-start'
                                            }`}
                                        >
                                            <div
                                                className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                                                    message.sender === 'user'
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-gray-700 text-gray-200'
                                                }`}
                                            >
                                                <p className="text-sm break-words">{message.text}</p>
                                                <p className="mt-1 text-xs opacity-75">
                                                    {new Date(message.timestamp).toLocaleTimeString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="rounded-2xl bg-gray-700 px-4 py-2">
                                                <div className="flex space-x-2">
                                                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                                                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0.2s' }}></div>
                                                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0.4s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Input */}
                            <form onSubmit={handleSendMessage} className="border-t border-gray-700 p-4">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-1 rounded-lg bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        disabled={isTyping}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isTyping || !newMessage.trim()}
                                        className="rounded-lg bg-blue-500 p-2 text-white transition-colors hover:bg-blue-400 disabled:opacity-50"
                                    >
                                        <FaPaperPlane className="h-5 w-5" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
