/** @type {import('next').NextConfig} */
// Use this config if your repository is NOT named username.github.io
// Rename this file to next.config.js if needed
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
}

module.exports = nextConfig
