import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On-demand revalidation
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  
  // Image optimization
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
