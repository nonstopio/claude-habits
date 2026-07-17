---
name: add-habit
description: Add or replace a habit card in the Claude Habits deck. Use when the user wants a new habit, card, or tip added to the app, or wants an existing one reworded or replaced.
---

# Add a habit card

The deck is fixed at 100 habits, 10 per pack (`node --test` enforces it). Adding a habit means **replacing the weakest card in its pack**.

## Steps

1. Read `app/CLAUDE.md` for the card shape and voice rules.
2. Pick the pack (`p`) from `PACKS` in `app/habits.js`. If the user didn't say, choose the best fit and tell them.
3. Draft the card:
   - `t`: ≤ 6 words, imperative ("Pipe logs to a file")
   - `b`: 1–2 sentences, plain voice, no hype, no emoji
   - `try`: only if there's a real command/prompt to run — otherwise omit
4. Show the user the pack's 10 current titles, propose which one to replace and why.
5. Replace it in `app/habits.js`, keeping the pack's cards grouped together.
6. Run `node --test` — counts must still pass.
