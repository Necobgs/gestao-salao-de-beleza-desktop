const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? './' : undefined,
  basePath: isProd ? '' : undefined,
  trailingSlash: true

};

const nextConfig = module.exports;

module.exports = nextConfig;
