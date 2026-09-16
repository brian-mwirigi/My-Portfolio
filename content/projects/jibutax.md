# JibuTax

Internal tracker for future conversations. Public surface is a short product + award line on `/cv` — details live here so they are not buried in a one-liner.

**One-line:** Agentic voice-call tax/invoicing tool for informal Kenyan traders on top of KRA; 2nd place at Cursor Kenya Build Night.

## Status

| Field | State |
| --- | --- |
| Award | **2nd place — Cursor Kenya Build Night** (recorded Sep 2026) |
| Product stage | Hackathon / post-build-night prototype |
| Public CV | Yes — product entry + award line |
| Commercial | Direction not locked |
| Team commitment | Not confirmed beyond the build-night team |

## What it is

JibuTax is a voice-first, agentic tax and invoicing assistant aimed at **informal Kenyan traders** who already sit on (or need to sit on) **KRA** rails — PIN, invoicing, and the paperwork that currently lives in iTax / eTIMS rather than in a phone call.

The product bet: traders will talk to an agent on a call instead of filling KRA forms. The agent should produce invoices / tax records that map onto KRA requirements, not a parallel paper trail.

## Team

Fill in names and roles as they stabilize. Do not invent people in public copy.

| Person | Role | Notes |
| --- | --- | --- |
| Brian Munene Mwirigi | Builder / engineer on the build-night team | Confirm title with the rest of the team before pitching as “founder” vs “co-builder” |
| — | — | Remaining teammates: **not recorded yet** |

Until names are written here, public copy should stay “built at Cursor Kenya Build Night” rather than naming a company org chart.

## Technical state

Known from the pitch, not from a production repo audit:

- **Interface:** agentic **voice call** (not a form-first dashboard as the primary UX)
- **Domain:** tax + invoicing for informal traders
- **Integration target:** KRA (iTax / eTIMS-class flows — exact APIs unused until compliance is closed)
- **Repo / deploy URL:** **not recorded yet**
- **Stack (inferred, unconfirmed):** voice telephony + LLM agent loop + some persistence for invoices. Do not list Africa’s Talking, OpenAI, etc. on the CV until confirmed in this file.

What is **not** claimed:

- Production KRA partnership
- Live eTIMS issuance at scale
- A locked telephony or model vendor

## Open compliance gap

**Status: OPEN.** This is the load-bearing unknown. Do not paper over it in pitches or on the site.

- Operating a tax/invoicing tool “on top of KRA” for informal traders requires a confirmed legal path: who is the taxpayer of record, who is authorized to issue eTIMS invoices, and whether the voice agent is a filing aid vs a fiscal device.
- Informal-sector PIN / VAT / turnover-tax treatment is not one product surface. Mixing them in marketing copy is a compliance risk.
- Until this is closed: no “KRA-approved”, no implied partnership, no claim that a voice call = a filed return.

Next step when this conversation resumes: write the actual gap (API access vs agent-as-bookkeeper vs licensed integrator) in one paragraph here, then decide whether the product is a **compliance assistant** or a **fiscal issuer**.

## Commercial direction

**Status: not locked.** Options on the table, none chosen:

1. Keep it as a build-night artifact / portfolio piece
2. Pilot with a small set of traders (needs the compliance answer first)
3. Package as a studio / Corvux / Breon Studio product
4. Hand off or pause if the team does not commit

Do not put pricing, TAM, or “we’re going to market” on the public CV until a row in this section is marked chosen.

## Team commitment

**Status: unknown.** Build-night 2nd place is not a commitment to ship.

Record here, when known:

- Who is still in after the event
- Hours / week each person will give
- Who owns KRA/compliance vs voice agent vs go-to-market
- Decision date for continue / pause / fold

Until that exists, treat JibuTax as **awarded prototype, not a company**.

## Public copy (allowed)

Use this on `/cv` and similar surfaces:

> JibuTax — agentic voice-call tax/invoicing tool for informal Kenyan traders on top of KRA. 2nd place, Cursor Kenya Build Night.

Do not add team names, vendor stack, or “KRA partner” language unless this file says so.

## When you pick this up again

1. Read this file first. Do not rediscover the product from a one-liner.
2. Ask only for the blanks: teammates, repo, telephony, and the compliance paragraph.
3. Update this file before changing public copy.
