/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    ppr: true,
    after: true,
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
