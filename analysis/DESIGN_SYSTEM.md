# Oasis Wellness Center — Design System & Component Blueprint

_Version 1.0 | UX/UI Architecture Reference_
_Last Updated: 2026-05-09_

---

## 1. Brand Identity & Visual Direction

### Mood Board Description (Text-Based)

A serene sanctuary where natural materials meet modern minimalism. Think warm linen textures against sage green botanicals, morning light through sheer curtains, the quiet confidence of a well-kept garden. Every element breathes — no clutter, no urgency, just calm intention.

### Brand Personality Adjectives

| Core | Tone | Differentiation |
|------|------|-----------------|
| Serene | Warm | Grounded |
| Professional | Unhurried | Trustworthy |
| Modern | Human | Not clinical |
| Luxurious | Approachable | Not generic spa cliché |

### Competitive Differentiation Angle

Most spa websites fall into two traps: (1) clinical generic — white backgrounds, stock photos of rocks and bamboo, sterile and forgettable; or (2) overly ornate — gold everything, heavy borders, trying too hard to signal luxury.

**Oasis approach:** The grounded sophistication of a high-end boutique hotel lobby. Natural warmth without preciousness. Professional credentials displayed with quiet confidence, not flashy badges. The design should feel like a deep exhale — not a sales funnel.

**Brand Positioning Statement:** "Virginia's most thoughtful spa — where clinical expertise meets genuine care."

---

## 2. Color Palette

### Palette A: Classic Spa (Default)

Rooted in nature — green as the dominant signal color with warm neutrals.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Sage Green | `#7A9E7E` | Buttons, links, active states |
| Primary Dark | Deep Sage | `#5C7A5F` | Button hover, emphasis |
| Secondary | Warm Cream | `#F5F0E8` | Backgrounds, cards |
| Accent | Refined Gold | `#C4A962` | Stars, highlights, premium badges |
| Dark | Charcoal | `#2C2C2C` | Body text, headings |
| Medium | Warm Gray | `#6B6B6B` | Secondary text, captions |
| Light Background | Off-White | `#FAFAF8` | Page background |
| White | Pure White | `#FFFFFF` | Card surfaces, form fields |
| Error | Soft Coral | `#D97171` | Form errors |
| Success | Moss Green | `#6B8E6B` | Confirmations |

### Palette B: Modern Wellness

Cleaner, more contemporary — teal-forward with cooler neutrals.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Teal | `#4A9B9B` | Primary actions, branding |
| Primary Dark | Deep Teal | `#3A7A7A` | Hover states |
| Secondary | Cool Linen | `#EEF0F0` | Section backgrounds |
| Accent | Pale Gold | `#D4BC6A` | Premium indicators |
| Dark | Near Black | `#1F1F1F` | Headings, primary text |
| Medium | Slate | `#5A5A5A` | Body copy |
| Light Background | Ice White | `#F8F9FA` | Page base |
| White | White | `#FFFFFF` | Cards |
| Error | Dusty Rose | `#C97070` | Errors |
| Success | Seafoam | `#5AAA8A` | Success states |

### Palette C: Luxe Minimal

Dark-mode-forward luxury — sophisticated, high-contrast, editorial.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Deep Forest | `#4A6B4A` | Primary actions |
| Primary Light | Sage | `#8AAB8A` | Secondary actions, icons |
| Secondary | Champagne | `#F0E6D3` | Warm section fills |
| Accent | Antique Gold | `#B8963A` | Luxury accents, CTA |
| Dark | Rich Black | `#1A1A1A` | Dark backgrounds, headings |
| Medium | Taupe | `#7A7060` | Body text on light |
| Light Background | Ivory | `#FDFBF7` | Light page background |
| White | Warm White | `#FFFFFF` | Cards on dark |
| Error | Muted Red | `#C06060` | Errors |
| Success | Olive | `#607A60` | Success |

---

## 3. Typography System

### Font Recommendations

#### Headings — Option Set A: Cormorant Garamond (Serif)
Elegant, high-contrast serif with editorial character. Signals luxury without being stuffy.

- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Use for: Hero headlines, section titles, testimonial quotes

#### Headings — Option Set B: Outfit (Sans-Serif)
Modern geometric sans with warmth. More contemporary feel.

- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Use for: Subheadings, UI labels, navigation

