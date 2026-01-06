/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Rewrites removed to stop the redirect loop
};

module.exports = nextConfig;
