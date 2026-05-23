# ResourceHub Website — Claude Code Project Plan

---

## Company Overview (from Profile)

**Company:** ResourceHub Building & Construction Materials Trading LLC
**Tagline:** Your Trusted Partner for Industrial Supplies & Solutions
**Location:** Unit 36, 1st Floor, Al Wasl Building, Workspace Downtown, Sheikh Zayed Road, Dubai, UAE
**Email:** resourcehub.ae@gmail.com
**Phone:** +971 58 889 2476

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS variables
- **Font:** Poppins (Google Fonts) — weights 300, 400, 500, 600, 700, 800
- **Animations:** Framer Motion
- **Images:** Next/Image with placeholder/dummy images from Unsplash (construction-themed)
- **Icons:** Lucide React
- **Deployment-ready:** Vercel-compatible

---

## Brand Identity

### Color Palette
```
--color-primary:     #1A2B6D   /* Deep Navy Blue */
--color-accent:      #C0392B   /* Brand Red */
--color-dark:        #0D1117   /* Near Black */
--color-light:       #F5F7FA   /* Off White */
--color-mid:         #E8ECF0   /* Light Gray */
--color-text:        #1C1C1E   /* Body Text */
--color-muted:       #6B7280   /* Muted Text */
--color-white:       #FFFFFF
```

### Typography (Poppins only)
```
Display:    Poppins 800 — hero headlines
Heading:    Poppins 700 — section titles
Subheading: Poppins 600 — card titles, labels
Body:       Poppins 400 — paragraphs
Caption:    Poppins 300 — supporting text
```

### Design Direction
**Industrial Precision** — clean grid layouts with bold typographic hierarchy, dark sections contrasted with crisp white panels, red accents used sparingly for call-to-action and highlights. Architectural diagonals and large imagery. No emoji anywhere. No dashes between content blocks.

---

## Project Structure

```
resourcehub/
├── app/
│   ├── layout.tsx              # Root layout with Header + Footer
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── industries/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── IndustriesGrid.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTABanner.tsx
│   ├── about/
│   │   ├── MissionVision.tsx
│   │   └── CoreValues.tsx
│   ├── products/
│   │   ├── ProductCategoryGrid.tsx
│   │   └── ProductCard.tsx
│   ├── industries/
│   │   └── IndustryCard.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── SectionHeading.tsx
│       ├── Badge.tsx
│       └── AnimatedCounter.tsx
├── public/
│   └── logo/                   # Place company logo here
├── styles/
│   └── globals.css
└── tailwind.config.ts
```

---

## Pages & Sections

---

### 1. Global Layout — Header (Sticky)

**Component:** `components/layout/Header.tsx`

- Sticky top, glass-morphism blur background on scroll
- Left: ResourceHub logo + company name in two lines
- Center: Navigation links — Home, About, Products, Industries, Contact
- Right: "Get a Quote" button (accent red, rounded pill)
- Mobile: Hamburger menu with full-screen slide-down nav overlay
- Active link: underline accent in red
- Background: transparent on top of hero, switches to deep navy on scroll

---

### 2. Global Layout — Footer

**Component:** `components/layout/Footer.tsx`

