import type { Metadata } from 'next'
import Link from 'next/link'
import { H, LegalShell, P, Ul } from '../legal/LegalShell'

export const metadata: Metadata = {
  title: 'Terms of Use — brianmunene.me',
  description:
    'Terms for brianmunene.me and the canvas viewer. Unlisted short links, no warranty, no secrets in uploads.',
  alternates: { canonical: 'https://brianmunene.me/terms' },
}

export default function TermsPage() {
  return (
    <LegalShell kicker="Legal" title="Terms of Use" updated="12 September 2026">
      <section>
        <H>Agreement</H>
        <P>
          These terms cover brianmunene.me, including the canvas viewer and{' '}
          <code className="text-neutral-100">npx canvas-share</code> when it
          posts to this site. By using the site you agree to them. If you do
          not agree, do not upload a file. Operator: Brian Munene Mwirigi,
          Nairobi, Kenya.{' '}
          <a className="text-[#87c3ff]" href="mailto:support@brianmunene.me">
            support@brianmunene.me
          </a>
          .
        </P>
        <P>
          Also read the{' '}
          <Link className="text-[#87c3ff]" href="/privacy">
            Privacy Policy
          </Link>
          . These pages describe the product as built. They are not legal
          advice.
        </P>
      </section>

      <section>
        <H>What the canvas tool is</H>
        <P>
          A free viewer and short-link host for local agent files teammates
          cannot open: Cursor <code className="text-neutral-100">.canvas.tsx</code>,
          Markdown (including mermaid), HTML artifacts, and JSON. There is no
          account. Public demos on{' '}
          <Link className="text-[#87c3ff]" href="/canvas/demo">
            /canvas/demo
          </Link>{' '}
          are synthetic.
        </P>
        <P>
          This is not a Cursor, Anthropic, or OpenAI product. It is not a
          backup service, not a password manager, and not a confidential data
          room.
        </P>
      </section>

      <section>
        <H>Unlisted is not private</H>
        <Ul
          items={[
            'A short link works for anyone who has it. There is no login gate.',
            'Shared pages are not listed in a gallery and are set not to be indexed, but the URL is enough.',
            'Do not put secrets, tokens, passwords, personal data, or customer files in a share.',
            'If you post the link on Slack, X, or a PR, treat that as publishing the file.',
          ]}
        />
      </section>

      <section>
        <H>Your content</H>
        <P>
          You keep whatever rights you already have in a file you upload. You
          grant me a license to store it, render it, and serve it at the share
          URL (and in an embed if someone uses ?embed=1) for as long as the
          share exists.
        </P>
        <P>
          You confirm you have the right to upload the file and that it does
          not include material you are not allowed to publish.
        </P>
      </section>

      <section>
        <H>What you must not upload</H>
        <Ul
          items={[
            'Secrets, credentials, private keys, session tokens, or production dumps',
            'Malware, exploit kits, or files meant to attack other people',
            'Illegal content, including child sexual abuse material — that is reported and removed',
            'Content that impersonates someone else or is meant to phish',
            'Anything that violates another person’s rights',
          ]}
        />
        <P>
          I may remove a share, block an upload, or ignore a request without
          notice if it looks like abuse or a legal risk.
        </P>
      </section>

      <section>
        <H>Security limits (read this)</H>
        <Ul
          items={[
            'HTML runs in a sandboxed iframe (scripts allowed, no parent-page access). That reduces risk. It does not make unknown HTML safe. Only open links from people you trust.',
            'Cursor canvases are compiled in the browser. Only the canvas UI SDK import is allowed. Other imports are rejected.',
            'Size is capped (about 180KB for a short link). This is not a virus scanner.',
            'I am not responsible if someone guesses, forwards, or leaks a share URL.',
          ]}
        />
      </section>

      <section>
        <H>No fee, no warranty</H>
        <P>
          The tool is free and provided “as is.” It can go down, lose a file,
          change, or shut off. I do not promise uptime, support, or that a
          link will last forever. To the extent the law allows, I am not
          liable for lost data, leaked links, or damages from using the site.
          If a court says some liability cannot be waived, it is limited to
          the amount you paid me for this tool in the last 12 months — which
          is zero.
        </P>
      </section>

      <section>
        <H>Takedown and deletion</H>
        <P>
          Email{' '}
          <a className="text-[#87c3ff]" href="mailto:support@brianmunene.me">
            support@brianmunene.me
          </a>{' '}
          with the /canvas/ id to ask for deletion, or if you believe a share
          infringes your rights. I will look at requests in good faith. There
          is no automated SLA.
        </P>
      </section>

      <section>
        <H>The rest of the site</H>
        <P>
          Blog posts, CRACKED, CLI docs, and portfolio pages are my writing
          and projects. Do not scrape the site in a way that knocks it over.
          Do not imply I endorse a product just because it is mentioned.
        </P>
      </section>

      <section>
        <H>Law</H>
        <P>
          These terms are governed by the laws of Kenya. Courts in Nairobi
          have venue, except where consumer law in your country says
          otherwise.
        </P>
      </section>

      <section>
        <H>Changes</H>
        <P>
          I may update these terms. The date at the top is the current
          version, at{' '}
          <Link className="text-[#87c3ff]" href="/terms">
            /terms
          </Link>
          . Continued use after a change means you accept the new terms.
        </P>
      </section>
    </LegalShell>
  )
}
