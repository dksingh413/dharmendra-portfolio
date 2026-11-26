import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/projects', '/experience', '/journey'].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
