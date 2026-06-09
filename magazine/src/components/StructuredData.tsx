import { site } from '@/data/content'

const baseUrl = site.url.replace(/\/$/, '')

export default function StructuredData() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description: site.tagline,
    url: `${baseUrl}/`,
    image: `${baseUrl}/hum2.png`,
    sameAs: site.social.map((link) => link.href),
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Python',
      'Node.js',
      'Django',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Web Development',
      'Full Stack Development',
    ],
    alumniOf: [{ '@type': 'Organization', name: 'ALX Africa' }, { '@type': 'Organization', name: 'Moringa School' }],
    address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
    email: site.email,
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${site.name} Portfolio`,
    url: `${baseUrl}/`,
    description: site.tagline,
    author: { '@type': 'Person', name: site.name },
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${site.name} Software Development`,
    url: `${baseUrl}/`,
    logo: `${baseUrl}/humlogo.png`,
    description: site.tagline,
    founder: { '@type': 'Person', name: site.name },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: site.email,
    },
    sameAs: site.social.map((link) => link.href),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
    </>
  )
}
