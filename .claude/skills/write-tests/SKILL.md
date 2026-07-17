---
name: write-tests
description: Write tests the house way for this repo. Use when the user asks for tests, coverage, or verification of app logic or the habits data.
---

# Write tests

## House style

- Runner: `node --test` (built-in `node:test`), zero dependencies. Do not add jest/vitest/mocha.
- Location: `tests/*.test.js`, ES modules.
- Import real modules (`app/habits.js`); never copy fixtures of real data into the test.
- One `describe` per subject, `assert` from `node:assert/strict`.
- Test invariants and behavior, not implementation: "10 habits per pack", not "array index 3 equals X".
- DOM code in `app.js` is verified by hand in the browser — don't bolt on a DOM emulator for it.

## Steps

1. Look at `tests/habits.test.js` for the existing pattern.
2. Add the smallest set of asserts that would fail if the logic broke.
3. Run `node --test` and show the output.
