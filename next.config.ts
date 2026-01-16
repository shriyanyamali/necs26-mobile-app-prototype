import type { NextConfig } from "next";

const repoName = "necs26-mobile-app-prototype";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: { unoptimized: true },
};

export default nextConfig;
