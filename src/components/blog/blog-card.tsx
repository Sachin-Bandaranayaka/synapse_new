'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </time>
                    <Link
                        href={`/blog/category/${post.category.slug}`}
                        className="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 text-white hover:bg-gray-600"
                    >
                        {post.category.name}
                    </Link>
                </div>
                <div className="group relative flex-1">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                        <Link href={`/blog/${post.slug}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                        {post.description}
                    </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                            src={post.author.image}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-white">
                            <span className="absolute inset-0" />
                            {post.author.name}
                        </p>
                        <p className="text-gray-400">{post.author.role}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-x-2 text-gray-400">
                        <span>{post.readingTime}</span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
