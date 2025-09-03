/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // No external packages needed
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'in8cddcab4.ufs.sh',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
