import type { NextConfig } from "next";
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ombuorwdlhgdkneialys.supabase.co",
      },
    ],
  },
} as NextConfig;

export default nextConfig;