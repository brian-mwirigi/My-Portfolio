'use client'

import { useId } from 'react'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'

export function MermaidBlock({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '')
  const srcDoc = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    html, body { margin: 0; background: #181818; color: #e4e4e4; }
    #app { padding: 8px; }
  </style>
</head>
<body>
  <div id="app" class="mermaid">${escapeHtml(chart)}</div>
  <script type="module">
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/+esm";
    mermaid.initialize({ startOnLoad: true, theme: "dark" });
  </script>
</body>
</html>`

  return (
    <iframe
      title={`mermaid-${id}`}
      sandbox="allow-scripts"
      srcDoc={srcDoc}
      style={{
        width: '100%',
        minHeight: 280,
        border: `1px solid ${canvasTokens.stroke.tertiary}`,
        borderRadius: 8,
        margin: '0 0 16px',
        background: canvasTokens.bg.editor,
      }}
    />
  )
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
