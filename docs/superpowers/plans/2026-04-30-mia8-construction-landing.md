# Mia 8 Constructions Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a two-page React landing site for Mia 8 Constructions — a full conversion landing page (`/`) and an above-fold one-pager (`/go`) — using a dark/premium aesthetic with gold accents.

**Architecture:** Vite + React 19 + TypeScript + Tailwind v4 for styling, React Router v7 for routing, Motion v12 for animations, Lucide React for icons. All content is static; no backend. Design tokens live in `index.css` via Tailwind `@theme`. Components are split by responsibility: `sections/` for page sections, `layout/` for nav/footer, `ui/` for reusable primitives, `data/` for static content.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, React Router v7, Motion v12 (installed), Lucide React

**Spec:** `docs/superpowers/specs/2026-04-30-mia8-construction-landing-design.md`

---

## File Map

```
src/
  main.tsx                          ← wrap app in BrowserRouter
  App.tsx                           ← Routes: / and /go
  App.css                           ← DELETE (replaced by Tailwind)
  index.css                         ← REPLACE: Tailwind v4 + design tokens + Google Fonts
  lib/
    constants.ts                    ← CREATE: phone, email, company name
  data/
    services.ts                     ← CREATE: 5 services (name, desc, icon, image URL)
  components/
    ui/
      Button.tsx                    ← CREATE: reusable CTA button (variants: gold, outline)
      Badge.tsx                     ← CREATE: small label badge (gold border)
      SectionWrapper.tsx            ← CREATE: section container (padding + max-w-7xl)
      ServiceCard.tsx               ← CREATE: image + title + description card
    layout/
      Navbar.tsx                    ← CREATE: sticky nav, mobile hamburger
      Footer.tsx                    ← CREATE: 3-column dark footer
    sections/
      Hero.tsx                      ← CREATE: full-viewport hero with Unsplash bg
      Services.tsx                  ← CREATE: responsive services grid
      WhyUs.tsx                     ← CREATE: 3 trust pillars on dark bg
      Locations.tsx                 ← CREATE: Point Roberts highlight section
      CTABanner.tsx                 ← CREATE: gradient CTA with phone number
  pages/
    LandingPage.tsx                 ← CREATE: assembles all sections
    OnePager.tsx                    ← CREATE: above-fold single-screen page
vite.config.ts                      ← MODIFY: add @tailwindcss/vite plugin
index.html                          ← MODIFY: update <title>
```

---

## Task 0: Install dependencies

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `vite.config.ts`

- [ ] **Step 1: Install packages**

```bash
cd /home/kleinad/projects/mia-eigth-construction/mia-construction
npm install tailwindcss @tailwindcss/vite react-router-dom lucide-react
```

Expected output: `added N packages` with no errors.

- [ ] **Step 2: Add Tailwind plugin to vite.config.ts**

Replace the full contents of `vite.config.ts` with:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 3: Update page title in index.html**

In `index.html`, change:
```html
<title>Vite + React + TS</title>
```
to:
```html
<title>Mia 8 Constructions — Whatcom County & Point Roberts, WA</title>
```

- [ ] **Step 4: Verify dev server starts**

```bash
npm run dev
```

Expected: server starts on `http://localhost:5173` with no errors.

- [ ] **Step 5: Commit**

```bash
git init
git add vite.config.ts package.json package-lock.json index.html
git commit -m "feat: install tailwind v4, react-router-dom, lucide-react"
```

---

## Task 1: Global styles — design tokens, fonts, base reset

**Files:**
- Replace: `src/index.css`
- Delete: `src/App.css`

- [ ] **Step 1: Replace src/index.css**

Replace the full contents with:

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Josefin+Sans:wght@300;400;600&display=swap');

@import "tailwindcss";

@theme {
  /* Colors */
  --color-dark:         #1C1917;
  --color-dark-deeper:  #0C0A09;
  --color-dark-mid:     #292524;
  --color-light:        #FAFAF9;
  --color-gold:         #A16207;
  --color-gold-deco:    #CA8A04;
  --color-silver:       #94A3B8;
  --color-muted-dark:   #44403C;
  --color-border-light: #E8E5E1;

  /* Fonts */
  --font-cinzel:  'Cinzel', serif;
  --font-josefin: 'Josefin Sans', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-josefin);
  background-color: #1C1917;
  color: #FAFAF9;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  width: 100%;
  min-height: 100dvh;
}

