import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://humphrey.techbiteventures.com').replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const sections = ['home', 'story', 'skills', 'experience', 'work', 'certifications', 'services', 'contact']

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...sections.map((section) => ({
      url: `${baseUrl}/#${section}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: section === 'work' || section === 'contact' ? 0.9 : 0.8,
    })),
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
