#!/usr/bin/env bash
# Scan the whole git history for secrets with a pinned, checksum-verified gitleaks.
# Uses a gitleaks already on PATH when there is one (local runs), else downloads the pinned release.
set -euo pipefail
cd "$(dirname "$0")/.."

version=8.30.1
if command -v gitleaks >/dev/null 2>&1; then
  bin=gitleaks
else
  tmp=$(mktemp -d)
  trap 'rm -rf "$tmp"' EXIT
  base="https://github.com/gitleaks/gitleaks/releases/download/v${version}"
  tarball="gitleaks_${version}_linux_x64.tar.gz"
  curl -sSfL "$base/$tarball" -o "$tmp/$tarball"
  curl -sSfL "$base/gitleaks_${version}_checksums.txt" -o "$tmp/checksums.txt"
  (cd "$tmp" && grep " ${tarball}\$" checksums.txt | sha256sum -c -)
  tar -xzf "$tmp/$tarball" -C "$tmp" gitleaks
  bin="$tmp/gitleaks"
fi
"$bin" git --redact --no-banner .
