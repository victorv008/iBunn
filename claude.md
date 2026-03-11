# Project Constitution (claude.md)

## Project: iBunn Website Redesign

### Discovery Answers
- **North Star:** Create a stunning, professional consulting tech website for iBunn that conveys expertise and credibility to incoming clients
- **Integrations:** Cookie consent, contact form (email: hello@ibunn.se), potentially analytics
- **Source of Truth:** TBD
- **Delivery Payload:** A beautiful, elegant, modern website
- **Behavioral Rules:** TBD

### Design Directive
- Keep the same feeling and brand identity from the existing iBunn site
- Elevate the design to match top-tier consulting firms
- Every page must be redesigned from top to bottom
- Maintain Swedish language

## Data Schemas

### Site Structure (Pages)
- Hem (Home) — hero, services overview, trust signals, CTA
- Om oss (About) — company story, values, team
- Tjanster (Services) — detailed service pages
- Kontakt (Contact) — form, map, info

### Services Data
1. Saker fildelning (Secure File Sharing)
2. IT-Arkitektur (IT Architecture)
3. Systemutveckling (System Development)
4. Projektledning (Project Management)

### Brand Identity
- **Primary Color:** #F41B3B (bright red/pink)
- **Secondary Color:** #006663 (dark teal)
- **Dark Surfaces:** Blue-gray (hue 240)
- **Body Font:** Open Sans
- **Heading Font:** Cormorant Garamond
- **Core Values:** Security, Commitment, Proactivity

### Contact Info
- Email: hello@ibunn.se
- Address: Bunn Ekhaga 33, 563 92 Granna, Sweden

## Behavioral Rules
(Defined later)

## Architectural Invariants
- All business logic is deterministic
- SOPs in architecture/ are updated before code changes
- Temporary files go in .tmp/
- API keys stored in .env
- Tools are atomic and testable
