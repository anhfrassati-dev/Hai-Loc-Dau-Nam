import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath removed for custom domain deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
