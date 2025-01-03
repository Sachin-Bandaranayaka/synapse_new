import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
        });

        const searchconsole = google.searchconsole({ version: 'v1', auth });

        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 30);

        const response = await searchconsole.searchanalytics.query({
            siteUrl: process.env.SITE_URL || 'https://synapselabs.lk',
            requestBody: {
                startDate: startDate.toISOString().split('T')[0],
                endDate: new Date().toISOString().split('T')[0],
                dimensions: ['date'],
            },
        });

        const metrics = response.data.rows?.map(row => ({
            date: row.keys?.[0],
            clicks: row.clicks,
            impressions: row.impressions,
            ctr: row.ctr * 100,
            position: row.position,
        })) || [];

        return NextResponse.json(metrics);
    } catch (error) {
        console.error('Error fetching Search Console data:', error);
        return NextResponse.json({ error: 'Failed to fetch SEO metrics' }, { status: 500 });
    }
}
