'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'
import { DocumentView } from '../DocumentView'
import { ShareRecruitBar } from '../ShareRecruitBar'
import DemoIncidentReview from './demo-incident.canvas'
import { DEMO_BRIEF_MD, DEMO_HTML, DEMO_JSON } from './demos'

const TABS = [
  { id: 'incident', label: 'Cursor canvas', hint: '.canvas.tsx' },
  { id: 'brief', label: 'Markdown + mermaid', hint: '.md' },
  { id: 'html', label: 'HTML artifact', hint: '.html' },
  { id: 'json', label: 'JSON dump', hint: '.json' },
] as const

export function DemoGallery() {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('incident')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as (typeof TABS)[number]['id']
    if (TABS.some((t) => t.id === hash)) setTab(hash)
  }, [])

  const pick = (id: (typeof TABS)[number]['id']) => {
    setTab(id)
    window.history.replaceState(null, '', `/canvas/demo#${id}`)
  }

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
          padding: '10px 16px',
          borderBottom: `1px solid ${canvasTokens.stroke.tertiary}`,
          background: canvasTokens.bg.chrome,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            marginBottom: 10,
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
              demo gallery
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
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => pick(t.id)}
              style={{
                height: 28,
                padding: '0 10px',
                borderRadius: 999,
                border: `1px solid ${canvasTokens.stroke.tertiary}`,
                background:
                  tab === t.id ? canvasTokens.fill.primary : 'transparent',
                color:
                  tab === t.id
                    ? canvasTokens.text.primary
                    : canvasTokens.text.secondary,
                fontSize: 12,
                cursor: 'pointer',
              }}
            >
              {t.label} · {t.hint}
            </button>
          ))}
        </div>
      </header>

      <div style={{ paddingBottom: 72 }}>
        {tab === 'incident' ? (
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <DemoIncidentReview />
          </div>
        ) : null}
        {tab === 'brief' ? <DocumentView source={DEMO_BRIEF_MD} kind="markdown" /> : null}
        {tab === 'html' ? <DocumentView source={DEMO_HTML} kind="html" /> : null}
        {tab === 'json' ? <DocumentView source={DEMO_JSON} kind="json" /> : null}
      </div>
      <ShareRecruitBar />
    </div>
  )
}
