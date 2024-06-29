/** @type {import('next').NextConfig} */


const nextConfig = {
  basePath: "/personal-portfolio",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
