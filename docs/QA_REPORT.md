# Oasis Wellness Redesign — QA Report

**Date:** 2026-05-09
**QA Agent:** Subagent (Kitty delegation)
**Build Target:** Next.js 16.2.6 (Turbopack), static export

---

## Summary

**CONDITIONAL PASS**

The site builds successfully and has strong feature coverage. However, there is **one critical issue** (production console.log in `/contact`) and **two conditional issues** related to the static export configuration that must be resolved before launch.

---

## Pre-Launch Checklist Status

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Next.js upgraded to 16.x | ✅ PASS | `package.json` shows `"next": "^16.2.6"` |
| 2 | `images.domains` replaced with `remotePatterns` | ✅ PASS | `next.config.js` uses `remotePatterns` for unsplash, picsum, and oasiswellnessva.com |
| 3 | `next-sitemap` package installed | ✅ PASS | `"next-sitemap": "^4.2.3"` in devDependencies |
| 4 | `sitemap.config.cjs` created | ✅ PASS | Config found at `next-sitemap.config.cjs` |
| 5 | sitemap.xml + robots.txt generated | ⚠️ CONDITIONAL | Files exist in `/public/` (pre-build), but **not in `/out/`** after build. The build outputs to `.next/` by default. See Issue #2. |
| 6 | `favicon.svg` in `public/` | ✅ PASS | Present at `/public/favicon.svg` |
| 7 | `robots.txt` in `public/` | ✅ PASS | Present at `/public/robots.txt` |
| 8 | `layout.tsx` references `/favicon.svg` in `icons` | ✅ PASS | Both `icon` and `shortcut` pointing to `/favicon.svg` |
| 9 | JSON-LD LocalBusiness schema (no broken image URL) | ✅ PASS | `layout.tsx` JSON-LD has no `image` field — clean |
| 10 | Build uses Turbopack (not Webpack) | ✅ PASS | `▲ Next.js 16.2.6 (Turbopack)` confirmed in build output |
| 11 | `postbuild` script removed | ✅ PASS | No `postbuild` in `package.json` scripts |

---

## Build Result

```
✅ Build completed successfully in ~6 seconds
✅ TypeScript: Finished in 3.1s — no errors
✅ Static pages: 22 routes generated (including 15 service slugs)
⚠️  Static export (out/) not populated — see Issue #2
```

**Routes generated:**
- `/` (homepage)
- `/about`
- `/booking`
- `/contact`
- `/services` (listing)
- `/services/[slug]` (15 individual service pages via generateStaticParams)
- `/_not-found`

---

## Feature Coverage

| Feature | Status | Notes |
|---------|--------|-------|
| Homepage hero section | ✅ | Trust indicators, CTA buttons, hero image placeholder |
| Services bento grid | ✅ | `featuredServices` from lib/services, responsive 3-col grid |
| Why Choose Us section | ✅ | 3 feature cards (Licensed, Personalized, Same-Day) |
| Testimonials section | ✅ | 3 hardcoded reviews with star ratings |
| Pricing preview | ✅ | 4 services with price/duration |
| Location section | ✅ | Address, hours, phone, email, map placeholder |
| Sticky mobile CTA | ✅ | Fixed bottom bar on mobile only |
| `/about` page | ✅ | Philosophy, credentials grid, team bios |
| `/booking` page | ✅ | Booking widget placeholder, how-to-book, FAQ, CTA |
| `/contact` page | ✅ | Contact form, sidebar info, map placeholder, FAQ accordion |
| `/services` listing | ✅ | All 15 services in grid with category tags |
| 15 individual service pages | ✅ | Dynamic routes via `generateStaticParams` |
| Header navigation | ✅ | Home, Services, About, Contact + "Book Now" CTA |
| Mobile hamburger menu | ✅ | `'use client'` with scroll state and mobile toggle |
| Footer 3-column layout | ✅ | Brand, quick links, contact info + social icons |
| Mobile-responsive (Tailwind) | ✅ | `md:`, `lg:` breakpoints throughout |
| SEO metadata per page | ✅ | `title`, `description`, `openGraph` in each page's metadata |
| LocalBusiness JSON-LD schema | ✅ | In `layout.tsx` — clean, no broken image URL |
| next-sitemap configured | ✅ | Generates sitemap index + sitemaps on build |

