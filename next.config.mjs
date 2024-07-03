/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
process.env.NEXT_PUBLIC_BASE_PATH = isProd ? "/personal-portfolio" : ""
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

// console.log(`isProd: ${isProd}`);
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`BASE_PATH: ${process.env.BASE_PATH}`);
// console.log(`basePath: ${basePath}`);

const nextConfig = {
  basePath: basePath,
  assetPrefix: isProd ? "/personal-portfolio" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    path: isProd ? "https://saifu213.github.io/personal-portfolio/" : "/",
  },
};

export default nextConfig;
