/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  // Add this rewrites block
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',       // URL that Google will access
        destination: '/api/sitemap.xml', // Your API route
      },
    ];
  },
};

{
  source: '/robots.txt',
  destination: '/api/robots.txt',
}



module.exports = nextConfig;
