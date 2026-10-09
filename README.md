# ANAK TERUBUK

Independent software & technology studio. We build software, tools, experiments,
and digital products.

Static site built with Next.js (App Router) + TypeScript + Tailwind CSS.
Production output is a fully static export served by Cloudflare Pages.

## Production

| Setting | Value |
|---|---|
| Domain | https://anakterubuk.tech |
| Hosting | Cloudflare Pages |
| Production branch | `main` |
| Build command | `npx next build` |
| Build output directory | `out` |
| Runtime | None — every route is prerendered at build time |
| Environment variables | None |

Pushing to `main` triggers a Pages production build automatically. There is no
server runtime, no database, and no API layer.

### How the build works

`next.config.ts` sets `output: "export"`, so `next build` writes a static site to
`out/`:

- `out/*.html` — prerendered pages, including `out/404.html`
- `out/_next/` — hashed JS, CSS, and self-hosted fonts
- `out/_headers` — Cloudflare Pages security headers (HSTS, `nosniff`,
  `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)
- `out/robots.txt`, `out/sitemap.xml` — generated from the project content

Because the export disables the Next.js image optimizer, images ship as original
static files from `public/`.

## Local development

```bash
npm install
npm run dev        # dev server
npm run build      # static export to out/
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

`npm start` does not apply here: with `output: "export"` there is no server build
to serve. The deployable artifact is `out/`. To preview it locally, serve that
directory with any static file server.

## Projects

Projects are content, not components. Adding one means adding a single file at
`content/projects/<slug>.mdx`:

```yaml
---
title: Example
slug: example
description: One-line factual description.
category: [Software]
status: IN DEVELOPMENT   # IN DEVELOPMENT | DEVELOPMENT | EXPERIMENT | RESEARCH | LIVE | ARCHIVED
year: 2026
featured: false          # true marks it as a flagship product on the homepage
---
```

Pages are generated from that content, including the project index, related
projects, per-page metadata, and the sitemap. Invalid frontmatter fails the build
rather than shipping silently.

## Notes

- `docs/` holds internal design and audit documentation and is intentionally
  git-ignored.
- Visual direction and design rules live in `docs/DESIGN.md`.