#### Body — Option Set A: Source Sans 3
Highly readable humanist sans. Warm, professional, excellent x-height for UI.

- Weights: 300, 400, 500, 600
- Use for: Paragraphs, service descriptions, form labels

#### Body — Option Set B: DM Sans
Friendly, geometric humanist. Slightly more personality.

- Weights: 400, 500, 700
- Use for: CTAs, microcopy, badges

### Font Pairings by Palette

| Palette | Headings | Body | Feel |
|---------|----------|------|------|
| Classic Spa | Cormorant Garamond | Source Sans 3 | Warm editorial |
| Modern Wellness | Outfit | DM Sans | Clean contemporary |
| Luxe Minimal | Cormorant Garamond | DM Sans | Refined luxury |

### Type Scale

```
h1:  3.5rem  / 56px   — Hero headline          (Outfit 300 or Cormorant 400)
h2:  2.5rem  / 40px   — Section title          (Outfit 400 or Cormorant 500)
h3:  1.875rem / 30px  — Subsection title       (Outfit 500 or Cormorant 500)
h4:  1.375rem / 22px  — Card title / major UI   (Outfit 500)
h5:  1.125rem / 18px  — Subhead / label        (Outfit 500 or DM Sans 500)
h6:  0.875rem / 14px  — Caption / badge         (DM Sans 500 or Source Sans 3 500)
body: 1rem    / 16px  — Default body            (Source Sans 3 400 or DM Sans 400)
small: 0.875rem / 14px — Secondary text          (Source Sans 3 400)
```

### Line Height & Letter Spacing

| Element | Line Height | Letter Spacing | Notes |
|---------|-------------|----------------|-------|
| Headings h1–h2 | 1.1–1.2 | -0.02em | Tight, editorial |
| Headings h3–h4 | 1.25–1.3 | 0 | Slightly looser |
| Body text | 1.6–1.75 | 0 | Comfortable reading |
| Buttons / Labels | 1.0 | 0.03em | Uppercase labels only, tracking-wide |
| Caption / Meta | 1.4 | 0.01em | Slightly looser |

---

## 4. Layout & Structure

### Homepage Section Flow (Recommended)

**Rationale:** Hook the visitor with an immediate booking opportunity (hero), build trust through credentials and social proof (trust bar), then guide them naturally through services → differentiators → human connection (therapists) → logistics (location/hours) → persistent CTA.

#### 1. Hero Section
- **Layout:** Full-width, split layout (text left 45% / image right 55%) OR full-bleed image with overlay
- **Content:** Headline (benefit-driven, not feature list) + subheadline + primary CTA "Book Now" + secondary CTA "Explore Services"
- **Booking Widget:** Integrated inline or as a slide-out panel trigger — do not hide behind a click on first visit
- **Image:** Real, high-quality photo of a spa interior or treatment room (not stock)
- **Responsive:** Stack text above image on mobile; image becomes background with overlay on small screens

#### 2. Trust Bar
- **Layout:** Horizontal strip, 4–6 credential items in a single row (horizontal scroll on mobile)
- **Content:** Years in business · Google rating with star count · Number of clients served · Certification badges (Licensed Massage Therapists) · Massage Envy or other affiliation logos if applicable
- **Design:** Muted background (cream or light gray), small icons + short label, no heavy borders

#### 3. Services Overview (Bento Grid)
- **Layout:** Bento grid — asymmetric card layout with 2–3 service cards per row, varying card sizes (1 large + 2 medium + small icons row)
- **Content:** 6–9 featured services with icon, name, starting price, and "Learn More" link
- **Cards:** Rounded corners (12px), subtle shadow, cream/white background
- **Hover:** Slight lift (transform: translateY(-4px)), shadow deepens
- **Mobile:** 1-column stack

#### 4. Why Us (Differentiators)
- **Layout:** 2-column or 3-column feature grid with icon + heading + short description
- **Content:** 3–4 key differentiators:
  - "Licensed Therapists, Every Visit" (vs. franchise variability)
  - "Personalized Session — Always" (vs. one-size intake)
  - "20+ Specialized Techniques" (breadth of expertise)
  - "DC Metro's Highest-Rated" (social proof anchor)
- **Visual:** Muted icons, no heavy colored backgrounds — let typography breathe

