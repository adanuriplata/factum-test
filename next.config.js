/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      fallback: [{ source: '/:path*', destination: '/_404/:path*' }],
    };
  },
};

module.exports = nextConfig;
