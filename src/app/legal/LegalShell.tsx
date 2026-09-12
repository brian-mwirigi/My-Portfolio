import Link from 'next/link'
import type { ReactNode } from 'react'

export function LegalShell({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="bg-[#0a0a0a] text-[#e8e8e8] min-h-screen">
      <nav className="px-6 py-5 flex justify-between items-center border-b border-neutral-800 text-sm">
        <Link href="/" className="text-neutral-400 hover:text-white transition">
          brianmunene.me
        </Link>
        <div className="flex gap-5 text-neutral-500">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms
          </Link>
          <Link href="/canvas" className="hover:text-white transition">
            Canvas
          </Link>
        </div>
      </nav>

      <article className="max-w-[680px] mx-auto px-6 py-14">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
          {kicker}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          Effective {updated}. These pages describe how the site actually works.
          They are not a substitute for advice from a lawyer.
        </p>
        <div className="legal-prose space-y-8 text-[15px] leading-7 text-neutral-300">
          {children}
        </div>
      </article>

      <footer className="border-t border-neutral-800 px-6 py-6 text-xs text-neutral-500 flex flex-wrap justify-between gap-3">
        <span>© 2026 Brian Munene Mwirigi</span>
        <a
          href="mailto:support@brianmunene.me"
          className="hover:text-white transition"
        >
          support@brianmunene.me
        </a>
      </footer>
    </main>
  )
}

export function H({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-white tracking-tight">{children}</h2>
  )
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-2">{children}</p>
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-2 list-disc pl-5 space-y-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}
