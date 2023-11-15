import {get} from '@vercel/edge-config';

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
	{key: 'Referrer-Policy', value: 'origin-when-cross-origin'},
	{key: 'X-Frame-Options', value: 'DENY'},
	{key: 'X-Content-Type-Options', value: 'nosniff'},
	{key: 'X-DNS-Prefetch-Control', value: 'on'},
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
	eslint: {
		dirs: ['.'],
	},
	experimental: {
		outputFileTracingExcludes: {
			'*': ['./public/**', 'node_modules/**/@swc/core*'],
		},
	},
	headers() {
		return [
			{
				headers: securityHeaders,
				source: '/(.*)',
			},
		];
	},
	images: {
		domains: ['cdn.shopify.com'],
		formats: ['image/avif', 'image/webp'],
	},
	poweredByHeader: false,
	reactStrictMode: true,
	redirects() {
		try {
			return get('redirects');
		} catch {
			return [];
		}
	},
	swcMinify: true,
};

export default nextConfig;
