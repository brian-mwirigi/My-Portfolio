import type { Metadata } from 'next'
import Link from 'next/link'
import { H, LegalShell, P, Ul } from '../legal/LegalShell'

export const metadata: Metadata = {
  title: 'Privacy Policy — brianmunene.me',
  description:
    'Privacy on brianmunene.me: no account, no ads, no tracking pixels. Contact support@brianmunene.me.',
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
          This site is run by Brian Munene Mwirigi in Nairobi, Kenya. Contact:{' '}
          <a className="text-[#87c3ff]" href="mailto:support@brianmunene.me">
            support@brianmunene.me
          </a>
          . This page covers brianmunene.me and the canvas viewer at{' '}
          <Link className="text-[#87c3ff]" href="/canvas">
            /canvas
          </Link>
          .
        </P>
      </section>

      <section>
        <H>The short version</H>
        <Ul
          items={[
            'No account. No password. No newsletter signup to use the viewer.',
            'No ads and no first-party tracking pixel.',
            'You choose who you send a share link to.',
            'Email me if you want a link taken down.',
          ]}
        />
      </section>

      <section>
        <H>Using the canvas viewer</H>
        <P>
          I do not ask for your name or email to drop a file and get a link.
          Preview happens in your browser. A share link keeps that page
          available for the people you send it to, until you ask me to remove
          it.
        </P>
        <P>
          The homepage contact form opens your own email app. Messages you send
          to support@brianmunene.me stay in that inbox.
        </P>
      </section>

      <section>
        <H>Hosting</H>
        <P>
          The site is hosted on the usual web infrastructure. Providers may
          keep standard request logs (time, URL, browser) to run the service. I
          do not sell that information or use it for ads.
        </P>
      </section>

      <section>
        <H>How it is used</H>
        <Ul
          items={[
            'Show your share page to people who open the link',
            'Keep the site working and deal with abuse if it shows up',
          ]}
        />
        <P>I do not sell your work or use it to train a public model.</P>
      </section>

      <section>
        <H>Cookies</H>
        <P>
          There is no account cookie. I do not use Google Analytics or an ad
          pixel. The host may set cookies needed to run the site.
        </P>
      </section>

      <section>
        <H>Taking a link down</H>
        <P>
          Email{' '}
          <a className="text-[#87c3ff]" href="mailto:support@brianmunene.me">
            support@brianmunene.me
          </a>{' '}
          with the share URL (or the id after /canvas/). I will take it down
          when I can confirm the request.
        </P>
      </section>

      <section>
        <H>Your rights</H>
        <P>
          You can email the same address to ask what is associated with a share
          link or to have it removed. Include the URL or id.
        </P>
      </section>

      <section>
        <H>Children</H>
        <P>
          This site is for people who can agree to the{' '}
          <Link className="text-[#87c3ff]" href="/terms">
            Terms
          </Link>
          . Do not use it if you are under 16.
        </P>
      </section>

      <section>
        <H>Changes</H>
        <P>
          If this page changes, the date at the top will change. The current
          version is at{' '}
          <Link className="text-[#87c3ff]" href="/privacy">
            /privacy
          </Link>
          .
        </P>
      </section>
    </LegalShell>
  )
}
