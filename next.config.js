/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic server-side rendering - NO static export
  // output: 'export', // DISABLED - we need dynamic rendering
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  
  // Enable server-side features for API routes
  experimental: {
    // Enable all server features
  },
  
  // Dynamic asset serving
  assetPrefix: '',
  
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
  
  // Dynamic rendering settings
  generateEtags: false,
  poweredByHeader: false,
  
  // Ensure API routes work
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

module.exports = nextConfig;
