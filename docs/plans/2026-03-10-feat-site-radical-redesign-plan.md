---
title: "Radical Redesign — Minimalist Dual-Funnel Site"
type: feat
status: active
date: 2026-03-10
origin: docs/brainstorms/2026-03-10-site-redesign-brainstorm.md
---

# Radical Redesign — Minimalist Dual-Funnel Site

## Overview

Strip coachjack.xyz from 13 pages / 6 nav links / light cream theme down to 4 core pages / 2 nav links + CTA / full Jack OS dark theme. Every page funnels to `/start`. The site becomes the conversion-optimized front end for two funnels: The Portal ($20/mo self-serve AI journey) and 1:1 coaching.

**Current state:** 13 routes, light cream/sage palette, 6 nav links + "Book a Call" CTA pointing to `/contact`, content sprawl across service pages with significant overlap.

**Target state:** 4 core pages + SEO content, `Coaching | About | [Start →]` nav, full dark theme matching The Portal, single conversion path through `/start`.

(see brainstorm: `docs/brainstorms/2026-03-10-site-redesign-brainstorm.md`)

## Proposed Solution

### Architecture

```
/ (homepage)         — One-scroll marketing story → /start
/coaching            — Unified services: exec, founders, retreats, FAQ → /start
/about               — Trust-building: story, credentials, philosophy → /start
/start               — Dual-funnel intake (already live, needs layout refactor)
/contact             — Minimal NAP page, footer-linked only
/resources/*         — SEO articles (keep existing 2, add over time)

Old routes → 301 redirects to /coaching (or specific anchors)
```

### Implementation Phases

#### Phase 1: Dark Theme Foundation

Swap the entire site from light cream/sage to Jack OS dark palette. This is the highest-impact, lowest-risk change — it's mechanical CSS work that doesn't touch content or routing.

**Tasks:**

- [ ] **Replace `globals.css` color tokens** — swap all `--color-cream-*`, `--color-sage-*`, `--color-stone-*`, `--color-charcoal-*` with Jack OS custom properties (`--sand`, `--stone`, `--warm-gray`, `--earth`, `--deep`, `--sage`, `--amber`, `--amber-light`). Add `--surface: #242019`. Add `html { color-scheme: dark; }`.
  - File: `src/app/globals.css`
  - Kill all light-theme utility classes (`.hero-gradient`, `.section-dark`, `.section-sage`, `.card-elevated` in their current form) and rebuild for dark palette

- [ ] **Update `Nav.tsx`** — Convert from `bg-cream-100/95` light nav to dark nav: `background: rgba(26, 23, 20, 0.92)`, `backdrop-filter: blur(12px)`, amber hover states. Keep **fixed top** position (not bottom — this is a marketing site, not an app). Reduce links to: `Coaching | About | [Start →]`
  - File: `src/components/Nav.tsx`
  - CTA changes from "Book a Call" → `/contact` to "Start" → `/start` with amber background
  - Mobile hamburger: same 2 links + full-width amber CTA

