import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export to enable API routes
  // output: 'export', // Commented out to enable server-side functionality
  trailingSlash: true,
  
  // Image optimization
  images: {
    // unoptimized: true, // Not needed without static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
