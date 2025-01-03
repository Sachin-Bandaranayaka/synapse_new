'use client';

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface SEOMetrics {
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
}

interface PerformanceMetrics {
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
}

export default function SEODashboard() {
    const [seoMetrics, setSEOMetrics] = useState<SEOMetrics[]>([]);
    const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMetrics();
    }, []);

    async function fetchMetrics() {
        try {
            const [seoResponse, performanceResponse] = await Promise.all([
                fetch('/api/analytics/seo'),
                fetch('/api/analytics/performance')
            ]);

            const seoData = await seoResponse.json();
            const performanceData = await performanceResponse.json();

            setSEOMetrics(seoData);
            setPerformanceMetrics(performanceData);
        } catch (error) {
            console.error('Error fetching metrics:', error);
        } finally {
            setLoading(false);
        }
    }

    const seoChartData = {
        labels: seoMetrics.map((_, index) => `Day ${index + 1}`),
        datasets: [
            {
                label: 'Clicks',
                data: seoMetrics.map(m => m.clicks),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Impressions',
                data: seoMetrics.map(m => m.impressions),
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    const performanceChartData = {
        labels: performanceMetrics.map((_, index) => `Day ${index + 1}`),
        datasets: [
            {
                label: 'LCP',
                data: performanceMetrics.map(m => m.lcp),
                borderColor: 'rgb(53, 162, 235)',
                tension: 0.1
            },
            {
                label: 'FID',
                data: performanceMetrics.map(m => m.fid),
                borderColor: 'rgb(255, 206, 86)',
                tension: 0.1
            }
        ]
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SEO Metrics */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">SEO Performance</h2>
                    <Line data={seoChartData} />
                </div>

                {/* Core Web Vitals */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Core Web Vitals</h2>
                    <Line data={performanceChartData} />
                </div>

                {/* Summary Cards */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-medium">Average Position</h3>
                        <p className="text-2xl font-bold text-primary">
                            {(seoMetrics.reduce((acc, m) => acc + m.position, 0) / seoMetrics.length).toFixed(2)}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-medium">Average CTR</h3>
                        <p className="text-2xl font-bold text-primary">
                            {(seoMetrics.reduce((acc, m) => acc + m.ctr, 0) / seoMetrics.length).toFixed(2)}%
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-medium">Average LCP</h3>
                        <p className="text-2xl font-bold text-primary">
                            {(performanceMetrics.reduce((acc, m) => acc + m.lcp, 0) / performanceMetrics.length).toFixed(2)}s
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-medium">Average CLS</h3>
                        <p className="text-2xl font-bold text-primary">
                            {(performanceMetrics.reduce((acc, m) => acc + m.cls, 0) / performanceMetrics.length).toFixed(3)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
