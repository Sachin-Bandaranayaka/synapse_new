/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'picsum.photos',
      'www.thesynapselabs.com',
      'thesynapselabs.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'placehold.co'
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'www.thesynapselabs.com', 'thesynapselabs.com'],
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: false,
  output: 'standalone',
};

module.exports = nextConfig;