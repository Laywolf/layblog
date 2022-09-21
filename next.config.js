/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'
const repository = 'layblog'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? `/${repository}/` : '.',
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '.',
  },
}

module.exports = nextConfig
