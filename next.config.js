/** @type {import('next').NextConfig} */

// no prefix for vercel deploy
// const debug = process.env.NODE_ENV !== 'production'
// const repository = 'layblog'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // no prefix for vercel deploy
  // assetPrefix: !debug ? `/${repository}/` : undefined,
  trailingSlash: true,
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
