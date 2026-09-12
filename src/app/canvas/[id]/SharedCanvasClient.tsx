'use client'

import Link from 'next/link'
import { kindLabel, type DocKind } from '@/lib/canvas-viewer/kind'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'
import { DocumentView } from '../DocumentView'
import { ShareActions } from '../ShareActions'
import { ShareRecruitBar } from '../ShareRecruitBar'

export function SharedCanvasClient({
  id,
  source,
  kind,
  fileName,
  embed = false,
}: {
  id: string
  source: string
  kind: DocKind
  fileName?: string
  embed?: boolean
}) {
  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}/canvas/${id}`
      : `https://brianmunene.me/canvas/${id}`

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
      {embed ? null : (
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
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
          <code
            style={{
              fontSize: 12,
              color: canvasTokens.text.secondary,
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }}
          >
            {id}
          </code>
          <span
            style={{
              fontSize: 11,
              color: canvasTokens.text.tertiary,
              border: `1px solid ${canvasTokens.stroke.tertiary}`,
              borderRadius: 999,
              padding: '2px 8px',
            }}
          >
            {kindLabel(kind)}
          </span>
        </div>
        <ShareActions url={url} source={source} kind={kind} fileName={fileName} />
      </header>
      )}

      <div style={{ paddingBottom: embed ? 0 : 72 }}>
        <DocumentView source={source} kind={kind} />
      </div>
      {embed ? null : <ShareRecruitBar />}
    </div>
  )
}
