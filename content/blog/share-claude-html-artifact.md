---
title: "How to Share a Claude or ChatGPT HTML Artifact"
date: 2026-09-12
readTime: 3 min read
category: BUILD
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop
tags:
  - Claude
  - ChatGPT
  - HTML
  - Developer Tools
excerpt: "Claude and ChatGPT export HTML. Slack cannot open it. Drop the file, get a short link teammates can actually view."
---

**The problem:** The model builds a dashboard, a one-pager, a mermaid-heavy brief. You download HTML. You paste it in Slack. Nobody can open it. Same failure mode as a Cursor `.canvas.tsx`.

**The fix:** [brianmunene.me/canvas](https://brianmunene.me/canvas)

Drop the `.html` (or paste the source). Preview in a sandboxed iframe. Copy `https://brianmunene.me/canvas/xxxx`.

Markdown with ```` ```mermaid ```` blocks and raw JSON dumps work on the same page.

## 30 seconds

1. Export or copy the artifact from Claude / ChatGPT / Cursor
2. Open [the viewer](https://brianmunene.me/canvas)
3. Drop the file → **Copy short link**

Synthetic HTML + mermaid demos (no real work files): [brianmunene.me/canvas/demo](https://brianmunene.me/canvas/demo)

## CLI

```bash
npx --yes github:brian-mwirigi/canvas-share report.html
```

## Privacy

The store is private. The URL is not. Treat the link like a secret. Do not put tokens in the file. HTML cannot touch the parent page (sandbox, no same-origin).

## Related

[Share a Cursor canvas](/blog/share-cursor-canvas-online)
