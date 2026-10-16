# Agent guide: flightdeck-site

This repository is **public**. It holds only the Flightdeck website. Read this before any change.

- **Nothing private, ever.** No internal names, machine names, paths under a home folder, private repository
  names, plan ids, ticket ids or credentials. `scripts/hygiene-check.sh` enforces a deny-list; CI runs it on
  every push. The list itself is private, so it lives outside this repository: the `HYGIENE_DENY` Actions
  secret, and a local copy at `~/.config/flightdeck-site/hygiene-deny.txt`. Extend both when you notice a
  new kind of leak; never weaken them to make a page pass.
- **Screenshots show sample data only**, taken from the app running against its fixture data.
- **Every claim about the app must be true today.** A planned or partial feature says "In development" or
  "Coming soon".
- **Light and dark.** Check every page in both themes. Tabler reads `data-bs-theme`, which
  `docs/.vitepress/theme/Layout.vue` keeps in step with VitePress's toggle.
- **The gate:** `pnpm check` (hygiene, then a build that fails on dead links) and `bash scripts/gitleaks.sh`.
  CI (`.github/workflows/ci.yml`) runs the same. Actions are pinned to commit SHAs.
- **Landing:** a branch and a PR to `main`, merged when CI is green. `main` deploys to GitHub Pages
  (`.github/workflows/deploy.yml`).