- Background: `--color-dark` (#0D1117)
- Layout: 4 columns on desktop, 2 on tablet, 1 on mobile
  - Column 1: Logo + tagline + social icons (LinkedIn, WhatsApp)
  - Column 2: Quick Links (Home, About, Products, Industries, Contact)
  - Column 3: Product Categories (Hardware, Safety, MEP, PPE, Bearings, Abrasives)
  - Column 4: Contact Info (address, phone, email as plain text)
- Bottom bar: copyright text left, "Dubai, UAE" right
- Thin red top border accent line

---

### 3. Home Page

#### Section A — Hero
**Component:** `HeroSection.tsx`

- Full-viewport height
- Background: full-bleed image of an industrial warehouse or construction site (Unsplash dummy)
- Dark overlay gradient (bottom-to-top navy tint)
- Left-aligned content:
  - Red uppercase label: "Dubai's Trusted Industrial Supplier"
  - H1 (Poppins 800, 72px desktop): "Your Partner for Industrial Supplies & Solutions"
  - Subtext (Poppins 400): short one-liner about quality and reliability
  - Two CTA buttons: "Explore Products" (solid red) and "Contact Us" (outlined white)
- Right side: floating card overlay with 4 key stats (animated counters):
  - Industries Served: 6+
  - Product Categories: 6+
  - Years of Experience: 5+
  - Clients Served: 200+
- Scroll-down arrow indicator at bottom center
- Framer Motion: staggered text reveal on load

---

#### Section B — Stats Bar
**Component:** `StatsBar.tsx`

- Full-width horizontal strip
- Background: `--color-primary` (navy blue)
- 4 stat blocks separated by vertical dividers:
  - Competitive Pricing
  - Timely Deliveries
  - Custom Sourcing Options
  - Technical Expertise
- Each block: icon (Lucide) + short label in white
- Subtle slide-in animation on scroll

---

#### Section C — Product Showcase
**Component:** `ProductShowcase.tsx`

- Section title: "What We Supply"
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Each card:
  - Full-height background image (category-relevant Unsplash dummy)
  - Dark gradient overlay
  - Category name (Poppins 700) at bottom left
  - Hover: slight zoom + red bottom border reveal
- Categories to show:
  1. Hardware Consumables
  2. Safety Products
  3. MEP Solutions
  4. PPE Supplies
  5. Bearings
  6. Abrasives & Grinding

---

#### Section D — Industries We Serve
**Component:** `IndustriesGrid.tsx`

- Section background: light gray (`--color-light`)
- Section title: "Industries We Serve"
- 6-cell grid with icon + label cards:
  1. Construction & Infrastructure
  2. Oil & Gas
  3. Facilities Management
  4. Mechanical & Electrical Contracting
  5. Manufacturing & Engineering
  6. Public Sector & Government Projects
- Each cell: large Lucide icon, bold label, short descriptor line
- Card background white, hover: lift shadow + red top border

---

#### Section E — Why Choose Us
**Component:** `WhyChooseUs.tsx`

- Two-column layout: large image left (warehouse/industrial dummy), content right
- 4 feature blocks stacked vertically (icon + heading + short description):
  - Competitive Pricing
  - Timely Deliveries
  - Custom Sourcing Options
  - Technical Expertise & Support
- Subtle slide-in from right on scroll

---

#### Section F — CTA Banner
**Component:** `CTABanner.tsx`

- Full-width section
- Background: `--color-accent` (red) with subtle diagonal texture pattern
- Centered text: "Ready to Source Your Industrial Supplies?"
- Subtext: one-line description
- Large white button: "Request a Quote"

---

### 4. About Page

#### Section A — Page Hero
- Short banner hero (50vh) with background image
- Centered: "About ResourceHub" H1

#### Section B — Company Overview
- Two-column: large image of warehouse + right-side text block
- Poppins 600 pull-quote style paragraph

#### Section C — Mission & Vision
**Component:** `MissionVision.tsx`
- Two cards side by side (navy + white)
- Mission: "To support clients with technical expertise and responsive service."
- Vision: "To be the region's leading provider of integrated hardware, safety, PPE, and MEP solutions."

#### Section D — Core Values
**Component:** `CoreValues.tsx`
- 5-column icon grid on desktop, 2-col on mobile
- Values: Integrity, Quality, Reliability, Safety, Innovation
- Each: circular icon container (red outline) + value name + one-line description

---

### 5. Products Page

#### Section A — Page Hero
- Short banner with industrial shelving background image

#### Section B — Category Grid
**Component:** `ProductCategoryGrid.tsx`
- 3-col on desktop, 2 on tablet, 1 on mobile
- Each `ProductCard.tsx`:
  - Large square image (Unsplash dummy relevant to category)
  - Category title overlay at bottom
  - Short one-line description below card
  - "View Details" text link (red)
- Categories:
  1. Hardware Consumables — fasteners, fittings, tools
  2. Safety Products — helmets, masks, signage
  3. MEP Solutions — pipes, conduits, fittings
  4. PPE Supplies — gloves, vests, eyewear
  5. Bearings — industrial bearings and components
  6. Abrasives — grinding discs, sanding rolls

---

### 6. Industries Page

#### Section A — Page Hero
- Banner with construction site background

#### Section B — Industry Cards
**Component:** `IndustryCard.tsx`
- Large horizontal cards (full-width), alternating image left/right
- One card per industry
- Background image (Unsplash dummy) + text overlay or side panel
- Industries: same 6 as homepage

---

### 7. Contact Page

#### Section A — Page Hero
- Short banner

#### Section B — Contact Split Layout
- Left column: company contact info cards
  - Address card (with map placeholder image)
  - Phone number
  - Email address
  - Working hours note
- Right column: Contact form
  - Fields: Name, Company, Email, Phone, Message
  - Submit button: red, full width on mobile
  - No form action needed — static/display only

#### Section C — Map Section
- Full-width placeholder map image (Unsplash Dubai aerial or Google Maps static placeholder)
- Overlay label: "Sheikh Zayed Road, Dubai, UAE"

---

## Dummy Image Sources (Unsplash)

Use these Unsplash URL patterns (no API key needed):

```
Hero:             https://images.unsplash.com/photo-1504307651254-35680f356dfd  (construction site)
Warehouse:        https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d  (industrial shelves)
Hardware:         https://images.unsplash.com/photo-1572981779307-38b8cabb2407  (tools)
Safety PPE:       https://images.unsplash.com/photo-1581092918056-0c4c3acd3789  (PPE gear)
Bearings:         https://images.unsplash.com/photo-1558618666-fcd25c85cd64  (mechanical parts)
MEP/Pipes:        https://images.unsplash.com/photo-1504307651254-35680f356dfd  (pipes/fittings)
Oil & Gas:        https://images.unsplash.com/photo-1568702846914-96b305d2aaeb  (oil rig)
Construction:     https://images.unsplash.com/photo-1504307651254-35680f356dfd  (site)
Manufacturing:    https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7  (factory)
```

Append `?w=1200&q=80` to all URLs for sizing.

---

## Mobile Optimisation Rules

Apply these rules to every component:

- All font sizes use `clamp()` for fluid scaling
- Hero H1: `clamp(2rem, 6vw, 4.5rem)`
- Section titles: `clamp(1.5rem, 4vw, 2.5rem)`
- All grid sections: start mobile-first (1 col), scale up with `md:` and `lg:` prefixes
- Tap targets minimum 44px height
- Header collapses to hamburger at `md` breakpoint
- Footer collapses to single column at `sm` breakpoint
- Images use `next/image` with `fill` or explicit `width`/`height` props
- Padding: `px-4 md:px-8 lg:px-16` pattern throughout
- No horizontal scroll at any viewport

---

## Animation Guidelines (Framer Motion)

- **Page load:** staggered children reveal with `opacity: 0 → 1` + `y: 30 → 0`, delay 0.1s per child
- **Scroll reveal:** use `whileInView` with `once: true` and `viewport: { margin: "-100px" }`
- **Cards hover:** `scale: 1.02`, `boxShadow` lift
- **CTA buttons:** `scale: 1.03` on hover, `scale: 0.97` on tap
- **Stat counters:** count up animation on scroll into view
- **Header:** smooth background color transition on scroll

---

## Strict Style Rules

1. Font: Poppins only — never use any other font family
2. No emoji anywhere in the codebase or content
3. No dash separators between content sections
4. Consistent section padding: `py-16 md:py-24` throughout
5. Section headings always have a short red accent bar above them (4px x 40px block)
6. Buttons: pill-shaped (`rounded-full`) or sharp (`rounded-none`) — never default `rounded`
7. All section backgrounds alternate: white → light gray → navy → white
8. Red is used only for: CTAs, accent bars, hover states, active nav — never for large backgrounds except the CTA banner
9. All text in dark sections is white or light gray — never dark text on dark background
10. Images always have an overlay on hover for visual feedback

---

## Build Order for Claude Code

Follow this sequence:

1. **Setup** — Next.js project, Tailwind config, Google Fonts (Poppins), CSS variables, global styles
2. **Header** — with sticky scroll behavior, mobile hamburger menu
3. **Footer** — full column layout, responsive
4. **Home Page** — build all 6 sections top to bottom
5. **About Page** — 4 sections
6. **Products Page** — hero + category grid
7. **Industries Page** — hero + industry cards
8. **Contact Page** — split layout + form + map
9. **Polish Pass** — Framer Motion animations on all pages, mobile audit, spacing consistency check

---

## Prompt to Start Claude Code

Paste this as your first message to Claude Code:

---

> Build a professional website for **ResourceHub Building & Construction Materials Trading LLC**, a Dubai-based industrial supplies company. Use **Next.js 14 (App Router)** with **Tailwind CSS** and **Framer Motion**.
>
> **Strict rules:**
> - Font: Poppins only (Google Fonts, all weights 300–800)
> - No emoji anywhere
> - No dash separators between content sections
> - Mobile-first, fully responsive
> - Consistent Header and Footer on every page
>
> **Brand colors:**
> - Primary: #1A2B6D (navy)
> - Accent: #C0392B (red)
> - Dark: #0D1117
> - Light: #F5F7FA
>
> **Start with step 1: Project setup** — initialise Next.js 14, configure Tailwind with the brand color palette, add Poppins via Google Fonts in layout.tsx, and set up global CSS variables. Then build the Header and Footer components exactly as described in the project plan.
>
> Use dummy images from Unsplash (append `?w=1200&q=80` to URLs). Design should be clean, modern, industrial-precision aesthetic — large visuals, bold typography, minimal text, strong contrast.

---

*Attach this project plan document when starting the session so Claude Code has full context.*
