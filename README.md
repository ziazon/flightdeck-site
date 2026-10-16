# flightdeck.saidi.pro

The website for [Flightdeck](https://flightdeck.saidi.pro), a macOS control room for a team of AI coding
agents: what it is, the user guide, and the downloads.

The site is built with [VitePress](https://vitepress.dev) and styled with [Tabler](https://tabler.io), and
GitHub Pages serves it. Flightdeck's own source is not in this repository.

## Working on the site

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm check      # the public-hygiene check, then a production build (fails on dead links)
```

Node 22 or later and pnpm (the version is pinned in `package.json`).

## Layout

| Path | What |
| --- | --- |
| `docs/` | The pages: Markdown, one file per page. `docs/guide/` is the user guide. |
| `docs/.vitepress/config.ts` | Site config: navigation, sidebar, search, footer. |
| `docs/.vitepress/theme/` | The Tabler theme: `tabler-bridge.css` maps VitePress onto Tabler's tokens; `components/` holds the landing-page sections. |
| `docs/public/` | Static files: icons and the app screenshots (sample data only). |
| `scripts/hygiene-check.sh` | Fails when a page names anything that must stay out of a public repository. Its deny-list is kept outside the repo (see `AGENTS.md`). |
| `scripts/gitleaks.sh` | Secret scan over the whole history. |

## Releases

Mac builds of Flightdeck are published as this repository's GitHub Releases once they exist. Until then
the download page says "coming soon".

## Licence

The site's code and content are under the MIT licence (`LICENSE`). The Flightdeck app is not.
