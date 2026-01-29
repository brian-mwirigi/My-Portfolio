import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brian Munene | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, TypeScript, and Python. Building production-ready applications for healthcare, e-commerce, and SaaS. Based in Nairobi, Kenya. Available for remote work.',
  keywords: 'Full Stack Developer, React Developer, TypeScript, Python, Flask, Kenya, Remote Developer, Healthcare Apps, SaaS Developer',
  openGraph: {
    title: 'Brian Munene | Full Stack Developer',
    description: 'Building production-ready applications for healthcare, e-commerce, and SaaS.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