- [ ] **Update `Footer.tsx`** — Dark theme footer. Simplify from 4-column grid to minimal: tagline, nav links (Coaching, About, Contact, Resources), social links, copyright. Use `var(--sand)` background, `var(--stone)` border-top.
  - File: `src/components/Footer.tsx`
  - Add `/contact` link here (it's footer-only per spec)

- [ ] **Update `Section.tsx`** — Swap background variants to dark palette. Primary bg: `var(--sand)`. Alternate: `var(--surface)`.
  - File: `src/components/Section.tsx`

- [ ] **Update `Button.tsx`** — Primary: `var(--amber)` bg, `var(--sand)` text. Secondary: transparent, `var(--amber)` border + text.
  - File: `src/components/Button.tsx`

- [ ] **Update `TestimonialCard.tsx`** — Dark card surface (`var(--surface)`), `var(--stone)` border, `var(--deep)` quote text, `var(--earth)` attribution.
  - File: `src/components/TestimonialCard.tsx`

- [ ] **Update `FadeIn.tsx`** — Should work as-is (no color references), verify.

- [ ] **Photo treatment** — Apply CSS filter to all `<img>` tags in content sections: `filter: brightness(0.8) saturate(0.7)`. Add a subtle overlay via `::after` pseudo-element with `background: rgba(26, 23, 20, 0.15)` for the moody/cinematic feel. Define a `.photo-dark` utility class in `globals.css`.
  - Affects: hero images on homepage, about page, coaching pages

- [ ] **Update `layout.tsx` root** — Ensure `<body>` gets `background: var(--sand); color: var(--deep)`. Font loading stays the same (Lora + Inter already correct).
  - File: `src/app/layout.tsx`

**Acceptance criteria:**
- All pages render with Jack OS dark palette — no cream, no sage-as-primary
- Nav shows 2 links + amber CTA, works on mobile
- Footer is simplified with /contact link
- No flash of light theme on any page load

---

#### Phase 2: Page Consolidation + Redirects

Delete old pages, create `/coaching`, update homepage and `/about`, set up 301 redirects.

**Tasks:**

- [ ] **Create `/coaching` page** — New unified services page absorbing content from `/executive-coaching`, `/life-coaching`, `/coaching-for-founders`, and `/sedona-retreats`.
  - File: `src/app/coaching/page.tsx`
  - Anchor sections with defined fragment IDs:
    - `#executive-coaching` — Who it's for, approach, outcomes. Primary section.
    - `#founders` — Founder-specific framing. Absorbs `/coaching-for-founders` content.
    - `#retreats` — Brief Sedona section. Co-led with Chelsea. Links to BTB site.
    - `#faq` — Consolidated 5-6 questions (see Content Decisions below)
  - Hero: coaching-specific headline + sub-copy
  - Final CTA: amber button → `/start`
  - Structured data: `createServiceSchema` + `createFaqSchema`

- [ ] **Rewrite homepage** — Rebuild `/` as a single-scroll conversion page.
  - File: `src/app/page.tsx`
  - Sections in order:
    1. **Hero** — "Leadership is who you are, not what you do." + sub-copy + CTA → `/start`
    2. **Philosophy** — "Better humans make better leaders." 2-3 sentences.
    3. **Social proof** — 2-3 real testimonials (Elizabeth Blass, Sims Tillirson + 1 more when available)
    4. **What I do** — Two cards: 1:1 Coaching (links to `/coaching`) + The Portal (links to `/start`). Equal visual weight.
    5. **Differentiation** — Nervous system + leadership + AI fluency. Short, punchy.
    6. **Final CTA** — One line + amber button → `/start`
  - Structured data: `localBusinessSchema` + `personSchema`

- [ ] **Update `/about` page** — Keep existing narrative structure but trim. Jack's story, credentials, philosophy. Trust-building page.
  - File: `src/app/about/page.tsx`
  - Keep wound → awakening → work arc
  - Add CTA section at bottom → `/start`
  - Structured data: `personSchema`

- [ ] **Simplify `/contact` page** — Strip the form. Minimal: email (`jack@coachjack.xyz`), location (Phoenix/Scottsdale, AZ), link to `/start`. NAP data for local SEO.
  - File: `src/app/contact/page.tsx`
  - No contact form — `/start` is the universal intake
  - Update email from `jack@becomingthebridge.co` to `jack@coachjack.xyz` (already verified in Resend)

- [ ] **Refactor `/start` layout** — Remove the `position: fixed; inset: 0; z-index: 100` overlay approach. On the new all-dark site, `/start` should use the global layout (show nav + footer). The dark aesthetic comes from the global theme now, not an isolated overlay.
  - File: `src/app/start/layout.tsx`
  - Keep the page content and form — just remove the layout isolation
  - Add a back/home link for users who land on `/start` directly and aren't ready to submit
  - Add `robots: { index: false }` to metadata (don't index the form page)

- [ ] **Set up 301 redirects** in `next.config.ts`:
  - File: `next.config.ts`
  ```typescript
  async redirects() {
    return [
      { source: '/executive-coaching', destination: '/coaching#executive-coaching', permanent: true },
      { source: '/life-coaching', destination: '/coaching', permanent: true },
      { source: '/coaching-for-founders', destination: '/coaching#founders', permanent: true },
      { source: '/sedona-retreats', destination: '/coaching#retreats', permanent: true },
      { source: '/workshops', destination: 'https://becomingthebridge.co', permanent: true },
      { source: '/writing', destination: '/coaching', permanent: true },
      { source: '/testimonials', destination: '/', permanent: true },
    ];
  }
  ```
  - `/workshops` → BTB site (cross-domain), not `/coaching` — BTB traffic shouldn't land on coaching services
  - `/testimonials` → homepage (where social proof section lives), not `/coaching`

- [ ] **Delete old page directories** after redirects are confirmed working:
  - `src/app/executive-coaching/`
  - `src/app/life-coaching/`
  - `src/app/coaching-for-founders/`
  - `src/app/sedona-retreats/`
  - `src/app/workshops/`
  - `src/app/writing/`
  - `src/app/testimonials/`

- [ ] **Create custom 404 page** — Dark themed, brief copy, links to `/` and `/start`.
  - File: `src/app/not-found.tsx`

**Acceptance criteria:**
- All old URLs return 301 to correct destinations
- `/coaching` renders with all three anchor sections + FAQ
- Homepage is a single conversion-focused scroll
- `/start` integrates with global layout (nav visible)
- No broken internal links across the site

---

#### Phase 3: Content + SEO Polish

Update all content references, structured data, sitemap, and testimonials.

**Tasks:**

- [ ] **Update `site-content.ts`** — Major rewrite. Remove all killed page content objects. Add `coaching` content object. Update `nav.links` to just Coaching + About. Update `footer` links. Change email to `jack@coachjack.xyz`. Update `calendlyUrl` to actual URL.
  - File: `src/lib/site-content.ts`
  - This is the single source of truth for all copy — most content changes happen here

- [ ] **Update `testimonials.ts`** — Replace placeholder names with real attributions. At minimum: Elizabeth Blass (Karbon) and Sims Tillirson (Founder, Tillirson Consulting Group). Jack needs to retrieve 3-5 more from LinkedIn recommendations page.
  - File: `src/lib/testimonials.ts`

- [ ] **Update `sitemap.ts`** — Remove all redirected URLs. Add `/coaching`. Keep `/resources/*`, `/about`, `/contact`. Exclude `/start`.
  - File: `src/app/sitemap.ts`

- [ ] **Update structured data** —
  - Homepage: `localBusinessSchema` (keep) + `personSchema` (add)
  - `/coaching`: `createServiceSchema` for each service type + `createFaqSchema`
  - `/about`: `personSchema` (already there)
  - `/contact`: `localBusinessSchema` (NAP anchor)
  - `/resources/*`: `createArticleSchema` (already there)
  - Update `localBusinessSchema` in `JsonLd.tsx`: change email to `jack@coachjack.xyz`
  - File: `src/components/JsonLd.tsx`

- [ ] **Update `robots.ts`** — Ensure `/start` is disallowed. Keep everything else crawlable.
  - File: `src/app/robots.ts`

- [ ] **Internal linking from `/resources/*` articles** — Each article should have a CTA linking to `/coaching` (warm path) and a secondary link to `/start` (direct path). Update both resource pages.
  - Files: `src/app/resources/what-is-executive-coaching/page.tsx`, `src/app/resources/executive-coaching-cost/page.tsx`

- [ ] **Meta tags audit** — Update `meta` object in `site-content.ts` for all surviving pages. Remove meta for killed pages. Add meta for `/coaching`.

**Acceptance criteria:**
- Sitemap contains only live, non-redirected URLs
- All structured data validates (test with Google Rich Results Test)
- Testimonials show real names and companies
- No references to old pages anywhere in content or metadata
- `/start` excluded from search indexing

---

## Content Decisions

These content choices were resolved in the brainstorm or are recommended defaults:

| Decision | Resolution |
|----------|------------|
| Hero headline | "Leadership is who you are, not what you do." — keep as-is |
| Life coaching content | Absorbed into general coaching framing under Executive Coaching section. No separate "life coaching" anchor — it's not a distinct service offering going forward. |
| Contact email | `jack@coachjack.xyz` (already verified in Resend, matches site brand) |
| Nav position | Fixed top (marketing site convention), not fixed bottom (app convention) |
| /workshops redirect | → `becomingthebridge.co` (cross-domain). BTB traffic shouldn't land on coaching. |
| /testimonials redirect | → `/` (homepage social proof section is the new home for testimonials) |
| FAQ survivors (5-6) | Recommend: (1) How is coaching different from therapy? (2) Do you work virtually or in person? (3) What's the time commitment? (4) What does the investment look like? (5) What is The Portal? (6) Who is this for? |
| /start layout | Refactor to use global layout. Overlay approach unnecessary when entire site is dark. |
| Photo treatment | CSS `filter: brightness(0.8) saturate(0.7)` + overlay. No re-export needed. |
| Anchor fragment IDs | `#executive-coaching`, `#founders`, `#retreats`, `#faq` |

## Content Dependencies (Blocks Phase 3)

- [ ] Jack retrieves remaining 5 LinkedIn testimonials from `linkedin.com/in/jackrosenkrantz/details/recommendations/`
- [ ] Jack confirms or edits the 5-6 FAQ questions listed above
- [ ] Jack provides or confirms the "differentiation" copy for the homepage (nervous system + leadership + AI fluency paragraph)

## System-Wide Impact

### Redirect Chain Risk
Old URLs → 301 → `/coaching` (or anchors). If any external sites link to the old URLs, they take one redirect hop. No chain risk. However, `next.config.ts` redirects run at the Next.js level — on Cloudflare Workers via OpenNext, verify these execute before the page handler. If not, implement redirects in Cloudflare Workers config instead.

### /start Form — Dual-Funnel Transparency
The SpecFlow analysis flagged that the `/start` form doesn't disclose that submission activates both funnels (Portal account + coaching pipeline). The current copy is Portal-centric ("7-day trial · No credit card required"). For coaching-track visitors, this is confusing. **Recommendation:** Add a brief line above the form: "Tell us what you're navigating. We'll connect you with the right path — whether that's The Portal, a conversation with Jack, or both."

### Re-submission Handling
Already handled: `portal-app/lib/intake.js` checks for existing users by email and updates (not duplicates) on re-submission. Magic link is always generated fresh. Notion `findOrCreatePerson` deduplicates by email. No changes needed.

### SEO Equity Preservation
The 301 redirects preserve link equity from old URLs. The new `/coaching` page must target the same keywords the old pages ranked for: "executive coaching Phoenix," "executive coaching for founders," "coaching for entrepreneurs." Include these in the page copy and meta description.

## Acceptance Criteria

### Functional
- [ ] Site renders fully in Jack OS dark theme — no light-mode remnants
- [ ] Nav shows `Jack Rosenkrantz | Coaching | About | [Start →]`
- [ ] All old URLs 301 redirect correctly (test each)
- [ ] `/coaching` page has 4 anchor sections accessible via fragment URLs
- [ ] Homepage tells a complete story in one scroll: hero → philosophy → proof → services → differentiation → CTA
- [ ] Every CTA on every page points to `/start`
- [ ] `/start` shows nav and footer (no overlay isolation)
- [ ] `/contact` has NAP data, email, link to `/start` — no form
- [ ] Custom 404 page exists with dark theme + navigation

### SEO
- [ ] `LocalBusiness` schema on homepage with correct NAP
- [ ] `Person` schema on `/about` page
- [ ] `Service` schemas on `/coaching` page
- [ ] `FAQPage` schema on `/coaching` page
- [ ] Sitemap excludes redirected URLs and `/start`
- [ ] `robots.txt` disallows `/start`
- [ ] Meta descriptions exist for all surviving pages

### Performance
- [ ] No layout shift from theme (dark should be immediate, not a flash)
- [ ] Photo filters are CSS-only (no image re-processing build step)
- [ ] Page count reduction should improve crawl efficiency

## Sources & References

### Origin
- **Brainstorm document:** [docs/brainstorms/2026-03-10-site-redesign-brainstorm.md](docs/brainstorms/2026-03-10-site-redesign-brainstorm.md) — Key decisions: 4-page structure, dark theme, universal /start CTA, all old URLs redirect to /coaching

### Internal References
- Current nav: `src/components/Nav.tsx` — 6 links + "Book a Call" CTA (light theme)
- Current theme: `src/app/globals.css` — cream/sage palette, utility classes
- Content source of truth: `src/lib/site-content.ts` — 804 lines, all page copy centralized
- Testimonials: `src/lib/testimonials.ts` — 3 entries with placeholder names
- Structured data: `src/components/JsonLd.tsx` — schema factories for LocalBusiness, Person, Service, FAQ, Article
- /start form: `src/app/start/StartForm.tsx` — dual-funnel intake, already live
- /start server action: `src/app/start/actions.ts` — POSTs to portal-app `/api/intake`
- Portal intake handler: `portal-app/lib/intake.js` — handles dedup, magic link, Notion integration

### Design Reference
- Jack OS dark palette: defined in global `CLAUDE.md` and `portal-app/public/index.html`
- Portal landing page (`portal-app/public/index.html`) — reference implementation of the dark theme with Lora/Inter typography
