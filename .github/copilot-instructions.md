# Copilot Instructions

## Build, test, and lint commands

Run all commands from `astro-site/`:

```sh
npm run dev
npm run build
```

There is currently no dedicated test or lint script in this repository.

## Architecture

This repo now serves a single static personal site using **Astro + Tailwind CSS**:

- `astro-site/` is the full web app.
- `astro-site/src/pages/index.astro` is the landing page.
- `astro-site/src/styles/global.css` provides Tailwind imports and global styles.
- `astro-site/public/images/` contains static image assets (including the profile placeholder).

Deployment is Azure Static Web Apps via `.github/workflows/azure-static-web-apps-delightful-stone-025c5a610.yml`, which builds the Astro app in `astro-site/` and deploys `dist/`.

## Key conventions

- Keep the site as static output (no server-side runtime/API layer).
- Keep visual style minimal and dark-themed unless explicitly requested otherwise.
- Add new article links directly in the `Published writing` section in `src/pages/index.astro`.
- Prefer simple, repo-managed content updates (edit files + push) over CMS-style integrations.
