import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    host: 'https://www.skylinegrills.com',
    sitemap: 'https://www.skylinegrills.com/sitemap.xml',
  }
}
