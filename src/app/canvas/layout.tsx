import type { Metadata } from 'next'
import { DESC, KEYWORDS, PAGE, SHORT_TITLE, TITLE, faqs } from './seo'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: KEYWORDS,
  authors: [{ name: 'Brian Munene Mwirigi', url: 'https://brianmunene.me' }],
  creator: 'Brian Munene Mwirigi',
  openGraph: {
    title: SHORT_TITLE,
    description: DESC,
    url: PAGE,
    siteName: 'Brian Munene',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SHORT_TITLE,
    description: DESC,
    creator: '@BrianMMwirigi',
  },
  alternates: {
    canonical: PAGE,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Canvas Viewer',
      url: PAGE,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description: DESC,
      author: {
        '@type': 'Person',
        name: 'Brian Munene Mwirigi',
        url: 'https://brianmunene.me',
      },
      featureList: [
        'Upload .canvas.tsx, Markdown, HTML artifacts, and JSON',
        'Render Cursor canvases, GFM + mermaid, and sandboxed HTML',
        'Short shareable links for teams',
        'Embed via iframe (?embed=1)',
        'Architecture reviews, specs, Claude/ChatGPT artifacts',
        'CLI: npx --yes github:brian-mwirigi/canvas-share',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
    {
      '@type': 'HowTo',
      name: 'Share an agent report online',
      description:
        'Turn a local Cursor canvas, Claude HTML artifact, markdown, or JSON file into a short URL teammates can open.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open the viewer',
          text: 'Go to https://brianmunene.me/canvas or run npx --yes github:brian-mwirigi/canvas-share.',
        },
        {
          '@type': 'HowToStep',
          name: 'Drop the file',
          text: 'Drop or paste a .canvas.tsx, .md, .html, or .json file.',
        },
        {
          '@type': 'HowToStep',
          name: 'Copy the short link',
          text: 'Share https://brianmunene.me/canvas/{id} with your team.',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://brianmunene.me',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Canvas Viewer',
          item: PAGE,
        },
      ],
    },
  ],
}

export default function CanvasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
