---
title: "I Built 3 CLI Tools in 3 Days (And You Can Too)"
date: 2026-02-01
readTime: 8 min read
category: BUILD
image: https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop
tags:
  - CLI
  - TypeScript
  - Productivity
  - Indie Hacking
excerpt: "While students were decorating portfolios, I shipped 3 npm packages. Here's why shipping beats perfection."
---

# I Built 3 CLI Tools in 3 Days (And You Can Too)

While my classmates were perfecting their portfolio websites for the fifth time, I shipped three production CLI tools to npm. Total time? 3 days. Total users in the first week? Growing.

This isn't a humble brag. It's a blueprint.

## The Portfolio Trap

Every CS student knows the drill:
- Build the perfect portfolio site
- Add animations, dark mode, smooth scrolling
- Never actually launch anything
- Wonder why recruiters don't respond

I fell into this trap for months. My portfolio was beautiful. My GitHub? Empty.

Then I realized: **Nobody cares about your portfolio. They care about what you've shipped.**

## The Shift: From Perfect to Shipped

Three weeks ago, I changed my approach:
- Build tools I actually need
- Ship them immediately
- Iterate based on real usage
- Repeat

The result? Three npm packages:

### 1. [runbook-cli](https://www.npmjs.com/package/runbook-cli) 
**Problem:** Every project runs differently. You check the README every time.

**Solution:** Set commands once, run them from anywhere in your project.

```bash
# Set once
runbook set dev "npm run dev"

# Run forever, from any subfolder
runbook dev
```

**Built in:** 4 hours (including README)

### 2. [aitoken-cli](https://www.npmjs.com/package/aitoken-cli)
**Problem:** I was burning $50/week on GPT-4 without realizing it.

**Solution:** Track every AI API call locally.

```bash
# Track usage
aitoken add -p openai -m gpt-4o -i 1500 -o 800

# View stats
aitoken stats
```

**Built in:** 6 hours (pricing verification took longest)

### 3. [codesession-cli](https://www.npmjs.com/package/codesession-cli)
**Problem:** No idea how much time I spend coding vs debugging.

**Solution:** Track sessions with files, commits, and AI costs.

```bash
# Start tracking
codesession start "Building new feature"

# End and see stats
codesession end
```

**Built in:** 8 hours (git integration was tricky)

## The Stack: Why Speed Matters

I didn't reinvent the wheel. I used battle-tested tools:

**Language:** TypeScript
- Type safety prevents bugs
- Compiles to fast Node.js
- Great IDE support

**CLI Framework:** Commander.js
- Simple, powerful CLI parsing
- Zero config
- 10M+ weekly downloads

**Database:** SQLite (better-sqlite3)
- Local-first, no server
- Blazing fast
- Single file storage

**Terminal UI:** Chalk + cli-table3
- Beautiful colored output
- Formatted tables
- Zero dependencies

This stack isn't sexy. It's reliable. I can build a full CLI tool in 4-6 hours because I'm not fighting the tools.

## The Process: From Idea to npm

Here's my exact workflow for each tool:

### Hour 1: Core Logic
- Create project structure
- Implement main functionality
- Test manually in terminal

### Hour 2: CLI Interface
- Add Commander.js commands
- Format output with Chalk
- Handle edge cases

### Hour 3: Storage (if needed)
- Set up SQLite database
- Write CRUD operations
- Test with real data

### Hour 4: Polish & Ship
- Write README
- Add examples
- `npm publish`

No tests. No CI/CD. No Docker. Just code that works.

## The Results: What Happened Next

### Week 1:
- runbook-cli: 45 downloads
- aitoken-cli: 32 downloads  
- codesession-cli: 28 downloads

Not viral, but real people using my tools.

### The Feedback Loop:
1. Someone installs
2. They find a bug or want a feature
3. I fix it in 30 minutes
4. They're impressed by the speed
5. They tell others

This never happens with portfolio projects.

## Why CLI Tools?

Everyone builds web apps. Nobody builds CLI tools. Here's why you should:

