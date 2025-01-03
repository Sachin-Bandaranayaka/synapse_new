import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET() {
    try {
        const posts = await getAllPosts();
        
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
            <url>
                <loc>https://synapselabs.lk</loc>
                <image:image>
                    <image:loc>https://synapselabs.lk/logo.png</image:loc>
                    <image:title>Synapse Labs</image:title>
                </image:image>
                <image:image>
                    <image:loc>https://synapselabs.lk/hero-image.jpg</image:loc>
                    <image:title>Synapse Labs Hero</image:title>
                </image:image>
            </url>
            ${posts?.map((post: any) => post.featuredImage || post.images?.length ? `
                <url>
                    <loc>https://synapselabs.lk/blog/${post.slug}</loc>
                    ${post.featuredImage ? `
                        <image:image>
                            <image:loc>https://synapselabs.lk${post.featuredImage}</image:loc>
                            <image:title>${post.title}</image:title>
                        </image:image>
                    ` : ''}
                    ${post.images?.map((image: string) => `
                        <image:image>
                            <image:loc>https://synapselabs.lk${image}</image:loc>
                            <image:title>${post.title}</image:title>
                        </image:image>
                    `).join('') || ''}
                </url>
            ` : '').join('') || ''}
        </urlset>`;

        return new NextResponse(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600'
            }
        });
    } catch (error) {
        console.error('Error generating image sitemap:', error);
        return new NextResponse('Error generating image sitemap', { status: 500 });
    }
}
