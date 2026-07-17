# ✳ Claude Habits

**A playbook you can start tomorrow.** 100 habits for working with Claude Code, served as a scrollable card deck — and a repo that _practices_ every habit it preaches. Steal the whole setup.

Companion repo for the "Claude Habits" session by [Ajay Kumar](https://github.com/ProjectAJ14) · NonStop io.

## The app

A zero-dependency, no-build single-page app in [`app/`](app/): 100 habit cards in 10 packs (models, planning, CLAUDE.md, skills, hooks, agents, context, MCP, git, guardrails). Scroll the deck, filter by pack, tap **"I do this"** to track the habits you've adopted (persists locally). Works on your phone and your laptop.

```bash
npm start        # serves app/ at http://localhost:8000
npm test         # data invariants: 100 habits, 10 per pack
```

Push to `main` and GitHub Actions tests + deploys it to GitHub Pages — no build step, no bundler.

## Steal this setup

Everything from the session lives here, wired and working:

| Session slide                            | Where it lives                                                                | What it shows                                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| CLAUDE.md — lean root, nested per folder | [`CLAUDE.md`](CLAUDE.md), [`app/CLAUDE.md`](app/CLAUDE.md)                    | Facts Claude always needs vs. folder-local rules                                                          |
| Skills — repeated workflows as playbooks | [`.claude/skills/`](.claude/skills/)                                          | `new-component`, `write-tests`, `commit-and-pr`, `review-checklist`, `add-habit`                          |
| Hooks — guidance Claude can't skip       | [`.claude/hooks/`](.claude/hooks/) + [`settings.json`](.claude/settings.json) | PreToolUse blocks `.env` reads · PostToolUse formats every edit · Stop blocks "done" with debug leftovers |
| Agents — delegate to specialists         | [`.claude/agents/`](.claude/agents/)                                          | `codebase-explorer`, `code-reviewer`, `test-fixer`, `release-agent` (reads CI runs via `gh`)              |
| MCP — reach the outside world            | [`.mcp.json`](.mcp.json)                                                      | Project-scoped GitHub connection, shared via git                                                          |
| The pipeline the release agent watches   | [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)                | test → deploy → Pages                                                                                     |

Try them after cloning:

```bash
claude
> where is the adopted state persisted?        # → codebase-explorer agent
> add a habit about writing better prompts     # → add-habit skill
> read my .env file                            # → blocked by the PreToolUse hook
> did the deploy go out?                       # → release-agent checks gh run list
```

## Publish your own copy

1. Fork/clone, push to GitHub.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Push to `main`. The [deploy workflow](.github/workflows/deploy.yml) does the rest.

## Further reading

- [andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) — a community distillation of Andrej Karpathy's observations on LLM coding pitfalls into a single CLAUDE.md (note: community-made, not by Karpathy himself). Good ideas — and a live example of a Guardrails habit from the deck: read third-party skills before you adopt them; stars are popularity, not a security review.

## License

MIT — see [LICENSE](LICENSE).
