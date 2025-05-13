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
  // 👇 static export mode
  output: 'export',

  // 👇 your GitHub-Pages repo path
  basePath: '/SDBlogs',
  assetPrefix: '/SDBlogs/',

  // 👇 so pages are folders (e.g. /blog/slug/index.html)
  trailingSlash: true,
}

