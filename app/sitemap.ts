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

const areaSlugs = [
  "whitefield",
  "electronic-city",
  "sarjapur-road",
  "hsr-layout",
  "jp-nagar",
  "marathahalli",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.skylineinvisiblegrills.in'
  const lastModified = new Date()

  const routes = [
    '',
    '/services',
    '/gallery',
    '/about',
    '/contact',
    '/invisible-grills-bangalore',
    '/smart-cloth-hangers-bangalore',
  ].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: (route === '' ? 'daily' : 'weekly') as 'weekly' | 'monthly' | 'always' | 'hourly' | 'daily' | 'yearly' | 'never',
      priority:
        route === ''
          ? 1.0
          : route === '/services'
            ? 0.9
            : route === '/invisible-grills-bangalore' || route === '/smart-cloth-hangers-bangalore'
              ? 0.9
              : 0.8,
    })
  )

  const serviceRoutes = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const areaRoutes = areaSlugs.map((slug) => ({
    url: `${baseUrl}/invisible-grills-bangalore/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.88,
  }))

  const hangerAreaRoutes = areaSlugs.map((slug) => ({
    url: `${baseUrl}/smart-cloth-hangers-bangalore/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.87,
  }))

  return [...routes, ...serviceRoutes, ...areaRoutes, ...hangerAreaRoutes]
}
