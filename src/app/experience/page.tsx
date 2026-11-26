import type { Metadata } from 'next'
import ExperienceView from '@/views/experience/View'

export const metadata: Metadata = {
  title: 'Experience',
  description: '9 years of roles, a team of 12+ led, CRM and messaging integrations, and live production sites.',
  alternates: { canonical: '/experience' },
}

export default function Page() {
  return <ExperienceView />
}
