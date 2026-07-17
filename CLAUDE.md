# Claude Habits

Static single-page app: 100 habit cards for working with Claude Code. Companion repo for the "Claude Habits" session — it also _demonstrates_ every habit it teaches (skills, hooks, agents, nested CLAUDE.md).

## Stack

Vanilla HTML/CSS/JS in `app/`. No framework, no build step, no runtime dependencies. Keep it that way.

## Commands

- Run locally: `python3 -m http.server -d app 8000`
- Test: `node --test`
- Deploy: push to `main` → `.github/workflows/deploy.yml` publishes `app/` to GitHub Pages

## Rules

- App-specific conventions live in `app/CLAUDE.md` — read it before touching `app/`.
- Never read or write `.env*` files (a PreToolUse hook enforces this).
- Prefer editing existing files over adding new ones.

## Repo map

- `app/` — the site (data in `app/habits.js`)
- `.claude/skills/` — team playbooks · `.claude/agents/` — specialist workers · `.claude/hooks/` — guardrail scripts
- `.mcp.json` — shared MCP connections