---

## Code Quality

| Check | Status | Notes |
|-------|--------|-------|
| No `console.log` in production | ❌ FAIL | `contact/page.tsx:66` — `console.log('Form submitted:', formData)` |
| All nav links use Next.js `<Link>` | ✅ PASS | Internal nav uses `<Link>`; external links use `<a>` with `target="_blank"` where appropriate |
| No hardcoded oasiswellnessva.com domain in source | ✅ PASS | Only appears in `next-sitemap.config.cjs` `siteUrl` (appropriate) |
| Form handlers call `e.preventDefault()` | ✅ PASS | `handleSubmit` calls `e.preventDefault()` before submission |
| Form shows submission state | ✅ PASS | `submitted` state renders success message after submit |
| `'use client'` on interactive components | ✅ PASS | `Header.tsx` and `contact/page.tsx` both marked correctly |

---

## Critical Issues (Must Fix Before Launch)

### 🔴 Issue #1: Production `console.log` in Contact Form

**File:** `src/app/contact/page.tsx`, line 66

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // In production: integrate with email service (Formspree, Resend, etc.)
  console.log('Form submitted:', formData)  // ← REMOVE BEFORE LAUNCH
  setSubmitted(true)
}
```

**Action required:** Remove the `console.log` line before deploying. The form's success state (`submitted = true`) is the correct UX signal — no client-side logging needed. If analytics are needed in the future, use a proper event tracking library (e.g., Vercel Analytics, Posthog).

---

## Non-Critical Issues (Nice to Have)

### 🟡 Issue #2: Static Export `/out/` Not Populated

**Description:** The build does not output to `/out/` (static export directory). The sitemap files currently in `/public/` were pre-existing and placed there manually or by a previous build step. `next-sitemap` runs and reports success, but the generated files go to the default Next.js output dir (`.next/` or `standalone/`), not `/out/`.

**Why this matters for launch:**
- If deploying to a static host (Vercel, Netlify, GitHub Pages, S3), the sitemap/robots must be served from the deployed root
- The `next-sitemap.config.cjs` correctly points `siteUrl` to `https://oasiswellnessva.com` for sitemap URL generation
- Vercel/Netlify auto-serve static files from `public/` — so existing setup works there
- However, if the deployment target requires an `/out/` export, the `next.config.js` needs `output: 'export'` and `images.unoptimized: true` already set

**Current config:** `next.config.js` does NOT have `output: 'export'`. The build produces `.next/` (standard Next.js output). Sitemap is served from `public/` which works for Vercel/Netlify static deployments.

**Recommendation:** Confirm deployment target. If Vercel (recommended for Next.js), keep as-is — `public/sitemap.xml` and `public/robots.txt` will be served automatically. If deploying to a plain static host that requires `/out/`, add `output: 'export'` to `next.config.js` and update the build script to copy/serve from `/out/`.

---

## Overall Recommendation

| | |
|---|---|
| **Status** | CONDITIONAL PASS |
| **Ready for soft launch?** | Yes — with Issue #1 fixed |
| **Ready for hard launch?** | Almost — fix Issue #1 and confirm deployment target for Issue #2 |
| **Blocker count** | 1 (critical) |
| **Nice-to-have count** | 1 (non-critical) |

**Next steps:**
1. **Immediately:** Remove the `console.log` from `contact/page.tsx` line 66
2. **Before deploy:** Confirm whether deployment is Vercel (keep as-is) or static host requiring `/out/` export
3. **Optional:** Wire up the contact form to a real backend (Formspree, Resend, or custom API route)
4. **Optional:** Replace booking widget placeholder with a real Vagaro/Acuity embed
5. **Optional:** Replace map placeholder with a Google Maps embed

---

*QA Report generated 2026-05-09 by Kitty subagent*