export const DEMO_BRIEF_MD = `# Q3 hiring brief (synthetic)

**Not a real company.** Demo markdown + mermaid so you can send a link without uploading work files.

## Ask
Fill 2 backend seats before 1 Oct. Remote, UTC-3 to UTC+3 overlap.

## Funnel

| Stage | Count | Note |
|-------|------:|------|
| Inbound | 84 | 11 referrals |
| Screen | 22 | take-home sent |
| Onsite | 6 | this week |
| Offer | 1 | pending comp |

## Process

\`\`\`mermaid
flowchart LR
  A[Inbound] --> B[Screen]
  B --> C[Take-home]
  C --> D[Onsite]
  D --> E[Offer]
\`\`\`

## Decision
Ship the take-home as a **4-hour cap**. Last cycle leaked 12 hours and killed close rate.

Open this page: \`/canvas/demo\`
`

export const DEMO_HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Claude artifact demo</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, sans-serif; margin: 0; background: #0f1115; color: #e8e8e8; }
    main { max-width: 720px; margin: 0 auto; padding: 32px 20px; }
    h1 { font-size: 28px; letter-spacing: -0.03em; }
    .row { display: flex; gap: 12px; margin: 20px 0; }
    .card { flex: 1; background: #1a1d24; border: 1px solid #2a2e38; border-radius: 10px; padding: 14px; }
    .n { font-size: 26px; font-weight: 650; }
    p { color: #a8adb8; line-height: 1.5; }
    .tag { display: inline-block; font-size: 11px; padding: 3px 8px; border-radius: 999px; background: #243044; color: #8cb4ff; }
  </style>
</head>
<body>
  <main>
    <span class="tag">SYNTHETIC HTML ARTIFACT</span>
    <h1>Weekly agent report</h1>
    <p>This is the kind of file Claude / ChatGPT export as HTML. Teammates can't open it from Slack. Drop it here and send a short link.</p>
    <div class="row">
      <div class="card"><div class="n">37</div>Tasks closed</div>
      <div class="card"><div class="n">4.1h</div>Median cycle</div>
      <div class="card"><div class="n">2</div>Sev-2 leftovers</div>
    </div>
    <p>Not real metrics. Demo only — brianmunene.me/canvas/demo</p>
  </main>
</body>
</html>
`

export const DEMO_JSON = `{
  "title": "Synthetic agent payload",
  "kind": "demo",
  "not_real": true,
  "ask": "Show teammates a JSON dump without Slack eating the braces",
  "metrics": {
    "tasks_closed": 37,
    "median_cycle_hours": 4.1,
    "sev2_leftovers": 2
  },
  "next": "https://brianmunene.me/canvas"
}
`
