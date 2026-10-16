#!/usr/bin/env bash
# Public-hygiene check: this repository is public, so nothing from the private Flightdeck
# workspace may ship in it. Fails when any tracked or new file (except binary assets) matches a
# denied pattern, printing only the file and line number, never the line.
#
# The deny-list itself names what must stay private, so it is not in this repository. It is read
# from $HYGIENE_DENY (one extended regex per line; CI sets it from the repository secret of that
# name) or else from ${XDG_CONFIG_HOME:-$HOME/.config}/flightdeck-site/hygiene-deny.txt. With
# neither, the check fails rather than passing on an empty list.
set -euo pipefail
cd "$(dirname "$0")/.."

deny_file="${XDG_CONFIG_HOME:-$HOME/.config}/flightdeck-site/hygiene-deny.txt"
if [ -n "${HYGIENE_DENY:-}" ]; then
  patterns="$HYGIENE_DENY"
elif [ -r "$deny_file" ]; then
  patterns=$(cat "$deny_file")
else
  echo "hygiene: no deny-list (set HYGIENE_DENY or create $deny_file)" >&2
  exit 2
fi
pattern=$(printf '%s\n' "$patterns" | sed '/^[[:space:]]*$/d' | paste -sd'|' -)
if [ -z "$pattern" ]; then
  echo "hygiene: the deny-list is empty" >&2
  exit 2
fi

hits=$(git ls-files -z --cached --others --exclude-standard \
  | grep -z -v -E '^pnpm-lock\.yaml$|\.(png|jpg|jpeg|ico|woff2?)$' \
  | xargs -0 grep -n -i -E -- "$pattern" 2>/dev/null \
  | cut -d: -f1,2 || true)
if [ -n "$hits" ]; then
  echo "hygiene: names or paths that must stay private were found (file:line):" >&2
  echo "$hits" >&2
  exit 1
fi
echo "hygiene: clean"
