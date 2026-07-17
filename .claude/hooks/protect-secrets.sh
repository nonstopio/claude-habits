#!/bin/bash
# PreToolUse — guidance Claude can't skip (Slide 8).
# Blocks any tool call that touches a .env file. Exit 2 = deny; the stderr
# message goes back to Claude, so it says what to do instead.
python3 - <<'PY'
import json, re, sys

data = json.load(sys.stdin)
target = " ".join(str(v) for v in data.get("tool_input", {}).values())

if re.search(r"\.env(\.\w+)?\b", target):
    print("Blocked by hook: .env files are off-limits — secrets never enter context. Use env.example instead.", file=sys.stderr)
    sys.exit(2)
PY
