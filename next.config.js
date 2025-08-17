import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './next',
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/heroes',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
