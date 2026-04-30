# Mia 8 Constructions — Landing Page Design Spec

**Date:** 2026-04-30
**Status:** Approved

---

## 1. Project Overview

Landing website for **Mia 8 Constructions**, a local general contractor serving Whatcom County and Point Roberts, WA. The site's single goal is to convert visitors into phone call leads.

**Primary CTA:** Call `(360) 220-7610`
**Secondary CTA:** Email `mia8construction@gmail.com`
**Language:** English
**Emphasis location:** Point Roberts, WA (must be highlighted throughout)

---

## 2. Pages & Routing

Two routes via React Router v7:

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Full Landing Page | Full conversion funnel, all sections |
| `/go` | One-Pager | Sells in <20 seconds, above-the-fold only |

---

## 3. Services

| Service | Description |
|---------|-------------|
| Roof Repair & Replacement | Full roof work, repairs to complete replacement |
| Siding Repair & Installation | All siding types, repair and new install |
| Interior & Exterior Painting | Residential painting inside and out |
| Flooring | Flooring installation and repair |
| Deck Building & Repair | Custom decks, repairs and rebuilds |

---

## 4. Design System

### 4.1 Style

**Approach:** Dark & Premium with alternating light sections. Dark sections anchor the page (hero, trust, footer); light sections breathe and aid readability (services, locations). No all-dark layout.

**Style category:** Trust & Authority (from ui-ux-pro-max)

### 4.2 Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Dark Background | `#1C1917` | Hero, Why Us, CTA Banner, Footer |
| Light Background | `#FAFAF9` | Services, Locations sections |
| Card Background | `#FFFFFF` | Service cards on light sections |
| Gold Accent | `#A16207` | Interactive elements, borders, badges (WCAG AA) |
| Gold Decorative | `#CA8A04` | Section titles on dark bg, decorative lines |
| Silver | `#94A3B8` | Secondary text, subtle borders |
| Dark Foreground | `#FAFAF9` | Body text on dark sections |
| Light Foreground | `#0C0A09` | Body text on light sections |
| Muted | `#44403C` | Secondary text on dark bg |
| Border Light | `#E8E5E1` | Dividers on light sections |
| Destructive | `#DC2626` | Error states (forms only) |

### 4.3 Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Heading | **Cinzel** | 400, 600, 700 | All H1–H3, nav logo |
| Body | **Josefin Sans** | 300, 400, 600 | Body text, labels, UI |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Josefin+Sans:wght@300;400;600&display=swap');
```

**Type scale:**
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `text-hero` | 56–72px | 700 Cinzel | Hero headline |
| `text-h2` | 36–48px | 600 Cinzel | Section titles |
| `text-h3` | 22–28px | 400 Cinzel | Card/subsection titles |
| `text-body` | 16–18px | 300–400 Josefin | Body copy |
| `text-label` | 12–13px | 600 Josefin | Labels, badges, nav items |
| `text-cta` | 16px | 600 Josefin | Button text |

### 4.4 Effects & Animation

- **Motion library:** Already installed (`motion` v12)
- Hero text: fade-in + translateY on load (300ms ease-out)
- Service cards: stagger entrance on scroll (50ms per card)
- CTA button: subtle scale on hover (1.03, 150ms)
- Section transitions: fade-in on scroll via IntersectionObserver
- All animations respect `prefers-reduced-motion`
- Duration range: 150–300ms for micro-interactions

### 4.5 Images

Source: **Unsplash** (free, no attribution required for use)

| Section | Query |
|---------|-------|
| Hero | `construction craftsmanship roof` or `roofing worker` |
| Roofing card | `roof shingles repair` |
| Siding card | `house siding installation` |
| Painting card | `house painting exterior` |
| Flooring card | `hardwood flooring installation` |
| Deck card | `wooden deck outdoor` |

All images: WebP format, `width`/`height` declared, `loading="lazy"` on below-fold.

---

## 5. Landing Page `/` — Section Breakdown

### Section 1: Navigation (Sticky)
- Background: `#1C1917` with slight blur on scroll (`backdrop-filter`)
- Left: Logo / "MIA 8" in Cinzel gold
- Right: Nav links (Services, Locations, Contact) + `Call Now` button (gold)
- Mobile: hamburger → slide-down menu
- Height: 64px desktop / 56px mobile

