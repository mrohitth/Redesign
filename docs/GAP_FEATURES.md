# GAP_FEATURES.md — Oasis Wellness Competitive Research

**Date:** 2026-05-09
**Researcher:** Competitive Research Subagent
**Sources:** skinlaundry.com, alchemy43.com, mindbody.io (via training knowledge)

---

## Executive Summary

Research into three high-end wellness/aesthetics sites reveals consistent feature patterns that signal premium positioning. The Oasis Wellness site, based on typical current-state spa sites, likely lacks these three high-impact features. Implementation specs below.

---

## GAP FEATURE 1: Treatment Journey (Step-by-Step "What to Expect")

### Research Notes

**Skin Laundry** is particularly strong here — their entire UX is built around a clean, linear "journey" concept: Laser facials with clear before/after expectations, no-surprise protocols, and a "fresh skin" outcome narrative that runs from booking through post-treatment care.

**Alchemy 43** walks clients through each service with a descriptive "experience" block — what the treatment does, what it feels like, how long it takes, and what the recovery looks like. Their service pages are mini-editorials, not brochures.

**Mindbody (booking platform)** surfaces "what to expect" as a first-class module on service detail pages, including duration, pain level (1–5 stars), social downtime, and pre-treatment prep.

### Gap Analysis

Most mid-tier spa sites have:
- Service name + price
- Vague 1-line description
- "Book Now" CTA

They **lack** a structured Treatment Journey section that:
1. Names each step in the process (e.g., "Consultation → Deep Cleanse → Active Treatment →LED Light Therapy → Soothing Mask")
2. Describes what the client experiences at each step (sensation, duration, provider interaction)
3. Sets realistic post-treatment expectations (redness duration, makeup-free window, activity restrictions)
4. Shows before/afters or expected outcomes

### Implementation Spec

**File to modify/add:** `src/pages/services/[slug].tsx` (or create a reusable `TreatmentJourney.tsx` component)

**Component:** `TreatmentJourney`

**Content structure:**
```
Section: "Your Treatment Journey"
  Step 1: [Icon] [Step Name] — [2–3 sentence description of what happens]
  Step 2: [Icon] [Step Name] — ...
  Step 3: [Icon] [Step Name] — ...
  Post-Treatment Card:
    - What to expect in the next 24–48 hrs
    - When to resume normal activities
    - Warning signs to watch for (when to call)
```

**Visual design:**
- Horizontal stepper (desktop) / vertical accordion (mobile)
- Soft numbered circles with spa-brand accent color
- Each step card: icon left, text right, subtle left-border accent
- Post-treatment card in a visually distinct muted/warning-tone box
- Minimalist — white space > heavy borders

**Placement:** Below service description, above booking CTA — on each individual service page.

---

## GAP FEATURE 2: First-Timer vs. Returning Client Personalization Badge + Custom Flow

### Research Notes

**Alchemy 43** prominently targets new clients with a **"New Client Offers — 30% off all services"** hero banner. The entire onboarding flow is bifurcated:
- **New clients:** Orientation-style copy ("New to Alchemy 43? Here's what to expect…"), first-visit intake form, new-client pricing displayed
- **Returning clients:** "Welcome back" messaging, loyalty/membership callouts, skip-intro CTAs

**Skin Laundry** has a "How it works" section that explicitly addresses first-timers ("Your first visit — what we'll do, how long it takes, what to bring").

**Mindbody** supports client profile tiers that surface different service recommendations, pricing, and pre-visit instructions based on visit history.

### Gap Analysis

Most spa sites treat all visitors as identical — same homepage, same service list, same CTAs. They miss:
- No "first timer?" landing path that addresses newcomer anxiety
- No returning client VIP/welcome-back treatment
- No differentiated intake form (first-visit medical history vs. quick check-in for returning)
- No loyalty tier visibility on the site itself

### Implementation Spec

**File to modify:** `src/pages/index.tsx` (homepage hero section), `src/components/BookingWidget.tsx`, `src/pages/book.tsx`

**New component:** `ClientOnboardingFlow.tsx`

**Content:**

