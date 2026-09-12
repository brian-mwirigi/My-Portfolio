'use client'

import { compileCanvasSource } from '@/lib/canvas-viewer/compile'
import type { DocKind } from '@/lib/canvas-viewer/kind'
import { useMemo } from 'react'
import { HtmlFrame } from './HtmlFrame'
import { JsonView } from './JsonView'
import { MarkdownView } from './MarkdownView'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'

export function DocumentView({
  source,
  kind,
}: {
  source: string
  kind: DocKind
}) {
  const compiled = useMemo(() => {
    if (kind !== 'canvas') return null
    return compileCanvasSource(source)
  }, [kind, source])

  if (kind === 'markdown') return <MarkdownView source={source} />
  if (kind === 'html') return <HtmlFrame source={source} />
  if (kind === 'json') return <JsonView source={source} />

  if (compiled && !compiled.ok) {
    return (
      <div
        style={{
          margin: 16,
          padding: 14,
          borderRadius: 8,
          color: '#FC6B83',
          background: canvasTokens.fill.tertiary,
          fontSize: 13,
          whiteSpace: 'pre-wrap',
        }}
      >
        {compiled.error}
      </div>
    )
  }

  const Comp = compiled?.ok ? compiled.Component : null
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      {Comp ? <Comp /> : null}
    </div>
  )
}
