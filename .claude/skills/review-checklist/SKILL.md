---
name: review-checklist
description: Review a diff against the team's checklist. Use when the user asks for a code review, diff review, or pre-merge check.
---

# Review checklist

Review the diff (`git diff main...` or the given PR) against exactly this list. One line per finding: `file:line — problem — fix`. No essays.

## The list

1. **Escaping** — every string rendered into HTML goes through `esc()`. Any raw interpolation into `innerHTML` is a blocker.
2. **Tokens** — no hard-coded colors/fonts in CSS; must use `var(--…)` tokens.
3. **Data invariants** — habits still 100 total, 10 per pack, card shape respected (`node --test` must pass).
4. **Dependencies** — diff adds no npm package, CDN script, or build step. Any new dependency is a blocker.
5. **Mobile & keyboard** — new UI works at 360px and via arrows/j/k; interactive elements are real `<button>`s.
6. **Motion** — new animation respects `prefers-reduced-motion`.
7. **Leftovers** — no `console.log`, `debugger`, commented-out code, or TODO without an owner.
8. **Voice** — new card copy matches house voice (short, imperative, no hype).

Finish with a verdict: **merge**, **merge after nits**, or **blocked**.
