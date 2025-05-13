/** next.config.js **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // if your Pages URL is https://you.github.io/your-repo
  basePath: '/your-repo',
  assetPrefix: '/your-repo/',
  // optional: so that URLs become /page/ rather than page.html:
  trailingSlash: true,
}

module.exports = nextConfig
