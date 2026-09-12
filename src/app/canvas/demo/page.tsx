import type { Metadata } from 'next'
import { DemoGallery } from './DemoGallery'

export const metadata: Metadata = {
  title: 'Demo gallery — Cursor canvas, markdown, HTML, JSON',
  description:
    'Public demos of files teammates cannot open: a Cursor .canvas.tsx incident review, markdown + mermaid, an HTML agent artifact, and a JSON dump. Then drop yours at /canvas.',
  alternates: { canonical: 'https://brianmunene.me/canvas/demo' },
  openGraph: {
    title: 'Demo gallery — share agent reports as a link',
    description:
      'Cursor canvas, markdown + mermaid, HTML artifact. All synthetic. Drop your own file next.',
    url: 'https://brianmunene.me/canvas/demo',
  },
}

export default function CanvasDemoPage() {
  return <DemoGallery />
}
