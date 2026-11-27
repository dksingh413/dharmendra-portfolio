import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// Bump when page content changes so crawlers revisit.
const lastModified = new Date('2026-11-27')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: '', priority: 1 },
    { path: '/projects', priority: 0.9 },
    { path: '/experience', priority: 0.9 },
    { path: '/journey', priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
