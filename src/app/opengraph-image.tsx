import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const alt = `${SITE.name}, ${SITE.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'radial-gradient(900px 500px at 85% 10%, rgba(139,140,255,0.35), transparent), #07070A',
          color: '#EDEDEF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#86EFAC' }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#4ADE80' }} />
          Open to Senior &amp; Lead roles · New Delhi
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3 }}>{SITE.name}</div>
          <div style={{ fontSize: 44, color: '#C7C8FF' }}>{SITE.title}</div>
          <div style={{ fontSize: 28, color: '#A1A1AA' }}>
            9 years · React, Next.js, Node.js, AWS · LLM apps &amp; chatbots · Led a team of 12+
          </div>
        </div>
      </div>
    ),
    size,
  )
}
