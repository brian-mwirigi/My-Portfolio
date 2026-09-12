---
title: "How to Share a Cursor Canvas Online"
date: 2026-09-12
readTime: 4 min read
category: BUILD
image: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop
tags:
  - Cursor
  - canvas.tsx
  - Developer Tools
  - Open Source
excerpt: "Cursor canvases are local files. Teammates cannot open the path you pasted in Slack. Drop the .canvas.tsx, get a short link. HTML and mermaid work too."
---

**The problem:** Cursor writes a `.canvas.tsx` beside the chat. That file only renders inside Cursor. Slack, email, and Linear get a filename. Nobody else can open it.

**The fix:** [brianmunene.me/canvas](https://brianmunene.me/canvas) — drop the file, render it in the browser, copy a short link.

Same page also takes Claude/ChatGPT HTML artifacts, Markdown with mermaid, and JSON.

## 30 seconds

1. Open [the viewer](https://brianmunene.me/canvas)
2. Drop `something.canvas.tsx` (or paste source)
3. Hit **Copy short link** → `https://brianmunene.me/canvas/xxxx`

Preview synthetic demos first: [brianmunene.me/canvas/demo](https://brianmunene.me/canvas/demo)

## CLI

```bash
npx --yes github:brian-mwirigi/canvas-share path/to/review.canvas.tsx
```

Prints the same short URL. `.md`, `.html`, and `.json` work too.

## Embed

After you have a short link, **Copy embed** gives you an iframe at `/canvas/{id}?embed=1` for docs and Notion.

## Agent rule

If you use Cursor agents, add a project skill: when a canvas is finished, tell the human to upload it at `https://brianmunene.me/canvas` or run the npx command. Do not paste the whole file into chat as the share mechanism.

## Privacy

Short-link files sit in a **private** store and are only served through this site. Anyone with the URL can still view it. Treat the link like a password. Do not put secrets in a file you share. HTML runs in a sandboxed iframe.

## What it is not

Not a Cursor product. Not a gallery of other people's work. A renderer + short link so a local artifact can leave your machine.
