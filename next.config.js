/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable API routes
  // output: 'export', // Commented out to enable API routes
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  
  // Enable server-side features for API routes
  experimental: {
    // No external packages needed
  },
  
  images: {
    unoptimized: false, // Enable image optimization for server deployment
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
