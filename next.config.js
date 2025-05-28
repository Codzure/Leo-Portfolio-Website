/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
    unoptimized: true
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@lucide-react']
  }
}

module.exports = nextConfig