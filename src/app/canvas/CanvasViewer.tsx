'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type DragEvent,
} from 'react'
import { readSourceFromLocation } from '@/lib/canvas-viewer/share'
import {
  acceptAttr,
  defaultFileName,
  detectKind,
  isAllowedFile,
  kindLabel,
  type DocKind,
} from '@/lib/canvas-viewer/kind'
import { canvasTokens } from '@/lib/cursor-canvas/tokens'
import { DocumentView } from './DocumentView'
import { ShareActions } from './ShareActions'
import { ShareRecruitBar } from './ShareRecruitBar'

type Mode = 'drop' | 'view'

const MAX_BYTES = 400_000

export function CanvasViewer() {
  const [mode, setMode] = useState<Mode>('drop')
  const [source, setSource] = useState('')
  const [fileName, setFileName] = useState<string | null>(null)
  const [kind, setKind] = useState<DocKind>('canvas')
  const [error, setError] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const [copied, setCopied] = useState(false)
  const [sharing, setSharing] = useState(false)
  const [shortPath, setShortPath] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const decoded = readSourceFromLocation(window.location.hash)
    if (!decoded) return
    const k = detectKind(decoded, null)
    setSource(decoded)
    setKind(k)
    setFileName(defaultFileName(k))
    setMode('view')
  }, [])

  const ingest = useCallback(async (file: File) => {
    if (!isAllowedFile(file)) {
      setError('Drop .canvas.tsx, .md, .html, or .json.')
      return
    }
    if (file.size > MAX_BYTES) {
      setError('File is over 400KB. Trim it, then try again.')
      return
    }
    const text = await file.text()
    const k = detectKind(text, file.name)
    setSource(text)
    setFileName(file.name)
    setKind(k)
    setMode('view')
    setError(null)
    setShortPath(null)
    window.history.replaceState(null, '', '/canvas')
  }, [])

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      if (mode !== 'drop') return
      const file = e.clipboardData?.files?.[0]
      if (file && isAllowedFile(file)) {
        e.preventDefault()
        void ingest(file)
        return
      }
      const text = e.clipboardData?.getData('text')
      if (!text?.trim()) return
      const target = e.target as HTMLElement | null
      if (target?.closest('textarea, input')) return
      e.preventDefault()
      setSource(text)
      setError(null)
    }
    window.addEventListener('paste', onPaste)
    return () => window.removeEventListener('paste', onPaste)
  }, [mode, ingest])

  const onDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      setDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) void ingest(file)
    },
    [ingest]
  )

  const onFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) void ingest(file)
      e.target.value = ''
    },
    [ingest]
  )

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Could not copy. Select the URL from the address bar.')
    }
  }

  const share = useCallback(async () => {
    if (!source.trim() || sharing) return
    setSharing(true)
    setError(null)
    try {
      const res = await fetch('/api/canvas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          fileName: fileName ?? defaultFileName(kind),
        }),
      })
      const data = (await res.json()) as {
        url?: string
        path?: string
        error?: string
        fallback?: string
      }

      if (res.ok && data.path) {
        setShortPath(data.path)
        window.history.replaceState(null, '', data.path)
        await copyText(data.url ?? `${window.location.origin}${data.path}`)
        return
      }

      setError(
        data.error
          ? `${data.error} Short links need CANVAS_BINS_TOKEN on the host.`
          : 'Could not create a short link.'
      )
    } catch {
      setError('Short link failed. Check the network and try again.')
    } finally {
      setSharing(false)
    }
  }, [source, fileName, kind, sharing])

  const clear = useCallback(() => {
    setSource('')
    setFileName(null)
    setKind('canvas')
    setMode('drop')
    setError(null)
    setShortPath(null)
    window.history.replaceState(null, '', '/canvas')
  }, [])

  const renderPasted = () => {
    if (!source.trim()) return
    const k = detectKind(source, fileName)
    setKind(k)
    setFileName((f) => f ?? defaultFileName(k))
    setMode('view')
    setShortPath(null)
    window.history.replaceState(null, '', '/canvas')
  }

  const shareUrl =
    typeof window !== 'undefined' && shortPath
      ? `${window.location.origin}${shortPath}`
      : ''

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <a
            href="/"
            style={{
              color: canvasTokens.text.tertiary,
              fontSize: 12,
              textDecoration: 'none',
            }}
          >
            brianmunene.me
          </a>
          <span style={{ color: canvasTokens.stroke.primary }}>/</span>
          <strong style={{ fontSize: 13, fontWeight: 600 }}>Share a file</strong>
          {mode === 'view' ? (
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
          ) : null}
          {shortPath ? (
            <code
              style={{
                fontSize: 12,
                color: canvasTokens.text.secondary,
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              }}
            >
              {shortPath}
            </code>
          ) : fileName ? (
            <span
              style={{
                fontSize: 12,
                color: canvasTokens.text.tertiary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {fileName}
            </span>
          ) : null}
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          {mode === 'view' ? (
            <>
              <button type="button" onClick={() => setMode('drop')} style={btnStyle(false)}>
                Replace
              </button>
              <button
                type="button"
                onClick={share}
                disabled={sharing}
                style={btnStyle(true)}
              >
                {sharing ? 'Creating…' : copied ? 'Copied' : 'Copy short link'}
              </button>
              <button type="button" onClick={clear} style={btnStyle(false)}>
                Clear
              </button>
            </>
          ) : null}
        </div>
      </header>

      {mode === 'drop' || !source ? (
        <div style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>
          <h1
            style={{
              margin: '24px 0 8px',
              fontSize: 28,
              fontWeight: 590,
              letterSpacing: '-0.02em',
            }}
          >
            The agent report your teammate can&apos;t open
          </h1>
          <p
            style={{
              margin: '0 0 16px',
              fontSize: 14,
              lineHeight: '20px',
              color: canvasTokens.text.secondary,
            }}
          >
            Cursor canvases stay on disk. Claude artifacts stay in a chat.
            Markdown with mermaid dies in Slack. Drop the file here. Get{' '}
            <code style={codeStyle}>/canvas/a8k2m9qx</code>. No account.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              margin: '0 0 24px',
            }}
          >
            {['.canvas.tsx', '.md + mermaid', '.html', '.json'].map((label) => (
              <span
                key={label}
                style={{
                  fontSize: 11,
                  color: canvasTokens.text.secondary,
                  border: `1px solid ${canvasTokens.stroke.tertiary}`,
                  borderRadius: 999,
                  padding: '3px 9px',
                }}
              >
                {label}
              </span>
            ))}
            <a
              href="/canvas/demo"
              style={{
                fontSize: 12,
                color: canvasTokens.text.link,
                textDecoration: 'none',
                alignSelf: 'center',
              }}
            >
              Four public demos →
            </a>
          </div>

          <div
            onDragEnter={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
            }}
            style={{
              border: `1px dashed ${dragging ? canvasTokens.accent.primary : canvasTokens.stroke.primary}`,
              background: dragging ? canvasTokens.fill.tertiary : canvasTokens.bg.elevated,
              borderRadius: 10,
              padding: '48px 24px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>
              Drop a file here
            </div>
            <div style={{ fontSize: 13, color: canvasTokens.text.secondary }}>
              or click · or paste (Ctrl/⌘ V)
            </div>
            <input
              ref={inputRef}
              type="file"
              accept={acceptAttr()}
              style={{ display: 'none' }}
              onChange={onFileInput}
            />
          </div>

          <div style={{ marginTop: 20 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                color: canvasTokens.text.tertiary,
                marginBottom: 8,
              }}
            >
              Or paste the source
            </label>
            <textarea
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder={`# Incident brief\n\nPaste markdown (mermaid works), HTML, JSON, or a \`.canvas.tsx\`.\n\n\`\`\`mermaid\nflowchart LR\n  A[Drop] --> B[Short link]\n\`\`\``}
              rows={12}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: 12,
                borderRadius: 8,
                border: `1px solid ${canvasTokens.stroke.tertiary}`,
                background: canvasTokens.bg.editor,
                color: canvasTokens.text.primary,
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: 12,
                lineHeight: '18px',
                resize: 'vertical',
              }}
            />
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <button
                type="button"
                disabled={!source.trim()}
                onClick={renderPasted}
                style={btnStyle(true)}
              >
                Render
              </button>
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${canvasTokens.stroke.tertiary}`,
              background: canvasTokens.bg.editor,
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: canvasTokens.text.tertiary,
                marginBottom: 6,
              }}
            >
              From a terminal
            </div>
            <code
              style={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: 12,
                color: canvasTokens.text.primary,
              }}
            >
              npx --yes github:brian-mwirigi/canvas-share notes.md
            </code>
            <div style={{ marginTop: 10 }}>
              <button
                type="button"
                onClick={() => {
                  void navigator.clipboard.writeText(
                    'When you finish a .canvas.tsx, .md, .html, or .json the user wants teammates to open, tell them to drop it at https://brianmunene.me/canvas or run `npx --yes github:brian-mwirigi/canvas-share <file>`. Do not paste the whole file. Treat the share URL as a secret.'
                  )
                }}
                style={btnStyle(false)}
              >
                Copy agent instruction
              </button>
            </div>
          </div>
          <p
            style={{
              marginTop: 16,
              fontSize: 12,
              lineHeight: '18px',
              color: canvasTokens.text.tertiary,
            }}
          >
            Storage is a private repo. Anyone with the link can view — treat
            URLs like secrets. HTML runs in a sandboxed iframe.{' '}
            <a
              href="/llms.txt"
              style={{ color: canvasTokens.text.link, textDecoration: 'none' }}
            >
              llms.txt
            </a>
          </p>
        </div>
      ) : (
        <div>
          {error ? (
            <div
              style={{
                margin: 16,
                padding: '12px 14px',
                borderRadius: 8,
                border: `1px solid ${canvasTokens.stroke.secondary}`,
                background: canvasTokens.fill.tertiary,
                color: '#FC6B83',
                fontSize: 13,
                whiteSpace: 'pre-wrap',
              }}
            >
              {error}
            </div>
          ) : null}
          {shortPath && shareUrl ? (
            <div style={{ padding: '12px 16px 0' }}>
              <ShareActions
                url={shareUrl}
                source={source}
                kind={kind}
                fileName={fileName ?? defaultFileName(kind)}
              />
            </div>
          ) : null}
          <div style={{ paddingBottom: 72 }}>
            <DocumentView source={source} kind={kind} />
          </div>
          <ShareRecruitBar />
        </div>
      )}
    </div>
  )
}

function btnStyle(primary: boolean): CSSProperties {
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

const codeStyle: CSSProperties = {
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.92em',
  background: canvasTokens.fill.tertiary,
  padding: '1px 5px',
  borderRadius: 4,
}
