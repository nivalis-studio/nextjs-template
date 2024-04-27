// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self';
    frame-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replaceAll('\n', ''),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { hostname: 'cdn.shopify.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'plus.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./public/**', 'node_modules/**/@swc/core*'],
    },
  },
  headers() {
    const headers = [
      {
        headers: securityHeaders,
        source: '/(.*)',
      },
    ];

    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/(.*)',
      });
    }

    return headers;
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line no-param-reassign
      config.ignoreWarnings = [{ module: /opentelemetry/ }];
    }

    return config;
  },
};

export default nextConfig;
