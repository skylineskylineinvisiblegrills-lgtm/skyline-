import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    host: 'https://www.skylineinvisiblegrills.in',
    sitemap: 'https://www.skylineinvisiblegrills.in/sitemap.xml',
  }
}
