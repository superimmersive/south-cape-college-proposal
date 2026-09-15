import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  // Dev assets are origin-checked, so allow the page to be opened by IP as well
  // as by hostname — otherwise 127.0.0.1 serves a 403 and the page never hydrates.
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.0.16"],
};

export default nextConfig;
