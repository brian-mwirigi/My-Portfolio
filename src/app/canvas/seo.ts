export const BASE = 'https://brianmunene.me'
export const PAGE = `${BASE}/canvas`

export const TITLE =
  'Share a Cursor Canvas, Claude HTML Artifact, or Markdown Online'
export const SHORT_TITLE = 'The agent report your teammate cannot open'
export const DESC =
  'Drop a Cursor .canvas.tsx, Claude/ChatGPT HTML artifact, Markdown + mermaid, or JSON. Render it in the browser and copy a short teammate link. No account.'

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
  'share claude artifact',
  'share chatgpt html',
  'claude artifact viewer',
  'chatgpt artifact share link',
  'html artifact viewer',
  'mermaid markdown viewer',
  'share mermaid diagram',
  'markdown viewer online',
  'share markdown online',
  'md file viewer',
  'json viewer share link',
  'canvas viewer',
  'share canvas online',
  'npx canvas share',
  'cursor-canvas-share',
  'team canvas sharing',
  'gfm markdown viewer',
  'brian munene canvas',
]

export const faqs = [
  {
    q: 'How do I share a Cursor canvas?',
    a: 'Cursor canvases are local .canvas.tsx files. Drop the file at brianmunene.me/canvas (or run npx --yes github:brian-mwirigi/canvas-share file.canvas.tsx) to get a short URL teammates can open in any browser.',
  },
  {
    q: 'Can teammates open a .canvas.tsx file?',
    a: 'Not in Cursor unless they have the file. This viewer renders the canvas in the browser and gives you a short link like /canvas/a8k2m9qx.',
  },
  {
    q: 'Does it only work with Cursor?',
    a: 'No. Cursor canvases are one format. It also renders Markdown (GFM + mermaid), Claude/ChatGPT HTML artifacts, SVG, and JSON.',
  },
  {
    q: 'How do I share a Claude or ChatGPT HTML artifact?',
    a: 'Download or copy the HTML, drop it at /canvas, copy the short link. HTML runs in a sandboxed iframe so it cannot touch the parent page.',
  },
  {
    q: 'Does mermaid work?',
    a: 'Yes. Fenced ```mermaid blocks in Markdown render as diagrams.',
  },
  {
    q: 'How do short links work?',
    a: 'You get a short URL like /canvas/a8k2m9qx. Send it to your team. They open it in any browser. Email support@brianmunene.me if you want a link taken down.',
  },
  {
    q: 'Can I embed a share in a doc?',
    a: 'Yes. After you have a short link, use Copy embed for an iframe pointing at /canvas/{id}?embed=1.',
  },
  {
    q: 'Is there a CLI?',
    a: 'Yes. npx --yes github:brian-mwirigi/canvas-share path/to/file prints a short https://brianmunene.me/canvas/… link. Works for .canvas.tsx, .md, .html, and .json.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. No account. Open the public demos at /canvas/demo before uploading your own file.',
  },
  {
    q: 'Who can open a short link?',
    a: 'The people you send it to. Shares are not listed on the site. Email support@brianmunene.me with the share id if you want one taken down. Privacy: /privacy.',
  },
]
