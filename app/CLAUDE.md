# app/ — the card deck

Nested CLAUDE.md: these rules apply only when working in `app/`.

## Conventions

- Zero dependencies. No frameworks, no CDN scripts, no npm packages at runtime.
- All design tokens (colors, fonts, sizes) are CSS custom properties at the top of `styles.css`. Never hard-code a color in a rule — add a token.
- Pack colors live in `habits.js` (`PACKS`), one distinct hue per pack.
- All rendered strings go through `esc()` in `app.js`.

## Habits data (`habits.js`)

- Exactly 100 habits, exactly 10 per pack — `node --test` enforces this. To add a habit, replace a weaker one in the same pack.
- Card shape: `{ p: packKey, t: title, b: body, try?: command }`
  - `t` ≤ 6 words, imperative. `b` 1–2 sentences, plain voice, no hype. `try` only when there's a real command or prompt to run.

## UX invariants

- Must work down to 360px wide and with keyboard only (arrows / j / k).
- Respect `prefers-reduced-motion`.
- Adopted state persists in `localStorage` under key `adopted`.
