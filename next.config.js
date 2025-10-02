/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	output: 'export', // static export for GitHub Pages
	distDir: 'dist', // put builds in /dist
	basePath: isProd ? '/personal-portfolio' : '',
	assetPrefix: isProd ? '/personal-portfolio/' : '',
	images: {
		unoptimized: true, // disable Next.js image optimization
	},
};

module.exports = nextConfig;
