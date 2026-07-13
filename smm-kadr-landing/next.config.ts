import type { NextConfig } from "next";

const repoName = "SMM_KADR1";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
