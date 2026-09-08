import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The hero backgrounds are rendered at quality 90; Next 16 requires every
    // quality used by next/image to be declared here.
    qualities: [75, 90],
  },
};

export default nextConfig;
