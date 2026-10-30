import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // This exports static HTML/JS files
  trailingSlash: true,  // Export /product as product/index.html so FastAPI StaticFiles can serve it
  images: {
    unoptimized: true  // Required for static export
  }
};

export default nextConfig;