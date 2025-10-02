/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	output: 'export',
	distDir: 'out',
	basePath: '/personal-portfolio',
	assetPrefix: '/personal-portfolio/',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};
