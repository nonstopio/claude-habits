// 100 Claude habits — 10 packs × 10 habits. Keep it that way (see app/CLAUDE.md).
export const PACKS = [
  { key: "models", label: "Right Brain", color: "#A78BFA" },
  { key: "plan", label: "Plan First", color: "#6FA8FF" },
  { key: "claudemd", label: "CLAUDE.md", color: "#E8825A" },
  { key: "skills", label: "Skills", color: "#6ECF8E" },
  { key: "hooks", label: "Hooks", color: "#E7C24D" },
  { key: "agents", label: "Agents", color: "#E77BB2" },
  { key: "context", label: "Context", color: "#5BC8C4" },
  { key: "connect", label: "Connect", color: "#9BD35A" },
  { key: "git", label: "Git & Review", color: "#9DB2C9" },
  { key: "guard", label: "Guardrails", color: "#E06060" },
];

export const HABITS = [
  // ── Right Brain: pick the right model for each job ──────────────
  {
    p: "models",
    t: "Match the model to the task",
    b: "A button tweak doesn't need the biggest brain. Deep research or a gnarly refactor does. Choosing the model is step zero of every task.",
    try: "/model",
  },
  {
    p: "models",
    t: "Plan big, execute small",
    b: "Use the most capable model to produce the plan, then switch to a faster, cheaper model to execute it. Best output per token you'll ever get.",
  },
  {
    p: "models",
    t: "Switch mid-session",
    b: "You don't have to restart to change brains. Plan on one model, /model down, and keep the same conversation and context.",
    try: "/model sonnet",
  },
  {
    p: "models",
    t: "Escalate on failure, not by habit",
    b: "Default to the cheaper model. Upgrade when it actually struggles — not because the task feels important.",
  },
  {
    p: "models",
    t: "Small models for mechanical work",
    b: "Renames, boilerplate, log grepping, mass find-and-replace: a fast model does these just as well, at a fraction of the cost.",
  },
  {
    p: "models",
    t: "Cost = tokens × model",
    b: "A long session on the biggest model burns budget silently. Know roughly what an hour of each model costs your team.",
  },
  {
    p: "models",
    t: "One big shot beats five small retries",
    b: "If a smaller model failed twice at the same task, stop retrying. One attempt on a bigger model is cheaper than five failed ones.",
  },
  {
    p: "models",
    t: "Reasoning depth decides, not diff size",
    b: "A one-line fix in a concurrency bug needs a big brain. A 500-line boilerplate scaffold doesn't. Judge the thinking, not the typing.",
  },
  {
    p: "models",
    t: "A weak plan means upgrade the brain",
    b: "If the plan looks shallow or misses obvious files, don't argue with it — switch to a stronger model and re-plan.",
  },
  {
    p: "models",
    t: "Race two models once",
    b: "Run the same real task on two models and compare. Ten minutes of this teaches you more about their personalities than any benchmark.",
  },

  // ── Plan First: plan before you code ────────────────────────────
  {
    p: "plan",
    t: "Start non-trivial tasks in plan mode",
    b: "Random prompt → half a job → retrain → repeat. Plan mode breaks the loop: Claude proposes, you approve, then it executes.",
    try: "shift+tab twice → plan mode",
  },
  {
    p: "plan",
    t: "Read the plan like a PR",
    b: "The plan is your review of intent before any diff exists. Which files, what changes, what stays untouched — verify all of it.",
  },
  {
    p: "plan",
    t: "Iterate on the plan, not the fallout",
    b: "A minute spent reshaping the plan saves an hour un-writing wrong code. Push back before execution, not after.",
  },
  {
    p: "plan",
    t: "Reject vague steps",
    b: '"Update relevant files" is not a step. Ask which files, which functions, what changes — until the plan is checkable.',
  },
  {
    p: "plan",
    t: "Define done in the prompt",
    b: "Say what finished means: tests pass, lint is clean, the page renders. Without a target, Claude declares victory early.",
  },
  {
    p: "plan",
    t: "Constraints go up front",
    b: '"Don\'t touch the public API" belongs in the first message, not turn twelve. Late constraints fight everything said before them.',
  },
  {
    p: "plan",
    t: "One goal per session",
    b: "Break epics into sessions with a single outcome each. Mixed goals produce mixed diffs nobody wants to review.",
  },
  {
    p: "plan",
    t: "Ask for options before code",
    b: "For anything with trade-offs, ask for two or three approaches with pros and cons. Pick one, then let it build.",
    try: '"Give me 3 approaches with trade-offs. Don\'t write code yet."',
  },
  {
    p: "plan",
    t: "Skip planning for trivia",
    b: "Planning a one-line change is its own waste. Calibrate: plan mode for real tasks, straight execution for the tiny ones.",
  },
  {
    p: "plan",
    t: "Keep a running to-do",
    b: "For multi-step work, have Claude maintain a task list and check items off. You both always know what's left.",
  },

  // ── CLAUDE.md: the file that loads first ────────────────────────
  {
    p: "claudemd",
    t: "Have a CLAUDE.md at all",
    b: "It's the first file loaded into every session for this project. No CLAUDE.md means ten devs adding code in ten different styles.",
    try: "/init",
  },
  {
    p: "claudemd",
    t: "Keep the root file lean",
    b: "Every line costs tokens in every conversation. A 1,000-line CLAUDE.md is less effective than a 40-line one, not more.",
  },
  {
    p: "claudemd",
    t: "Facts here, procedures in skills",
    b: "If Claude needs it all the time, it's CLAUDE.md. If Claude only needs it while doing one specific task, it's a skill.",
  },
  {
    p: "claudemd",
    t: "Nest CLAUDE.md per folder",
    b: "Home-page rules live in home/CLAUDE.md, order rules in orders/CLAUDE.md. Claude reads them when it works in that folder.",
  },
  {
    p: "claudemd",
    t: "Write rules, not essays",
    b: '"pnpm, not npm" beats a paragraph about package-manager philosophy. Short imperative lines get followed.',
  },
  {
    p: "claudemd",
    t: "Record the commands",
    b: "How to run, test, lint, and deploy — exact commands. Claude shouldn't guess your scripts and neither should new teammates.",
  },
  {
    p: "claudemd",
    t: "Prune it monthly",
    b: "Stale rules are worse than none: Claude will faithfully follow instructions about code that no longer exists.",
  },
  {
    p: "claudemd",
    t: "Turn corrections into lines",
    b: "The second time you correct the same mistake, stop correcting and add one line to CLAUDE.md. Start the message with # to save it fast.",
    try: "# always use the ApiError class for errors",
  },
  {
    p: "claudemd",
    t: "Commit it — it's team knowledge",
    b: "CLAUDE.md in git means every teammate's Claude follows the same rules. That's how one person's setup becomes the team baseline.",
  },
  {
    p: "claudemd",
    t: "Point, don't paste",
    b: "Don't inline your whole architecture doc. One line pointing at docs/architecture.md lets Claude read it only when needed.",
  },

  // ── Skills: repeated workflows become playbooks ──────────────────
  {
    p: "skills",
    t: "Third time explaining? Make a skill",
    b: '"Oh, I do explain that every single time" is the trigger. Fold the repetition into a skill and never type it again.',
  },
  {
    p: "skills",
    t: "Scaffold components with one line",
    b: 'Folder structure, index file, test file, naming convention — all in the skill. Then: "make me a user badge component" and done.',
    try: "/new-component UserBadge",
  },
  {
    p: "skills",
    t: "Encode your test style",
    b: "Your mocking approach, naming, setup patterns, example tests. Stop re-teaching it every session — it's a skill.",
  },
  {
    p: "skills",
    t: "Commits and PRs are a skill",
    b: "Commit format, ticket linkage, PR description template, your team's expectations. Explain once, invoke forever.",
  },
  {
    p: "skills",
    t: "Review checklists are skills too",
    b: "N+1 queries, missing error handling — whatever your team actually cares about. Every review checks the same list.",
  },
  {
    p: "skills",
    t: "Name skills by the action",
    b: "new-component, write-tests, release. The name is how both you and Claude know when to reach for it.",
  },
  {
    p: "skills",
    t: "Keep SKILL.md focused",
    b: "Steps, conventions, one example. Philosophy and background bloat the skill the same way they bloat CLAUDE.md.",
  },
  {
    p: "skills",
    t: "Ship skills in the repo",
    b: "Skills in .claude/skills/ travel with git. Everyone who clones gets your playbooks for free.",
  },
  {
    p: "skills",
    t: "Always-known vs task-only",
    b: 'CLAUDE.md answers "what should Claude always know?" A skill answers "how do we do this specific thing, step by step?"',
  },
  {
    p: "skills",
    t: "Test the skill on a real task",
    b: "Run it, watch where the output drifts from what you wanted, fix the skill — not the output. That's how skills get sharp.",
  },

  // ── Hooks: guidance Claude can't skip ────────────────────────────
  {
    p: "hooks",
    t: "Must-follow rules are hooks, not prose",
    b: "CLAUDE.md is advice a model can forget. A hook is a script that runs every time, no exceptions. Promote your hard rules.",
  },
  {
    p: "hooks",
    t: "PreToolUse: protect your secrets",
    b: "A pre-tool hook that denies reading .env files means Claude can't leak what it can never see.",
    try: ".claude/hooks/protect-secrets.sh",
  },
  {
    p: "hooks",
    t: "PostToolUse: format every edit",
    b: "After each write, auto-run your formatter and type-checker. Style debates with a model are a waste of everyone's tokens.",
  },
  {
    p: "hooks",
    t: "Stop: the final checklist",
    b: 'When Claude says "done", a stop hook asks: tests written? API contracts updated? Debug logs removed? It can\'t finish until they are.',
  },
  {
    p: "hooks",
    t: "Exit 2 blocks — with a reason",
    b: "A blocking hook's message goes straight back to Claude. Write it actionable: say what's wrong and what to do instead.",
  },
  {
    p: "hooks",
    t: "Keep hooks fast",
    b: "Hooks run on every matching tool call. A three-second hook on every file edit turns a quick session into a slow one.",
  },
  {
    p: "hooks",
    t: "Log first, enforce later",
    b: "Dry-run a new hook — print what it would block for a day before letting it block. Bad hooks are worse than no hooks.",
  },
  {
    p: "hooks",
    t: "Ship hooks with the repo",
    b: "Hooks wired in .claude/settings.json travel with git. The whole team gets the same guardrails automatically.",
  },
  {
    p: "hooks",
    t: "Hook what models forget",
    b: "Formatting, generated files, protected paths — the things that slip under pressure. That's the hook sweet spot.",
  },
  {
    p: "hooks",
    t: "Noisy hooks train people to ignore them",
    b: "A hook that fires on everything is a hook nobody reads. Make the trigger precise or don't ship it.",
  },

  // ── Agents: delegate to specialists ──────────────────────────────
  {
    p: "agents",
    t: "Skill = knowledge, agent = worker",
    b: "A skill is knowledge you give Claude. An agent is a separate worker you delegate to, with its own context and tools.",
  },
  {
    p: "agents",
    t: "Explorer agent for big questions",
    b: '"Where is auth handled?" fans out to an explorer agent that reads widely and reports back — your main context stays clean.',
  },
  {
    p: "agents",
    t: "Reviewer agent on every meaty diff",
    b: "A fresh pair of eyes with no attachment to the code it's reading. It catches what the author-context misses.",
  },
  {
    p: "agents",
    t: "Test-fixer: hand off the red suite",
    b: "Give it the failing output, get back green. Debugging loops are exactly the grind agents are for.",
  },
  {
    p: "agents",
    t: "Parallel refactors, parallel agents",
    b: "Independent file batches can run as simultaneous agents. A day of mechanical migration becomes an hour.",
  },
  {
    p: "agents",
    t: "Narrow tools per agent",
    b: "A reviewer needs Read and Grep, not Write. Least-privilege isn't just security — it keeps agents on task.",
  },
  {
    p: "agents",
    t: "The description is a job ad",
    b: "Claude picks agents by their description. Write when to use it and what it's good at, like you're hiring for the role.",
  },
  {
    p: "agents",
    t: "Agents start from zero",
    b: "They don't see your conversation. Everything the worker needs — paths, constraints, definitions of done — goes in its prompt.",
  },
  {
    p: "agents",
    t: "Release agent watches the pipeline",
    b: "Let an agent check CI runs, read failure logs, and verify the deploy landed — instead of you tabbing to the Actions page.",
    try: "gh run list --limit 5",
  },
  {
    p: "agents",
    t: "Don't delegate a grep",
    b: "Spawning an agent for a one-file lookup costs more than the lookup. Delegate work, not errands.",
  },

  // ── Context: treat tokens like RAM ───────────────────────────────
  {
    p: "context",
    t: "Context is your scarcest resource",
    b: "Everything competes for the same window: your rules, your code, your conversation. Spend it like RAM, not like disk.",
  },
  {
    p: "context",
    t: "/clear between unrelated tasks",
    b: "The last task's leftovers pollute the next task's judgment. New goal, fresh context.",
    try: "/clear",
  },
  {
    p: "context",
    t: "Restate decisions after compaction",
    b: "Long sessions get summarized, and summaries drop nuance. When key decisions matter, say them again briefly.",
  },
  {
    p: "context",
    t: "Give paths, not pastes",
    b: "Don't paste a 500-line file into chat. Point at the path and let Claude read exactly the part it needs.",
    try: "@src/api/orders.js",
  },
  {
    p: "context",
    t: "Pipe logs to a file",
    b: "A giant test log pasted into chat evicts things you care about. Write it to a file and let Claude grep it.",
    try: "npm test 2>&1 | tee /tmp/test.log",
  },
  {
    p: "context",
    t: "Stop arguing with a confused session",
    b: "Ten turns of correcting a derailed conversation rarely beats one fresh session that starts with what you learned.",
  },
  {
    p: "context",
    t: "Front-load what matters",
    b: "Instructions in message one shape everything after. Corrections at turn twenty compete with twenty turns of history.",
  },
  {
    p: "context",
    t: "Compact at milestones, not mid-thought",
    b: "If you compact manually, do it at a natural checkpoint — after a merge, before a new feature — never mid-debug.",
    try: "/compact",
  },
  {
    p: "context",
    t: "End long work with a handoff note",
    b: "Ask for a short summary of state, decisions, and next steps. Tomorrow's session starts warm instead of cold.",
  },
  {
    p: "context",
    t: "Watch the window, not just the clock",
    b: "Session health is measured in context left, not minutes worked. When the window is nearly full, wrap up or hand off.",
  },

  // ── Connect: MCP, connectors, plugins ────────────────────────────
  {
    p: "connect",
    t: "Find the connector that exists",
    b: "GitHub, Slack, Notion, Jira, your database — hundreds are already built. Authenticate and go. Build one only when it doesn't exist.",
  },
  {
    p: "connect",
    t: "MCP is the universal adapter",
    b: "Your code doesn't live alone — it lives with GitHub, your DB, your logs, your tickets. MCP is how Claude plugs into all of it.",
  },
  {
    p: "connect",
    t: "Stop copy-pasting error logs",
    b: "Claude can read Sentry or Last9 itself through a connector. You paste conclusions, not stack traces.",
  },
  {
    p: "connect",
    t: "Pull the ticket, don't describe it",
    b: 'With a Jira or Linear connection, "implement PROJ-142" pulls the real acceptance criteria — not your memory of them.',
  },
  {
    p: "connect",
    t: "Commit .mcp.json to the repo",
    b: "Project-scoped MCP config travels with git. Clone the repo, inherit the connections.",
  },
  {
    p: "connect",
    t: "Read-only creds for data sources",
    b: "The database connector gets a read-only user. Claude querying prod is useful; Claude writing to prod is an incident report.",
  },
  {
    p: "connect",
    t: "Connect what you use, not what exists",
    b: "Every MCP server's tool list eats context in every session. A dozen idle connectors is a tax on all your work.",
  },
  {
    p: "connect",
    t: "Have Claude build the missing server",
    b: "No connector for your internal API? Claude knows the MCP spec — it can write a small server for it in an afternoon.",
  },
  {
    p: "connect",
    t: "Plugins bundle the whole setup",
    b: "Skills + hooks + agents + MCP in one installable package. Your setup stops being a personal quirk and becomes a product.",
  },
  {
    p: "connect",
    t: "Onboard teammates with one install",
    b: "New teammates shouldn't spend weeks wiring things up. One plugin install and they inherit every convention, guardrail, and connection.",
  },

  // ── Git & Review: ship it like you mean it ───────────────────────
  {
    p: "git",
    t: "Read every commit message",
    b: "Claude writes good commit messages from the actual diff — but you own what lands in history. Read before you approve.",
  },
  {
    p: "git",
    t: "Small commits, one idea each",
    b: "Ask for a commit per logical change. Easier to review, and revert is a scalpel instead of an amputation.",
  },
  {
    p: "git",
    t: "Branch before Claude touches main",
    b: "Agent work happens on a branch, always. Main is for reviewed work, not experiments.",
  },
  {
    p: "git",
    t: "Review AI diffs like junior PRs",
    b: "Confident, fast, and occasionally wrong in surprising ways. Verify the intent, not just whether tests pass.",
  },
  {
    p: "git",
    t: "Diff before every commit",
    b: 'Never let "git add -A" stage blind. Read the diff; know exactly what\'s going in.',
    try: "git diff --stat",
  },
  {
    p: "git",
    t: "PR descriptions from the diff",
    b: "Claude has the full change in context — let it draft the summary, test plan, and reviewer notes. Then edit for honesty.",
  },
  {
    p: "git",
    t: "Have Claude review its own work first",
    b: "A self-review pass before your review catches the cheap mistakes, so your attention goes to the expensive ones.",
    try: "/code-review",
  },
  {
    p: "git",
    t: "No force-push, no history rewrites",
    b: "Rebase, amend, force-push: these stay human-driven. An agent rewriting shared history is how mornings get ruined.",
  },
  {
    p: "git",
    t: "CI red? Send the run, not a screenshot",
    b: "Give Claude the run URL or let the release agent pull the logs with gh. Screenshots of logs are where context goes to die.",
    try: "gh run view --log-failed",
  },
  {
    p: "git",
    t: "Run it before you merge it",
    b: '"Looks done" isn\'t done. Start the app, click the flow, watch the test suite — then merge.',
  },

  // ── Guardrails: safety is a habit too ────────────────────────────
  {
    p: "guard",
    t: "Secrets never enter context",
    b: ".env in .gitignore keeps it out of git; a pre-tool hook keeps it out of Claude. What's never read can't be leaked.",
  },
  {
    p: "guard",
    t: "Know your permission mode",
    b: "Auto-accept is for sandboxes and throwaway branches. On a real repo, you want to see what runs before it runs.",
  },
  {
    p: "guard",
    t: "Allow reads broadly, writes narrowly",
    b: "Permission allowlists should wave through read-only commands and stop on anything that mutates. That's the whole policy.",
  },
  {
    p: "guard",
    t: "Destructive actions stay manual",
    b: "Deploys, migrations, deletes, anything with prod in the name: Claude prepares, a human presses the button.",
  },
  {
    p: "guard",
    t: "Sandbox unattended runs",
    b: "Long autonomous sessions belong in a container or a git worktree. Blast radius is a choice you make before the blast.",
  },
  {
    p: "guard",
    t: "Fixtures, not prod data",
    b: "Don't pipe real customer rows into a prompt. Redacted samples and fixtures reproduce the bug without the liability.",
  },
  {
    p: "guard",
    t: "Vet what you install",
    b: "Third-party skills, plugins, and CLAUDE.md files are instructions your agent will obey. Read every line before adopting one — stars are popularity, not a security review.",
  },
  {
    p: "guard",
    t: "CI deploys, the agent watches",
    b: "Prod credentials live in the pipeline, not the prompt. The release agent verifies the deploy — it doesn't perform it.",
  },
  {
    p: "guard",
    t: "Verify what it claims",
    b: "Anthropic's study of ~400,000 sessions found even expert users reached verified success — passing tests, committed work, or user sign-off — only about a third of the time. Verification isn't overhead; it's the job.",
  },
  {
    p: "guard",
    t: "Habits beat the model",
    b: "Same model, same task: the dev with habits ships and the dev without them reworks. The model isn't the variable. You are.",
  },
];
