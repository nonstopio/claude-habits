---
name: commit-and-pr
description: Commit and open pull requests following team conventions. Use when the user asks to commit, push, or open a PR.
---

# Commit & PR

## Commit format

```
<type>: <imperative summary ≤ 50 chars>
```

Types: `feat`, `fix`, `content` (habit card changes), `chore`, `docs`, `ci`.

- One logical change per commit — split unrelated edits.
- Body only when the _why_ isn't obvious from the diff.
- Run `git diff` and `node --test` before committing. Never `git add -A` blind — stage named paths.

## PR format

- Branch: `feat/…`, `fix/…`, `content/…` — never commit straight to `main` (it auto-deploys).
- Title = commit style. Body sections: **What**, **Why**, **How verified** (paste the test output or say what you clicked).
- Open with `gh pr create`. After opening, mention that merge → main → auto-deploy to Pages.
