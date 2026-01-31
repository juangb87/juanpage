import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t3.gstatic.com",
        pathname: "/faviconV2/**",
      },
      {
        protocol: "https",
        hostname: "www.bumbei.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bumbei.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lightsats.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
