import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.skylinegrills.com'

  // Define static routes
  const routes = ['', '/services', '/gallery', '/about', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly' | 'always' | 'hourly' | 'daily' | 'yearly' | 'never',
      priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.8,
    })
  )

  return [...routes]
}
