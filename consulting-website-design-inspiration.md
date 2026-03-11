# Consulting Website Design Inspiration Report
## Comprehensive Visual/UX Pattern Analysis

---

## TABLE OF CONTENTS

1. [BCG (Boston Consulting Group)](#1-bcg---boston-consulting-group)
2. [PwC](#2-pwc)
3. [Prophet](#3-prophet)
4. [frog (Capgemini Invent)](#4-frog-capgemini-invent)
5. [Thoughtworks](#5-thoughtworks)
6. [Goji Labs (Award-winning small agency)](#6-goji-labs)
7. [Futurice (Award-winning mid-size)](#7-futurice)
8. [Instrument (Award-winning digital agency)](#8-instrument)
9. [Cross-Site Pattern Summary & Recommendations](#9-cross-site-pattern-summary--recommendations)

---

## 1. BCG - Boston Consulting Group
**URL:** https://www.bcg.com/

### Hero Section
- Full-viewport ambient video hero (100vh) with dark overlay (`rgba(0,0,0,0.5)`)
- `.PageLead` component using a 12-column grid
- Content layered over cinematic video background
- Large serif headline scaling from 38px (mobile) up to 128px (1920px+)
- Padding dynamically calculated: `padding-top: calc(var(--header-height) + var(--nav-margin-block)*2)`

### Color Scheme
| Role | Color | Hex |
|------|-------|-----|
| Background Light | Light gray | `#F2F2F2` |
| Gray 300 | Medium gray | `#D4D4D4` |
| Primary Black | Near-black | `#212427` |
| Accent (Primary) | Bright green | `#7EF473` |
| Accent (Secondary) | Medium green | `#71DC68` |
| Green 500 | Deep green | `#197A56` |
| Green 700 | Dark green | `#0E3E1B` |
| Warm Neutral | Beige | `#DCD5CE` |
| Alert/Error | Red | `#D82216` |

### Typography
- **Headlines:** `henderson-bcg-headline` (custom serif, fallback: Cambria)
- **Body:** `henderson-bcg-sans` (custom sans-serif, fallback: Helvetica)
- **H1:** 38px mobile to 128px at 1920px, line-height 100-110%
- **H2:** 28px to 96px, line-height 100-120%
- **Body Large:** 15px to 24px, line-height 130%
- **Buttons:** 12px to 18px, uppercase, line-height 100%
- **Weight:** 300 (body), 700 (buttons/emphasis)

### Navigation
- Fixed/sticky header with CSS variable `--header-height`
- Dropdown support with semantic structure
- Dynamic margin adjustment for content below header

### Section Layouts
- 12-column grid system (`.ModuleGridLayout`)
- Module padding via CSS custom properties: `--modulePaddingTop`, `--modulePaddingBottom`
- Small padding: 20px, Large padding: 120px at 1440px+
- Content constrained to ~1760px at ultra-wide (1920px+): `calc(50% - 880px)`

### Card/Grid Designs
- Cards controlled by `[data-module-size=small|medium|large]` attributes
- CSS variable-driven backgrounds, borders, and header colors
- `--color-module-background`, `--color-module-border`, `--color-module-header`

### Animation Patterns
- **Arrow CTA animation:** `@keyframes global-button-arrow-animate` slides icon right over 0.35s ease-in-out
- **Underline reveal:** Links use `background-size: 210% 1px` gradient that slides on hover/focus
- **Button transitions:** Padding and background color transitions
- **Focus states:** Green-700 background with white text, white border + shadow halo on dark backgrounds
- **Loading spinner:** Rotating dot animation at -1.8s infinite

### Footer
- Follows same grid/padding system as content modules
- Inherits color and typography from base design system

### Premium Feel
- Restrained monochromatic palette with surgical green accent usage
- Generous whitespace (56px-72px padding at 1920px)
- Custom brand typefaces (investment in typographic identity)
- Precise button styling: 3px borders, 15px border-radius
- Smooth 0.35s micro-interactions
- Cinematic video hero with darkened overlay

### Responsive Approach
- 5 breakpoints: XS (<768), SM (768), MD (1024), LG (1440), XL (1920)
- Mobile-first with `calc()` for fluid sizing
- CSS variable overrides per breakpoint
- Image border-radius increases: 0px mobile to 20px at 768px+
- Spacing scale: `--spacing-4: 2px` (XS) to `4px` (SM)
- Page margins: 16px (mobile), 40px (tablet), 80px (desktop)

---

## 2. PwC
**URL:** https://www.pwc.com/

### Hero Section
- Full-viewport video background with autoplay, muted, looping
- Dark gradient overlay: `linear-gradient(165deg, #000 0%, transparent 60%)`
- Large serif headline using ITC Charter
- CTA button with animated skewed background reveal
- Z-index layering for text over video

### Color Scheme
| Role | Color | Hex |
|------|-------|-----|
| Primary Accent | Orange | `#FD5108` |
| Text (dark bg) | White | `#FFFFFF` |
| Text (light bg) | Black | `#000000` |
| Overlay | Black transparent | `rgba(0,0,0,0.8)` |

Extremely minimal palette -- just orange accent, black, and white.

### Typography
- **Headlines:** "ITC Charter" / "PwC ITC Charter", Georgia (serif)
- **Body:** System fonts via `font-family: inherit`
- **Headline scaling:** 1.25rem (mobile) to 8rem (1600px+)
- **Font weights:** 700 (bold headlines), 500 (secondary)
- **Letter-spacing:** Negative tracking on serif (-1px to -3px) for tighter, more refined feel

### Navigation
- Multi-level dropdown system
- Territory/country selector with search input (combobox pattern)
- Language selector dialog (modal)
- Breadcrumb navigation with responsive toggle
- Hamburger menu with full-width submenu overlays
- Full ARIA accessibility: `role="combobox"`, `role="listbox"`, `role="option"`
- Fixed header with tabindex management

### Section Layouts
- 3-column grid for featured insight cards
- Alternating text + image blocks (`textimage` component)
- Full-width promotional sections
- Nested multi-column layout at 768px+ breakpoints

### Card/Grid Designs
- Pattern: [Thumbnail image] -> [Title link] -> [Description text]
- Responsive image sizing (150x100px thumbnails)
- 3-column desktop layout for featured items

### Animation Patterns
- **CTA button hover:** Skewed background animation - `transform: skewX(30deg) translateX(130%)`, transition `.8s cubic-bezier(.2,.83,.31,1)`
- **Page load:** Body opacity 0 -> 1 fade-in (removed after 3000ms)
- **Scroll tracking:** Custom function monitoring 4% scroll increments
- **Mutation observer:** Tracks video player DOM changes

### Footer
- 3-column info section (Careers, Press, Offices) with link groups
- Horizontal legal links (Privacy, Cookie Policy, Terms)
- Centered copyright text
- Standard (non-sticky) placement

### Premium Feel
- Serif typography conveys authority (financial services standard)
- Two-color accent scheme avoids visual noise
- Generous whitespace between sections
- Professional video backgrounds
- Smooth micro-interactions on CTAs
- Strong accessibility compliance

### Responsive Approach
- Breakpoints: 480px, 768px, 1200px, 1600px
- Hero text scaling: 1.25rem -> 3rem -> 4.5rem -> 6rem
- Grid reflow: 3-column -> 2-column -> 1-column
- Video `object-position` adjusts: `center 70%` to `right` based on width
- Touch-friendly spacing on mobile CTAs

---

## 3. Prophet
**URL:** https://prophet.com/

### Hero Section
- Full-width cover block with dark overlay
- Headline: "Uncommon Impact"
- Supporting copy about growth philosophy
- Background image (3000x1500px)
- CTA link below hero text

### Color Scheme
| Role | Color | Hex |
|------|-------|-----|
| Primary Accent | Neon green/teal | `#22FFAB` |
| Dark Background | Charcoal | `#262626` |
| Navy | Deep blue | `#002668` |
| Purple Accent | Medium purple | `#8037D0` |
| Blue Accent | Bright blue | `#334AFF` |
| Text Light | Gray | `#606060` |
| Border Light | Light gray | `#DADADA` |

Most vibrant palette of the group -- neon green accent is distinctive and modern.

### Typography
- WordPress block-style presets
- Headlines: 42px ("huge" preset)
- Body: 16px
- Font families inherited via WordPress defaults (likely system stack or custom theme font)

### Navigation
- Horizontal top menu with dropdown submenus
- Categories: What We Do, Work, Thinking, About, Connect
- Language switcher in header
- Mobile hamburger menu
- Fixed/sticky positioning

### Section Layouts
- WordPress block patterns: full-width cover blocks with centered content
- Multi-column flex containers
- Two-column grid structures stacking below 782px

### Card/Grid Designs
- Work examples as image + title + description cards
- `is-layout-grid` and `is-layout-flex` classes
- 2em gaps between items on desktop
- Vertical stacking on mobile

### Animation Patterns
- Lightbox zoom animations: `lightbox-zoom-in`, `lightbox-zoom-out`
- Menu "fadedrop" effects at 300ms
- Search input focus: opacity transitions
- `prefers-reduced-motion:reduce` respected

### Footer
- Multi-column: social links, newsletter signup, contact info, legal links
- Dark background (`#262626`) matching brand sections
- Privacy Policy, Terms of Use links

### Premium Feel
- Generous whitespace and clean semantic HTML
- Bold neon accent color creates memorable identity
- High-quality imagery with large dimensions
- Smooth transitions respecting accessibility
- Clear brand voice ("Uncommon Growth Company")

### Responsive Approach
- Breakpoints: 781px (mobile), 782px (tablet)
- Stacked columns on mobile, full-width elements
- CSS Grid and Flexbox with auto-sizing
- Safe area insets for notched devices
- Images: 100% max-width with auto height

---

## 4. frog (Capgemini Invent)
**URL:** https://www.frog.co/ (redirected from frogdesign.com)

### Hero Section
- Dynamic video hero with carousel system (5 slides)
- Vimeo video embed (1920x1080px) with overlay text
- Headline: "Advancing the human experience through design"
- CTA button: "See our approach"
- Carousel indicators for slide navigation

### Color Scheme
| Role | Color | Hex |
|------|-------|-----|
| Background | White/light neutral | `#FFFFFF` |
| Text | Black | `#000000` |
| Hover overlay | Dark gray | `#47404B` |

Extremely minimal -- almost entirely black and white. Let the work speak.

### Typography
- Custom sans-serif (frog branding)
- Modern sans-serif stack for body
- Prominent display text for hero headlines
- Mix of regular and bold weights

### Navigation
- Fixed top navigation bar
- Items: Insights, Work, Services, Culture, Make Your Mark, Contact Us
- Language/region selector: Global (EN), France (FR), China (CN)
- Mobile hamburger menu

### Section Layouts
- **Hero carousel:** Full-width video backgrounds with overlay text
- **Work grid:** 6 case studies in responsive grid (3:4 and 1:1 ratios)
- **Studio carousel:** Continent-based tabs (North America, Asia, Europe, Oceania) with team profiles
- **Insight cards:** Scrollable grid with image, title, description
- Full-width sections with alternating backgrounds

### Card/Grid Designs
- **Work cards:** 3:4 ratio images with hover overlay (client name, project description, quote, link)
- **Insight cards:** Thumbnail + category badge (Podcast/Article/Report) + title + CTA
- **Team profiles:** Square photo + name + position + studio + inspirational quote

### Animation Patterns
- Video autoplay in hero carousel with play button overlay
- Carousel smooth transitions between slides
- Hover state reveals overlay information on work cards
- Tab interactions switch continent views
- Lazy-loading for image-heavy sections

### Footer
- Dark background footer
- Three-column layout: Links (Studios, Culture, DE&I, Play), Social (LinkedIn, Vimeo, Instagram, Medium, Spotify, Apple Podcasts), Legal
- Frog mascot logo (friedolin-frog.svg)
- Contact CTA above footer
- "2026 frog, part of Capgemini Invent"

### Premium Feel
- Video-first approach with high-quality Vimeo embeds
- Case study focus with client testimonials
- Global presence narrative via studio carousel
- Minimal color palette suggests confidence
- Generous spacing throughout
- Real team photos and quotes build authenticity
- Multiple conversion points without aggressive selling

### Responsive Approach
- Adaptive image ratios: 3:4 and 1:1
- Mobile video variants: 500x668px (mobile) vs 1920x810px (desktop)
- Grid collapses from multi-column to single column
- Touch-friendly hamburger navigation
- Breakpoints implied at 640px (medium_large) and larger

---

## 5. Thoughtworks
**URL:** https://www.thoughtworks.com/

### Hero Section
- Bold headline: "We don't just do AI. We do AI that works."
- Centered layout with animated carousel imagery
- Play/pause controls for both desktop and mobile
- Clear CTA button to explore AI platform
- AI/works platform logo showcase

### Color Scheme
| Role | Color | Hex |
|------|-------|-----|
| Brand Accent | Deep red/burgundy | `#BD4257` |
| Background | Dark (near-black) | Dark tones |
| Text | White on dark | `#FFFFFF` |

High-contrast dark theme with signature red accent.

### Typography
- Modern sans-serif typeface system
- Bold weights for headers
- Readable proportions for body text
- Consistent font treatment across nav and CTAs
- Likely custom or premium system font stack

### Navigation
- Horizontal menu bar with multi-level dropdowns
- Categories: What we do, AI/works, Clients, Insights, Engineering, Careers, About, Contact
- Sticky header design
- Mobile hamburger toggle with same hierarchical structure

### Section Layouts
- Full-width hero with carousel
- Featured content carousels with auto-scroll
- Multi-card grids
- Alternating left-right content blocks
- Consistent padding and vertical rhythm

### Card/Grid Designs
- Large image cards with overlay text and description
- Client logo carousel (horizontally scrolling)
- Partnership logos in responsive grid (AWS, Azure, Google Cloud)
- Individual card containers with linked pages

### Animation Patterns
- Carousel with play/pause controls (multiple sections)
- Auto-scrolling multi-card components with continuous loop
- Interactive hover states
- Data attributes for click tracking

### Footer
- 5-column structure: Company, Insights, Site info, Connect with us
- Social media icons with alt-text
- WeChat QR code modal for China engagement
- Copyright at base

### Premium Feel
- Schema.org structured data
- "Great Place to Work-Certified" badge
- Major partnership logos (AWS, Azure, Google Cloud)
- Client case studies with quantifiable results
- Sophisticated analytics integration

### Responsive Approach
- Separate image assets: `*_desktop.jpg` vs `*_mobile.jpg`
- Mobile-optimized hamburger navigation
- ARIA labels and role attributes for accessibility
- Flexible carousel layouts adapt to viewport
- Data-driven content management

---

## 6. Goji Labs
**URL:** https://www.gojilabs.com/
*Award-winning digital product agency*

### Hero Section
- Bold headline: "A Digital Product Agency That Builds it Right"
- Centered vertical stack layout
- CTA: "Book Discovery Call"
- Typography-driven (no hero image) -- relies on whitespace and type hierarchy
- Substantial whitespace around content

### Color Scheme
| Role | Color | Hex |
|------|-------|-----|
| Primary Text | Deep black | `#1F1E1E` |
| Background | White | `#FFFFFF` |
| Brand Accent | Goji Berry red | `#DA3750` |
| Hover Accent | Lighter berry | `#EE6D80` |
| Gray (supporting) | Medium gray | `#827F7F` |
| Gray (borders) | Light gray | `#C7C4C4` |
| Success | Green | `#6FB881` |

### Typography
- **Headlines:** "Clash Display Variable" (custom variable font, weights 200-700)
- **Body:** "Switzer" sans-serif (weights 100-900)
- **H1:** `clamp(2.75rem, 2.75rem + ((1vw - 0.2rem) * 3.333), 5rem)` -- fluid scaling
- **H2:** `clamp(22px, 1.378rem + ((1vw - 3.2px) * 1.293), 36px)`
- **Body:** `clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.556), 20px)`
- **Line-height:** Headlines 1.2, body 1.4

### Navigation
- Sticky header with horizontal menu
- Dropdown submenus for Services, Clients, Company
- Logo left, nav centered, "Book a Call" CTA button right
- Flexbox with `justify-content: space-between`

### Section Layouts
- Full-width hero with centered constrained content (max 1200px)
- Logo grid with grayscale treatment
- Case study cards with image-text pairings + statistics
- Service cards in 3-column grid (stacks responsive)
- Tech stack grid in 3-column rows
- Content readability constrained at 650px max-width

### Card/Grid Designs
- **Case study cards:** Large hero image (640x500px), company logo overlay, title, description, right-aligned bold metrics ("3,637%", "1,305%")
- **Service cards:** 600x424px images (.webp), heading, description, "Learn more" link
- **Tech stack:** Equal-width logo tiles in flexible grid

### Animation Patterns
- Lazy loading framework (RocketLazyLoadScripts v2.0.5)
- A/B testing via VWO with hide-on-load: `opacity:0 !important`
- Image lightbox: `lightbox-zoom-in/out` at 0.4s duration
- Hover: background shifts to `#DA3750`, links lose underline

### Footer
- Dark background with light text (`#E3E1E1`)
- Multi-column layout: `gap: 32px`
- Social links block: Facebook (`#0866ff`), LinkedIn (`#0d66c2`)
- 0.5em gap between social items

### Premium Feel
- Custom variable typeface (Clash Display) conveys innovation
- Generous whitespace emphasizes quality
- Precise color restraint with purposeful accent
- Fluid typography via CSS `clamp()` avoids jarring jumps
- WebP optimized imagery
- Consistent spacing scale via CSS custom properties

### Responsive Approach
- Mobile padding: 16px root padding
- Grid stacking at 781px: `flex-basis: 100%`
- Clamp functions for fluid typography (no breakpoint jumps)
- Images: `max-width: 100%`, `height: auto`
- Container queries for some responsive rules

---

## 7. Futurice
**URL:** https://futurice.com/
*Award-winning mid-size digital transformation consultancy*

### Hero Section
- Bold headline: "Digital transformation with measurable outcomes"
- Abstract geometric background: pink shapes on green, connected by white curved lines (3000x1440px)
- Strong text hierarchy with clear CTA
- Visual separation from navigation

### Color Scheme
| Role | Color | Hex |
|------|-------|-----|
| Brand Primary | Deep purple | `#1E0C65` |
| Section Accent | Spruce green | (dark green) |
| Backgrounds | Cream/off-white | Warm neutral |
| Geometric Accents | Pink | (in hero imagery) |

### Typography
- **Primary font:** Manrope Variable (custom woff2, preloaded for performance)
- Variable font allows smooth weight transitions
- Clear H1/H2/H3 hierarchy
- Bold and italic emphasis in content blocks

### Navigation
- Multi-level dropdown structure
- Services: Strategy, AI Workflows, Digital Experiences, Platform Modernization
- 9 industry verticals
- Contact by region (7 offices)
- Language switcher: English, Suomi, Deutsch, Svenska
- Search toggle in header

### Section Layouts
- **Spotlight sections:** 4-column testimonial card grid
- **HorizontalBackgroundList:** Feature items with imagery
- **LinkGrid:** Case study thumbnails in consistent layout
- **LogoList:** 16 client logos in organized grid
- Quote sections with author attribution
- Alternating backgrounds (cream, spruce green)

### Card/Grid Designs
- Case study cards: responsive header images (3840x2160 to 1440x810), title, gridTitle, teaser, industry tag
- Client logos in grey-scale grid treatment
- Consistent spacing and padding throughout

### Animation Patterns
- IntersectionObserver for visibility-based actions
- Scroll-based header behavior (TOGGLE_HEADER_INTERSECTING)
- Potential lazy-loading patterns
- Cookie preference notifications with animations

### Footer
- Multi-column: Sitemap (6 links), Contact (7 offices), Social (5 platforms), Family companies (6 entities)
- Colophon: Privacy, Impressum
- Tagline: "We are part of the Futurice family"

### Premium Feel
- Custom variable typeface (Manrope) -- modern and refined
- Abstract geometric imagery suggests innovation
- Quantified case study outcomes
- International multi-office presence (7 offices)
- Client roster: BMW, E.ON, Volkswagen
- Deep purple brand color signals tech leadership
- Responsive image optimization (multiple width variants)
- Schema.org structured data

### Responsive Approach
- Image optimization: widths at 32, 1280, 1440, 3840px variants
- Standard viewport meta tag
- Adaptive navigation with language switcher
- Dynamic grid column adjustment per breakpoint
- Font preloading for performance
- Next.js image optimization (`/_next/image` paths)

---

## 8. Instrument
**URL:** https://instrument.com/
*Award-winning digital brand experience agency*

### Hero Section
- Minimalist approach: editorial feel prioritizing whitespace and typography over imagery
- Sticky header with centered logo flanked by navigation
- Marquee section with featured work ("Case Study: OURA app refresh")
- Full viewport width with strategic spacing

### Color Scheme
- Entirely CSS variable-driven theming system:
  - `var(--theme-background)` -- light/white
  - `var(--theme-foreground)` -- dark text
  - `var(--theme-accent-background)` + `var(--theme-accent-foreground)`
  - `var(--theme-foreground-shade)`, `var(--theme-background-shade)`, faded variants
- Dark footer uses inverted theming
- Monochromatic approach with subtle shade variants

### Typography
- **Variable fonts** with dynamic `font-variation-settings` for `"wght"` and `"wdth"`
- **Sans-serif:** `var(--text-sans)` -- primary
- **Serif:** `var(--text-serif)` -- display/accent
- **Fluid scaling formula:** `calc(var(--size)/breakpoint*100vw)` across 5 breakpoints (390, 640, 1024, 1440, 1920)
- **6 headline tiers:** headline-1 through headline-6 with specific letter-spacing and line-height
- **Display sizes:** Display-1 and Display-2 for dramatic typographic moments
- **Body tiers:** Body-1 and Body-2 with consistent leading

### Navigation
- **Desktop (64rem+):** Horizontal layout, logo centered between primary and secondary nav groups
- **Dropdown menus:** Scale animations with staggered timing (60ms-480ms increments)
- **Mobile (<64rem):** Full-screen overlay with backdrop blur, slides from top with opacity/visibility transitions, dedicated social links section
- **Sticky behavior:** `translateY(-100%)` hide animation on scroll
- **Marquee transitions:** 0.3s ease timing

### Section Layouts
- **12-column grid** with `var(--grid-gap)` at breakpoints 40rem, 64rem, 90rem, 120rem
- **Diptych pattern:** Two-content sections with configurable ratios (2-10 through 10-2 column spans)
- **Triptych layout:** Three-column at larger breakpoints
- **Video feature blocks:** Full-width 16:9 desktop, stacked mobile
- **Purpose section:** Dynamic grid with overlapping text and image at 90rem+

### Card/Grid Designs
- **Work cards:** `aspect-ratio: 1/1` images, 1.05x scale on hover, text below with title/tags/metadata
- **Column scaling:** 1 (small) -> 2 (medium) -> 3 (large) -> 4 (xlarge) via CSS variables
- **Latest cards:** Metadata (timestamp), tags, button overlays at `bottom: var(--space-16); left: var(--space-16)`
- **Hover effects:** Images scale from 1.05 to 1.0 over 0.25s (zoom-in without movement)

### Animation Patterns
- **Dropdown:** `@keyframes dropdownScale` with opacity, transform, scale
- **GDPR banner:** Vue.js `v-enter-active/v-leave-active` with `translateY(100px)` slide-in from bottom
- **Mobile nav:** Sequential opacity fade-in, hamburger lines rotate on transform
- **Marquee:** `translateY(+/-10px)` during enter/leave with 0.3s easing
- **Scroll header:** `.global-header--hide` removes via `translateY(-100%)`
- **Accessibility:** `@media (prefers-reduced-motion: no-preference)` gates all animations

### Footer
- Sophisticated responsive architecture across 5 breakpoints:
  - Mobile: full-width stacked, large bottom padding
  - 40rem: Grid (logo 4 cols, email 6-7 cols, links 3 cols)
  - 64rem: Logo 3 cols, email 5 cols
  - 90rem: 12-col grid, email span 7, links span 6
  - 120rem: 24-col grid, logo span 3, email span 5, links span 12
- Dark background, light text, bordered sections
- Email input: 8px border-radius, shade background

### Premium Feel
- Variable typography with precise weight/width control
- Fluid responsive scaling (mathematical, not breakpoint jumps)
- Monochromatic palette emphasizes content
- Consistent 8px-multiple spacing system (`var(--space-*)`)
- Smooth 0.25s-0.35s transitions
- Staggered dropdown animations
- Semantic hierarchy through size/weight/spacing, not color
- Reduced motion support built in
- Skip navigation link

### Responsive Approach
- **Mobile-first** base styles at 390px
- **Fluid scaling formula:** `calc(var(--size)/390*100vw)` scaling through 640, 1024, 1440, 1920px
- Card columns: 1 -> 2 -> 3 -> 4 via CSS variable updates
- Navigation mode switching at breakpoints
- Orientation handling for landscape
- `@supports (height:100dvh)` for dynamic viewport height

---

## 9. Cross-Site Pattern Summary & Recommendations

### UNIVERSAL PATTERNS (Used by 6+ of 8 sites)

#### Hero Sections
- **Video backgrounds** are the dominant pattern (BCG, PwC, frog, Thoughtworks)
- **Dark overlays** on video/images for text readability (gradient or rgba black)
- **Single bold headline** + supporting sentence + one CTA
- **Full-viewport height** (100vh) is standard
- Typography-only heroes (Goji Labs, Instrument) work for design-focused brands

#### Color Strategy
- **Minimal palettes**: 2-3 colors maximum in active use
- **One signature accent color** per brand: BCG green (#7EF473), PwC orange (#FD5108), Prophet neon teal (#22FFAB), Thoughtworks burgundy (#BD4257), Goji berry red (#DA3750), Futurice purple (#1E0C65)
- **Dark backgrounds with light text** for hero sections
- **Near-black rather than pure black** for text (e.g., #212427, #1F1E1E)
- **Warm neutrals** (cream, beige) for section backgrounds rather than pure gray

#### Typography
- **Custom/premium fonts** are universal: Henderson BCG, ITC Charter, Manrope, Clash Display, Switzer
- **Serif for authority** (BCG headlines, PwC headlines)
- **Sans-serif for modernity** (frog, Thoughtworks, Goji, Futurice, Instrument)
- **Variable fonts** are the emerging standard (Instrument, Goji, Futurice)
- **Fluid typography** via `clamp()` or `calc(size/breakpoint*100vw)` replacing fixed breakpoint jumps
- **H1 sizes:** Range from 38-42px (mobile) to 96-128px (desktop)
- **Negative letter-spacing** on large headlines for tighter, more refined feel

#### Navigation
- **Sticky/fixed header** is universal
- **Horizontal menu** with dropdown submenus
- **Hamburger menu** on mobile (full-screen overlay is the premium pattern)
- **CTA button in nav** (Goji's "Book a Call", frog's "Contact Us")
- **Hide on scroll down, show on scroll up** (Instrument pattern)

#### Section Layouts
- **12-column grid systems** (BCG, Instrument)
- **Alternating background colors** between sections
- **Full-width sections** with content constrained to 1200-1760px
- **Consistent vertical rhythm** via CSS custom property spacing systems
- **Module padding:** Small (20px) to Large (80-120px) scaling with viewport

#### Cards
- **Image + title + description + CTA** is universal card pattern
- **Hover effects:** Subtle scale (1.05x), overlay reveals, underline animations
- **Aspect ratios:** 1:1, 3:4, 16:9 are the main three
- **Grayscale client logo grids** for social proof sections
- **Statistics/metrics** as card elements (Goji's percentage callouts)

#### Animations
- **Subtle and purposeful** -- 0.25s to 0.4s transitions maximum
- **CTA arrow slides** on hover (BCG)
- **Skewed background reveals** on buttons (PwC)
- **Scale transforms** on card hover (Instrument)
- **Scroll-triggered visibility** via IntersectionObserver
- **`prefers-reduced-motion`** respected (Instrument, Prophet)
- **Carousel/slider** components are common for featured content

#### Footers
- **Dark background** (inverted from main content) is dominant
- **Multi-column layout** (3-5 columns)
- **Structure:** Sitemap links | Contact/offices | Social media icons | Legal links
- **Email signup** present in some (Instrument, Prophet)
- **Regional office listings** for global firms

### KEY DIFFERENTIATORS BY TIER

#### Enterprise Consultancies (BCG, PwC)
- Custom branded typefaces
- Complex multi-level navigation for vast content
- Video-first hero sections
- Authority conveyed through serif typography
- Extensive accessibility compliance
- 5+ responsive breakpoints

#### Design/Innovation Consultancies (frog, Prophet, Thoughtworks)
- Work/portfolio showcase as primary content
- Bold accent colors for brand differentiation
- Case study cards with client quotes
- Team/culture sections with real photos
- Category badges on content (Podcast, Article, Report)

#### Small/Mid-Size Agencies (Goji, Futurice, Instrument)
- Typography-driven design (less reliance on photography)
- CSS variable-based theming systems
- Fluid typography via clamp() functions
- Performance optimization focus (WebP, lazy loading, font preloading)
- Vue.js/Next.js modern framework patterns
- 8px-multiple spacing systems
- More experimental layout patterns (diptych, triptych)

### RECOMMENDED PATTERNS FOR A NEW CONSULTING WEBSITE

1. **Hero:** Full-viewport with subtle video or bold typography, dark overlay, single headline (max 8 words), one CTA button
2. **Colors:** Choose one memorable accent color + near-black + white + one warm neutral. No more.
3. **Typography:** Invest in one premium sans-serif variable font (like Manrope or Clash Display). Use fluid `clamp()` sizing.
4. **Navigation:** Sticky header that hides on scroll-down. Logo left, nav center, CTA right. Full-screen overlay on mobile.
5. **Grid:** 12-column CSS Grid with CSS custom properties for gaps and margins. Content max-width 1200-1400px.
6. **Cards:** 1:1 or 3:4 aspect ratio images, subtle 1.05x scale on hover over 0.25s. Title + description + link.
7. **Spacing:** Build an 8px-multiple system via CSS custom properties. Page margins: 16px mobile, 40px tablet, 80px desktop.
8. **Animations:** Keep all transitions under 0.4s. Use `ease-in-out` or custom cubic-bezier. Always respect `prefers-reduced-motion`.
9. **Footer:** Dark background, 3-4 columns, include social links and a clear contact CTA.
10. **Performance:** Variable fonts (single file), WebP images, lazy loading, Next.js or similar for image optimization.

---

*Report generated from live website analysis conducted March 2026.*
*Sources: bcg.com, pwc.com, prophet.com, frog.co, thoughtworks.com, gojilabs.com, futurice.com, instrument.com*
