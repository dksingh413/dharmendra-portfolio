import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main className="nf">
      <span className="nf-code">404</span>
      <h1 className="nf-title">This page doesn&apos;t exist.</h1>
      <p className="nf-text">The link may be old or mistyped. Everything I&apos;ve built is one tap away.</p>
      <div className="nf-links">
        <Link href="/" className="nf-btn nf-primary">
          Go home
        </Link>
        <Link href="/projects" className="nf-btn">
          See projects
        </Link>
      </div>
    </main>
  )
}