/* Focus ring */
:focus-visible {
  outline: 2px solid #A16207;
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Delete src/App.css**

```bash
rm /home/kleinad/projects/mia-eigth-construction/mia-construction/src/App.css
```

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git rm src/App.css
git commit -m "feat: replace index.css with tailwind v4 design tokens and fonts"
```

---

## Task 2: Constants and services data

**Files:**
- Create: `src/lib/constants.ts`
- Create: `src/data/services.ts`

- [ ] **Step 1: Create src/lib/constants.ts**

```ts
export const COMPANY_NAME = 'Mia 8 Constructions'
export const PHONE = '(360) 220-7610'
export const PHONE_HREF = 'tel:+13602207610'
export const EMAIL = 'mia8construction@gmail.com'
export const EMAIL_HREF = 'mailto:mia8construction@gmail.com'
export const LOCATIONS = ['Whatcom County, WA', 'Point Roberts, WA']
```

- [ ] **Step 2: Create src/data/services.ts**

```ts
import {
  HardHat,
  PaintBucket,
  LayoutPanelLeft,
  Layers,
  Trees,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  name: string
  description: string
  icon: LucideIcon
  imageUrl: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'roofing',
    name: 'Roof Repair & Replacement',
    description: 'Full roof work from minor repairs to complete replacement.',
    icon: HardHat,
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Roofers working on a residential roof',
  },
  {
    id: 'siding',
    name: 'Siding Repair & Installation',
    description: 'All siding types — repairs and new installation.',
    icon: LayoutPanelLeft,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'House with new siding installation',
  },
  {
    id: 'painting',
    name: 'Interior & Exterior Painting',
    description: 'Residential painting services inside and out.',
    icon: PaintBucket,
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Painter applying exterior paint to a house',
  },
  {
    id: 'flooring',
    name: 'Flooring',
    description: 'Flooring installation and repair for any room.',
    icon: Layers,
    imageUrl: 'https://images.unsplash.com/photo-1558618047-f4e60c43d9b5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hardwood flooring installation in progress',
  },
  {
    id: 'decks',
    name: 'Deck Building & Repair',
    description: 'Custom decks built and repaired to last.',
    icon: Trees,
    imageUrl: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Finished wooden deck on a residential home',
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants.ts src/data/services.ts
git commit -m "feat: add constants and services data"
```

---

## Task 3: Shared UI primitives — Button, Badge, SectionWrapper

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/SectionWrapper.tsx`

- [ ] **Step 1: Create src/components/ui/Button.tsx**

```tsx
import { motion } from 'motion/react'
import type { AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'gold' | 'outline'
}

export function Button({ variant = 'gold', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-7 py-3.5 font-josefin font-semibold text-base tracking-widest uppercase transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2'

  const variants = {
    gold: 'bg-gold-deco text-dark hover:bg-gold',
    outline: 'border border-gold-deco text-gold-deco hover:bg-gold-deco hover:text-dark',
  }

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...(props as object)}
    >
      {children}
    </motion.a>
  )
}
```

- [ ] **Step 2: Create src/components/ui/Badge.tsx**

```tsx
interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 border border-gold text-gold-deco font-josefin font-semibold text-xs tracking-[0.2em] uppercase ${className}`}
    >
      {children}
    </span>
  )
}
```

- [ ] **Step 3: Create src/components/ui/SectionWrapper.tsx**

```tsx
interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full px-4 py-20 md:px-8 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Button.tsx src/components/ui/Badge.tsx src/components/ui/SectionWrapper.tsx
git commit -m "feat: add Button, Badge, SectionWrapper UI primitives"
```

---

## Task 4: ServiceCard component

**Files:**
- Create: `src/components/ui/ServiceCard.tsx`

- [ ] **Step 1: Create src/components/ui/ServiceCard.tsx**

```tsx
import { motion } from 'motion/react'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.imageAlt}
          width={800}
          height={600}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 border-b-2 border-transparent group-hover:border-gold-deco transition-colors duration-300">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={16} className="text-gold" aria-hidden="true" />
          <h3 className="font-cinzel text-lg text-dark-deeper leading-tight">
            {service.name}
          </h3>
        </div>
        <p className="font-josefin font-light text-sm text-muted-dark leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/ServiceCard.tsx
