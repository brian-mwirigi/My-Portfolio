#!/usr/bin/env node
import { readFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'

const API = process.env.CANVAS_SHARE_API || 'https://brianmunene.me/api/canvas'

const file = process.argv[2]
if (!file || file === '-h' || file === '--help') {
  console.log(`Share a Cursor canvas or markdown file.

  npx cursor-canvas-share <file.canvas.tsx|file.md>

Prints a short URL on https://brianmunene.me/canvas
`)
  process.exit(file ? 0 : 1)
}

const abs = resolve(file)
const source = await readFile(abs, 'utf8')
const res = await fetch(API, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'cursor-canvas-share/1.0',
  },
  body: JSON.stringify({ source, fileName: basename(abs) }),
})

const data = await res.json().catch(() => ({}))
if (!res.ok || !data.url) {
  console.error(data.error || `Upload failed (${res.status})`)
  process.exit(1)
}

console.log(data.url)
