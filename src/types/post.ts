import { Document } from 'mongoose';

export interface Post extends Document {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage: string;
    author: {
        name: string;
        image?: string;
    };
    categories: string[];
    tags: string[];
    status: 'draft' | 'published';
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
} 