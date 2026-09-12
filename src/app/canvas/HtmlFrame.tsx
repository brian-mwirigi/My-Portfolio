'use client'

import { canvasTokens } from '@/lib/cursor-canvas/tokens'

export function HtmlFrame({ source }: { source: string }) {
  const doc = source.trim().startsWith('<')
    ? source
    : `<!doctype html><html><head><meta charset="utf-8" /></head><body>${source}</body></html>`

  return (
    <div
      style={{
        margin: '16px auto',
        maxWidth: 1100,
        padding: '0 16px 24px',
      }}
    >
      <p
        style={{
          margin: '0 0 8px',
          fontSize: 11,
          color: canvasTokens.text.tertiary,
        }}
      >
        HTML preview is sandboxed (no parent access). Still only open links from
        people you trust.
      </p>
      <iframe
        title="HTML preview"
        sandbox="allow-scripts"
        srcDoc={doc}
        style={{
          width: '100%',
          minHeight: '70vh',
          border: `1px solid ${canvasTokens.stroke.tertiary}`,
          borderRadius: 8,
          background: '#fff',
        }}
      />
    </div>
  )
}
