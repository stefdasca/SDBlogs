/** next.config.js **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // if your Pages URL is https://you.github.io/your-repo
  basePath: '/SDBlogs',
  assetPrefix: '/SDBlogs/',
  // optional: so that URLs become /page/ rather than page.html:
  trailingSlash: true,
}

module.exports = {
  output: 'export',
  // if your Pages URL is under a path:
  // basePath: '/SDBlogs',
  // assetPrefix: '/SDBlogs/',
  trailingSlash: true,
}

