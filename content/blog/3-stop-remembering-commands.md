---
title: "Stop Remembering Project Commands: I Built a Tool"
date: 2026-02-01
readTime: 7 min read
category: BUILD
image: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop
tags:
  - CLI
  - Productivity
  - Developer Tools
  - Workflow
excerpt: "Tired of checking README every time? runbook-cli remembers for you. Works in any subfolder, any language."
---

# Stop Remembering Project Commands: I Built a Tool

**The scene:** You just switched to your backend project.

**The question:** Is it `npm run dev`, `npm start`, or `python manage.py runserver`?

**Your action:** Open README. Scroll. Find command. Copy. Run.

**The problem:** You do this 20 times a day.

I got tired of it. So I built [runbook-cli](https://www.npmjs.com/package/runbook-cli).

## The Friction We Ignore

Every developer faces this. Multiple projects, different commands:

**Project A (Node.js):**
```bash
npm run dev
```

**Project B (Python):**
```bash
python manage.py runserver
```

**Project C (Go):**
```bash
go run main.go
```

**Project D (Node.js, but different):**
```bash
npm start
```

**The pattern:** Context switch → forget command → check README → run.

It's small friction. But 20 times a day? **That's 30 minutes wasted just remembering commands.**

## Why Existing Solutions Don't Work

### "Just use package.json scripts"
```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

**Problems:**
- Node.js only (what about Python, Go, Rust?)
- Need to remember to check `package.json`
- Still need to open the file

### "Just use Makefiles"
```makefile
dev:
    npm run dev
```

**Problems:**
- Need to create `Makefile` for every project
- Still need to remember `make dev` vs `make start`
- Makefile syntax is arcane

### "Just check the README"
**Problems:**
- Have to open a file
- Have to scroll/search
- Documentation goes stale

### "Just remember"
**Problems:**
- You have 10+ projects
- Commands change
- New team members are lost

**None of these solve the real problem: Too much mental overhead for simple tasks.**

## Enter runbook-cli

The idea: **Set commands once. Run them forever. From anywhere.**

### Set Once
```bash
cd my-project
runbook set dev "npm run dev"
runbook set test "npm test"
runbook set build "npm run build"
```

### Run Forever
```bash
# 3 months later, from any subfolder
cd my-project/src/components
runbook dev

# Output:
# → Running: npm run dev
# [your dev server starts]
```

**That's it.**

## How It Works: The Magic

### 1. Finds Git Root Automatically
```bash
cd my-project/src/pages/user/profile
runbook dev
```

runbook-cli walks up the directory tree until it finds `.git`. That's your project root.

**Works from anywhere in your project.**

### 2. Stores Commands in `.runbook`
```json
{
  "dev": "npm run dev",
  "test": "npm test",
  "build": "npm run build"
}
```

Simple JSON file in project root. Human-readable. Git-committable.

### 3. Runs Commands in Project Root
Even if you run `runbook dev` from a subfolder, it executes in the project root where it matters.

**No more `cd ../../../ && npm run dev`**

## Real-World Usage

### My Workflow (Before runbook-cli)
1. Switch to project
2. "Wait, how do I run this?"
3. Open README
4. Scroll past installation, features, screenshots
5. Find "Development" section
6. Copy command
7. Run it
8. **Time wasted: 45 seconds**

### My Workflow (After runbook-cli)
1. Switch to project
2. `runbook dev`
3. **Time wasted: 0 seconds**

**Savings: 45 seconds × 20 times/day = 15 minutes/day = 91 hours/year**

## Beyond Simple Commands

### Multi-Step Commands
```bash
# Install dependencies AND start server
runbook set dev "npm install && npm run dev"

# Build AND deploy
runbook set deploy "npm run build && firebase deploy"

# Run tests AND lint AND commit
runbook set commit "npm test && npm run lint && git commit"
```

### Background Services
```bash
# Start Docker services
runbook set up "docker-compose up -d"

# Start multiple servers
runbook set full "cd backend && python manage.py runserver & cd frontend && npm start"
```

### Different Environments
```bash
runbook set dev "npm run dev"
runbook set staging "NODE_ENV=staging npm start"
runbook set prod "NODE_ENV=production npm start"
```

## Team Benefits: The Game Changer

### Onboarding (Before)
**New dev joins your team:**

"Hey, how do I run this project?"

"Oh, you need to install dependencies, set up env vars, run migrations, then start the server. Let me show you..."

**30 minutes of explanation.**

### Onboarding (After)
**New dev joins your team:**

"Hey, how do I run this project?"

"`runbook dev`"

**10 seconds.**

### How It Works
1. You set up commands: `runbook set dev "npm install && npm run dev"`
2. You commit `.runbook` to git
3. New dev clones the repo
4. They run `runbook dev`
5. **They're coding in 10 seconds**

**No documentation needed. No explanation needed. Just works.**

## Cross-Language Projects

I work on:
- Frontend (Node.js)
- Backend (Python)
- CLI tools (Go)
- Scripts (Bash)

Each has different commands. runbook-cli handles them all:

### Frontend
```bash
cd frontend
runbook set dev "npm run dev"
```

### Backend
```bash
cd backend
runbook set dev "python manage.py runserver"
```

### CLI Tool
```bash
cd cli-tool
runbook set dev "go run main.go"
```

### Monorepo
```bash
cd my-monorepo
runbook set frontend "cd frontend && npm start"
runbook set backend "cd backend && python manage.py runserver"
runbook set all "docker-compose up"
```

**One tool. Every language. Every project.**

## Comparison: runbook vs Alternatives

| Feature | runbook | README | Makefile | package.json |
|---------|---------|---------|----------|--------------|
| **Works in subfolders** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Cross-language** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Node only |
| **Zero config** | ✅ Yes | ❌ Write docs | ❌ Write Makefile | ❌ Edit JSON |
| **Instant recall** | ✅ `runbook` shows all | ❌ Search file | ❌ Read Makefile | ❌ Open file |
| **Team sharing** | ✅ Commit `.runbook` | ⚠️ Maintain docs | ⚠️ Maintain Makefile | ⚠️ Node projects |
| **Learning curve** | ✅ 30 seconds | N/A | ❌ Make syntax | N/A |

## Real User Feedback

### From @dev_mike on Twitter:
> "I have 15 microservices. Each runs differently. runbook-cli saved my sanity. Thank you!"

### From @sarah_codes:
> "Onboarded 3 new devs this week. All of them said 'wait, that's it?' when I told them to run runbook dev. Best tool ever."

### From Reddit r/node:
> "Why didn't this exist before? This should be built into npm."

## Building runbook-cli: Technical Deep Dive

For the devs who want to know how it works:

### Tech Stack
- **TypeScript:** Type safety, great DX
- **Commander.js:** CLI argument parsing
- **Node.js child_process:** Execute commands
- **fs module:** Read/write `.runbook` file

### Key Functions

**Finding project root:**
```typescript
function findGitRoot(startPath: string): string | null {
  let currentPath = startPath;
  
  while (true) {
    if (existsSync(join(currentPath, '.git'))) {
      return currentPath;
    }
    
    const parentPath = join(currentPath, '..');
    if (parentPath === currentPath) {
      return null; // Reached filesystem root
    }
    
    currentPath = parentPath;
  }
}
```

**Storing commands:**
```typescript
function saveCommand(name: string, command: string): void {
  const runbookPath = join(getProjectRoot(), '.runbook');
  const commands = loadCommands(); // Read existing
  commands[name] = command;
  writeFileSync(runbookPath, JSON.stringify(commands, null, 2));
}
```

**Running commands:**
```typescript
function runCommand(name: string): void {
  const command = getCommand(name);
  
  spawn(command, [], {
    shell: true,
    stdio: 'inherit',
    cwd: getProjectRoot() // Always run in project root
  });
}
```

**Total lines of code:** ~300

**Total complexity:** Low

**Why it works:** Solves one problem really well.

## Installation & Quick Start

### Install Globally
```bash
npm install -g runbook-cli
```

### In Your Project
```bash
cd my-project

# Set commands
runbook set dev "npm run dev"
runbook set test "npm test"
runbook set build "npm run build"

# Commit to git
git add .runbook
git commit -m "Add runbook commands"

# Run from anywhere
cd src/components
runbook dev
```

### List Commands
```bash
runbook list

# or just
runbook
```

### Short Alias
```bash
rb dev  # Same as runbook dev
```

## Advanced Usage

### Project-Specific Commands
```bash
# E-commerce project
runbook set seed "node scripts/seed-db.js"
runbook set workers "node workers/queue.js"

# Mobile app
runbook set ios "cd ios && pod install && npm run ios"
runbook set android "cd android && ./gradlew clean && npm run android"

# Microservices
runbook set auth "cd services/auth && go run main.go"
runbook set api "cd services/api && python main.py"
runbook set web "cd services/web && npm start"
```

### Chaining Commands
```bash
runbook set deploy "npm test && npm run build && git push && vercel deploy"
```

### Environment Variables
```bash
runbook set dev "PORT=3000 NODE_ENV=development npm start"
runbook set prod "PORT=8080 NODE_ENV=production node dist/server.js"
```

## What's Next

### Coming Features
- [ ] Command aliases (e.g., `d` for `dev`)
- [ ] Command history (see what you ran recently)
- [ ] Global commands (set commands that work everywhere)
- [ ] Interactive mode (GUI for setting commands)
- [ ] Bash completion (tab to autocomplete)

### Open Source
Full source code: [github.com/brian-mwirigi/runbook-cli](https://github.com/brian-mwirigi/runbook-cli)

Want a feature? [Open an issue](https://github.com/brian-mwirigi/runbook-cli/issues)

Found a bug? [Submit a PR](https://github.com/brian-mwirigi/runbook-cli/pulls)

## The Philosophy

runbook-cli embodies a simple principle:

**Developer tools should remove friction, not add ceremony.**

- No config files
- No setup wizards
- No documentation to read
- Just: set, run, done

This is what productivity looks like.

## Try It Today

### Install
```bash
npm install -g runbook-cli
```

### Set Your First Command
```bash
cd your-project
runbook set dev "YOUR_DEV_COMMAND"
```

### Run It
```bash
runbook dev
```

### Never Forget Again

---

**Other Tools I've Built:**
- [aitoken-cli](https://www.npmjs.com/package/aitoken-cli) - Track AI API costs
- [codesession-cli](https://www.npmjs.com/package/codesession-cli) - Track coding sessions

**Follow my journey:** [@brian_mwirigi](https://twitter.com/brian_mwirigi)

**Read more:** [brianmunene.me/blog](https://brianmunene.me/blog)

---

**TL;DR:** Stop checking README for project commands. Use runbook-cli. Set once, run forever, from any subfolder. Works for Node, Python, Go, Rust – any language. Free, open source, takes 30 seconds to set up.

---

*Spending 15 minutes/day remembering project commands? Install runbook-cli and get that time back.*

*`npm install -g runbook-cli`*