git commit -m "feat: add ServiceCard component with scroll animation"
```

---

## Task 5: Navbar

**Files:**
- Create: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Create src/components/layout/Navbar.tsx**

```tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Menu, X } from 'lucide-react'
import { COMPANY_NAME, PHONE, PHONE_HREF } from '../../lib/constants'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-dark/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-16 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-cinzel font-bold text-xl text-gold-deco tracking-wider">
          {COMPANY_NAME}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-josefin font-light text-xs tracking-[0.18em] uppercase text-silver hover:text-gold-deco transition-colors duration-150"
            >
              {label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 px-5 py-2 border border-gold-deco text-gold-deco font-josefin font-semibold text-xs tracking-widest uppercase hover:bg-gold-deco hover:text-dark transition-colors duration-150"
            aria-label={`Call us at ${PHONE}`}
          >
            <Phone size={14} aria-hidden="true" />
            {PHONE}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-silver hover:text-gold-deco transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark border-t border-muted-dark px-4 pb-6 pt-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 font-josefin text-sm tracking-[0.15em] uppercase text-silver hover:text-gold-deco border-b border-muted-dark/40 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-5 flex items-center justify-center gap-2 py-3 bg-gold-deco text-dark font-josefin font-semibold text-sm tracking-widest uppercase"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone size={16} aria-hidden="true" />
              {PHONE}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger menu"
```

---

## Task 6: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create src/components/layout/Footer.tsx**

```tsx
import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY_NAME, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATIONS } from '../../lib/constants'
import { services } from '../../data/services'

export function Footer() {
  return (
    <footer className="bg-dark-deeper pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-muted-dark/40">

          {/* Services */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold-deco text-sm tracking-[0.2em] uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id} className="font-josefin font-light text-sm text-silver">
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold-deco text-sm tracking-[0.2em] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <Phone size={14} className="text-gold shrink-0" aria-hidden="true" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-3 font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors"
                >
                  <Mail size={14} className="text-gold shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-cinzel font-semibold text-gold-deco text-sm tracking-[0.2em] uppercase mb-6">
              Areas Served
            </h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc} className="flex items-center gap-2 font-josefin font-light text-sm text-silver">
                  <MapPin size={12} className="text-gold shrink-0" aria-hidden="true" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <p className="mt-8 text-center font-josefin font-light text-xs text-muted-dark tracking-wide">
          © {new Date().getFullYear()} {COMPANY_NAME}. Whatcom County & Point Roberts, WA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: add Footer with services, contact, and locations columns"
```

---

## Task 7: Hero section

**Files:**
- Create: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Create src/components/sections/Hero.tsx**

```tsx
import { motion } from 'motion/react'
import { Phone, Mail } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { PHONE, PHONE_HREF, EMAIL_HREF } from '../../lib/constants'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80'

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center bg-dark overflow-hidden">
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        width={1600}
        height={900}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Badge className="mb-8">
            Point Roberts · Whatcom County, WA
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-cinzel font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Built to Last.
          <br />
          <span className="text-gold-deco">Built for You.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-josefin font-light text-lg md:text-xl text-silver leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Roofing, siding, painting, flooring & decks — trusted contractors
          in Whatcom County and Point Roberts, WA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={PHONE_HREF} aria-label={`Call us at ${PHONE}`}>
            <Phone size={16} aria-hidden="true" />
            Call {PHONE}
          </Button>
          <a
            href={EMAIL_HREF}
            className="font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors tracking-wide underline underline-offset-4"
          >
            <Mail size={14} className="inline mr-1.5 align-middle" aria-hidden="true" />
            or email us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent mx-auto" />
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add Hero section with animated entrance and CTA"
```

---

## Task 8: Services section

**Files:**
- Create: `src/components/sections/Services.tsx`

- [ ] **Step 1: Create src/components/sections/Services.tsx**

```tsx
import { motion } from 'motion/react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { ServiceCard } from '../ui/ServiceCard'
import { services } from '../../data/services'

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-light">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="text-center mb-14"
      >
        <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-dark-deeper mb-4">
          Our Services
        </h2>
        <div className="w-10 h-0.5 bg-gold-deco mx-auto" aria-hidden="true" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "feat: add Services section with responsive grid"
```

---

## Task 9: Why Us section

**Files:**
- Create: `src/components/sections/WhyUs.tsx`

- [ ] **Step 1: Create src/components/sections/WhyUs.tsx**

```tsx
import { motion } from 'motion/react'
import { MapPin, Star, DollarSign } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'

const PILLARS = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    body: 'Proud to serve Whatcom County & Point Roberts, WA. We know the area, the climate, and the community.',
  },
  {
    icon: Star,
    title: 'Quality Craftsmanship',
    body: 'Every project done right, on time. We stand behind our work with lasting results you can count on.',
  },
  {
    icon: DollarSign,
    title: 'Honest Pricing',
    body: 'Free estimates with no hidden fees. Transparent quotes so you always know what to expect.',
  },
]

