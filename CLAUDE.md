# Mia8 Construction — Marketing Site

Single-page marketing site for **Mia8 Construction, Inc.**, a plumbing/electrical home-services company serving Whatcom County and Point Roberts, WA.

## Stack

- **Vite 8** + **React 19** + **TypeScript ~6**
- **Tailwind CSS v4** via `@tailwindcss/vite` (config lives in `src/index.css` under `@theme`, not a JS config file)
- **react-router-dom v7** — `/` → `LandingPage`, `/go` → `OnePager`
- **motion** (Framer Motion successor) for animations, including scroll parallax
- **lucide-react** for icons

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` (runs `tsc -b` then `vite build`) |
| Lint | `npm run lint` |
| Preview built site | `npm run preview` |

## Layout

```
src/
  App.tsx                       # Router only
  main.tsx
  index.css                     # Tailwind v4 @theme tokens + global styles
  pages/
    LandingPage.tsx             # Composes section components
    OnePager.tsx
  components/
    layout/   Navbar, Footer
    sections/ Hero, Services, WhyUs, Locations, CTABanner, ContactForm
    ui/       Button, Badge, ServiceCard, SectionWrapper
  data/services.ts              # Service list data
  lib/constants.ts              # COMPANY_NAME, PHONE, EMAIL, LOCATIONS
  assets/                       # hero.png lives here
public/                         # favicon.svg, logo.svg, icons.svg
design-system/mia-construction/ # MASTER.md + per-page design specs (reference docs)
docs/                           # gitignored
```

## Design tokens

All design tokens live in `src/index.css` under `@theme` and are referenced as Tailwind utilities (e.g. `bg-dark`, `text-gold`, `font-cinzel`). Colors include `dark`, `dark-deeper`, `dark-mid`, `light`, `gold`, `gold-deco`, `silver`, `muted-dark`, `border-light`. Fonts: **Cinzel** (display) and **Josefin Sans** (body), loaded from Google Fonts inside `index.css`.

Note: `design-system/mia-construction/MASTER.md` contains an older generated spec (blue/orange + EB Garamond/Lato). The **actual implementation in `index.css` is the source of truth** — the dark/gold Cinzel theme.

## Company facts (single source of truth: `src/lib/constants.ts`)

- Name: Mia8 Construction, Inc.
- Phone: (360) 220-7610
- Email: mia8construction@gmail.com
- Service area: Whatcom County, WA · Point Roberts, WA

Always import from `lib/constants.ts` rather than hardcoding contact info.

## Conventions

- Functional components, named exports (`export function Foo()`), no default export except `App`.
- Tailwind utility classes only — no CSS modules, no styled-components.
- Section components are self-contained and composed in `LandingPage.tsx`; keep new sections to that pattern.
- Respect `prefers-reduced-motion` (already wired globally in `index.css`) when adding motion.
