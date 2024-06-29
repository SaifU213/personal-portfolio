/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

console.log(`isProd: ${isProd}`); // Add this line to log the value of isProd
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // Add this line to log the value of NODE_ENV

const nextConfig = {
  basePath: isProd ? "/personal-portfolio" : "",
  assetPrefix: isProd ? "/personal-portfolio" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    path: isProd ? 'https://saifu213.github.io/personal-portfolio/' : '/',
  },
};

export default nextConfig;