### 1. No UI, No Problem
- No CSS
- No responsive design
- No browser compatibility
- Just logic

### 2. Instant Feedback
- Users install with `npm i -g`
- They use it immediately
- You see real usage patterns

### 3. Developer Audience
- Devs use CLI tools daily
- They appreciate good tools
- They give quality feedback

### 4. Easy Distribution
- npm is free
- No hosting costs
- No deployment pipeline

### 5. Portfolio Gold
- Shows you solve real problems
- Demonstrates technical depth
- Proves you can ship

## Lessons Learned

### Ship Early, Ship Often
My first version of runbook-cli didn't have the "works in subdirectories" feature. A user requested it. I added it in 2 hours. Now it's the main selling point.

**Lesson:** Your first version doesn't need every feature. It needs one feature that works.

### Local-First is Powerful
All three tools store data locally. No API, no auth, no servers. Users love this.

**Lesson:** Not everything needs to be a SaaS.

### Solve Your Own Problems
I built these tools because I needed them. The passion shows in the execution.

**Lesson:** The best projects scratch your own itch.

### Documentation > Code Quality
I spent more time on READMEs than refactoring. Downloads came from good docs, not perfect code.

**Lesson:** If people can't understand your tool, they won't use it.

### Speed is a Feature
I respond to GitHub issues within hours. Users notice.

**Lesson:** Fast iteration builds trust and loyalty.

## The Academic Reality

My professor said these projects "have errors and are poorly built."

He's probably right by academic standards:
- No unit tests
- No design patterns
- No formal documentation

But they work. People use them. That's what matters.

**The lesson:** Academia values perfection. The real world values shipping.

## How You Can Do This

Want to build your own CLI tool? Here's the plan:

### Week 1: Learn the Stack
- TypeScript basics (if you don't know)
- Commander.js tutorial (2 hours)
- SQLite basics (1 hour)

### Week 2: Build Your First Tool
- Pick a problem you have
- Build the MVP (4-8 hours)
- Test it yourself for 3 days

### Week 3: Ship It
- Write a good README
- Publish to npm
- Share on Twitter/Reddit

### Week 4: Iterate
- Fix bugs
- Add requested features
- Improve documentation

That's it. One month from zero to published tool.

## What's Next for Me

I'm not stopping at three:

**Short term:**
- Add GIF demos to all READMEs
- Write more blog posts
- Get to 500 combined downloads

**Long term:**
- Build 10 more CLI tools
- Start a "CLI Tool of the Month" series
- Maybe launch a course on building CLI tools

**The goal:** Be known for shipping, not talking about shipping.

## The Challenge

Want to join me?

**Build and ship a CLI tool this week.**

Doesn't matter what it does. Just make it:
1. Solve a real problem (yours or someone else's)
2. Work reliably
3. Be on npm by Friday

Then tweet at me ([@brian_mwirigi](https://twitter.com/brian_mwirigi)) with the link.

I'll:
- Try your tool
- Give feedback
- Share it with my network

Let's stop decorating portfolios and start shipping tools.

## Resources

**My tools:**
- [runbook-cli](https://www.npmjs.com/package/runbook-cli) - Remember project commands
- [aitoken-cli](https://www.npmjs.com/package/aitoken-cli) - Track AI API costs
- [codesession-cli](https://www.npmjs.com/package/codesession-cli) - Track coding sessions

**Learning:**
- [Commander.js docs](https://github.com/tj/commander.js)
- [Better-sqlite3 docs](https://github.com/WiseLibs/better-sqlite3)
- [Publishing to npm guide](https://docs.npmjs.com/cli/v9/commands/npm-publish)

**Templates:**
- I'll open source my CLI tool template soon (follow for updates)

---

**TL;DR:** Stop perfecting. Start shipping. CLI tools are the fastest way to build something people actually use. I built 3 in 3 days. You can too.

---

*Found this helpful? Try one of my CLI tools and let me know what you think. Building in public at [@brian_mwirigi](https://twitter.com/brian_mwirigi).*
