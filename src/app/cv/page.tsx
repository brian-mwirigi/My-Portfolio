import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { CvToolbar } from './CvToolbar'

const PAGE = 'https://brianmunene.me/cv'

export const metadata: Metadata = {
  title: 'CV — Brian Munene Mwirigi',
  description:
    'View Brian Munene Mwirigi’s CV online. Full-stack developer and aspiring AI/ML engineer based in Nairobi.',
  alternates: { canonical: PAGE },
  openGraph: {
    title: 'CV — Brian Munene Mwirigi',
    description:
      'Full-stack developer · Nairobi. Open this page — no download required.',
    url: PAGE,
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'CV — Brian Munene Mwirigi',
    description: 'View the CV in the browser.',
  },
}

export default function CvPage() {
  return (
    <main className="bg-[#111] text-neutral-900 min-h-screen print:bg-white">
      <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-neutral-800 bg-[#0a0a0a] text-white print:hidden">
        <div className="min-w-0">
          <Link
            href="/"
            className="text-xs tracking-widest text-neutral-500 hover:text-white transition"
          >
            brianmunene.me
          </Link>
          <h1 className="text-sm font-medium tracking-tight">
            Brian Munene Mwirigi — CV
          </h1>
        </div>
        <CvToolbar />
      </header>

      <article className="max-w-[800px] mx-auto my-8 mb-16 bg-white shadow-2xl px-8 md:px-12 py-10 print:shadow-none print:my-0 print:max-w-none">
        <header className="border-b border-neutral-200 pb-6 mb-8">
          <p className="text-3xl md:text-4xl font-bold tracking-tight">
            Brian Munene Mwirigi
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Full-Stack Developer · Aspiring AI/ML Engineer · Developer Tooling
          </p>
          <p className="mt-3 text-sm text-neutral-500 flex flex-wrap gap-x-3 gap-y-1">
            <span>Nairobi, Kenya</span>
            <a className="underline" href="mailto:brianinesh@gmail.com">
              brianinesh@gmail.com
            </a>
            <a className="underline" href="https://brianmunene.me">
              brianmunene.me
            </a>
            <a
              className="underline"
              href="https://github.com/brian-mwirigi"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/brian-mwirigi
            </a>
          </p>
        </header>

        <Section title="Professional summary">
          <p>
            Full-stack developer and aspiring AI/ML engineer with shipped
            projects spanning SaaS platforms, developer tooling and AI-powered
            systems. Technical lead on CropChain, an AI credit scoring API
            incubated under the UN Global Compact&apos;s PRME Innovation Studio,
            currently at the Semi-Finals. Builder of open-source CLI tools with
            7,000+ downloads.
          </p>
        </Section>

        <Section title="Technical skills">
          <Skill line="Frontend" items="React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS" />
          <Skill line="Backend" items="Python, FastAPI, Flask, Node.js, SQLAlchemy, REST APIs, PostgreSQL, SQLite" />
          <Skill line="AI/ML" items="XGBoost, Scikit-learn, Pandas, NumPy, Open-Meteo API" />
          <Skill line="Tools" items="Git/GitHub, Docker, CLI development, npm/pip, Chrome Extensions API, Vercel, GitHub Actions" />
        </Section>

        <Section title="Key projects">
          <Job
            name="CropChain"
            meta="Python · FastAPI · XGBoost · PostgreSQL · Sentinel-2"
            bullets={[
              'AI-powered credit scoring API for smallholder farmers, incubated under the UN Global Compact’s PRME Innovation Studio 2026',
              'Integrates various data sources for field-level crop health assessment',
              'XGBoost model trained on Financial Inclusion in Africa dataset (AUC-ROC ~0.70) with Open-Meteo weather integration',
              'Production FastAPI backend with async SQLAlchemy 2.0, PostgreSQL via Docker, and API key authentication',
              'Designing marketplace architecture connecting farmers to MFIs; Railway cloud deployment in progress',
            ]}
          />
          <Job
            name="codesession-cli"
            meta="TypeScript · Node.js · npm"
            bullets={[
              'Open-source CLI tracking AI-assisted coding sessions including time, files changed, git diffs, and token costs across providers',
              '7,000+ downloads on npm; uses file system watchers and git process spawning to capture sessions automatically',
              'Compatible with Claude Code, OpenAI, Google, and any agent framework',
            ]}
          />
          <Job
            name="Chrome extensions"
            meta="JavaScript · Chrome Extensions API"
            bullets={[
              'AI Slop Blocker (366 users) — filters AI-generated content from browsing feeds',
              'Twitter Thread Downloader (114 users, v1.6, rated 4 stars) — full thread download tool',
              'TikTok Video Downloader HD (226 users) — no-watermark video download extension',
            ]}
          />
          <Job
            name="E-commerce & landing page portfolio"
            meta="React · JavaScript · CSS3"
            bullets={[
              'Built quality sites for diverse industries through Breon Studio',
              'Prototypes include luxury retail, hospitality, creative agencies and local Nairobi businesses',
            ]}
          />
          <Job
            name="Developer CLI suite"
            meta="TypeScript · Node.js · npm"
            bullets={[
              'aitoken-cli: unified dashboard normalizing AI API token costs across OpenAI, Anthropic and Google',
              'apisnap-cli: HTTP proxy capturing live API traffic and auto-generating Jest tests and MSW mock handlers',
              'devmem-cli: persistent cross-project code memory giving AI assistants context across entire codebases',
            ]}
          />
          <Job
            name="Volvox Bot (open source contribution)"
            meta="TypeScript · React · Discord.js"
            bullets={[
              'Contributor to VolvoxLLC/volvox-bot, an open-source Discord bot platform with a web dashboard',
              'Merged PR #305: improved dashboard UX structure and reduced UI clutter (frontend)',
              'Merged PR #181: implemented protection logic preventing moderation actions on admins, mods, and owners',
            ]}
          />
        </Section>

        <Section title="Experience">
          <Job
            name="Co-Founder & Lead Developer"
            meta="Breon Studio · 2026 – Present"
            bullets={[
              'Two-person web development and design studio building production websites and digital products for clients in Kenya',
              'Manage full project lifecycle: requirements, design, development, delivery, and ongoing maintenance',
            ]}
          />
          <Job
            name="Full-Stack Developer"
            meta="Freelance & contract work · 2025 – Present"
            bullets={[
              'Self-managed remote workflows with consistent delivery and clear stakeholder communication',
            ]}
          />
        </Section>

        <Section title="Education">
          <Job
            name="BSc Computer Science"
            meta="Strathmore University, Nairobi · Expected 2029"
            bullets={[]}
          />
          <Job
            name="Software Engineering Certificate"
            meta="Moringa School · 2025"
            bullets={[
              'Full-stack development bootcamp — React, Python, Flask, PostgreSQL',
            ]}
          />
        </Section>

        <Section title="Additional">
          <ul className="list-disc pl-5 space-y-1 text-[13.5px] leading-6 text-neutral-700">
            <li>Available for part-time remote engagement (20–25 hrs/week)</li>
            <li>897 GitHub contributions in the last year; active open-source contributor</li>
            <li>Fluent in English; comfortable with async communication and self-managed workflows</li>
          </ul>
        </Section>
      </article>
    </main>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-8">
      <h2 className="text-[11px] tracking-[0.18em] uppercase text-neutral-500 mb-3 font-semibold">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Skill({ line, items }: { line: string; items: string }) {
  return (
    <p className="text-[13.5px] leading-6 text-neutral-700 mb-1">
      <span className="font-semibold text-neutral-900">{line}: </span>
      {items}
    </p>
  )
}

function Job({
  name,
  meta,
  bullets,
}: {
  name: string
  meta: string
  bullets: string[]
}) {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <h3 className="font-semibold text-[15px]">{name}</h3>
        <p className="text-xs text-neutral-500">{meta}</p>
      </div>
      {bullets.length ? (
        <ul className="mt-1.5 list-disc pl-5 space-y-1 text-[13.5px] leading-6 text-neutral-700">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
