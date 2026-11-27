import type { Metadata } from 'next'
import JourneyView from '@/views/journey/View'
import { JourneyGate } from '@/components/journey-gate'

export const metadata: Metadata = {
  title: 'My story',
  description: 'From a self-taught web designer in a Bihar village to engineering lead and AI builder: 9 years in five acts.',
  alternates: { canonical: '/journey' },
}

export default function Page() {
  return (
    <JourneyGate>
      <JourneyView />
    </JourneyGate>
  )
}
