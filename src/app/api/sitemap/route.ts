import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET() {
    try {
        const posts = await getAllPosts();
        
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://synapselabs.lk</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://synapselabs.lk/services</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>https://synapselabs.lk/about</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>https://synapselabs.lk/contact</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>
            ${posts?.map((post: any) => `
                <url>
                    <loc>https://synapselabs.lk/blog/${post.slug}</loc>
                    <lastmod>${new Date(post.updatedAt || post.createdAt).toISOString()}</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>0.7</priority>
                </url>
            `).join('') || ''}
        </urlset>`;

        return new NextResponse(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600'
            }
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return new NextResponse('Error generating sitemap', { status: 500 });
    }
}
