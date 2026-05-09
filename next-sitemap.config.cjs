/** @type {import('next-sitemap').Config} */
const sitemap = {
  siteUrl: 'https://oasiswellnessva.com',
  generateRobotsSitemap: true,
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
  },
  exclude: ['/404', '/500'],
}

module.exports = sitemap