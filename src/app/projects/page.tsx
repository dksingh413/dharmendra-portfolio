import type { Metadata } from 'next'
import ProjectsView from '@/views/projects/View'

export const metadata: Metadata = {
  title: 'All projects',
  description: '23 of 50+ projects: AI products, LLM apps, migrations and production platforms, with what each does, my role, the stack and live links.',
  alternates: { canonical: '/projects' },
}

export default function Page() {
  return <ProjectsView />
}
