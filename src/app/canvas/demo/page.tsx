import type { Metadata } from 'next'
import { ShareRecruitBar } from '../ShareRecruitBar'
import DemoIncidentReview from './demo-incident.canvas'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Demo — Share a Cursor canvas online',
  description:
    'Public demo of a Cursor .canvas.tsx incident review rendered in the browser. Drop your own file and get a short teammate link at brianmunene.me/canvas.',
  alternates: { canonical: 'https://brianmunene.me/canvas/demo' },
  openGraph: {
    title: 'Demo — Share a Cursor canvas online',
    description:
      'See a Cursor canvas rendered as a live page. Then drop yours and share a short link.',
    url: 'https://brianmunene.me/canvas/demo',
  },
}

export default function CanvasDemoPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: canvasTokens.bg.chrome,
        color: canvasTokens.text.primary,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '10px 16px',
          borderBottom: `1px solid ${canvasTokens.stroke.tertiary}`,
          background: canvasTokens.bg.chrome,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link
            href="/canvas"
            style={{
              color: canvasTokens.text.tertiary,
              fontSize: 12,
              textDecoration: 'none',
            }}
          >
            Canvas viewer
          </Link>
          <span style={{ color: canvasTokens.stroke.primary }}>/</span>
          <span style={{ fontSize: 12, color: canvasTokens.text.secondary }}>
            demo
          </span>
        </div>
        <Link
          href="/canvas"
          style={{
            height: 28,
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 10px',
            borderRadius: 6,
            background: canvasTokens.accent.control,
            color: canvasTokens.text.onAccent,
            fontSize: 12,
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Drop your file
        </Link>
      </header>
      <div style={{ maxWidth: 1100, margin: '0 auto', paddingBottom: 72 }}>
        <DemoIncidentReview />
      </div>
      <ShareRecruitBar />
    </div>
  )
}
