// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export for the App Router
  output: 'export',

  // Optional, but keeps your URLs folder-based (/, /blog/slug/, etc.)
  trailingSlash: true,
}

module.exports = nextConfig