export function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="text-center mb-14"
      >
        <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-gold-deco mb-4">
          Why Mia 8 Constructions
        </h2>
        <div className="w-10 h-0.5 bg-gold mx-auto" aria-hidden="true" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PILLARS.map(({ icon: Icon, title, body }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-5"
          >
            <div className="w-14 h-14 border border-gold flex items-center justify-center shrink-0">
              <Icon size={24} className="text-gold-deco" aria-hidden="true" />
            </div>
            <h3 className="font-cinzel font-semibold text-xl text-white">
              {title}
            </h3>
            <p className="font-josefin font-light text-base text-silver leading-relaxed">
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/WhyUs.tsx
git commit -m "feat: add WhyUs section with 3 trust pillars"
```

---

## Task 10: Locations section (Point Roberts highlight)

**Files:**
- Create: `src/components/sections/Locations.tsx`

- [ ] **Step 1: Create src/components/sections/Locations.tsx**

```tsx
import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { Badge } from '../ui/Badge'

const LOCATION_CARDS = [
  {
    name: 'Point Roberts, WA',
    description:
      'An exclave community accessible by land only through Canada. We are one of the few contractors who reliably serve Point Roberts residents.',
    highlight: true,
  },
  {
    name: 'Whatcom County, WA',
    description:
      'Serving homeowners and property owners throughout Whatcom County with quality construction services.',
    highlight: false,
  },
]

export function Locations() {
  return (
    <SectionWrapper id="locations" className="bg-light">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <Badge className="mb-6">Point Roberts Specialist</Badge>
          <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-dark-deeper mb-6">
            Proudly Serving Point Roberts
          </h2>
          <div className="w-10 h-0.5 bg-gold-deco mx-auto mb-6" aria-hidden="true" />
          <p className="font-josefin font-light text-base text-muted-dark leading-relaxed">
            Point Roberts is a unique community that deserves reliable, local contractors. 
            We are proud to be a dependable choice for homeowners in this exceptional 
            part of Washington State — providing the same quality and commitment we bring 
            to all of Whatcom County.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {LOCATION_CARDS.map(({ name, description, highlight }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className={`p-8 border ${
              highlight
                ? 'border-gold-deco bg-white shadow-md'
                : 'border-border-light bg-white'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin
                size={18}
                className={highlight ? 'text-gold-deco' : 'text-silver'}
                aria-hidden="true"
              />
              <h3 className="font-cinzel font-semibold text-lg text-dark-deeper">
                {name}
              </h3>
            </div>
            <p className="font-josefin font-light text-sm text-muted-dark leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Locations.tsx
git commit -m "feat: add Locations section with Point Roberts highlight"
```

---

## Task 11: CTA Banner

**Files:**
- Create: `src/components/sections/CTABanner.tsx`

- [ ] **Step 1: Create src/components/sections/CTABanner.tsx**

```tsx
import { motion } from 'motion/react'
import { Phone, Mail } from 'lucide-react'
import { Button } from '../ui/Button'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../lib/constants'

export function CTABanner() {
  return (
    <section
      className="bg-gradient-to-r from-dark to-dark-mid py-20 px-4 md:px-8 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-gold-deco mb-4">
            Ready to Start Your Project?
          </h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mb-8" aria-hidden="true" />

          <p className="font-josefin font-light text-lg text-silver mb-10">
            Call us for a free estimate. No hidden fees, no surprises.
          </p>

          <div className="flex flex-col items-center gap-5">
            <Button href={PHONE_HREF} aria-label={`Call us at ${PHONE}`} className="text-lg px-10 py-4">
              <Phone size={18} aria-hidden="true" />
              Call Now — {PHONE}
            </Button>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2 font-josefin font-light text-sm text-silver hover:text-gold-deco transition-colors tracking-wide"
            >
              <Mail size={14} aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/CTABanner.tsx
git commit -m "feat: add CTA Banner section with phone and email"
```

---

## Task 11b: Contact Form section (static, no submission)

**Files:**
- Create: `src/components/sections/ContactForm.tsx`

- [ ] **Step 1: Create src/components/sections/ContactForm.tsx**

```tsx
import { SectionWrapper } from '../ui/SectionWrapper'

export function ContactForm() {
  return (
    <SectionWrapper id="contact-form" className="bg-dark">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="font-cinzel font-semibold text-4xl md:text-5xl text-gold-deco mb-4">
          Get in Touch
        </h2>
        <div className="w-10 h-0.5 bg-gold mx-auto mb-6" aria-hidden="true" />
        <p className="font-josefin font-light text-base text-silver leading-relaxed">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form
        className="max-w-2xl mx-auto flex flex-col gap-5"
        aria-label="Contact form"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="font-josefin font-semibold text-xs text-silver tracking-[0.15em] uppercase"
          >
            Name <span aria-hidden="true" className="text-gold">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            className="
              w-full px-4 py-3 bg-dark-mid border border-muted-dark/60
              font-josefin font-light text-base text-white placeholder:text-muted-dark
              focus:outline-none focus:border-gold transition-colors duration-150
            "
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-phone"
            className="font-josefin font-semibold text-xs text-silver tracking-[0.15em] uppercase"
          >
            Phone Number <span aria-hidden="true" className="text-gold">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(360) 000-0000"
            className="
              w-full px-4 py-3 bg-dark-mid border border-muted-dark/60
              font-josefin font-light text-base text-white placeholder:text-muted-dark
              focus:outline-none focus:border-gold transition-colors duration-150
            "
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="font-josefin font-semibold text-xs text-silver tracking-[0.15em] uppercase"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Describe your project or ask a question..."
            className="
              w-full px-4 py-3 bg-dark-mid border border-muted-dark/60
              font-josefin font-light text-base text-white placeholder:text-muted-dark
              focus:outline-none focus:border-gold transition-colors duration-150 resize-y
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            self-start flex items-center gap-2 px-8 py-3.5
            bg-gold-deco text-dark font-josefin font-semibold text-sm tracking-widest uppercase
            hover:bg-gold transition-colors duration-150 cursor-pointer
            focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2
          "
        >
          Send Message
        </button>
      </form>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Add `--color-dark-mid` token to index.css if not present**

Open `src/index.css` and verify `--color-dark-mid: #292524;` exists inside `@theme { }`. If missing, add it.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ContactForm.tsx
git commit -m "feat: add static ContactForm section (name, phone, message)"
```

---

## Task 12: LandingPage assembly + routing

**Files:**
- Create: `src/pages/LandingPage.tsx`
- Replace: `src/App.tsx`
- Modify: `src/main.tsx`

- [ ] **Step 1: Create src/pages/LandingPage.tsx**

```tsx
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { WhyUs } from '../components/sections/WhyUs'
import { Locations } from '../components/sections/Locations'
import { CTABanner } from '../components/sections/CTABanner'
import { ContactForm } from '../components/sections/ContactForm'

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Locations />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Replace src/App.tsx**

```tsx
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { OnePager } from './pages/OnePager'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/go" element={<OnePager />} />
    </Routes>
  )
}
```

- [ ] **Step 3: Modify src/main.tsx to add BrowserRouter**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

- [ ] **Step 4: Verify landing page renders**

```bash
npm run dev
```

Open `http://localhost:5173` and verify:
- Navbar appears at top
- Hero section is full viewport with dark bg and gold text
- Services grid shows 5 cards
- WhyUs section has dark bg with gold heading
- Locations section shows Point Roberts highlighted
- CTA Banner appears
- Footer shows 3 columns

- [ ] **Step 5: Commit**

```bash
git add src/pages/LandingPage.tsx src/App.tsx src/main.tsx
git commit -m "feat: assemble LandingPage and wire up React Router"
```

---

## Task 13: One-Pager `/go`

**Files:**
- Create: `src/pages/OnePager.tsx`

- [ ] **Step 1: Create src/pages/OnePager.tsx**

```tsx
import { Phone, Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { COMPANY_NAME, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '../lib/constants'
import { services } from '../data/services'

export function OnePager() {
  return (
    <main className="min-h-dvh bg-dark flex flex-col overflow-hidden">
      {/* Header bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-muted-dark/40 shrink-0">
        <span className="font-cinzel font-bold text-lg text-gold-deco tracking-wider">
          {COMPANY_NAME}
        </span>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 font-josefin font-semibold text-sm text-white hover:text-gold-deco transition-colors"
          aria-label={`Call us at ${PHONE}`}
        >
          <Phone size={14} className="text-gold" aria-hidden="true" />
          {PHONE}
        </a>
      </header>

      {/* Main content — everything above fold */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center gap-6">

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-gold font-josefin font-semibold text-xs tracking-[0.2em] uppercase"
        >
          <MapPin size={12} aria-hidden="true" />
          Point Roberts · Whatcom County, WA
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="font-cinzel font-bold text-3xl md:text-4xl text-white leading-tight max-w-xl"
        >
          Your Local Contractor in
          <span className="text-gold-deco"> Point Roberts</span> &amp; Whatcom County
        </motion.h1>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 w-full max-w-sm"
          role="list"
          aria-label="Our services"
        >
          {services.map(({ id, name, icon: Icon }) => (
            <div
              key={id}
              role="listitem"
              className="flex flex-col items-center gap-2 p-3 border border-muted-dark/50 hover:border-gold/40 transition-colors"
            >
              <Icon size={20} className="text-gold-deco" aria-hidden="true" />
              <span className="font-josefin font-light text-[11px] text-silver leading-tight text-center tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 px-8 py-4 bg-gold-deco text-dark font-cinzel font-bold text-lg tracking-wider hover:bg-gold transition-colors"
            aria-label={`Call us at ${PHONE}`}
          >
            <Phone size={18} aria-hidden="true" />
            {PHONE}
          </a>
          <a
            href={EMAIL_HREF}
            className="flex items-center gap-2 font-josefin font-light text-xs text-silver hover:text-gold-deco transition-colors tracking-wide"
          >
            <Mail size={12} aria-hidden="true" />
            {EMAIL}
          </a>
        </motion.div>

      </div>
    </main>
  )
}
```

- [ ] **Step 2: Verify one-pager**

Open `http://localhost:5173/go` and verify:
- Everything is visible without scrolling on a 768px+ viewport
- Company name top-left, phone top-right
- Headline with "Point Roberts" in gold
- 5 services in a 3-col grid (2 rows)
- Large gold CTA button with phone number
- Email link below button
- No images, no nav, no footer

- [ ] **Step 3: Commit**

```bash
git add src/pages/OnePager.tsx
git commit -m "feat: add OnePager /go route — above-fold conversion page"
```

---

## Task 14: TypeScript build check + final cleanup

**Files:**
- Delete: old template assets (optional)

- [ ] **Step 1: Run TypeScript type check**

```bash
npm run build
```

Expected: clean build, no TypeScript errors, output in `dist/`.

- [ ] **Step 2: Fix any TS errors that appear**

Common issues to watch for:
- Missing `React` import in files using JSX (not needed in React 19 with new JSX transform)
- `LucideIcon` type import — ensure imported as `import type { LucideIcon } from 'lucide-react'`
- `motion.a` props — if TS complains about `href` on `motion.a`, cast with `{...(props as object)}`

- [ ] **Step 3: Run ESLint**

```bash
npm run lint
```

Fix any warnings about missing `alt` texts or unused imports.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Mia 8 Constructions landing page"
```

---

## Self-Review Checklist

- [x] **Task 0** installs all packages from spec (Tailwind v4, React Router v7, Lucide)
- [x] **Task 1** sets up all design tokens from spec (colors, fonts, base reset)
- [x] **Task 2** covers all 5 services and all constants (phone, email, locations)
- [x] **Tasks 3–4** cover all UI primitives needed by sections
- [x] **Tasks 5–6** cover Navbar (sticky + mobile) and Footer (3-col)
- [x] **Tasks 7–11** cover all 5 landing page sections: Hero, Services, WhyUs, Locations, CTABanner
- [x] **Task 12** wires routing and assembles the landing page
- [x] **Task 13** implements the `/go` one-pager (above-fold, <20s sell)
- [x] **Task 11b** covers ContactForm (name, phone, textarea — static, no submission logic)
- [x] **Task 14** ensures clean TS build
- [x] Point Roberts emphasis: Badge in Hero, highlighted card in Locations, headline in OnePager
- [x] Phone `(360) 220-7610` in: Navbar, Hero, CTABanner, Footer, OnePager
- [x] All phone links use `href="tel:+13602207610"` for mobile tap-to-call
- [x] `prefers-reduced-motion` handled in global CSS
- [x] No emoji as icons — all Lucide SVGs
- [x] `alt` text on all meaningful images
