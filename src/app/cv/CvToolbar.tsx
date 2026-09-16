'use client'

import { useState } from 'react'

const PDF = '/Brian_Munene_Mwirigi_CV.pdf'

export function CvToolbar() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const url =
      typeof window !== 'undefined'
        ? `${window.location.origin}/cv`
        : 'https://brianmunene.me/cv'
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link:', url)
    }
  }

  return (
    <div className="flex gap-2 shrink-0 print:hidden">
      <button
        type="button"
        onClick={copy}
        className="h-9 px-4 inline-flex items-center rounded-full border border-neutral-700 text-xs tracking-widest hover:bg-white hover:text-black transition"
      >
        {copied ? 'COPIED' : 'COPY LINK'}
      </button>
      <a
        href={PDF}
        download="Brian_Munene_Mwirigi_CV.pdf"
        className="h-9 px-4 inline-flex items-center rounded-full bg-white text-black text-xs tracking-widest hover:bg-neutral-200 transition"
      >
        DOWNLOAD PDF
      </a>
    </div>
  )
}
