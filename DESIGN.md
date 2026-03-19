# Design System: iBunn Modern Landing Page V1
**Project ID:** `projects/14721102600103056306`

---

## 1. Visual Theme & Atmosphere

A dark, professional Nordic IT consulting aesthetic. The canvas is a deep teal-charcoal — not pure black, but a rich dark tone with a subtle blue-green undertone that feels modern and tech-forward without being cold. The overall mood is **authoritative, clean, and trustworthy** — a serious consultancy that inspires confidence. Imagery is woven into the layout with tech-themed photographs (circuit boards, glowing blue network lines, digital interfaces) that reinforce the technology narrative.

---

## 2. Color Palette & Roles

| Color | Hex | Role |
|---|---|---|
| Deep Teal-Charcoal | `#0D1B2A` / `#1B2838` | Primary background for hero, services, footer sections |
| Custom Purple-Navy | `#32307E` | Stitch theme accent — used for subtle tonal variation |
| White | `#FFFFFF` | Form/consultation section background, primary text on dark |
| Off-White / Light Gray | `#F0F0F0` | Secondary text, muted labels on dark backgrounds |
| Teal Accent | `#2EC4B6` / `#3AAFA9` | CTA buttons, hover highlights, accent borders |
| Dark Surface | `#162230` | Card backgrounds on dark sections, slightly elevated from canvas |
| Muted Gray | `#8899AA` | Secondary body text, descriptions on dark backgrounds |
| Charcoal Text | `#2D3436` | Body text on light/white backgrounds |
| Input Border | `#CCCCCC` | Form field borders on white sections |

---

## 3. Typography Rules

- **Font Family:** Space Grotesk — used consistently across headings, body, navigation, and form labels
- **Hero Headline (H1):** Bold (700), large (~40-48px), uppercase: "VI AR iBunn"
- **Section Headings (H2):** Semi-bold to Bold (600-700), ~28-32px, title case: "Vara Specialistomraden", "Boka en Konsultation"
- **Card Titles (H3):** Bold (700), ~16-18px: "Saker forandring pa djup", "IT-Arkitektur"
- **Body/Description:** Regular (400), 13-14px, muted color, generous line-height (1.6)
- **Hero Subtitle:** Regular (400), 14-16px, light/off-white color below the main headline
- **Navigation Links:** Medium (500), 13-14px, white, uppercase or title case
- **Form Labels:** Medium (500), 12-13px, charcoal on white background
- **Button Text:** Bold (700), 13-14px

---

## 4. Component Stylings

### Navigation
- Dark background matching the hero section, no visible border
- "iBunn" logo text left-aligned, white, bold
- Navigation links right-aligned: "Vara tjanster", "Kontakta oss"
- Clean and minimal — no background change on scroll, no hamburger visible at desktop

### Hero Section
- Full-width dark teal-charcoal background
- Tech-themed background image (blue glowing circuit lines, digital network patterns) with a dark overlay (~70-80% opacity)
  - ![Hero Background](C:\Users\Victor\.gemini\antigravity\brain\8e6a8d87-c9d7-4359-8112-04be379056b2\hero_background_1773878744029.png)
- Large uppercase headline: "VI AR iBunn"
- Subtitle describing the company as an IT consultancy focused on security, innovation, and strategic development
- One CTA button: "Upptack Vara Tjanster" — teal accent background, dark text, rounded corners (8px)

### Service Cards (Dark Background)
- Displayed in a 2x2 grid on the left side under "Vara Specialistomraden"
- Each card: small thumbnail image on the left or top, bold title, short description text
- Cards sit on the dark canvas with subtle differentiation (slightly lighter dark surface or thin border)
- Four services:
  - "Saker forandring pa djup" — security consulting with handshake imagery
    - ![Security Service](C:\Users\Victor\.gemini\antigravity\brain\8e6a8d87-c9d7-4359-8112-04be379056b2\service_security_1773878758231.png)
  - "IT-Arkitektur" — architecture with tech/holographic display imagery
    - ![IT Architecture](C:\Users\Victor\.gemini\antigravity\brain\8e6a8d87-c9d7-4359-8112-04be379056b2\service_architecture_1773878772577.png)
  - "Systemutveckling" — development with people at screens imagery
    - ![System Development](C:\Users\Victor\.gemini\antigravity\brain\8e6a8d87-c9d7-4359-8112-04be379056b2\service_development_1773878788660.png)
  - "Projektledning" — project management with meeting/whiteboard imagery
    - ![Project Management](C:\Users\Victor\.gemini\antigravity\brain\8e6a8d87-c9d7-4359-8112-04be379056b2\service_management_1773878803647.png)

### Service Detail Cards (Right Column, Dark Background)
- Larger format cards with prominent rectangular photos
- Bold white title below each photo
- Gray/muted description text
- Arranged vertically in a column

### Consultation Form ("Boka en Konsultation")
- White background section, creating strong contrast against the surrounding dark sections
- Heading in dark charcoal: "Boka en Konsultation"
- Input fields with light borders, rounded corners (6px):
  - "Foretags Namn" (Company Name)
  - "Email"
  - "Meddelande" (Message) — textarea
- Submit button: Dark background (#0D1B2A or similar), white text, "Skicka Forfragan", full-width or near-full-width, rounded (8px)

### Footer
- Dark background matching the primary canvas
- "iBunn" brand name centered or left-aligned
- Two columns: "Kontakt" and "Om Oss"
- Small copyright text at bottom: "(c) 2026 Bunn Consulting AB"
- Text in white/off-white, muted weight

---

## 5. Layout Principles

### Overall Structure
The page uses a **split-panel composition** on desktop:
- **Left column (~55-60%):** Hero section stacked above a services overview grid
- **Right column (~40-45%):** Service detail cards stacked above the consultation booking form
- **Footer:** Full-width across the bottom

### Spacing
- Base unit: 16px
- Section vertical padding: 48-80px
- Card gap: 16-24px
- Content max-width: ~1376px (matching Stitch canvas)
- Internal card padding: 16-24px
- Form field spacing: 12-16px between fields

### Grid
- Desktop: Two main columns side by side; service cards in 2x2 within the left column
- The right column stacks detail cards vertically with the form below
- Mobile: Single column stacked layout

### Depth & Elevation
- Flat design — no heavy shadows
- Cards differentiated from background through subtle background color shift or thin borders
- The white consultation form section creates natural elevation through color contrast alone
- No drop shadows on cards or buttons

---

## 6. Imagery & Photography Style

- **Hero background:** Abstract tech imagery — glowing blue circuit lines, network patterns, digital interfaces on a dark background
- **Service card photos:** Professional, warm-toned photography showing real people and business scenarios:
  - Handshakes (trust/partnership)
  - Holographic/tech displays (innovation)
  - People working at computers (development)
  - Meeting rooms and whiteboards (project management)
- Photos are rectangular with no rounded corners or minimal rounding

---

## 7. Brand Identity

- **Logo:** "iBunn" — simple text logotype, white on dark, bold weight
- **Language:** Swedish throughout
- **Company:** Bunn Consulting AB
- **Tagline:** "VI AR iBunn" — "IT-konsultforetag som formar framtiden genom sakerhet, innovation och strategisk utveckling"
- **Services:** Saker forandring pa djup, IT-Arkitektur, Systemutveckling, Projektledning
- **Contact:** hello@ibunn.se
- **CTA language:** "Upptack Vara Tjanster", "Skicka Forfragan", "Boka en Konsultation"
- **Design Theme (Stitch):** Dark mode, custom color #32307e, Space Grotesk font, 8px roundness, saturation level 2