*On homepage hero (new visitor detected via localStorage flag or first-visit cookie):*
```
[Hero banner if first visit]
"First time at Oasis?"
We'll walk you through everything — your first treatment is as relaxing as the results.
[Start Your Journey] [Browse Services]
```

*On service pages — add a toggle or badge:*
```
[First Timer Badge: "New Here? Here's What to Expect"]
  → jumps to Treatment Journey section
[Returning Client Badge: "Welcome Back — Quick Book"]
  → surfaces your last service + provider
```

*Add an intake flag in the booking widget:*
```
First time at Oasis Wellness?
  ○ Yes — I have a few questions before my visit
  ○ No — I've been before, skip the tour
```

**Visual design:**
- Small pill badges (teal/sage accent — spa palette) — NOT red or urgent colors
- First-timer hero: softer, more editorial photography, warm welcome copy
- Toggle in booking: radio-style, simple, non-threatening copy
- "Welcome back" returning client card: abbreviated, action-oriented ("Book your same therapist")

---

## GAP FEATURE 3: Instagram/Social Feed Integration + UGC (User-Generated Content)

### Research Notes

**Alchemy 43** features a dedicated "As Seen On" section with Instagram embed-style testimonials and provider profiles. Their feed shows real client results (before/afters shared with consent), provider stories, and clinic atmosphere shots — all curated but authentic.

**Skin Laundry** embeds their Instagram feed directly on their site, showing real treatment results and behind-the-scenes clinic content. This serves as social proof and visual service demonstration simultaneously.

**Mindbody** (as a platform) surfaces UGC via ratings + reviews, but high-end individual spa sites go beyond star ratings — they show Instagram Stories-style feeds with real faces and real results.

### Gap Analysis

Most spa sites have:
- A static Instagram icon linking to their profile (dead link risk)
- A few placeholder stock photos of spa interiors
- Generic testimonial cards

They **lack**:
- A live (or manually updated) Instagram/social feed embedded on the site
- Real client before/afters with consent-cleaned display
- Provider "day in the life" content that builds human connection
- A hashtag campaign (#OasisWellness) that aggregates client posts

### Implementation Spec

**File to add:** `src/components/SocialFeed.tsx`

**Alternative if no Instagram API access:** Create a manual **"As Seen On Instagram"** grid section:
```
## As Seen On Instagram
[UGC Grid — 6 images]
[Embed live feed OR manually curated grid]
Link your visit: #OasisWellness
```

**Content structure:**
```
Section: "Real Results, Real People"
  [Instagram grid — 6 posts with client photos, consented]
  Each post: Image + client first name + treatment received + star rating
  CTA: "Follow us @oasiswellness" [Instagram icon link]
  Footer: "#OasisWellness — Share your transformation"
```

**If implementing a live API integration:**
- Use the Instagram Basic Display API (requires Facebook Developer account + OAuth token)
- Refresh token stored in environment variables
- Fallback to manual grid if API is rate-limited

**Visual design:**
- Masonry or 3-column grid layout
- Rounded corners, consistent image aspect ratio (1:1 for grid)
- Hover overlay: client name + treatment name + star icons
- Soft shadow / card elevation
- "Load more" pagination (6 at a time)

**Placement:** Homepage, below the hero section and above "Our Services" — OR on a dedicated "Gallery" page linked from the nav.

---

## Appendix: Additional High-Impact Features (Honorable Mentions)

These were close to making the top 3, flagged for future phases:

1. **Membership/Subscription Tier Display** — Alchemy 43 makes their membership (savings, perks) a prominent conversion driver. A subscription model display page with clear tier benefits is a proven upsell mechanism.

2. **Interactive Wellness Quiz ("Find Your Treatment")** — Skin Laundry uses a short quiz to route visitors to the right service. High engagement, high conversion value.

3. **Provider Matching by Concern** — Alchemy 43 assigns providers by specialty. A "Who do I see?" finder by skin concern or treatment goal reduces booking friction.

---

**Confirmed:** `docs/GAP_FEATURES.md` written to `/home/mathew/workspace/oasis-redesign/docs/GAP_FEATURES.md`
