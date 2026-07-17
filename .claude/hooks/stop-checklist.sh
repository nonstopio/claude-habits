#!/bin/bash
# Stop — the final checklist (Slide 8).
# Claude can't declare "done" while debug leftovers sit in the app code.
input=$(cat)

# Don't loop: if this hook already blocked once this turn, let it through.
echo "$input" | grep -q '"stop_hook_active": *true' && exit 0

leftovers=$(grep -rnE "console\.log|debugger" "$CLAUDE_PROJECT_DIR/app" --include='*.js' 2>/dev/null)
if [ -n "$leftovers" ]; then
  echo "Stop-hook checklist failed — remove debug leftovers before finishing:" >&2
  echo "$leftovers" >&2
  exit 2
fi
exit 0
