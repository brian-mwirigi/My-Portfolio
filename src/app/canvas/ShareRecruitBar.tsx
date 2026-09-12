'use client'

import Link from 'next/link'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'

export function ShareRecruitBar() {
  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        flexWrap: 'wrap',
        padding: '10px 16px',
        borderTop: `1px solid ${canvasTokens.stroke.tertiary}`,
        background: canvasTokens.bg.chrome,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 12,
          color: canvasTokens.text.secondary,
        }}
      >
        Cursor canvases stay on your machine. Teammates can&apos;t open the file.
      </p>
      <Link
        href="/canvas"
        style={{
          height: 28,
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0 12px',
          borderRadius: 6,
          background: canvasTokens.accent.control,
          color: canvasTokens.text.onAccent,
          fontSize: 12,
          fontWeight: 500,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Drop yours → free short link
      </Link>
    </div>
  )
}
