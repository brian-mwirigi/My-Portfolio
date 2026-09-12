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
        'Upload .canvas.tsx and Markdown (.md) files',
        'Render interactive canvases and GFM markdown in the browser',
        'Short shareable links for teams',
        'Architecture reviews, specs, notes, dashboards, audits',
        'Share Cursor .canvas.tsx as a short URL',
        'Compatible with Cursor canvases, canvas SDK files, and markdown',
        'CLI: npx cursor-canvas-share',
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
      name: 'Share a Cursor canvas online',
      description:
        'Turn a local Cursor .canvas.tsx file into a short URL teammates can open.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Open the viewer',
          text: 'Go to https://brianmunene.me/canvas or run npx --yes github:brian-mwirigi/canvas-share.',
        },
        {
          '@type': 'HowToStep',
          name: 'Drop the file',
          text: 'Drop or paste the .canvas.tsx or .md file.',
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
