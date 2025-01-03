/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://synapselabs.lk',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synapselabs.lk'}/api/sitemap`,
            `${process.env.NEXT_PUBLIC_SITE_URL || 'https://synapselabs.lk'}/api/image-sitemap`,
        ],
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/*', '/dashboard/*', '/api/*'],
            },
            {
                userAgent: '*',
                allow: ['/api/sitemap', '/api/image-sitemap'],
            },
        ],
    },
    exclude: ['/admin/*', '/dashboard/*', '/api/*'],
    generateIndexSitemap: false,
    changefreq: 'weekly',
    priority: 0.7,
    transform: async (config, path) => {
        // Custom transform function for dynamic routes
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
            alternateRefs: [],
        }
    },
}
