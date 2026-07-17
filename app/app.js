import { PACKS, HABITS } from "./habits.js";

const deck = document.getElementById("deck");
const chips = document.getElementById("chips");
const posEl = document.getElementById("pos");
const barEl = document.getElementById("bar");
const adoptedEl = document.getElementById("adoptedCount");

const packOf = Object.fromEntries(PACKS.map((p) => [p.key, p]));
const adopted = new Set(JSON.parse(localStorage.getItem("adopted") || "[]"));
let filter = "all";
let visible = [];

const pad = (n) => String(n).padStart(3, "0");
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

function renderChips() {
  const all = [{ key: "all", label: "All 100", color: "#e8825a" }, ...PACKS];
  chips.innerHTML = all
    .map(
      (p) =>
        `<button class="chip" style="--c:${p.color}" data-key="${p.key}"
           aria-pressed="${p.key === filter}">${p.label}</button>`,
    )
    .join("");
  chips
    .querySelector('[aria-pressed="true"]')
    ?.scrollIntoView({ inline: "center", block: "nearest" });
}

function cardHTML(h, i) {
  const pack = packOf[h.p];
  const id = HABITS.indexOf(h) + 1;
  return `
  <section class="slide" data-i="${i}">
    <article class="card ${adopted.has(id) ? "is-adopted" : ""}" style="--c:${pack.color}" data-id="${id}">
      <span class="num" aria-hidden="true">${pad(id)}</span>
      <span class="pill">${esc(pack.label)}</span>
      <h2>${esc(h.t)}</h2>
      <p>${esc(h.b)}</p>
      ${h.try ? `<code class="try">${esc(h.try)}</code>` : ""}
      <button class="adopt">${adopted.has(id) ? "✓ my habit" : "I do this"}</button>
    </article>
  </section>`;
}

function render() {
  visible = filter === "all" ? HABITS : HABITS.filter((h) => h.p === filter);
  const cover =
    filter === "all"
      ? `<section class="slide cover">
           <div class="card">
             <span class="mark">✳</span>
             <h1>Claude <em>Habits</em></h1>
             <p class="sub">A playbook you can start tomorrow. Scroll the deck. Steal what works. Tap the ones you already live by.</p>
             <span class="meta">100 HABITS · 10 PACKS · 1 REPO</span>
             <span class="hint">↓ scroll</span>
           </div>
         </section>`
      : "";
  deck.innerHTML =
    cover +
    visible.map(cardHTML).join("") +
    (visible.length
      ? ""
      : `<section class="slide"><p class="empty">nothing here yet</p></section>`);
  deck.scrollTop = 0;
  updatePos();
  updateAdopted();
}

function updatePos() {
  const slides = deck.querySelectorAll(".slide[data-i]");
  const h = deck.clientHeight || 1;
  const idx = Math.round(deck.scrollTop / h);
  const cur = deck.children[idx]?.dataset.i;
  posEl.innerHTML = `${pad(cur === undefined ? 0 : +cur + 1)}<i>/${pad(slides.length)}</i>`;
  const max = deck.scrollHeight - h;
  barEl.style.width = max > 0 ? `${(deck.scrollTop / max) * 100}%` : "0";
}

function updateAdopted() {
  adoptedEl.textContent = `${adopted.size} adopted`;
}

chips.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  filter = chip.dataset.key;
  renderChips();
  render();
});

deck.addEventListener("click", (e) => {
  const btn = e.target.closest(".adopt");
  if (!btn) return;
  const card = btn.closest(".card");
  const id = +card.dataset.id;
  adopted.has(id) ? adopted.delete(id) : adopted.add(id);
  localStorage.setItem("adopted", JSON.stringify([...adopted]));
  card.classList.toggle("is-adopted", adopted.has(id));
  btn.textContent = adopted.has(id) ? "✓ my habit" : "I do this";
  updateAdopted();
});

deck.addEventListener("scroll", updatePos, { passive: true });

document.addEventListener("keydown", (e) => {
  if (e.target.closest("input, textarea")) return;
  const step = { ArrowDown: 1, j: 1, ArrowUp: -1, k: -1 }[e.key];
  if (!step) return;
  e.preventDefault();
  deck.scrollBy({ top: step * deck.clientHeight, behavior: "smooth" });
});

document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  deck.scrollTo({ top: 0, behavior: "smooth" });
});

renderChips();
render();
