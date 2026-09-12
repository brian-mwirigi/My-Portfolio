'use client'

import { canvasTokens } from '@/lib/cursor-canvas/tokens'

export function JsonView({ source }: { source: string }) {
  let pretty = source
  try {
    pretty = JSON.stringify(JSON.parse(source), null, 2)
  } catch {
    /* show raw */
  }

  return (
    <pre
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '28px 24px 64px',
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        fontSize: 13,
        lineHeight: 1.6,
        color: canvasTokens.text.primary,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {pretty}
    </pre>
  )
}
