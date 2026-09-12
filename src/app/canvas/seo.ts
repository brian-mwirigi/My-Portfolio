export const BASE = 'https://brianmunene.me'
export const PAGE = `${BASE}/canvas`

export const TITLE =
  'Share a Cursor Canvas Online — Free .canvas.tsx Viewer & Short Link'
export const SHORT_TITLE = 'Share a Cursor canvas — drop, render, link'
export const DESC =
  'Share a Cursor canvas with your team. Drop a .canvas.tsx or Markdown file, render it in the browser, and copy a short link. No account. Open canvas.tsx online, preview .md, npx cursor-canvas-share.'

export const KEYWORDS = [
  'share cursor canvas',
  'cursor canvas share',
  'cursor canvas.tsx link',
  'open canvas.tsx online',
  'cursor canvas viewer',
  'share canvas.tsx',
  'canvas.tsx viewer',
  'cursor canvas public link',
  'how to share cursor canvas',
  'canvas viewer',
  'markdown viewer online',
  'share markdown online',
  'md file viewer',
  'markdown share link',
  'share canvas online',
  'tsx canvas viewer',
  'drop canvas file',
  'drop markdown file',
  'architecture review canvas',
  'product spec canvas',
  'cursor-canvas-share',
  'npx canvas share',
  'team canvas sharing',
  'gfm markdown viewer',
  'brian munene canvas',
]

export const faqs = [
  {
    q: 'How do I share a Cursor canvas?',
    a: 'Cursor canvases are local .canvas.tsx files. Drop the file at brianmunene.me/canvas (or run npx cursor-canvas-share file.canvas.tsx) to get a short URL teammates can open in any browser.',
  },
  {
    q: 'Can teammates open a .canvas.tsx file?',
    a: 'Not in Cursor unless they have the file. This viewer renders the canvas in the browser and gives you a short link like /canvas/a8k2m9qx.',
  },
  {
    q: 'Does it only work with Cursor?',
    a: 'Cursor canvases are the main use. Any .canvas.tsx on the canvas UI SDK works, and plain Markdown (.md) with GFM tables and code works too.',
  },
  {
    q: 'How do short links work?',
    a: 'Copy short link stores the file in a private backend and serves it only through brianmunene.me. Anyone with the URL can view it — treat the link like a secret.',
  },
  {
    q: 'Is there a CLI?',
    a: 'Yes. npx --yes github:brian-mwirigi/canvas-share path/to/file.canvas.tsx (or .md) prints a short https://brianmunene.me/canvas/… link.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. No account. Open a demo at /canvas/demo before uploading your own file.',
  },
]
