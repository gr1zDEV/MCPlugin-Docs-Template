# MCPlugin Docs Template

A GitBook-style Minecraft plugin docs template that is organized for long-term maintenance.

## Structure

- `index.html` – Application shell layout.
- `assets/css/styles.css` – Shared styles.
- `assets/js/docs-data.js` – Documentation pages and sample content.
- `assets/js/app.js` – Sidebar rendering, routing, TOC, and search behavior.
- `.github/workflows/deploy-pages.yml` – Automatic deploy to GitHub Pages on push to `main`.

## GitHub Pages setup

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` and the workflow deploys automatically.

## Editing docs content

- Add or update pages in `assets/js/docs-data.js`.
- Keep page IDs in `groups` and `pages` in sync.
- Use section IDs (`<section id="...">`) to populate the right-side TOC.
