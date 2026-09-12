import { NextRequest, NextResponse } from 'next/server'
import { detectKind, storageExt } from '@/lib/canvas-viewer/kind'
import {
  CANVAS_BINS_OWNER,
  CANVAS_BINS_REPO,
  canvasBinsHeaders,
  getCanvasBinsToken,
} from '@/lib/canvas-viewer/githubBins'

export const runtime = 'nodejs'

const MAX_BYTES = 180_000

function cors(res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, User-Agent')
  return res
}

function json(body: unknown, status = 200) {
  return cors(NextResponse.json(body, { status }))
}

function shortId(len = 8) {
  const alphabet = '23456789abcdefghijkmnopqrstuvwxyz'
  const bytes = crypto.getRandomValues(new Uint8Array(len))
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('')
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }))
}

export async function GET() {
  return json({
    ok: true,
    accepts: ['.canvas.tsx', '.md', '.html', '.json'],
    post: { source: 'string', fileName: 'string' },
    viewer: 'https://brianmunene.me/canvas',
    demo: 'https://brianmunene.me/canvas/demo',
    cli: 'npx --yes github:brian-mwirigi/canvas-share <file>',
  })
}

export async function POST(req: NextRequest) {
  try {
    const token = getCanvasBinsToken()
    if (!token) {
      return json(
        {
          error:
            'Short links are not configured (missing CANVAS_BINS_TOKEN).',
          fallback: 'hash',
        },
        503
      )
    }

    const body = (await req.json()) as { source?: string; fileName?: string }
    const source = body.source?.trim() ?? ''
    if (!source) {
      return json({ error: 'Missing source.' }, 400)
    }
    if (source.length > MAX_BYTES) {
      return json({ error: 'File too large (max ~180KB).' }, 413)
    }

    const kind = detectKind(source, body.fileName)
    if (kind === 'json') {
      try {
        JSON.parse(source)
      } catch {
        return json({ error: 'Invalid JSON.' }, 400)
      }
    }
    if (kind === 'canvas' && !/from\s*['"]cursor\/canvas['"]/.test(source)) {
      return json(
        {
          error:
            'Canvas files must use the canvas UI SDK (import from "cursor/canvas"). Or share a .md / .html / .json file instead.',
        },
        400
      )
    }

    const id = shortId(8)
    const path = `${id}.${storageExt(kind)}`
    const content = Buffer.from(source, 'utf8').toString('base64')

    const gh = await fetch(
      `https://api.github.com/repos/${CANVAS_BINS_OWNER}/${CANVAS_BINS_REPO}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          ...canvasBinsHeaders(token),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `share ${id} (${kind})`,
          content,
          branch: 'main',
        }),
      }
    )

    if (!gh.ok) {
      const detail = await gh.text()
      console.error('canvas-bins upload failed', gh.status, detail)
      return json({ error: 'Failed to create short link.', detail: gh.status }, 502)
    }

    const origin = req.nextUrl.origin
    return json({
      id,
      kind,
      url: `${origin}/canvas/${id}`,
      path: `/canvas/${id}`,
    })
  } catch (err) {
    console.error(err)
    return json({ error: 'Server error.' }, 500)
  }
}
