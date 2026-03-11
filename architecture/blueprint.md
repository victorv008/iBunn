# iBunn Website Redesign — Blueprint

## North Star
Transform iBunn's single-page template website into a multi-page, premium consulting website that rivals the polish of top-tier firms while preserving iBunn's Swedish identity, warmth, and brand colors.

---

## 1. Proposed Site Structure

### Pages
| Page | Route | Purpose |
|------|-------|---------|
| Hem (Home) | `/` | Hero, services overview, trust signals, CTA |
| Om oss (About) | `/om-oss` | Company story, values, team, why iBunn |
| Tjanster (Services) | `/tjanster` | All 4 services with detailed descriptions |
| Kontakt (Contact) | `/kontakt` | Contact form, email, address, embedded map |

### Navigation
- **Desktop:** Sticky header — logo left, nav center (Hem, Om oss, Tjanster, Kontakt), CTA button right ("Kontakta oss")
- **Mobile:** Hamburger menu with full-screen overlay
- **Scroll behavior:** Hides on scroll down, reveals on scroll up

---

## 2. Design Direction

### Brand Identity (Preserved + Elevated)

**Colors:**
| Role | Value | Usage |
|------|-------|-------|
| Dark Surface | `#2D2D3F` (dark charcoal/navy) | Header, hero, footer, dark sections |
| Light Surface | `#FFFFFF` (white) | Main content backgrounds |
| Light Alt | `#F5F5F5` (light gray) | Alternating section backgrounds |
| Accent | `#006663` (teal/cyan) | Active nav highlights, CTAs, hover states, links |
| Text on Dark | `#FFFFFF` (white) | All text on dark surfaces |
| Text Primary | `#1C1C1E` (near-black) | Body text on light surfaces |
| Text Secondary | `#6B6B6B` (gray) | Subtitles, meta text |

**Typography:**
| Role | Font | Fallback |
|------|------|----------|
| Headings | Cormorant Garamond (serif) | Georgia, serif |
| Body | Open Sans (sans-serif) | Helvetica, sans-serif |

- Fluid scaling via `clamp()` — no jarring breakpoint jumps
- H1: `clamp(2.5rem, 5vw + 1rem, 5rem)`
- Body: `clamp(1rem, 1vw + 0.75rem, 1.25rem)`
- Negative letter-spacing on large headings for refined feel

**Imagery Style:**
- Professional, clean photos (IT/tech context where possible)
- Dark overlays on hero images for text contrast
- Service icons or illustrations for the services section

---

## 3. Page-by-Page Layout

### HOME (/)
1. **Hero Section** — Full viewport, dark background image/gradient, large serif heading "VI AR iBunn", subtitle about IT consulting expertise, CTA button "Hur kan vi hjalpa dig?"
2. **Services Overview** — 4 cards in a 2x2 grid (icon + title + short description + "Las mer" link), teal/cyan accent on hover
3. **Why iBunn / Values** — 3-column layout: Sakerhet, Engagemang, Proaktivitet with icons and short descriptions
4. **Trust Section** — Simple text block about public/private sector experience, PDL/OSL compliance
5. **CTA Band** — Full-width dark section with "Redo att borja?" + contact button
6. **Footer**

### ABOUT (/om-oss)
1. **Hero** — Smaller page hero with heading "Om oss"
2. **Company Story** — Two-column: text left, image right
3. **Core Values** — 3 value cards (Sakerhet, Engagemang, Proaktivitet)
4. **Guiding Principles** — Samarbete, Langsiktighet — how iBunn works with clients
5. **CTA Band**
6. **Footer**

### SERVICES (/tjanster)
1. **Hero** — Smaller page hero with heading "Vara tjanster"
2. **Service Blocks** — Alternating left-right layout (image + text), one per service:
   - Saker fildelning (Secure File Sharing)
   - IT-Arkitektur (IT Architecture)
   - Systemutveckling (System Development)
   - Projektledning (Project Management)
3. **CTA Band**
4. **Footer**

### CONTACT (/kontakt)
1. **Hero** — Smaller page hero "Kontakta oss"
2. **Two-column layout:**
   - Left: Contact form (name, email, phone, message, submit)
   - Right: Address, email, embedded Google Maps
3. **Footer**

---

## 4. Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js (React) | SSG/SSR, image optimization, routing, performance |
| Styling | Tailwind CSS | Rapid development, consistent spacing, responsive utilities |
| Language | TypeScript | Type safety, better DX |
| Fonts | Google Fonts (Open Sans + Cormorant Garamond) | Free, fast CDN, existing brand fonts |
| Icons | Lucide React or Heroicons | Clean, modern, lightweight |
| Forms | React Hook Form + Email (Resend or Formspree) | Simple contact form handling |
| Deployment | Vercel | Free tier, perfect Next.js integration, global CDN |
| Analytics | TBD | Can add later |

---

## 5. Interaction & Animation

- All transitions: 0.25s–0.35s `ease-in-out`
- **Scroll animations:** Subtle fade-up on section entry (IntersectionObserver)
- **Card hover:** 1.05x scale + shadow elevation
- **CTA hover:** Background color shift with smooth transition
- **Nav:** `translateY(-100%)` hide on scroll down, reveal on scroll up
- **Mobile menu:** Full-screen overlay with fade-in
- `prefers-reduced-motion: reduce` respected for all animations

---

## 6. Responsive Breakpoints

| Name | Width | Tailwind |
|------|-------|----------|
| Mobile | < 640px | default |
| Tablet | 640px | `sm:` |
| Desktop | 1024px | `lg:` |
| Wide | 1280px | `xl:` |

- Content max-width: 1200px centered
- Page margins: 16px (mobile), 40px (tablet), 80px (desktop)
- 12-column grid where needed

---

## 7. Content (Swedish)

All content preserved from existing site, expanded for new pages:
- **Home:** Existing hero text + expanded service summaries
- **About:** Expanded from footer description, values from existing copy
- **Services:** Existing 4 service descriptions, slightly expanded
- **Contact:** Existing address + email, new contact form

---

## 8. Performance Targets

- Lighthouse score: 90+ across all categories
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total page weight: < 1MB
- WebP/AVIF images, lazy loading below fold
- Font display: swap

---

## 9. Phases

### Phase A: Foundation
- [ ] Next.js project setup with TypeScript + Tailwind
- [ ] Global layout (nav + footer)
- [ ] Color tokens + typography system
- [ ] Responsive grid utilities

### Phase B: Pages
- [ ] Home page (all sections)
- [ ] About page
- [ ] Services page
- [ ] Contact page with working form

### Phase C: Polish
- [ ] Animations and transitions
- [ ] Mobile optimization
- [ ] SEO (meta tags, Open Graph, sitemap)
- [ ] Accessibility audit (WCAG 2.1 AA)

### Phase D: Deploy
- [ ] Vercel deployment
- [ ] Domain configuration (if applicable)
- [ ] Final testing across browsers/devices
