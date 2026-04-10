import { MetadataRoute } from 'next'

const servicesSlugs = [
  "invisible-grills-for-balconies",
  "invisible-grills-for-windows",
  "invisible-grills-manufacturer",
  "stainless-steel-invisible-grills",
  "invisible-grills-dealers",
  "invisible-grills-fixing-charges",
  "invisible-grills-for-child-safety",
  "pets-protection-safety-grills",
  "pigeon-control-safety-grill",
  "invisible-grills-for-staircases",
  "ceiling-cloth-hangers",
  "pull-and-dry-systems"
];

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

  const serviceRoutes = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...routes, ...serviceRoutes]
}
