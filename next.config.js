/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Redesign',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/Redesign',
}

module.exports = nextConfig