/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'images.unsplash.com'],
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
