---
name: new-component
description: Scaffold a new UI feature or component for the card deck app following house conventions. Use when the user asks to add a UI element, widget, control, or visual feature to the app.
---

# New UI component

This app is vanilla JS — a "component" is a render function + a CSS block + an event listener. No files are added; the three existing files each grow a small, clearly-marked section.

## Conventions (non-negotiable)

- Markup: template literal in a `xxxHTML()` function in `app.js`, all dynamic strings through `esc()`
- Style: one commented block in `styles.css` (`/* ── component name ── */`), colors only via tokens (`var(--…)`)
- Behavior: one delegated listener on the nearest stable ancestor — never per-element listeners
- State: module-level `let`/`Set` + `localStorage` if it must persist
- Must work at 360px wide, keyboard-only, and with `prefers-reduced-motion`

## Steps

1. Read `app/CLAUDE.md` and skim `app.js` — reuse `render()`/`updatePos()` patterns.
2. Add the render function, CSS block, and listener.
3. Verify: `python3 -m http.server -d app 8000`, check mobile width and keyboard.
4. Run `node --test`.
