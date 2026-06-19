# caseykriutzfield.com

Personal website for Casey Kriutzfield — Artificial Intelligence Consultant.

A static site built with **Vite + React + TypeScript + Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com/)**, deployed to **Azure Static Web Apps**.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
.
├── index.html                # Vite entry HTML
├── public/                   # static assets copied as-is (favicon, SWA config)
├── src/
│   ├── main.tsx              # app bootstrap
│   ├── App.tsx               # page composition
│   ├── index.css            # Tailwind v4 + shadcn theme tokens (teal accent)
│   ├── config/site.ts       # site content (name, nav, social links, etc.)
│   ├── components/
│   │   ├── navbar.tsx       # top navigation
│   │   ├── hero.tsx         # hero section
│   │   ├── icons.tsx        # brand icons (GitHub, LinkedIn, X)
│   │   └── ui/              # shadcn/ui components
│   └── lib/utils.ts         # cn() helper
└── .github/workflows/       # Azure Static Web Apps CI/CD
```

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component>
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/`, which builds the app (`npm run build`) and uploads the
`dist/` output to Azure Static Web Apps.
