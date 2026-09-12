import type { Metadata } from 'next'
import Link from 'next/link'
import { H, LegalShell, P, Ul } from '../legal/LegalShell'

export const metadata: Metadata = {
  title: 'Privacy Policy — brianmunene.me',
  description:
    'How brianmunene.me and the canvas viewer handle files, short links, and logs. No accounts. Unlisted links are not private.',
  alternates: { canonical: 'https://brianmunene.me/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalShell
      kicker="Legal"
      title="Privacy Policy"
      updated="12 September 2026"
    >
      <section>
        <H>Who this is</H>
        <P>
          This site is operated by Brian Munene Mwirigi in Nairobi, Kenya
          (“I”, “me”). Contact:{' '}
          <a className="text-[#87c3ff]" href="mailto:support@brianmunene.me">
            support@brianmunene.me
          </a>
          . This policy covers brianmunene.me, including the canvas viewer at{' '}
          <Link className="text-[#87c3ff]" href="/canvas">
            /canvas
          </Link>{' '}
          and <code className="text-neutral-100">POST /api/canvas</code>.
        </P>
      </section>

      <section>
        <H>The short version</H>
        <Ul
          items={[
            'There is no account and no password on the canvas tool.',
            'If you create a short link, the file contents are stored so the link can work.',
            'Anyone who has the URL can open the file. Treat the link like a secret.',
            'Do not upload passwords, API keys, customer data, or anything you cannot lose.',
            'I do not run a first-party ad or analytics pixel on this site.',
            'Email me the share id if you want a file deleted.',
          ]}
        />
      </section>

      <section>
        <H>What I collect</H>
        <P>
          <strong className="text-white">You do not create an account.</strong>{' '}
          I do not ask for your name or email to use /canvas.
        </P>
        <P>If you drop or paste a file and create a short link, I store:</P>
        <Ul
          items={[
            'The file contents you submitted',
            'The filename you sent (or a default name)',
            'A random short id (for example a8k2m9qx)',
            'The detected type: canvas, markdown, html, or json',
          ]}
        />
        <P>
          If you only preview in the browser and never hit “Copy short link”,
          the file stays on your machine. It is not uploaded.
        </P>
        <P>
          Hosting and storage providers (Vercel and GitHub) may keep normal
          technical logs: IP address, user agent, time, and URL. I do not sell
          those logs. I do not have a separate marketing list for canvas users.
        </P>
        <P>
          The homepage contact form opens your email app. That message goes to
          support@brianmunene.me. I keep project emails I receive.
        </P>
      </section>

      <section>
        <H>Where files live</H>
        <P>
          Short-link files are written to a <strong className="text-white">private</strong>{' '}
          GitHub repository. They are not listed on this site and shared pages
          are set not to be indexed by search engines. They are still served to
          anyone who opens the exact URL.
        </P>
        <P>
          GitHub and I can see those files. That is required to store and render
          them. This is not end-to-end encryption. I cannot honestly call a
          share “private.”
        </P>
      </section>

      <section>
        <H>How I use it</H>
        <Ul
          items={[
            'Render the file in the browser and return a short link',
            'Operate, debug, and stop abuse of the service',
            'Remove files that break the terms or the law',
          ]}
        />
        <P>I do not sell your files. I do not train a public model on them.</P>
      </section>

      <section>
        <H>Cookies and tracking</H>
        <P>
          The canvas viewer does not set an account cookie. I do not use Google
          Analytics, ads, or a first-party tracker on these pages. The host may
          set cookies needed to run the site.
        </P>
      </section>

      <section>
        <H>How long, and how to delete</H>
        <P>
          Shares stay until they are deleted. There is no self-serve expiry or
          revoke button yet. To delete a share, email{' '}
          <a className="text-[#87c3ff]" href="mailto:support@brianmunene.me">
            support@brianmunene.me
          </a>{' '}
          with the id in the URL (the part after /canvas/). I will delete that
          file from the store when I can confirm the request. I may also delete
          files that look like abuse, malware, or illegal content.
        </P>
      </section>

      <section>
        <H>Your rights</H>
        <P>
          Depending on where you live (including Kenya’s Data Protection Act),
          you may ask what I hold about you, ask for a copy, or ask me to
          delete it. For canvas, the practical data is the file behind a share
          id. Write to support@brianmunene.me. I will need the share URL or id.
        </P>
      </section>

      <section>
        <H>Children</H>
        <P>
          This tool is for people who can agree to the{' '}
          <Link className="text-[#87c3ff]" href="/terms">
            Terms
          </Link>
          . Do not upload information about children, and do not use it if you
          are under 16.
        </P>
      </section>

      <section>
        <H>Changes</H>
        <P>
          If this policy changes in a material way, I will update the date at
          the top of this page. The current version lives at{' '}
          <Link className="text-[#87c3ff]" href="/privacy">
            /privacy
          </Link>
          .
        </P>
      </section>
    </LegalShell>
  )
}
