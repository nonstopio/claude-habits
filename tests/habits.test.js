import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { PACKS, HABITS } from "../app/habits.js";

describe("habits data", () => {
  it("has exactly 100 habits", () => {
    assert.equal(HABITS.length, 100);
  });

  it("has exactly 10 habits in each of the 10 packs", () => {
    assert.equal(PACKS.length, 10);
    for (const pack of PACKS) {
      const count = HABITS.filter((h) => h.p === pack.key).length;
      assert.equal(count, 10, `pack "${pack.key}" has ${count} habits`);
    }
  });

  it("every habit belongs to a known pack and has title + body", () => {
    const keys = new Set(PACKS.map((p) => p.key));
    for (const h of HABITS) {
      assert.ok(keys.has(h.p), `unknown pack "${h.p}" on "${h.t}"`);
      assert.ok(h.t?.length > 0 && h.b?.length > 0, `empty card in "${h.p}"`);
    }
  });

  it("titles are unique", () => {
    const titles = HABITS.map((h) => h.t);
    assert.equal(new Set(titles).size, titles.length);
  });

  it("pack colors are distinct valid hex", () => {
    const colors = PACKS.map((p) => p.color);
    assert.equal(new Set(colors).size, colors.length);
    for (const c of colors) assert.match(c, /^#[0-9A-Fa-f]{6}$/);
  });
});
