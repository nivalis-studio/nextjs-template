import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    ppr: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'plus.unsplash.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
