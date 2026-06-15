# Jackie Sung Blog

Personal static blog for `https://blog.jackiesung.com`.

The site is built with AstroWind on Astro 6, Tailwind CSS 4, TypeScript, MDX, Sharp, and Pagefind. It is a static site with blog posts, server comparison pages, search, RSS, sitemap, legal pages, and a lightweight contact/donate flow.

## Quick Start

Use `npm.cmd` on Windows PowerShell. Calling `npm` directly can hit the `npm.ps1` execution policy error.

```powershell
npm.cmd install
npm.cmd run dev
```

The dev server defaults to:

```text
http://localhost:4321
```

For a production build and local preview:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
npm.cmd run preview -- --host 127.0.0.1 --port 4321
```

If `npm.cmd run preview` is not convenient after a build, the generated `dist` folder can also be served as plain static files.

## Common Commands

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
npm.cmd run check
npm.cmd run check:astro
npm.cmd run check:eslint
npm.cmd run check:prettier
npm.cmd run fix
```

Recommended pre-push checks:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run check:astro
npm.cmd run check:eslint
.\node_modules\.bin\prettier.cmd --check README.md src\pages\index.astro
```

Use `npm.cmd run check:prettier` only when you are ready to normalize formatting across the whole template. For small blog updates, check the files you changed.

Astro uses Vite internally. Use `astro build` through `npm.cmd run build`; do not use `vite build` directly for this project.

## Project Map

```text
src/
  config.yaml              Site name, canonical URL, SEO defaults, blog settings
  navigation.ts            Header and footer navigation
  content.config.ts        Blog collection schema
  data/post/               Blog posts in Markdown or MDX
  pages/                   File-based routes
  pages/[...blog]/         Blog listing, pagination, categories, tags, and posts
  components/
    Logo.astro             Header logo text and JS mark
    SearchBox.astro        Pagefind search UI
    widgets/               Header, footer, hero, and layout widgets
  assets/styles/           Tailwind CSS 4 theme and utilities
public/
  images/                  Static images served from /images/*
vendor/integration/        AstroWind config integration
```

Important pages:

```text
/                      Home
/blog                  Blog index
/search                Search page
/bandwagonhost         BandwagonHost plans
/ion-krypt-cloud       ION Krypt Cloud plans
/contact               Contact page
/donate                Donate page
/terms                 Terms
/privacy               Privacy policy
/cookie                Cookie notice
/rss.xml               RSS feed
```

## Updating Blog Posts

Blog posts live in:

```text
src/data/post/
```

Create a new `.md` or `.mdx` file there. The filename becomes the slug unless the blog permalink logic changes.

Example:

```markdown
---
title: 'My New Note'
publishDate: 2026-06-15
excerpt: 'Short summary shown in lists and metadata.'
category: Notes
tags:
  - AI
  - Vibe Coding
author: 'Jackie Sung'
draft: false
---

Write the post here.
```

Supported frontmatter:

```text
title          Required
publishDate   Optional date
updateDate    Optional date
draft         Optional boolean
excerpt       Optional summary
image         Optional image path or URL
category      Optional category
tags          Optional list
author        Optional author
metadata      Optional SEO overrides
```

Draft posts should use:

```yaml
draft: true
```

After adding or editing posts, run:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

The build also runs Pagefind, so search results update from the generated HTML.

## Images

Static images can go in:

```text
public/images/
```

They are available at:

```text
/images/file-name.jpg
```

Use this for simple assets like avatars, QR images, screenshots, or post images that do not need Astro asset imports.

Astro-optimized local images can also live under `src/assets/` when a component imports them directly.

## Updating Site Text and Navigation

Common places to edit:

```text
src/config.yaml                 Site name, URL, SEO title template
src/navigation.ts               Header and footer links
src/components/Logo.astro       Logo mark and site name display
src/components/widgets/Footer.astro
src/components/widgets/Header.astro
src/pages/index.astro           Home page
src/pages/contact.astro         Contact page
src/pages/bandwagonhost.astro   BandwagonHost page
src/pages/ion-krypt-cloud.astro ION Krypt Cloud page
```

Footer copyright uses the current year automatically in the browser and starts from 2017.

## Search

Search is powered by Pagefind.

Development search may be limited until a production build has generated:

```text
dist/pagefind/
```

Run:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

Then preview the built site.

## Deployment

This project builds to:

```text
dist/
```

The repository remote is expected to be:

```text
https://github.com/JackieSung4ev/jackie-blog.git
```

Typical update flow:

```powershell
git status
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run check:astro
npm.cmd run check:eslint
.\node_modules\.bin\prettier.cmd --check README.md src\data\post\your-post.md
git add .
git commit -m "Update site"
git push
```

Do not commit local preview logs such as:

```text
*.out.log
*.err.log
```

## Troubleshooting

PowerShell blocks `npm`:

```powershell
npm.cmd run dev
```

Astro telemetry or sandboxed environments fail while writing config:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run check:astro
```

Search shows no results:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

Then preview the built site instead of relying only on the dev server.

Port 4321 is busy:

```powershell
npm.cmd run dev -- --host 127.0.0.1 --port 4322
```

## Notes

- Node.js requirement: `>=22.12.0`.
- The site is static output.
- Affiliate disclosure blocks have been removed from the visible server pages.
- Plan descriptions on server pages are intentionally collapsed by default.
- Legal links are in the footer Legal column: Terms, Privacy Policy, Cookie.
- The contact avatar is served from `public/images/`.

## Theme Source

Started from AstroWind by OnWidget and customized for Jackie Sung.
