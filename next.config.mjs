/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/car',
        destination: '/cars',
        permanent: true,
      },
      {
        source: '/car/:path*',
        destination: '/cars/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
