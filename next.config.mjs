/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  devIndicators: false,
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
