import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { CvToolbar } from './CvToolbar'

const PAGE = 'https://brianmunene.me/cv'

export const metadata: Metadata = {
  title: 'CV — Brian Munene Mwirigi',
  description:
    'Software engineer, AI/ML engineer, and entrepreneur in Nairobi. Co-founder of Corvux. AI/ML Lead at CropChain.',
  alternates: { canonical: PAGE },
  openGraph: {
    title: 'CV — Brian Munene Mwirigi',
    description:
      'Software Engineer · AI/ML Engineer · Entrepreneur. Nairobi. Open this page — no download required.',
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
            Software Engineer · AI/ML Engineer · Entrepreneur
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
              href="https://linkedin.com/in/brian-munene-mwirigi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="underline"
              href="https://github.com/brian-mwirigi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </header>

        <Section title="Professional summary">
          <p>
            Second-year Computer Science student at Strathmore University with a
            strong track record of shipping production-grade AI/ML systems and
            developer tools. Co-founder of Corvux, a sovereign AI infrastructure
            company; AI/ML Lead at CropChain (UN PRME semi-finalist). Published
            ML researcher with a Zenodo paper on computational consciousness.
            Builder of Chrome extensions and CLI tools with 400+ active users.
            2nd place at Cursor Kenya Build Night for JibuTax.
            Experienced across the full stack — from transformer architecture
            research to Next.js/React Native front ends and FastAPI back ends.
          </p>
        </Section>

        <Section title="Experience">
          <Job
            name="AI/ML Lead"
            meta="CropChain (UN PRME Innovation Studio) · Sep 2025 – Present · Nairobi"
            bullets={[
              'Trained XGBoost credit-scoring model on 4,563 records (Zindi Financial Inclusion dataset) achieving AUC-ROC of 0.7031.',
              'Built production FastAPI + PostgreSQL backend with Sentinel-2/CDSE satellite imagery pipeline and Open-Meteo weather integration.',
              'Integrated M-Pesa transaction analysis for alternative credit signals; built React Native Android app with Organic Intelligence UI.',
              'Conducted 13 stakeholder interviews; advanced CropChain to PRME Innovation Studio semi-finals (pitched May 2026).',
            ]}
          />
          <Job
            name="Founder"
            meta="Breon Studio · Jan 2026 – Present · Nairobi"
            bullets={[
              'Runs a web development and design studio delivering production websites for clients including Metumi Paints Centre.',
              "Full-stack delivery across Next.js, React, Tailwind CSS, and M-Pesa / Africa's Talking payment integrations.",
            ]}
          />
        </Section>

        <Section title="Open source & products">
          <Job
            name="JibuTax"
            meta="Cursor Kenya Build Night · 2nd place · 2026"
            bullets={[
              'Agentic voice-call tax and invoicing tool for informal Kenyan traders, built on top of KRA rails rather than a parallel paper trail.',
              '2nd place at Cursor Kenya Build Night; prototype for traders who will talk to an agent on a call instead of filling iTax / eTIMS forms.',
            ]}
          />
          <Job
            name="AI Slop Blocker"
            meta="Chrome Extension · 2026"
            bullets={[
              '415+ active users; local Naive Bayes ML classifier at 94.8% accuracy to detect AI-generated content in-browser.',
              'Monetized via Lemon Squeezy ($12/month or $120 lifetime); built ML pipeline entirely client-side to preserve privacy.',
            ]}
          />
          <Job
            name="CostHQ (formerly codesession-cli)"
            meta="Open-source CLI · 2026"
            bullets={[
              'AI cost-tracking CLI for developers; open-core freemium model with pro tier gating (proxyCaching, advancedFirewall, multiProject).',
              'Organic npm traction alongside sister packages: aitoken-cli, runbook-cli, devmem-cli, apisnap-cli.',
            ]}
          />
          <Job
            name="MeridianArc"
            meta="Desktop app · 2026"
            bullets={[
              'Cross-platform Pomodoro productivity app built with Tauri + React + TypeScript; scaffolded and shipped to GitHub.',
            ]}
          />
        </Section>

        <Section title="Research & publications">
          <Job
            name="Computational Consciousness Simulation"
            meta="Zenodo · DOI 10.5281/zenodo.18940956 · 2026"
            bullets={[
              "Published multi-agent ML research finding that network topology — not learning — determines a network's ability to predict its own behavior.",
              'Identified phase transition between N=324 and N=576 agents; measured autonomy-predictability anti-correlation (r = −0.71).',
            ]}
          />
          <Job
            name="ConstKV / Engram — KV cache compression"
            meta="Independent research · 2026"
            bullets={[
              'Designed novel transformer KV-cache compression architecture: SSM-based encoder compressing token sequences into a fixed-size latent state, with query-conditioned MLP reconstructor.',
              'Smoke test passed with stable loss (0.7943); compression ratios from 3,072× (T=128) to 98,304× (T=4,096).',
            ]}
          />
          <Job
            name="Panacea — Vultr-native zero-trust security agent for hospital networks"
            meta="RAISE Summit Hackathon (Paris) · 2026"
            bullets={[
              'Built autonomous multi-step AI agent (Agent Orchestration lead) that reads medical device manuals, cross-checks CVE databases and enforces live zero-trust firewall policy on Vultr Cloud Firewall.',
              'Designed the agentic loop, per-rule citation trail, explainable confidence scoring, and audit-log system; shipped on Vultr Serverless Inference (Nemotron) and Vultr Vector Store for a HIPAA-aligned, zero-egress pitch.',
              'Submitted to RAISE Summit Hackathon, Paris (July 2026).',
            ]}
          />
        </Section>

        <Section title="Education">
          <Job
            name="BSc Computer Science"
            meta="Strathmore University · 2024 – Present · Nairobi"
            bullets={[
              'Second year. Relevant coursework: Algorithms, Data Structures, Machine Learning, Database Systems, Software Engineering.',
            ]}
          />
          <Job
            name="Software Engineering Certificate"
            meta="Moringa School (Flatiron School Partnership) · 2025 · Nairobi"
            bullets={[
              'Full-stack web development and software engineering fundamentals; completed prior to Strathmore enrollment.',
            ]}
          />
        </Section>

        <Section title="Technical skills">
          <Skill line="Languages" items="Python, TypeScript, JavaScript, SQL, Rust (learning), Bash" />
          <Skill line="AI/ML" items="PyTorch, Transformers (HuggingFace), XGBoost, Scikit-learn, LangChain, CrewAI, Langfuse, RAGAS, Presidio" />
          <Skill line="LLM infra" items="LlamaFarm, Ollama, vLLM, LLM Guard, Vanna.ai, Graphiti, Llama 3 / Mistral / Qwen / DeepSeek / Gemma 4" />
          <Skill line="Backend" items="FastAPI, Node.js, PostgreSQL, REST APIs, Africa's Talking, M-Pesa Daraja API" />
          <Skill line="Frontend" items="React, Next.js, React Native, Tailwind CSS, Tauri" />
          <Skill line="DevOps" items="Docker, GitHub Actions, Railway, Linux/WSL, Git" />
          <Skill line="Other" items="Chrome Extension APIs, npm publishing, Lemon Squeezy monetization, Sentinel-2/CDSE satellite data" />
        </Section>

        <Section title="Awards & competitive programs">
          <ul className="list-disc pl-5 space-y-1 text-[13.5px] leading-6 text-neutral-700">
            <li>2nd place — Cursor Kenya Build Night · JibuTax · 2026</li>
            <li>UN PRME Innovation Studio Semi-Finalist — CropChain · May 2026</li>
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
        <p className="text-xs text-neutral-500 text-right">{meta}</p>
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
