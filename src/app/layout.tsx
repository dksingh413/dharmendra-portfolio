import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SITE } from '@/lib/site'
import { themeInitScript } from '@/lib/theme'
import './globals.css'
// Each page's styles are scoped under its own .pg-* class, so loading them
// together is safe and avoids per-route CSS preloads.
import '@/views/main/styles.css'
import '@/views/projects/styles.css'
import '@/views/journey/styles.css'
import '@/views/experience/styles.css'

const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.title}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Senior Software Engineer',
    'AI engineer',
    'Full stack developer',
    'Next.js',
    'React',
    'Node.js',
    'LLM',
    'RAG',
    'AWS',
    'New Delhi',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
  },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#07070A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
