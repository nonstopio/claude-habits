#!/bin/bash
# PostToolUse — format every file Claude writes (Slide 8).
# No arguing with a model about style; the formatter has the last word.
file=$(python3 -c 'import json,sys; print(json.load(sys.stdin).get("tool_input",{}).get("file_path",""))')

case "$file" in
  *.js|*.css|*.html|*.json|*.md)
    command -v npx >/dev/null 2>&1 && npx --yes prettier --write "$file" >/dev/null 2>&1
    ;;
esac
exit 0
