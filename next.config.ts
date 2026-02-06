import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Hai-Loc-Dau-Nam', // Configured for GitHub Pages repo
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
