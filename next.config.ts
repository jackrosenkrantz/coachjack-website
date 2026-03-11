import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