### Section 2: Hero
- **Background:** `#1C1917`, full viewport height (`min-h-dvh`)
- **Background image:** Unsplash construction photo, `object-fit: cover`, dark overlay (`bg-black/50`)
- **Content (centered):**
  - Badge: "Point Roberts · Whatcom County" (Josefin 600, gold border)
  - H1 in Cinzel: "Built to Last. Built for You." (white)
  - Subline in Josefin: "Roofing, siding, painting, flooring & decks — trusted contractors in Whatcom County and Point Roberts, WA."
  - CTA button: Gold bg, dark text, "Call (360) 220-7610"
  - Secondary link: "or email us" → mailto

### Section 3: Services
- **Background:** `#FAFAF9`
- H2 in Cinzel (dark): "Our Services"
- Gold decorative line under title (40px wide, 2px)
- 5 cards in responsive grid: 1 col mobile / 2 cols tablet (3+2) / 5 cols desktop (single row)
- Each card:
  - Unsplash image (aspect-ratio 4/3)
  - Service name in Cinzel
  - 1-line description in Josefin
  - Gold bottom border on hover

### Section 4: Why Choose Us
- **Background:** `#1C1917`
- H2 in Cinzel (gold): "Why Mia 8 Constructions"
- 3 trust pillars (icon + title + text):
  1. Local Expertise — "Proud to serve Whatcom County & Point Roberts, WA"
  2. Quality Craftsmanship — "Every project done right, on time"
  3. Honest Pricing — "Free estimates, no hidden fees"
- Icons: Lucide React SVGs (gold color)

### Section 5: Point Roberts Highlight
- **Background:** `#FAFAF9`
- Special emphasis section for Point Roberts (geographically isolated — strong differentiator)
- H2 in Cinzel: "Proudly Serving Point Roberts"
- Body: short paragraph about being a reliable contractor in this unique community
- Gold badge: "Point Roberts Specialist"
- Small grid: Whatcom County + Point Roberts as location cards with map-pin icon

### Section 6: CTA Banner
- **Background:** gradient `#1C1917` → `#292524` with gold decorative elements
- H2 in Cinzel (gold): "Ready to Start Your Project?"
- Large phone number: Cinzel 700 white, prominent
- Email line: Josefin, silver
- Single button: "Call Now — (360) 220-7610"

### Section 7: Footer
- **Background:** `#0C0A09` (deeper than hero)
- 3 columns: Services list / Contact info / Locations served
- Copyright line: "© 2026 Mia 8 Constructions. Whatcom County & Point Roberts, WA."
- No social media (not provided)

---

## 6. One-Pager `/go`

**Goal:** Everything visible above the fold. No scrolling required. Sells in <20 seconds.

**Layout:** Single viewport (`min-h-dvh`), dark background `#1C1917`

**Structure (top to bottom, tight spacing):**
1. **Header bar** (slim): Logo "MIA 8" + Phone number right-aligned
2. **Headline** (Cinzel, large): "Your Local Contractor in Point Roberts & Whatcom County"
3. **Services grid** (3 cols × 2 rows): Icon + name only (Lucide icon + Josefin label), gold accent
4. **Location badge**: "Point Roberts · Whatcom County, WA"
5. **CTA block** (centered, prominent):
   - Large button: "📞 Call (360) 220-7610" (gold bg, dark text, Cinzel)
   - Sub-line: "mia8construction@gmail.com"

**No nav, no scroll, no images** — pure speed and conversion.

---

## 7. Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 19 (installed) | UI framework |
| `motion` | 12 (installed) | Animations |
| `tailwindcss` | v4 | Styling |
| `@tailwindcss/vite` | v4 | Vite integration |
| `react-router-dom` | v7 | Routing (`/` and `/go`) |
| `lucide-react` | latest | SVG icons |

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Layout changes |
|-----------|-------|----------------|
| Mobile | 375px | Single column, stacked sections |
| Tablet | 768px | 2-col service grid, wider nav |
| Desktop | 1024px | Full layout, 5-col services |
| Wide | 1440px | Max-width container (`max-w-7xl`) |

---

## 9. Accessibility

- All images: `alt` text required
- Color contrast: minimum 4.5:1 for body text (WCAG AA)
- Gold `#A16207` on dark `#1C1917`: passes WCAG AA (5.2:1)
- Focus rings: visible, 2px gold
- Phone CTA: `<a href="tel:+13602207610">` — tappable on mobile
- `prefers-reduced-motion`: all animations disabled when active

---

## 10. Anti-Patterns to Avoid

- No emoji as icons (use Lucide SVGs)
- No hidden contact info
- No placeholder-only form labels
- No layout shift on image load (declare dimensions)
- No hover-only interactions on mobile
- Do not mix Cinzel and Josefin Sans at the same hierarchy level
