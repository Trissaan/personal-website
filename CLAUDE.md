# Portfolio · www.trissaan.com

Next.js 14 (app router) + TypeScript + Framer Motion. Deployed on Vercel on push to `master`.

> History: this site was a dark "Carbon & Sage" Tailwind theme. It was fully rebuilt into the light, inline-styled theme described below, and Tailwind was removed entirely (no `tailwindcss` dependency, no config, no `@tailwind` directives). Don't restore the old system.

## Design system: Paper & Cobalt

Cool light theme. Styling is done with **inline `style={{}}` objects driven by CSS variables**, not Tailwind classes and not CSS modules. `className` appears exactly once in the app (font wiring in `app/layout.tsx`). Match the inline-style pattern when adding or editing UI.

**Theme tokens** live in `:root` in `app/globals.css` — change them once to re-skin the whole site:
- `--accent` `#2f4ba8` cobalt (primary accent). Alternatives noted in the comment: rust / oxblood / forest / ink.
- `--accent-soft` `#8ea9f0` — lighter accent for use on dark backgrounds (e.g. the Thesis section, which uses it for both the eyebrow and the italic accent since `--accent` itself is too dark on `#15181f`).
- `--d` — density multiplier baked into section padding as `calc(Npx * var(--d))` (`1.3` airy · `1` balanced · `0.7` compact).
- `--code-*` — the terminal panel palette (used by `WhatIDo`'s `TerminalPanel`). Currently the "Slate" set; "Paper" and "Midnight" alternatives are in the comment.

**Fonts** (`app/layout.tsx`): Newsreader → `var(--font-serif)` (all headings, with italic `<span>` accents), Archivo → `var(--font-sans)` (body, set on `<body>`), IBM Plex Mono → `var(--font-mono)` (code panel, tech chips, small meta).

**Recurring values** (hardcoded inline, not tokenized — keep them consistent):
- Page bg `#f2f3f6`, base text `#15181f` (both set on `body`).
- Muted text `#444a56` / `#555c6a`; faint meta `#7d8695`; separator glyph colour `#c2c7d2`.
- Hairline borders `rgba(21,24,31,.12)`; stronger dividers `.18`; chip borders `.2`.
- White cards `#fff`; tinted section bg `#e6e8ee` (Impact); dark section `#15181f` with `#f2f3f6` text (Thesis).
- Separator glyph is `·` (middle dot). **No em dashes** — they were deliberately removed; use `·` for meta and normal sentence punctuation in prose.

**Section conventions**: `maxWidth: 1280`, horizontal padding `56px`, vertical padding `calc(N * var(--d))`, a top hairline `borderTop` between sections. Eyebrow label = uppercase, `12px`, weight `600`, `letterSpacing .18em`, `color var(--accent)`. No `min-h-screen` and no fade-overlay divs between sections.

## Sections & navigation

Sections live in `app/components/*.tsx`, composed in `app/page.tsx` in this order:

`Nav · Hero · WhatIDo · Experience · Impact · FeaturedProject · Projects · Engineering · Thesis · Contact · Footer`

`Nav.tsx` is a **client component** with an `IntersectionObserver` scroll-spy (`rootMargin: "-45% 0px -55% 0px"`) that highlights the active link in `var(--accent)` with an animated underline. Each nav link's `href` is derived from its label via `label.toLowerCase().replace(/\s+/g, "-")`, so:

- A nav label only works if a section has the matching `id`. Current links → ids: What I Do→`what-i-do`, Projects→`projects`, Impact→`impact`, Engineering→`engineering`, Contact→`contact`.
- `Experience` has `id="experience"` but is intentionally **not** in the nav. `Hero`, `FeaturedProject`, and `Thesis` have no `id`.
- Adding a nav label requires a section with the slugified id; deleting a linked section leaves a dead link.

## Project detail pages

`app/projects/[slug]/page.tsx` is a client component using the same Paper & Cobalt theme and the shared `Nav`. Content comes from `app/lib/projectsData.ts` (`getProjectBySlug`, `getAllProjects`, `Project` interface). There are 8 projects in the data; 4 are surfaced on the homepage:
- `Projects.tsx` — 3 cards linking to `/projects/<slug>`.
- `FeaturedProject.tsx` — "View Full Case Study" → `/projects/ai-job-application-automation`.

**Path alias**: `tsconfig.json` maps `@/*` → `./*`. Imports are `@/app/components/X` and `@/app/lib/X` (not `@/components/X`).

## Things not to do

- Don't style with Tailwind utility classes / `className` — use inline `style` + CSS variables to match the codebase.
- Don't reintroduce em dashes.
- Don't add a nav label without a section whose `id` matches the slugified label.
- Don't restore deleted dark-theme pieces: `DagBackground`, `MagneticWrapper`, `CountUp`, `Navbar`, `ThemeToggle`.
- Don't add `*.tsbuildinfo` to commits (already gitignored).
