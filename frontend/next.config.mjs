/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    const backendUrl = process.env.BACKEND_INTERNAL_API || 'http://localhost:8000';

    return [
      { source: '/backend', destination: backendUrl },
      { source: '/backend/:path*', destination: `${backendUrl}/:path*` },
    ];
  },
};

export default nextConfig;
