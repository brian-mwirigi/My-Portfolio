const OWNER = 'brian-mwirigi'
const REPO = 'canvas-bins'

export function getCanvasBinsToken() {
  return (
    process.env.CANVAS_BINS_TOKEN ||
    process.env.GITHUB_TOKEN ||
    process.env.GH_TOKEN ||
    ''
  )
}

export function canvasBinsHeaders(token: string) {
  return {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
  }
}

export { OWNER as CANVAS_BINS_OWNER, REPO as CANVAS_BINS_REPO }

export type SharedDoc = {
  source: string
  kind: 'canvas' | 'markdown'
  fileName: string
}

/** Server-only: read a share from the private canvas-bins repo. */
export async function fetchSharedCanvas(id: string): Promise<SharedDoc | null> {
  if (!/^[a-z0-9]{6,12}$/i.test(id)) return null

  const token = getCanvasBinsToken()
  if (!token) {
    console.error('fetchSharedCanvas: missing CANVAS_BINS_TOKEN')
    return null
  }

  const candidates: Array<{ ext: string; kind: 'canvas' | 'markdown' }> = [
    { ext: 'canvas.tsx', kind: 'canvas' },
    { ext: 'md', kind: 'markdown' },
    { ext: 'tsx', kind: 'canvas' },
  ]

  for (const c of candidates) {
    const path = `${id}.${c.ext}`
    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=main`,
      {
        headers: canvasBinsHeaders(token),
        cache: 'no-store',
      }
    )
    if (!res.ok) continue

    const data = (await res.json()) as { content?: string; encoding?: string }
    if (!data.content) continue

    const source = Buffer.from(
      data.content.replace(/\n/g, ''),
      (data.encoding as BufferEncoding) || 'base64'
    ).toString('utf8')

    return {
      source,
      kind: c.kind,
      fileName: path,
    }
  }

  return null
}
