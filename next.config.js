/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
})

const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'b.thumbs.redditmedia.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = withPWA(nextConfig)
