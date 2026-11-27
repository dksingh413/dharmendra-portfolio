import HomeView from '@/views/main/View'
import { SITE } from '@/lib/site'

// Structured data so search engines understand who this site is about.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#person`,
      name: SITE.name,
      jobTitle: 'Senior Software Engineer',
      description: SITE.description,
      url: SITE.url,
      image: `${SITE.url}/img/a01677f74af27e8b0e9df9efb7b186da.jpg`,
      email: `mailto:${SITE.email}`,
      worksFor: { '@type': 'Organization', name: 'University Living', url: 'https://www.universityliving.com' },
      address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressCountry: 'IN' },
      sameAs: [SITE.linkedin, SITE.github].filter(Boolean),
      knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'LLM applications', 'RAG', 'Core Web Vitals', 'Technical SEO'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: `${SITE.name} | ${SITE.title}`,
      inLanguage: 'en',
      publisher: { '@id': `${SITE.url}/#person` },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <HomeView />
    </>
  )
}
