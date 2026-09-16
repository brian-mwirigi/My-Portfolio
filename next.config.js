const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  transpilePackages: ['three'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'cursor/canvas': path.resolve(__dirname, 'src/lib/cursor-canvas/index.ts'),
    }
    return config
  },
  async headers() {
    return [
      {
        source: '/Brian_Mwirigi_Arc_Resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline; filename="Brian_Munene_Mwirigi_CV.pdf"',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // COBBLE short URL
      { source: '/cobble', destination: '/cobble-mcp', permanent: true },
      { source: '/share', destination: '/canvas', permanent: false },
      { source: '/share-canvas', destination: '/canvas', permanent: false },
      { source: '/canvas-viewer', destination: '/canvas', permanent: false },
      { source: '/cursor-canvas', destination: '/canvas', permanent: false },
      { source: '/share-claude-artifact', destination: '/canvas', permanent: false },
      { source: '/share-html-artifact', destination: '/canvas', permanent: false },
      { source: '/mermaid-viewer', destination: '/canvas', permanent: false },
      { source: '/share-markdown', destination: '/canvas', permanent: false },
      { source: '/open-canvas-tsx', destination: '/canvas', permanent: false },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },
      { source: '/terms-of-conditions', destination: '/terms', permanent: true },
      { source: '/resume', destination: '/cv', permanent: true },
      { source: '/cv.pdf', destination: '/cv', permanent: false },
      // AUX short URL
      { source: '/aux', destination: '/aux-mcp', permanent: true },
      { source: '/spotify-aux', destination: '/aux-mcp', permanent: true },
      { source: '/spotify-mcp', destination: '/aux-mcp', permanent: true },
      // Legacy routes
      { source: '/codesession-cli', destination: '/costhq', permanent: true },
      { source: '/docs/codesession-cli-docs', destination: '/docs/costhq-docs', permanent: true },
      // Phantom URLs Google picked up — redirect to home with 301
      { source: '/login', destination: '/', permanent: true },
      { source: '/api/users', destination: '/', permanent: true },
      // NOTE: do not blanket-redirect /api/* — /api/canvas powers short share links
    ]
  },
}

module.exports = nextConfig
