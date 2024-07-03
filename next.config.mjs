/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/personal-portfolio" : "";

// console.log(`isProd: ${isProd}`);
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`BASE_PATH: ${process.env.BASE_PATH}`);
// console.log(`basePath: ${basePath}`);

const nextConfig = {
  basePath,
  assetPrefix: isProd ? "/personal-portfolio" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath,
  },
};

export default nextConfig;
