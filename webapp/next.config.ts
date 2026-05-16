import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/w-dev-10may2026",
  assetPrefix: "/w-dev-10may2026",
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
