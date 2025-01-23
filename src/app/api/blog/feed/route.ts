import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import PostModel from '@/models/Post';
import { siteConfig } from '@/lib/metadata';

function generateRSSItem(post: any) {
    const postUrl = `${siteConfig.url}/blog/${post.slug}`;
    return `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${postUrl}</link>
            <guid>${postUrl}</guid>
            <description><![CDATA[${post.excerpt}]]></description>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
            <author>${post.author.name}</author>
            ${post.tags.map((tag: string) => `<category>${tag}</category>`).join('')}
        </item>
    `;
}

function generateRSSFeed(posts: any[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <title><![CDATA[${siteConfig.name} Blog]]></title>
                <link>${siteConfig.url}/blog</link>
                <description><![CDATA[${siteConfig.description}]]></description>
                <language>en</language>
                <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
                <atom:link href="${siteConfig.url}/blog/feed.xml" rel="self" type="application/rss+xml"/>
                ${posts.map(generateRSSItem).join('')}
            </channel>
        </rss>`;
}

export async function GET() {
    try {
        await connectDB();

        const posts = await PostModel.find({ status: 'published' })
            .sort({ publishedAt: -1 })
            .limit(10);

        const feed = generateRSSFeed(posts);

        return new NextResponse(feed, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
            },
        });
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        return new NextResponse('Error generating feed', { status: 500 });
    }
}
