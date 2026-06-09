import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'humphrey.techbiteventures.com',
      },
    ],
  },
}

export default nextConfig
