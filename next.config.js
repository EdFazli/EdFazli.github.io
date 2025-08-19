/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for root domain deployment
  // If you're using a custom domain, keep these commented out
  // If deploying to username.github.io/repository-name, uncomment and update:
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
}

module.exports = nextConfig
