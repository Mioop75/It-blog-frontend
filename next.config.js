/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.API_URL,
	},
	images: {
		remotePatterns: [
			{ hostname: 'images.unsplash.com' },
			{ hostname: 'localhost' },
		],
	},
	rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.API_URL}/uploads/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
