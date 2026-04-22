# Portfolio — www.trissaan.com

Next.js 14 (app router) + TypeScript + Tailwind + Framer Motion. Deployed on Vercel on push to `master`.

## Design system — Carbon & Sage

Single-accent palette. Do not reintroduce cyan / indigo / violet / amber / emerald / blue / rose — they were deliberately stripped out. Any new color belongs in `tailwind.config.ts`.

- **Carbon** (neutral greys, 50-900) — `carbon-900` `#0b0c0e` page bg, `carbon-100` `#e8e9ea` body text, `carbon-400` `#6b7078` muted.
- **Sage** (single accent, 50-900) — `sage-300` `#7dd3c0` primary accent. Use `sage-400` for deeper hover, `sage-200` for lighter.
- Gradient utility classes live in `app/globals.css`: `gradient-text`, `hero-gradient-text`, `sage-gradient-text`. No `warm-gradient-text` anymore.

The "done" line in the Hero terminal is the one intentional exception to tonal discipline — it uses `carbon-100 font-semibold` for brightness contrast instead of a second accent hue.

## Signature components

- `DagBackground` — animated SVG directed-acyclic graph replacing generic blur orbs. Thematic to data pipelines. Accent prop is limited to sage tonal variants (`sage | sageSoft | sageDeep | cool | warm`). Use `variant` 0-3 for different node layouts.
- `MagneticWrapper` — cursor-attracting wrapper for CTAs. Pass `strength` (0.2-0.3 is the established range).
- `CountUp` — framer-motion driven counter, triggered once via `useInView`.

## Section structure

Sections live in `app/components/*.tsx`; each is `min-h-screen` with a local `DagBackground` and carbon gradient. Sections are composed in `app/page.tsx`. Order matters for the Navbar active-link IntersectionObserver — nav link `href` values in `Navbar.tsx` must match section `id` attributes.

## Things not to do

- Don't put fade overlay divs between sections (`bg-gradient-to-b from-[#...] to-transparent`). The user removed these explicitly — section-to-section transitions should be seamless.
- Don't re-add `ThemeToggle`. Light mode isn't shipped; the toggle was removed rather than left in limbo.
- Don't add `*.tsbuildinfo` to commits — already gitignored.
