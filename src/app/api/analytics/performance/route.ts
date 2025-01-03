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

        const pagespeedapi = google.pagespeedonline('v5');

        const url = process.env.SITE_URL || 'https://synapselabs.lk';
        
        const response = await pagespeedapi.pagespeedapi.runpagespeed({
            url,
            strategy: 'mobile',
        });

        const metrics = {
            lcp: response.data.lighthouseResult?.audits['largest-contentful-paint']?.numericValue,
            fid: response.data.lighthouseResult?.audits['max-potential-fid']?.numericValue,
            cls: response.data.lighthouseResult?.audits['cumulative-layout-shift']?.numericValue,
            ttfb: response.data.lighthouseResult?.audits['server-response-time']?.numericValue,
        };

        return NextResponse.json(metrics);
    } catch (error) {
        console.error('Error fetching performance metrics:', error);
        return NextResponse.json({ error: 'Failed to fetch performance metrics' }, { status: 500 });
    }
}
