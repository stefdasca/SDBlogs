/** next.config.js **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  // static export mode
  output: 'export',

  // your GitHub-Pages repo path (case-sensitive)
  basePath: '/SDBlogs',
  assetPrefix: '/SDBlogs/',

  // emit folders (so /blog/slug/index.html rather than slug.html)
  trailingSlash: true,
}

module.exports = nextConfig
