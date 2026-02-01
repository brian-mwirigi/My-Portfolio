---
title: "How I Track Every Dollar I Spend on AI APIs"
date: "February 1, 2026"
author: "Brian Mwirigi"
tags: ["AI", "Cost Tracking", "GPT-4", "Claude", "Developer Tools"]
excerpt: "I was burning $50/week on GPT-4 without realizing it. Built a CLI tool in one night to fix it."
---

# How I Track Every Dollar I Spend on AI APIs

**The shock:** I checked my OpenAI billing last month. $217.

**The problem:** I had no idea where it went.

**The solution:** I built [aitoken-cli](https://www.npmjs.com/package/aitoken-cli) in 6 hours. Now I track every cent.

## The Hidden Cost of AI Development

If you're a developer in 2026, you're using AI APIs. GPT-4, Claude, Gemini – they're essential tools.

But here's what nobody tells you: **The costs creep up silently.**

### My Wake-Up Call

December 2025:
- Week 1: $12 (seems fine)
- Week 2: $28 (okay, working on a project)
- Week 3: $51 (wait, what?)
- Week 4: $126 (WTF?!)

**Total: $217**

I was a broke CS student burning $217/month on AI. Something had to change.

## Why Existing Solutions Failed

You'd think tracking API costs is solved, right? Wrong.

### Option 1: OpenAI Dashboard
- Shows totals only
- No breakdown by task
- No comparison across providers
- Have to log in every time

### Option 2: Spreadsheets
- Manual entry (I forgot constantly)
- No automatic cost calculation
- Boring, I never kept it updated

### Option 3: Existing npm packages
- Too complex (need servers, databases)
- Privacy concerns (send data to cloud)
- Not comprehensive (OpenAI only)

**The gap:** I needed something local, fast, and comprehensive.

## Building aitoken-cli: The Origin Story

**Friday night, 9 PM:** Just got my $217 bill. Angry.

**Friday night, 11 PM:** Sketched the design:
```
at add -p openai -m gpt-4o -i 1000 -o 500
at stats
```

**Saturday, 3 AM:** First version working. Tracking OpenAI only.

**Saturday, 9 AM:** Added Anthropic, Google, Azure, Cohere.

**Saturday, 2 PM:** Published to npm.

**Total time:** 6 hours (including 2 hours verifying pricing).

## How It Works

### The Core Idea
Track three things:
1. **Provider & Model** (OpenAI GPT-4, Anthropic Claude, etc.)
2. **Token counts** (input + output)
3. **Timestamp** (when you used it)

Calculate cost automatically using up-to-date pricing.

### The Implementation

**Tech stack:**
- TypeScript (type safety for pricing data)
- Commander.js (CLI framework)
- SQLite (local database)
- Chalk (pretty terminal output)

**Database schema:**
```sql
CREATE TABLE usage (
  id INTEGER PRIMARY KEY,
  provider TEXT NOT NULL,
  model TEXT NOT NULL,
  prompt_tokens INTEGER NOT NULL,
  completion_tokens INTEGER NOT NULL,
  total_tokens INTEGER NOT NULL,
  cost REAL NOT NULL,
  timestamp TEXT NOT NULL,
  notes TEXT
);
```

Simple. Effective. Local.

### The Pricing Challenge

Here's what took 2 hours: **Verifying pricing for every model.**

AI pricing changes constantly. I had to:
1. Check official API docs (OpenAI, Anthropic, Google)
2. Convert per-token prices to dollars
3. Verify input vs output pricing
4. Handle special cases (image tokens, audio)

**Example: GPT-4o (as of Feb 2026)**
- Input: $0.0025 per 1K tokens
- Output: $0.01 per 1K tokens

**Example: Claude 4.5 (as of Feb 2026)**
- Input: $3 per 1M tokens ($0.003 per 1K)
- Output: $15 per 1M tokens ($0.015 per 1K)

One wrong decimal? Your costs are off by 10x. I triple-checked everything.

## Using aitoken-cli: Real Workflow

### Integration with OpenAI
```javascript
// In your code
const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: messages
});

// Track immediately
const { prompt_tokens, completion_tokens } = response.usage;
exec(`at add -p openai -m gpt-4o -i ${prompt_tokens} -o ${completion_tokens}`);
```

### Integration with Anthropic
```javascript
const response = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  messages: messages
});

// Track
exec(`at add -p anthropic -m claude-3.5-sonnet -i ${response.usage.input_tokens} -o ${response.usage.output_tokens} -n "Code review"`);
```

### Quick Manual Entry
```bash
# Just used GPT-4 in ChatGPT? Track it:
at add -p openai -m gpt-4o -i 1500 -o 800

# Output:
# ✓ Added usage #47 - openai/gpt-4o - $0.0118
```

### View Stats
```bash
at stats

# Output:
# Total Usage: $34.56 (245,890 tokens)
# 
# By Provider:
# OpenAI:    $21.34 (150,000 tokens)
# Anthropic: $11.22 (85,000 tokens)
# Google:    $2.00  (10,890 tokens)
```

### Today's Usage
```bash
at today

# Output:
# Today's Usage: $4.23 (15,670 tokens)
# 
# Latest entries:
# 10:15 AM - gpt-4o     - $1.52 (5,000 tokens)
# 11:30 AM - claude-3.5 - $2.71 (10,670 tokens)
```

## The Impact: Real Savings

### Before aitoken-cli (December 2025):
- **Monthly cost:** $217
- **Awareness:** Zero
- **Optimization:** None

### After aitoken-cli (January 2026):
- **Monthly cost:** $89
- **Awareness:** 100%
- **Optimization:** Switched models, batched requests

**Savings: $128/month (59% reduction)**

### How I Optimized

**Discovery 1:** GPT-4 for everything was wasteful
- **Fix:** Use GPT-3.5 Turbo for simple tasks
- **Savings:** $40/month

**Discovery 2:** Long prompts every time
- **Fix:** Cache system prompts, send only deltas
- **Savings:** $30/month

**Discovery 3:** Claude 3.5 Sonnet was often better and cheaper than GPT-4
- **Fix:** Default to Claude for coding tasks
- **Savings:** $35/month

**Discovery 4:** I was making redundant calls
- **Fix:** Added request deduplication
- **Savings:** $23/month

**None of this was possible without tracking.**

## Privacy: Why Local Matters

aitoken-cli stores everything locally in `~/.aitoken/usage.db`.

**No cloud. No API. No tracking.**

Why does this matter?

1. **Your usage patterns are private:** Nobody knows what you're building
2. **Your prompts stay secret:** (if you add notes)
3. **Works offline:** No internet? Still tracks
4. **Fast:** No network latency
5. **Free forever:** No subscription, no server costs

This was a conscious choice. Your AI usage is your business.

## Real User Stories

### From @dev_alex on Twitter:
> "Used to pay $300+/month on AI. aitoken-cli showed me I was using GPT-4 for string formatting. Now $90/month. Thank you!"

### From Reddit r/MachineLearning:
> "Finally understand where my research budget goes. This tool is essential."

### From @startup_sarah:
> "Integrated into our CI/CD. Now we know exactly how much AI costs per deploy. Game changer for budgeting."

## Lessons from Building This

### 1. Solve Your Own Problem
I built this because I was bleeding money. That authentic pain made the tool better.

### 2. Local-First is Powerful
No server = no complexity. Just SQLite and done.

### 3. Pricing Data is Hard
Took 33% of development time just verifying prices. Worth it.

### 4. CLI Tools Get Adopted Fast
Developers trust CLI tools more than web apps. Lower friction.

### 5. Open Source Builds Trust
[GitHub repo](https://github.com/brian-mwirigi/aitoken-cli) has the full pricing data. Users can verify and contribute.

## What's Next for aitoken-cli

**Coming soon:**
- [ ] Budget alerts (warn when you hit $X)
- [ ] Model recommendations (suggest cheaper alternatives)
- [ ] Export to CSV for accounting
- [ ] Team usage tracking (combine across devs)
- [ ] API for programmatic access

**Want a feature?** [Open an issue](https://github.com/brian-mwirigi/aitoken-cli/issues)

## The Bigger Picture: Cost-Aware AI Development

We're in the age of AI-powered development. But AI isn't free.

**The trend I'm seeing:**
- More devs using AI daily
- Costs rising as models improve
- No awareness until the bill comes

**The shift that's needed:**
- Cost tracking as default practice
- Model selection based on price/performance
- Budget-conscious AI usage

aitoken-cli is my contribution to this shift.

## Try It Yourself

### Install
```bash
npm install -g aitoken-cli
```

### Track Your First Usage
```bash
at add -p openai -m gpt-4o -i 1000 -o 500
```

### See Your Stats
```bash
at stats
```

### Challenge
Track your AI usage for one week. I bet you'll be surprised.

Tweet your results with #aitokencli – I'll retweet the most interesting findings.

## Resources

**aitoken-cli:**
- [npm package](https://www.npmjs.com/package/aitoken-cli)
- [GitHub repo](https://github.com/brian-mwirigi/aitoken-cli)
- [Pricing verification docs](https://github.com/brian-mwirigi/aitoken-cli/blob/main/VERIFICATION.md)

**API Pricing (verified Feb 2026):**
- [OpenAI Pricing](https://openai.com/api/pricing/)
- [Anthropic Pricing](https://www.anthropic.com/pricing)
- [Google AI Pricing](https://ai.google.dev/pricing)

**Other tools I built:**
- [runbook-cli](https://www.npmjs.com/package/runbook-cli) - Remember project commands
- [codesession-cli](https://www.npmjs.com/package/codesession-cli) - Track coding sessions

---

**TL;DR:** I was burning $217/month on AI without tracking. Built aitoken-cli to track every API call locally. Now spending $89/month (59% savings). You should track too.

---

*Using AI APIs? Start tracking with `npm i -g aitoken-cli`. It's free, local, and takes 30 seconds to set up.*

*Follow my building journey at [@brian_mwirigi](https://twitter.com/brian_mwirigi)*