#### 5. Testimonials
- **Layout:** Carousel/slider — 1 testimonial visible on desktop, swipeable on mobile
- **Content:** Client quote + first name, last initial + star rating + Google/Yelp badge
- **Design:** Large serif quote, centered, with a subtle quotation mark watermark
- **Navigation:** Dots below, auto-advance every 6 seconds with pause on hover/focus

#### 6. Therapist Bios Teaser
- **Layout:** Horizontal card row (3 therapists) or 2-column feature
- **Content:** Circular headshot + name + specialty + years of experience + "Meet Our Team" CTA
- **Design:** Warm, approachable — real photos, not generic silhouettes

#### 7. Location & Hours
- **Layout:** 2-column — map/embed left, info right
- **Content:** Address, phone (click-to-call), email, hours (bold today's hours), embedded Google Maps iframe
- **Design:** Simple, functional — do not over-design this section

#### 8. Footer
- **Layout:** 3–4 column grid + sticky booking CTA bar above footer
- **Columns:** Services (quick links) · About (links) · Contact Info · Newsletter signup
- **Sticky CTA Bar:** "Ready to relax? Book Your Session" — fixed at bottom of viewport on mobile, or inline above footer on desktop
- **Social:** Instagram, Facebook, Google Business links

---

### Service Page Structure (Template)

1. **Hero Banner** — Service name + hero image (full-width, 40vh)
2. **Quick Booking Strip** — Price range + Duration + "Book This Service" CTA
3. **What to Expect** — 3–4 paragraph description of the treatment process
4. **Benefits** — Icon list of key benefits (3–4 items)
5. **Add-Ons** — Small cards or list of complementary add-ons
6. **Pricing** — Clear price card with duration and what's included
7. **Related Services** — 2–3 related service cards
8. **Testimonial** — 1 relevant testimonial pull-quote
9. **Book CTA** — Full-width CTA section

---

### About Page Structure

1. **Hero** — "Our Story" headline + founder/spa narrative photo
2. **Mission Statement** — Single paragraph, centered, serif font
3. **Our Approach** — 2-column: philosophy left, team photo right
4. **Team Grid** — All therapist bios with photos, specializations, certifications
5. **Certifications & Credentials** — Logo strip + brief description
6. **Join Our Team** — Careers CTA if hiring
7. **Contact CTA**

---

### Contact Page Structure

1. **Hero** — "Get in Touch" or "Contact Us"
2. **Contact Form** — Name, email, phone, service interest (dropdown), message — embedded inline (not modal)
3. **Alternative Contact** — Phone (click-to-call), email, address with map
4. **Hours** — Full weekly schedule
5. **FAQ** — Expandable accordion for common questions

---

### Mobile-First Approach Specifics

- **Navigation:** Sticky top bar — logo left, hamburger menu right, "Book Now" button far right. Drawer slides from right, full-height, with large tap targets (48px minimum)
- **Hero:** Full-width, stacked — headline → subhead → CTA → then image below fold
- **Bento Grid:** Collapses to single column, cards remain full-width
- **Trust Bar:** Horizontal scroll (overflow-x: auto, snap points)
- **Testimonials:** Full-width swipeable cards
- **Therapist Row:** Horizontal scroll or 1-column stack
- **Footer:** Single column, generous spacing between sections
- **Sticky Booking CTA:** Always visible at bottom of screen on mobile (fixed position bar)

---

## 5. UI Components Library

### Hero Variants

#### Variant 1: Video Background
- **Use:** Homepage, emotive landing
- **Specs:** Full-viewport-height video (muted, autoplay, loop) with dark overlay (rgba black at 40–60% opacity)
- **Text:** White headline, white subhead, gold CTA button
- **Overlay content:** Service name + date of visit or simple headline

#### Variant 2: Bento/Hero Grid
- **Use:** Homepage alternative
- **Specs:** Split — left side has headline, subhead, 2 CTAs stacked; right side is a 2×2 grid of 4 images (treatment room, product, therapist, exterior)
- **Image treatment:** Rounded corners (8px), no border, subtle shadow

#### Variant 3: Split Layout (Image + Text)
- **Use:** Inner pages (About, Contact), service category pages
- **Specs:** 50/50 split — text on left, full-bleed image on right (image on left on alternate pages)
- **Mobile:** Stack — image becomes top hero image (30vh), text below

---

### Service Card

| State | Visual |
|-------|--------|
| Default | White card, 12px radius, subtle shadow, icon (32px, primary color) + service name (h4) + starting price + brief tagline |
| Hover | Card lifts (translateY -4px), shadow deepens (#7A9E7E at 15% opacity, 0 8px 24px), icon transitions to primary dark |
| Active / Click | Scale 0.98, shadow flattens briefly |
| Disabled | Opacity 0.5, no hover effects |
| Focus | 2px primary-color outline offset 2px (WCAG visible focus) |

---

### Booking Widget Placement

| Location | Type | Notes |
|----------|------|-------|
| Hero | Inline form or prominent button → slide-in panel | Do not require scroll to see booking opportunity |
| Sticky Footer (mobile) | Fixed bottom bar | "Book Now" button + small "or call" link |
| Sticky Header (desktop) | "Book Now" in nav | Always visible, does not expand on desktop |
| Service Page | Dedicated booking strip | Price + duration + "Book This Service" |
| Modal / Side Panel | Click-triggered overlay | Never a new page navigation for booking |

---

### Testimonial Carousel

- **Layout:** Single testimonial centered, max-width 720px, with large decorative quotation mark (gold, 80px, opacity 0.15)
- **Rating:** 5 gold stars displayed above quote
- **Attribution:** "— Sarah M., Fairfax" below quote in medium gray
- **Navigation:** 4px dots below, active dot is primary color, inactive are warm gray. Left/right arrow buttons on desktop only.
- **Auto-advance:** Every 6 seconds, pause on hover and on keyboard focus
- **Accessibility:** `role="region"`, `aria-label="Client testimonials"`, live region for slide updates

---

### Navigation

| State | Visual |
|-------|--------|
| Default | Transparent background on hero, logo left, nav links center-right, "Book Now" button far right |
| Scrolled (sticky) | White/off-white background with subtle shadow (0 2px 8px rgba(0,0,0,0.08)), transition 200ms ease |
| Mobile drawer | Full-height slide-in from right, dark overlay behind, 64px header with close X, nav links stacked at 24px font, booking CTA at bottom |
| Active link | Primary color text, no underline — use color only |
| Hover link | Primary dark color, 200ms transition |

---

### CTA Button Styles

#### Primary Button
- **Background:** Primary color (`#7A9E7E` or palette equivalent)
- **Text:** White, DM Sans 500, 16px, letter-spacing 0.03em
- **Padding:** 14px 28px
- **Border-radius:** 8px
- **Hover:** Primary dark (`#5C7A5F`), translateY -1px, shadow 0 4px 12px rgba(primary, 0.3)
- **Active:** Scale 0.98, shadow none
- **Disabled:** Opacity 0.5, cursor not-allowed
- **Focus:** 2px white outline offset 2px inside button (on dark backgrounds) OR 2px primary outline outside (on light backgrounds)

#### Secondary Button
- **Background:** Transparent
- **Border:** 1.5px solid primary color
- **Text:** Primary color, same font as primary
- **Hover:** Background fills with primary at 10% opacity

#### Ghost Button
- **Background:** Transparent
- **Border:** None
- **Text:** Primary color, underline on hover
- **Use:** Text CTAs, "Learn More" links

---

### Form Components

#### Input Fields
- **Height:** 48px
- **Border:** 1.5px solid `#D0C9C0` (warm gray)
- **Border-radius:** 6px
- **Background:** White
- **Padding:** 12px 16px
- **Focus:** Border color → primary, box-shadow 0 0 0 3px rgba(primary, 0.15)
- **Error:** Border color → error coral, small error message below in error coral 13px
- **Label:** DM Sans 500, 14px, dark charcoal, positioned above input with 8px gap

#### Textarea
- **Min-height:** 120px
- **Same styling as input fields

#### Select / Dropdown
- **Same height and styling as inputs
- **Custom chevron icon (SVG, primary color)

#### Checkbox / Radio
- **Custom styled: 20px square/round, rounded 4px corners (checkbox) or full round (radio)
- **Checked state:** Primary color background, white checkmark/dot
- **Focus:** Same as inputs

#### Newsletter Signup (inline)
- **Layout:** Email input + "Subscribe" button on same row
- **Width:** Input takes remaining space, button fixed width
- **Success state:** Input/button replaced with "Thanks! You're subscribed." message

---

### Pricing Display

#### Standalone Price Card
- **Service name:** h5
- **Price:** Large, bold, primary color (e.g., "From $120")
- **Duration:** Medium gray, small text below price ("60 minutes")
- **Includes:** Bulleted list in small text
- **CTA:** "Book Now" primary button at bottom

#### Package Bundling
- **Visual:** 2–3 service cards grouped with a "package" badge overlay (gold ribbon or stamp)
- **Total price:** Shown with strikethrough original price + discounted price
- **Savings badge:** "Save $40" in accent gold

---

### Image Treatment

| Use Case | Spec |
|----------|------|
| Hero / Landscape | Full-bleed, no border-radius |
| Service cards | 8px radius, soft shadow (0 4px 16px rgba(0,0,0,0.06)) |
| Therapist headshots | Circular (50% border-radius) |
| Testimonial attribution | 40px circular |
| Inline blog/content | 12px radius |
| Before/After | Side-by-side with no gap, 0 radius |

---

## 6. Animation & Motion Guidelines

### Page Load Sequence

**Recommended timing (total ~800ms):**
1. **0ms:** Page background color paints
2. **100ms:** Navigation bar fades in (opacity 0→1)
3. **200ms:** Hero text fades in + slides up 16px (opacity 0→1, translateY 16px→0)
4. **350ms:** Hero image fades in (if split layout) OR hero overlay content animates
5. **450ms:** Trust bar items stagger in (50ms delay each, left to right)
6. **600ms:** Content sections begin fade-in on scroll

### Scroll-Triggered Animations

- **Type:** Subtle fade + slide-up (intersection observer based)
- **Distance:** 20px slide, 0.3s duration, ease-out
- **Threshold:** Trigger when element is 15% into viewport
- **Once only:** Animate on first scroll-into-view, do not re-animate on scroll up
- **Supported:** Respects `prefers-reduced-motion` — replace with instant opacity change (no slide)

### Hover Micro-Interactions

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Service card lift | translateY(-4px) + shadow increase | 200ms | ease-out |
| Button hover | translateY(-1px) + shadow | 150ms | ease |
| Nav link color | color transition | 150ms | ease |
| Image zoom (cards) | scale(1.03) on image inside overflow:hidden | 300ms | ease-out |
| Social icon | scale(1.1) | 150ms | ease |
| Accordion expand | max-height transition | 300ms | ease-in-out |

### Loading States

- **Skeleton screens** — Warm gray animated shimmer (light→lighter→light) replacing content blocks. Use for testimonials and therapist cards on initial load.
- **Button loading:** Replace button text with spinner SVG, disable pointer events, maintain button width
- **Page transitions:** Fade out (150ms) → fade in (200ms) between route changes
- **Never:** Full-page spinners for content loads; use skeletons or inline spinners

---

## 7. Accessibility Requirements (WCAG 2.2 AA)

### Color Contrast Ratios

| Element | Minimum Ratio | Required For |
|---------|---------------|--------------|
| Body text (16px+) | 4.5:1 | All paragraph text, labels |
| Large text (24px+ or 18px bold) | 3:1 | Headlines, h3+ |
| UI components + graphics | 3:1 | Button text, input borders, icon contrast |
| Focus indicators | 3:1 | All interactive elements |

**Verification:** All primary, secondary, and dark text colors must pass on both white AND cream backgrounds.

### Focus States

- **Visible focus ring:** 2px solid primary color with 2px offset — on ALL interactive elements without exception
- **Focus-visible only:** Use `:focus-visible` to apply focus ring only for keyboard navigation, not on click/tap
- **No custom removal:** Never set `outline: none` without providing a custom focus indicator

### Screen Reader Considerations

- **Semantic HTML:** Use `<button>` for actions, `<a>` for links, `<nav>` for navigation, `<header>` for page header, `<main>` for primary content
- **Skip link:** "Skip to main content" link visible on focus at top of every page
- **ARIA labels:** Only when visual text is absent (icon-only buttons need `aria-label="Close menu"`)
- **Live regions:** `aria-live="polite"` for testimonial carousel slide changes
- **Heading hierarchy:** Never skip h2 → h4. Maintain logical order: h1 (page title) → h2 (sections) → h3 (subsections)
- **Alt text:** Every image has descriptive alt text; decorative images use `alt=""`
- **Form labels:** Every input has associated `<label>` (can be visually hidden but must exist in DOM)

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

All scroll-triggered animations revert to instant opacity change when `prefers-reduced-motion: reduce` is active.

---

## 8. Component Inventory Table

| Component | Purpose | States | Notes |
|-----------|---------|--------|-------|
| **NavBar** | Site-wide navigation | Default, scrolled, mobile-open | Transparent on hero, solid on scroll |
| **NavLink** | Navigation menu item | Default, hover, active, focus | Color change only, no underline |
| **MobileDrawer** | Mobile navigation panel | Open, closed | Slide from right, overlay behind |
| **PrimaryButton** | Main CTA | Default, hover, active, disabled, loading, focus | Consistent across all pages |
| **SecondaryButton** | Secondary CTA | Default, hover, active, disabled, focus | Border-based, no fill |
| **GhostButton** | Text CTA / links | Default, hover, focus | Underline on hover |
| **ServiceCard** | Service listing | Default, hover, active, focus | Bento grid layout |
| **TestimonialCard** | Client testimonial display | Default | Single card in carousel |
| **TestimonialCarousel** | Testimonial slider | Playing, paused, focus | Auto-advance, dots + arrows |
| **TherapistCard** | Team member bio card | Default, hover | Circular photo, credentials |
| **TrustBadge** | Credential display item | Default | Icon + text, horizontal strip |
| **BookingWidget** | Inline or slide-in booking | Default, open, submitting, success, error | Persistent access throughout site |
| **FormInput** | Text/email input | Default, focus, filled, error, disabled | Full label + error message |
| **FormTextarea** | Multi-line text input | Default, focus, filled, error, disabled | Same as FormInput |
| **FormSelect** | Dropdown select | Default, focus, open, error, disabled | Custom chevron icon |
| **FormCheckbox** | Checkbox input | Unchecked, checked, focus, disabled | Custom styled |
| **PriceCard** | Service pricing display | Default | Price + duration + includes list |
| **PackageBadge** | Package/savings indicator | Default | Gold accent color |
| **HeroSection** | Homepage hero | Video, bento, split variants | Responsive layout |
| **SectionHeader** | Section title + optional subtitle | Default | Centered or left-aligned |
| **Footer** | Site-wide footer | Default | Multi-column, newsletter signup |
| **NewsletterForm** | Email subscription | Default, submitting, success, error | Inline layout |
| **Accordion** | Expandable FAQ/content | Collapsed, expanded, focus | Smooth height animation |
| **MapEmbed** | Google Maps location | Default | Responsive iframe |
| **Breadcrumb** | Page navigation aid | Default | For inner pages |
| **PageHeader** | Inner page hero | Default | Title + optional subtitle + image |
| **ImageGallery** | Service/treatment photos | Default | Lightbox on click |
| **LoadingSpinner** | Inline loading indicator | Default | Used in buttons and inline |
| **SkeletonLoader** | Content loading placeholder | Default | Shimmer animation |
| **CookieConsent** | GDPR/privacy notice | Default, accepted | Bottom-fixed bar |
| **StickyBookingBar** | Mobile booking CTA | Default, expanded | Fixed bottom of viewport |

---

## Appendix: Implementation Notes

### Palette Switching

Each palette maps to CSS custom properties. Implement a `data-theme="classic|modern|luxe"` attribute on `<html>` and define all colors as CSS variables. This enables future theme-switcher functionality without duplicating component styles.

### Breakpoints

| Name | Min-Width | Use |
|------|-----------|-----|
| Mobile | 0px | Default (mobile-first) |
| Tablet | 768px | Small tablet / large phone landscape |
| Desktop | 1024px | Standard laptop |
| Wide | 1280px | Large monitors |
| Max | 1440px | Container max-width |

### Spacing System (8pt Grid)

```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### Border Radius Scale

```
none: 0
sm:   4px   (inputs, small badges)
md:   8px   (cards, images)
lg:   12px  (service cards, modals)
xl:   16px  (feature sections)
full: 9999px (circular avatars, pills)
```

---

_This design system serves as the single source of truth for the Oasis Wellness Center website redesign. All implementation decisions should trace back to these specifications. Update this document before making any cross-cutting visual changes._