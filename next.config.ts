import type { NextConfig } from 'next';

// Loading images from local/private IPs (and the `localhost` remote pattern)
// is a dev-only convenience; allowing it in production turns the image
// optimizer into an SSRF surface, so gate both behind the dev flag.
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,
  typedRoutes: true,
  images: {
    ...(isDev ? { dangerouslyAllowLocalIP: true } : {}),
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      ...(isDev ? [{ hostname: 'localhost' }] : []),
    ],
  },
};

export default nextConfig;
