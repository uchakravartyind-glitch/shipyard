import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shipyard",
  assetPrefix: "/shipyard",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
