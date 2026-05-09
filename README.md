# Oasis Wellness Redesign

Next.js (App Router) website redesign for **Miracle Hands Massage & Spa** / **Oasis Wellness Center of Virginia**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond (headings) + DM Sans (body)

## Quick Start

```bash
cd /home/mathew/workspace/oasis-redesign
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services bento grid, testimonials, pricing, location |
| `/services` | All services listing |
| `/services/[slug]` | Dynamic service detail pages |
| `/about` | Our story, team, certifications |
| `/contact` | Contact form + FAQ accordion |
| `/booking` | Booking widget placeholder + cancellation policy |

## Features

- Mobile-first responsive design with sticky mobile CTA
- Sticky glassmorphism header with scroll shadow transition
- Mobile hamburger drawer navigation
- Bento grid layout for featured services
- Full SEO metadata + JSON-LD LocalBusiness schema
- Contact form with service interest dropdown
- FAQ accordion on contact page
- 15 individual service pages with unique content
- Booking widget integration placeholder

## Booking Widget Integration

The booking page currently shows a placeholder. To enable real online booking:

1. **Vagaro** — Add Vagaro embed code in `/src/app/booking/page.tsx`
2. **Acuity Scheduling** — Replace placeholder with Acuity embed
3. **Square Appointments** — Alternative booking platform

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Netlify

```bash
npm run build
netlify deploy --prod
```

## Project Structure

```
oasis-redesign/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO + schema
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Tailwind + custom properties
│   │   ├── about/page.tsx
│   │   ├── booking/page.tsx
│   │   ├── contact/page.tsx
│   │   └── services/
│   │       ├── page.tsx         # Services listing
│   │       ├── [slug]/page.tsx  # Dynamic service detail
│   │       └── deep-tissue/page.tsx  # Individual service pages
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   └── lib/
│       ├── services.ts         # Service data (source of truth)
│       └── utils.ts            # cn() helper, formatters
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Design System

- **Primary:** Sage green `#7C9A82`
- **Background:** Warm cream `#F5F1EB`
- **Text:** Deep charcoal `#2D2D2D`
- **Accent:** Refined gold `#B8975A`
- **Fonts:** Cormorant Garamond (headings), DM Sans (body)

## Business Info

- **Name:** Miracle Hands Massage & Spa
- **Location:** 14200G Centreville Square, Centerville VA 20121
- **Phone:** 571-380-6868
- **Email:** Miraclehandsva@gmail.com
- **Hours:** 7 days/week, 9:30AM–9:30PM
- **Services:** 15+ modalities ($60–$220)