import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/executive-coaching', destination: '/coaching#executive-coaching', permanent: true },
      { source: '/life-coaching', destination: '/coaching', permanent: true },
      { source: '/coaching-for-founders', destination: '/coaching#founders', permanent: true },
      { source: '/sedona-retreats', destination: '/coaching#retreats', permanent: true },
      { source: '/workshops', destination: 'https://becomingthebridge.co', permanent: true },
      { source: '/writing', destination: '/coaching', permanent: true },
      { source: '/testimonials', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
