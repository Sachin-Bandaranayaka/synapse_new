'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    author: {
        name: string;
        image: string;
    };
    tags: string[];
}

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col overflow-hidden rounded-lg shadow-sm bg-white border border-gray-100"
        >
            <div className="relative h-48 w-full">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 hover:text-blue-600">{post.title}</p>
                        <p className="mt-3 text-base text-gray-600">{post.excerpt}</p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="relative h-10 w-10">
                        <Image
                            src={post.author.image}
                            alt={post.author.name}
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <div className="flex space-x-1 text-sm text-gray-600">
                            <time dateTime={post.date}>{post.date}</time>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
