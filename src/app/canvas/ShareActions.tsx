'use client'

import { useState, type CSSProperties } from 'react'
import { storageExt, type DocKind } from '@/lib/canvas-viewer/kind'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'

export function ShareActions({
  url,
  source,
  kind,
  fileName,
}: {
  url: string
  source?: string
  kind: DocKind
  fileName?: string
}) {
  const [copied, setCopied] = useState(false)
  const [copiedEmbed, setCopiedEmbed] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy link:', url)
    }
  }

  const tweet = () => {
    const text = `The agent report your teammate can't open:\n${url}\n\nDrop yours: https://brianmunene.me/canvas`
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Shared canvas',
          url,
        })
        return
      } catch {
        /* cancelled */
      }
    }
    await copy()
  }

  const copyEmbed = async () => {
    const snippet = `<iframe src="${url}?embed=1" width="100%" height="720" style="border:0" title="Shared file"></iframe>`
    try {
      await navigator.clipboard.writeText(snippet)
      setCopiedEmbed(true)
      window.setTimeout(() => setCopiedEmbed(false), 2000)
    } catch {
      window.prompt('Copy embed:', snippet)
    }
  }

  const download = () => {
    if (!source) return
    const blob = new Blob([source], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = fileName || `share.${storageExt(kind)}`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <button type="button" onClick={copy} style={btn(true)}>
        {copied ? 'Copied' : 'Copy link'}
      </button>
      <button type="button" onClick={tweet} style={btn(false)}>
        Post on X
      </button>
      <button type="button" onClick={nativeShare} style={btn(false)}>
        Share
      </button>
      <button type="button" onClick={copyEmbed} style={btn(false)}>
        {copiedEmbed ? 'Copied embed' : 'Copy embed'}
      </button>
      {source ? (
        <button type="button" onClick={download} style={btn(false)}>
          Download
        </button>
      ) : null}
    </div>
  )
}

function btn(primary: boolean): CSSProperties {
  return {
    height: 28,
    padding: '0 10px',
    borderRadius: 6,
    border: primary
      ? '1px solid transparent'
      : `1px solid ${canvasTokens.stroke.secondary}`,
    background: primary ? canvasTokens.accent.control : 'transparent',
    color: primary ? canvasTokens.text.onAccent : canvasTokens.text.secondary,
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
  }
}
