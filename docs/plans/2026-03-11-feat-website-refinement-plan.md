---
title: "feat: Full Website Refinement — Copy, Photos, Conversion, SEO"
type: feat
status: active
date: 2026-03-11
origin: docs/brainstorms/2026-03-11-website-refinement-brainstorm.md
deepened: 2026-03-11
---

# Full Website Refinement — Copy, Photos, Conversion, SEO

## Enhancement Summary

**Deepened on:** 2026-03-11
**Research agents used:** Performance Oracle, Security Sentinel, Architecture Strategist, TypeScript/Next.js Reviewer, Pattern Recognition Specialist, Frontend Design Specialist, Best Practices Researcher, Framework Docs Researcher, Context7 (Next.js 16 + Tailwind v4)

### Key Improvements
1. **Image strategy revised**: Bake CSS filter effects into images at build time for performance; use SVG feTurbulence for grain instead of tiled PNG; pre-optimize all images to WebP (hero <80KB)
2. **WCAG accessibility gaps discovered**: `--warm-gray` (#7a726b) FAILS AA for normal text on both backgrounds (3.78:1 and 3.43:1 — need 4.5:1). Must restrict to large text only or lighten to ~#8a827b
3. **7 dead page files found**: Legacy route pages (executive-coaching, life-coaching, etc.) still exist alongside `next.config.ts` redirects — ~1,200 lines of dead code referencing stale `siteContent` properties
4. **OG images must use absolute URLs**: Next.js `metadataBase` handles resolution, but child page `openGraph` completely replaces parent (shallow merge) — need shared-metadata pattern
5. **Security hardening needed**: No CSP headers, weak email validation in `/start/actions.ts`, no server-side length limits
6. **PostCard.tsx correction**: IS imported in `writing/page.tsx` (plan originally said "never imported"), but `/writing` redirects so both are dead code — safe to remove together
7. **Testimonial type improvement**: Replace `featured: boolean` with `contexts: TestimonialContext[]` for multi-surface display control
8. **CTA section duplication**: Same CTA block pattern repeated across 6+ pages — extract `CtaSection` component

### New Considerations Discovered
- `@tailwindcss/forms` plugin imported but StartForm uses entirely inline styles — remove plugin or migrate styles
- Resource page FAQs bypass centralized `site-content.ts` (hardcoded in page files)
- `site-content.ts` has both named and default export — remove default export
- Cloudflare Workers Static Assets serve `public/` files with `Cache-Control: public, max-age=0` by default — add `public/_headers` for proper caching
- `createArticleSchema` IS used in resource pages (not unused as initially assessed)
- `organizationSchema` IS used in resource pages too — the plan's Phase 4 should verify current usage before adding to homepage

---

## Overview

Complete frontend refinement of coachjack.xyz: rewrite all copy in Jack's authentic LinkedIn voice, strategically place and treat existing photos, restructure pages around conversion psychology, expand testimonials from 3 to 8, and fix all SEO gaps — while preserving the Jack OS dark mode aesthetic and Cloudflare Workers deployment.

Target audience: C-suite founders who are "status-fied but unfulfilled." Conversion goal: dual funnel to /start (The Portal $20/mo + Discovery Call).

## Problem Statement

1. **Photos are wrong vibe.** All from one Sedona shoot (same gray sweater, same golden-hour light). Meditation poses say "yoga teacher" not "executive coach." Zero professional coaching context shots.
2. **Copy is generic.** "Coaching that meets you where you are" could be any coach's site. No edge, no urgency, no voice. Jack's actual voice is poetic, philosophical, occasionally profane — the site sounds like a copywriter's template.
3. **Structure doesn't convert.** Pages organized around storytelling, not conversion. Social proof buried. No problem-agitation before solution.
4. **SEO gaps.** No OG images, no Twitter cards, `organizationSchema` defined in `src/components/JsonLd.tsx` but never rendered on homepage. Only 3 testimonials (one person appears twice). No keyword-rich alt text.

## Proposed Solution

Three-layer approach (see brainstorm: `docs/brainstorms/2026-03-11-website-refinement-brainstorm.md`):

- **Layer 1 (Content):** Full copy rewrite pulling voice from Jack's 297-post Notion voice library. Every headline, paragraph, CTA.
- **Layer 2 (Visual):** Strategic photo placement + image treatments (dark overlays, close crops, grain, duotone) to create variety from a single shoot.
- **Layer 3 (Structure):** Restructure sections around conversion psychology. Problem-agitation-solution flow. Social proof above fold.

## Technical Approach

### Architecture

The site uses a centralized content system. All copy lives in `src/lib/site-content.ts` (368 lines, single flat export `siteContent`). Pages import from this file. This means copy changes are isolated to one file + page-level structural changes.

Key files that will change:

| File | Change Type |
|------|-------------|
| `src/lib/site-content.ts` | Full copy rewrite (all sections) |
| `src/lib/testimonials.ts` | Expand from 3 to 8 testimonials |
| `src/app/page.tsx` | Homepage restructure (section order, new sections) |
| `src/app/coaching/page.tsx` | Add images, restructure for problem-first flow |
| `src/app/about/page.tsx` | Sharpen copy, swap `jack-heart.jpg` for better photo |
| `src/app/start/page.tsx` | Refine headline/subhead |
| `src/app/globals.css` | New image treatment utilities, cleanup unused classes |
| `src/components/JsonLd.tsx` | Tighten types, fix hardcoded URLs |
| `src/components/TestimonialCard.tsx` | Switch `<img>` to `next/image`, support expanded set |
| `src/app/layout.tsx` | Add OG image + Twitter card meta tags |
| `next.config.ts` | Add `images.unoptimized: true`, security headers |
| `public/images/` | Remove unused images (11 of 16 unused) |
| `public/_headers` | **NEW** — Cache-Control for static assets |

### Implementation Phases

#### Phase 1: Content & Testimonials

**Goal:** Rewrite all copy and expand social proof. This is the highest-impact change and blocks nothing.

**Tasks:**

- [ ] **Rewrite `src/lib/site-content.ts`** — Pull voice patterns from Notion voice library (297 posts). Every headline must pass the "would a CEO stop scrolling?" test. Kill any line that could appear on a generic coaching website. Replace philosophy-only sections with problem-agitation-solution structure.
  - `siteContent.home` — Lead with pain point ("You built the thing. Why does it feel like this?"), then philosophy, then social proof hook, then services, then CTA
  - `siteContent.coaching` — Problem-first, then approach, then outcomes with specificity, then investment framing
  - `siteContent.about` — Sharper copy for wound/awakening/work structure
  - `siteContent.meta` — Tighten all page meta descriptions for click-through
  - `siteContent.nav` / `siteContent.footer` — Review and tighten

- [ ] **Remove default export from `site-content.ts`** — Line 368 has `export default siteContent` which duplicates the named export. All consumers already use `import { siteContent }`. Delete the default export.

- [ ] **Expand `src/lib/testimonials.ts`** — Add 8 testimonials from LinkedIn scrape (appendix in brainstorm). Drop Gary Ghezzi (2015 CDW colleague). Each needs: `id`, `quote` (full text), `shortQuote` (1-2 sentence excerpt for compact display), `name`, `title`, `company`, `contexts` array. Replace `featured: boolean` with `contexts: TestimonialContext[]` for multi-surface display.

- [ ] **Update testimonial display** — Ensure `src/components/TestimonialCard.tsx` handles the expanded set cleanly. Homepage shows featured subset; coaching page could show role-specific testimonials.

- [ ] **Rewrite all meta descriptions** — Each should be 150-160 chars, include "executive coaching" or "founder coaching" in first 60 chars, and compel a click. Pattern: [Identity statement] + [What's different] + [Outcome].

**Estimated scope:** ~800 lines of copy changes + ~200 lines testimonial data

### Research Insights (Phase 1)

**PAS (Problem-Agitation-Solution) Framework for C-Suite:**
- **Problem**: Name the specific tension — not lack of success, but that success hasn't produced what they thought it would. "You built the company. You hit the number. And something still feels off."
- **Agitate**: Identity cost, not financial cost. "Another year of performing a version of yourself that used to work." Must feel like you read their journal, not their LinkedIn.
- **Solution**: Position as mirror, not fixer. "This is not advice. It is a space where the performance drops and the real work begins." Must not sound like a product.

**CTA Language:**
- "Start a Conversation" or "Apply to Work Together" > "Book a Free Call" (application language signals exclusivity for premium positioning)
- Pages with 3+ CTAs convert 121% better than single-CTA pages
- Same CTA text throughout for consistency

**Meta Description Patterns:**
```
Executive coaching for C-suite founders who built the company but lost themselves in the process. Transformation through subtraction, not addition. (155 chars)
```
```
Jack Rosenkrantz coaches founders through the gap between success and fulfillment. Not advice. Not frameworks. The real work. (125 chars)
```

**Testimonial Type Improvement:**
```typescript
type TestimonialContext = "homepage" | "coaching" | "about";

export interface Testimonial {
  id: string;
  quote: string;
  shortQuote?: string;
  name: string;
  title?: string;
  company?: string;
  image?: string;
  contexts: TestimonialContext[];
}

export function getTestimonialsForContext(context: TestimonialContext): Testimonial[] {
  return testimonials.filter((t) => t.contexts.includes(context));
}
```

---

#### Phase 2: Photo Strategy & Image Treatments

**Goal:** Strategic photo placement with image treatments for variety. No new photos — work with existing Sedona shoot. (see brainstorm: Photo Strategy section)

**Tasks:**

- [ ] **Photo placement per page:**
  - Homepage hero: `jack-sedona-standing.jpg` (walking toward camera, confident) — already in use, keep
  - About hero: `jack-headshot.jpg` (warm, direct eye contact) — already in use, keep
  - Coaching page: `jack-chair.jpg` (leaning on chair, panoramic Sedona) — add to coaching hero
  - Social proof sections: `retreat-group-portrait.jpg`, `retreat-leading-meditation.jpg`, `retreat-outdoor-conversation.jpg`
  - About awakening section: swap `jack-heart.jpg` for `jack-sedona-grounded.jpg` or `jack-sedona-smiling.jpg`

- [ ] **Drop from active use:** `jack-meditation.jpg`, `jack-heart.jpg`, `retreat-writing-sepia.jpg`, `retreat-candid-laughing.jpg`, `retreat-group-activity.jpg` — all wrong vibe (too yoga, back turned, chaotic)

- [ ] **Add CSS image treatment utilities to `src/app/globals.css`:**
  Three treatment levels in `@layer utilities` (NOT `@utility` — compound styles with pseudo-elements require `@layer`):

  ```css
  /* Treatment 1: Cinematic — hero/feature images (warm bottom fade, slight amber cast) */
  .photo-cinematic { position: relative; overflow: hidden; }
  .photo-cinematic img { filter: brightness(0.75) saturate(0.6) contrast(1.1); }
  .photo-cinematic::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(26, 23, 20, 0.3) 0%, rgba(26, 23, 20, 0.6) 100%),
      linear-gradient(135deg, rgba(196, 149, 106, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  /* Treatment 2: Grain — editorial/documentary feel (SVG noise, no PNG dependency) */
  .photo-grain { position: relative; overflow: hidden; }
  .photo-grain img { filter: brightness(0.7) saturate(0.5) sepia(0.15); }
  .photo-grain::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    opacity: 0.35;
    background-image: url("data:image/svg+xml,...feTurbulence...");
    background-size: 128px 128px;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  /* Treatment 3: Amber tint — accent/smaller photos */
  .photo-amber { position: relative; overflow: hidden; }
  .photo-amber img { filter: brightness(0.65) saturate(0.3) sepia(0.25); }
  .photo-amber::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(196, 149, 106, 0.12);
    mix-blend-mode: color;
    pointer-events: none;
  }
  ```

  Keep existing `.photo-dark` utility. Cap at 3-4 total filter treatments — more than that and the visual system becomes inconsistent.

- [ ] **Skip `.photo-crop-close`** — use Tailwind's `object-cover object-[center_20%]` inline instead of a custom utility for what Tailwind already handles.

- [ ] **Clean up `public/images/`** — Remove genuinely unused images after placement is finalized.

- [ ] **Use `next/image`** for all photo renders. Currently `TestimonialCard.tsx` uses raw `<img>`. Add `images: { unoptimized: true }` to `next.config.ts`. Stick with string paths (not static imports — they buy nothing on Cloudflare with `unoptimized`).

- [ ] **Add explicit `width` and `height`** to every `<Image>` component to prevent CLS (Cumulative Layout Shift). Use `priority` on above-fold hero images, `loading="lazy"` below fold.

- [ ] **Pre-optimize images** — All images should be compressed before deployment:
  - Hero images: <80KB WebP
  - Testimonial/accent images: <15KB WebP
  - OG image: 1200x630, <300KB JPEG (not WebP — social crawlers don't reliably support it)
  - Consider a `scripts/optimize-images.mjs` build step using `sharp` if manual optimization is too tedious

### Research Insights (Phase 2)

**Performance (P0 — Critical for Lighthouse 90+):**
- Pre-optimize all images to WebP/AVIF with explicit dimensions
- `fetchpriority="high"` (via `priority` prop) on hero images only
- Every `<Image>` MUST have `width` and `height` to prevent CLS
- Font loading already uses `next/font/google` with `display: "swap"` — no changes needed

**Performance (P1 — Recommended):**
- Consider baking filter effects into images at build time (eliminates runtime compositing cost)
- Ensure `site-content.ts` is only imported by server components (if a client component imports it, the entire module ships to browser)
- Set Cache-Control headers for hashed static assets via `public/_headers`:
  ```
  /_next/static/*
    Cache-Control: public, max-age=31536000, immutable
  ```

**CSS Filters Performance:**
- Keep to 4 or fewer CSS filters chained per element
- Mobile devices particularly impacted by filter chains
- SVG `feTurbulence` for grain eliminates the PNG dependency and multiple draw calls
- Test on low-power devices (iPhone SE, budget Android)

**Grain Overlay — SVG vs PNG:**
- Tiled small PNG creates multiple draw calls and compositing overhead
- SVG `feTurbulence` with `mix-blend-mode: overlay` is purely CSS-based, no asset dependency
- Alternative: single large texture (256x256) with `background-size: cover` instead of `repeat`

---

#### Phase 3: Page Restructuring

**Goal:** Restructure page sections around conversion psychology. Problem-agitation-solution flow. Social proof visible within first scroll.

**Tasks:**

- [ ] **Homepage (`src/app/page.tsx`) restructure:**
  Current order: hero → philosophy → testimonials → services → differentiator → CTA
  New order: hero (pain point) → social proof strip → philosophy (why this works) → services (2 cards) → testimonials (expanded) → differentiator → final CTA
  - Move social proof above fold (compact proof strip with name/title/company, amber left-border accent)
  - Hero copy: lead with the problem, not the solution
  - Each section should have a clear CTA or transition to next section
  - Vary vertical rhythm: tight on proof strip (py-6), default on content sections (py-20), generous on hero/CTA (py-24)

- [ ] **Coaching page (`src/app/coaching/page.tsx`) restructure:**
  Current: hero → exec coaching → founders → retreats → investment → FAQ → CTA
  New: hero (problem statement + jack-chair.jpg background) → "The Pattern" (problem agitation — sticky left headline + scrolling points) → "The Work" (approach with specificity) → outcomes (concrete cards with sage accents) → testimonials (role-specific) → investment framing → FAQ → CTA
  - Add `jack-chair.jpg` to hero section as background with heavy overlay
  - FAQ schema already renders via `createFaqSchema()` — keep

- [ ] **About page (`src/app/about/page.tsx`) adjustments:**
  - Keep wound/awakening/work structure (it's compelling)
  - Sharpen copy — less memoir, more "here's why this matters to your transformation"
  - Swap photos in awakening section (drop meditation pose)
  - Add testimonial at bottom before CTA

- [ ] **Start page (`src/app/start/page.tsx`):**
  - Refine headline and subhead
  - Keep dual funnel structure (Portal + Discovery Call)
  - Portal stays secondary — discovery call is primary CTA
  - Migrate `StartForm.tsx` from ~15 hardcoded hex colors to Tailwind classes/CSS vars (e.g., `background: "#242019"` → `bg-surface`, `color: "#e8e0d8"` → `text-deep`)

- [ ] **Contact page:** Minimal — just tighten copy

- [ ] **Extract `CtaSection` component** — The same CTA block (border-top, max-w-3xl, centered headline + body + button) is duplicated across 6+ pages. Extract to:
  ```typescript
  interface CtaSectionProps {
    headline: string;
    body?: string;
    buttonLabel: string;
    buttonHref: string;
  }
  ```

- [ ] **Add `spacing` prop to `Section` component** — Support `"tight" | "default" | "generous"` to vary vertical rhythm across the page without breaking existing usage.

### Research Insights (Phase 3)

**WCAG Accessibility — Contrast Ratio Failures:**

| Color | vs sand (#1a1714) | vs card (#242019) | Verdict |
|-------|-------------------|-------------------|---------|
| `--deep` (#e8e0d8) | 13.67:1 PASS | 12.41:1 PASS | Safe everywhere |
| `--amber` (#c4956a) | 6.68:1 PASS | 6.06:1 PASS | Safe everywhere |
| `--earth` (#9a918a) | 5.77:1 PASS | 5.24:1 PASS | Safe everywhere |
| `--sage` (#7a8b6f) | 4.89:1 PASS | 4.44:1 **FAIL** | Only on sand bg, not cards |
| `--warm-gray` (#7a726b) | 3.78:1 **FAIL** | 3.43:1 **FAIL** | Large text only (18px+/bold 14px+) |
| `--stone` (#3d352f) | 1.49:1 **FAIL** | 1.35:1 **FAIL** | Decorative borders only |

**Action required:** `--warm-gray` is used for muted/disabled text — must restrict to large text (18px+) or lighten to ~#8a827b for body text use. `--sage` works on page background but fails on `.card-dark` surfaces — use only on `--sand` backgrounds or lighten to ~#8a9b7f.

**Conversion Structure:**
- Social proof strip above fold: compact names/titles, not full quotes (takes 0.5 seconds to communicate credibility)
- Homepage: 3-5 curated testimonials max (more creates cognitive overload)
- One primary CTA per viewport. Secondary CTAs mid-page. Never two primary buttons visible simultaneously.
- "Start a Conversation" > "Book a Free Call" for premium positioning

**Design Patterns:**
- Social proof strip: horizontal scroll on mobile with snap points, centered wrap on desktop
- Testimonial grid: CSS columns (masonry-style) for varying quote lengths
- Agitation section: sticky left headline + scrolling right content points
- Outcome cards: sage accents (shift from amber = desire to sage = growth creates emotional arc through color)

---

#### Phase 4: SEO & Meta

**Goal:** Fix all SEO gaps identified in brainstorm and spec-flow analysis.

**Tasks:**

- [ ] **OG Image:** Create 1200x630 JPEG with dark background + name overlay. Place in `public/images/og-image.jpg`. Add to `src/app/layout.tsx` metadata:
  ```typescript
  openGraph: {
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Jack Rosenkrantz — Executive Coach' }],
    type: 'website',
    siteName: 'Coach Jack',
  }
  ```
  Note: `metadataBase: new URL("https://coachjack.xyz")` already set — relative paths resolve to absolute URLs automatically.

- [ ] **Create shared-metadata pattern** — Child page `openGraph` completely replaces parent (shallow merge in Next.js). Create `src/app/shared-metadata.ts`:
  ```typescript
  export const sharedOgImage = {
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Coach Jack' }],
  };
  ```
  Each page spreads this into its `openGraph` export.

- [ ] **Twitter Card meta:** Add independently from OpenGraph (Next.js does NOT fall back from OG to Twitter automatically):
  ```typescript
  twitter: {
    card: 'summary_large_image',
    title: 'Coach Jack — Executive Coaching',
    description: '...',
    images: ['/images/og-image.jpg'],
  }
  ```

- [ ] **Render `organizationSchema` on homepage** — Verify current usage in resource pages first, then add to homepage `page.tsx` via the existing `JsonLd` component.

- [ ] **Fix `createArticleSchema()` hardcoded dates** — `datePublished: "2026-01-01"` and `dateModified: "2026-02-01"` are hardcoded. Make dynamic or pull from content config. Note: this function IS used in both resource pages — do not remove.

- [ ] **Image alt text:** Add descriptive, keyword-rich alt text to every `<Image>` tag. Pattern:
  - Headshots: "Jack Rosenkrantz, executive coach, [setting/expression]"
  - Action shots: "Jack Rosenkrantz [action] during [context] — executive coaching"
  - Group shots: "Jack Rosenkrantz leading [activity] with coaching clients"
  - Keep to 1-2 sentences, ~125 chars. Use `alt=""` for purely decorative background images.

- [ ] **Canonical URLs:** Verify all pages have proper canonical tags. Redirected URLs (`/executive-coaching`, etc.) 308 redirect and never render metadata — canonical should be on destination pages only.

- [ ] **Add security headers to `next.config.ts`:**
  ```typescript
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  }],
  ```
  Note: These may not apply to Workers Static Assets (`run_worker_first: false` default) — test after deployment.

### Research Insights (Phase 4)

**OG Image Best Practices:**
- 1200x630px universal standard (works across LinkedIn, Twitter, Facebook)
- JPEG for photo-based, PNG for text-heavy. NOT WebP (social crawlers don't reliably support it)
- Under 300KB for load speed
- Dark OG images stand out in LinkedIn feeds (advantage for Jack OS palette)
- Keep text in center 80% of image — platforms crop edges inconsistently
- Under 20% text area (Facebook enforces, LinkedIn penalizes heavy text)
- Add subtle 1-2px border so edge is distinguishable from platform dark modes
- Pages with optimized OG images see 40-50% higher social media CTR

**OG Image Cache Busting:**
- If replacing `og-image.jpg` with same filename, Cloudflare may serve cached version
- Simplest fix: rename file (e.g., `og-image-v2.jpg`) on each update
- Alternative: purge via `wrangler` redeploy (new deployment invalidates cache)

**Static Asset Caching on Cloudflare Workers:**
- Default: `Cache-Control: public, max-age=0, must-revalidate` (browsers re-fetch every visit)
- Fix with `public/_headers`:
  ```
  /_next/static/*
    Cache-Control: public, max-age=31536000, immutable
  ```
- Important: `next.config.ts` headers do NOT apply to static assets in `run_worker_first: false` mode
- Use `public/_headers` file instead (picked up by Workers Static Assets)

**JSON-LD Best Practice:**
- XSS prevention: use `.replace(/</g, '\\u003c')` on `JSON.stringify` output (official Next.js recommendation)
- Existing `JsonLd` component already uses `JSON.stringify` — add the replace
- Extract hardcoded URLs/names from `JsonLd.tsx` into `siteContent` constants (currently `"Jack Rosenkrantz"` and `"https://coachjack.xyz"` appear in both files)
- Tighten `JsonLdProps` to require `@context` and `@type`:
  ```typescript
  interface JsonLdProps {
    data: { "@context": string; "@type": string | string[]; [key: string]: unknown };
  }
  ```

---

#### Phase 5: Cleanup & QA

**Goal:** Remove dead code, harden security, verify everything works on Cloudflare Workers.

**Tasks:**

- [ ] **Remove 7 dead page files** — These exist alongside `next.config.ts` redirects and reference nonexistent `siteContent` properties. Remove all:
  - `src/app/executive-coaching/page.tsx`
  - `src/app/life-coaching/page.tsx`
  - `src/app/coaching-for-founders/page.tsx`
  - `src/app/sedona-retreats/page.tsx`
  - `src/app/workshops/page.tsx`
  - `src/app/writing/page.tsx`
  - `src/app/testimonials/page.tsx`
  The redirects in `next.config.ts` handle routing — page files are not needed.

- [ ] **Remove `PostCard.tsx`** — Only imported in `writing/page.tsx` (which is being deleted above). Has light-mode styling (`bg-white`, `text-charcoal-700`) incompatible with dark theme.

- [ ] **Remove unused CSS:** `.accent-line-long`, `.quote-accent` (only used in dead legacy pages), `float`/`pulse-soft` animations (never referenced). Check `@tailwindcss/forms` plugin — either remove it (StartForm uses inline styles) or keep it if StartForm migrates to Tailwind classes in Phase 3.

- [ ] **Audit custom Tailwind theme tokens** — Several custom spacing values (`--spacing-22`, `--spacing-26`, etc.) and font sizes (`--font-size-display-lg`, etc.) may be unused. Grep before removing.

- [ ] **Fix `actions.ts` type safety** — Replace `as string` casts with `.toString()`:
  ```typescript
  // Before (unsafe — hides null case from TypeScript)
  const name = (formData.get("name") as string)?.trim();
  // After (correct)
  const name = formData.get("name")?.toString().trim() ?? "";
  ```

- [ ] **Add server-side validation to `actions.ts`:**
  - Length limits: name (1-100 chars), email (5-254 chars), message (1-5000 chars)
  - Email regex: replace `email.includes("@")` with proper regex
  - These protect against abuse even though the form has client-side limits

- [ ] **Consolidate duplicate email constants** — `siteContent.contact.nap.email`, `siteContent.email`, and `siteContent.footer.nap.email` all store `"jack@coachjack.xyz"`. Reference one source.

- [ ] **Verify all nav links** work across pages, including mobile hamburger menu
- [ ] **Test /start form submission** — verify server action POSTs to portal-app correctly
- [ ] **Test all 7 redirects** in `next.config.ts` (executive-coaching, life-coaching, etc.)
- [ ] **Build and deploy:** `npm run deploy` (opennextjs-cloudflare build + deploy to Cloudflare Workers)
- [ ] **Post-deploy verification:**
  - All pages render correctly
  - OG image renders when shared on LinkedIn (use LinkedIn Post Inspector)
  - Twitter card renders (use Twitter Card Validator)
  - Mobile responsive check on all pages
  - Performance: Lighthouse audit targeting 90+ on all scores
  - Social proof visible within first scroll on homepage
  - /start conversion path feels natural from any page
  - Verify `public/_headers` cache rules are working (check response headers)
  - Purge Cloudflare cache if OG image appears stale

## Alternative Approaches Considered

1. **New photoshoot** — Would solve the single-shoot variety problem but adds cost, time, and complexity. Rejected: CSS treatments can create sufficient visual variety from existing assets. (see brainstorm)
2. **Separate content CMS** — Could use headless CMS instead of `site-content.ts`. Rejected: current flat-file approach is simpler, deploys faster, and there's only one author.
3. **A/B testing framework** — Could test copy variations. Rejected: adds complexity. Get one strong version live first, iterate based on analytics later.
4. **Cloudflare Images binding** — Would enable runtime image optimization. Rejected for now: adds cost and complexity. Pre-optimization at build time is sufficient for a fixed image set.
5. **`schema-dts` package for JSON-LD typing** — Would provide TypeScript types for schema.org. Rejected: the schemas are static data objects that get serialized to JSON. Google's validator is the real type checker, not TypeScript. Tightening `JsonLdProps` to require `@context` and `@type` is sufficient.

## System-Wide Impact

### Interaction Graph
- Copy changes in `site-content.ts` propagate to all pages that import it (home, coaching, about, contact, resources, start)
- Testimonial changes affect `TestimonialCard.tsx` rendering on homepage and any page using testimonials
- SEO meta changes in `layout.tsx` affect all pages (global metadata) — but child `openGraph` completely replaces parent (shallow merge)
- Image treatment CSS classes affect any component that uses them
- OG image is fetched by external services (LinkedIn, Twitter, Slack) when URLs are shared
- `public/_headers` affects all static asset serving on Cloudflare Workers

### Error Propagation
- Copy is static — no runtime errors possible from content changes
- Image paths: if an image is referenced but missing from `public/images/`, Next.js will 404 silently. Verify all paths.
- Server action in `/start/actions.ts` depends on `PORTAL_APP_URL` and `PORTAL_INTAKE_API_KEY` env vars on Cloudflare. These don't change.
- Legacy page files reference stale `siteContent` properties — would crash at runtime if redirects were removed. Deleting them eliminates this latent risk.

### State Lifecycle Risks
- No database state changes. All changes are frontend/static.
- Risk: Cloudflare CDN may cache old OG images. Mitigation: rename file on update or purge cache after deploy.
- Risk: `public/_headers` may not be picked up if Workers Static Assets config overrides it. Test after deploy.

### API Surface Parity
- No API changes. Server action interface unchanged.
- /start form fields must remain compatible with portal-app `/api/intake` endpoint.

### Integration Test Scenarios
1. Share homepage URL on LinkedIn → OG image renders with correct title/description (absolute URL)
2. Navigate home → coaching → /start → submit form → portal-app receives intake
3. Mobile user: hamburger nav → all links work → /start form submits successfully
4. Old URL (e.g., /executive-coaching) → 301 redirects to correct page (even after legacy page files are deleted)
5. Homepage load → social proof visible without scrolling on 1440p display
6. Check `/_next/static/` response headers → `Cache-Control: public, max-age=31536000, immutable`

## Acceptance Criteria

### Functional Requirements
- [ ] Every page headline passes the "would a CEO stop scrolling?" test
- [ ] Photo placement matches page mood (confident for coaching, warm for about, bold for home)
- [ ] Social proof visible within first scroll on homepage
- [ ] Copy sounds like Jack's LinkedIn posts, not a coaching template
- [ ] /start conversion path feels natural from any page
- [ ] 8 testimonials display correctly (3-4 on homepage, role-specific on coaching page)
- [ ] All image treatments render correctly (cinematic, grain, amber)
- [ ] CTA section extracted to reusable component (no more duplication)

### Non-Functional Requirements
- [ ] OG image renders correctly when shared on LinkedIn and Twitter (absolute URLs)
- [ ] All images have descriptive, keyword-rich alt text
- [ ] All meta descriptions are 150-160 chars with coaching keywords
- [ ] `organizationSchema` renders on homepage
- [ ] Lighthouse performance score 90+
- [ ] No unused components or CSS classes remain
- [ ] All 7 redirects still work (after legacy page file deletion)
- [ ] WCAG AA contrast met for all text (warm-gray restricted to large text only)
- [ ] Security headers present on all pages
- [ ] Server-side validation on /start form (length limits, email regex)
- [ ] Static assets cached with immutable headers

### Quality Gates
- [ ] Visual review of every page on desktop and mobile
- [ ] LinkedIn Post Inspector verification for OG tags
- [ ] Form submission test on /start (end-to-end to portal-app)
- [ ] Build succeeds on Cloudflare Workers (`npm run deploy`)
- [ ] Contrast ratio check on warm-gray and sage usage

## Success Metrics

- OG image renders correctly on LinkedIn/Twitter shares
- Homepage bounce rate decreases (measurable after 30 days with analytics)
- /start page receives traffic from all site pages (verify via analytics)
- Copy feels distinctly "Jack" — not interchangeable with any other coaching site
- Lighthouse 90+ on all four scores (Performance, Accessibility, Best Practices, SEO)

## Dependencies & Prerequisites

- Notion voice library access (297 posts) for copy voice reference — available via Notion MCP
- Portal app `/api/intake` endpoint must remain stable (no changes needed)
- Cloudflare Workers deployment must succeed with `npm run deploy`
- No new env vars needed. Existing: `PORTAL_APP_URL`, `PORTAL_INTAKE_API_KEY`

## Risk Analysis & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Copy rewrite loses key messaging | High | Reference voice library + brainstorm decisions. Review against "would a CEO stop scrolling?" test |
| Image treatments look inconsistent across browsers | Medium | Test on Chrome, Safari, Firefox. Cap at 3-4 filter classes. Test on mobile devices |
| SEO disruption from meta description changes | Low | Changes improve SEO, not disrupt. No URL changes. Redirects already in place |
| Cloudflare CDN caches stale OG images | Medium | Rename file on update (og-image-v2.jpg). Purge cache after deploy |
| /start form breaks during restructure | High | Don't change form fields or server action logic. Test end-to-end before deploy |
| warm-gray text fails WCAG AA | Medium | Restrict to large text (18px+) or lighten to ~#8a827b. Audit all current usage |
| Deleting legacy pages breaks redirects | Low | Redirects handled in next.config.ts, not page files. Test all 7 after deletion |
| CSS filters cause performance issues on mobile | Medium | Keep to 4 or fewer chained filters. Test on iPhone SE / budget Android |
| next.config.ts security headers don't apply to static assets | Low | Use `public/_headers` file instead. Verify after deploy |

## Future Considerations

- Analytics integration (Plausible or similar) to measure conversion impact
- A/B testing on headline variations once baseline is established
- New photoshoot when budget allows — professional coaching context shots
- Video testimonials or short clips for higher-impact social proof
- Blog/content section to drive organic SEO traffic
- Cloudflare Images binding for runtime image optimization (if image set grows)
- Build-time image optimization script (`sharp`) if manual pre-optimization becomes tedious

## Sources & References

### Origin
- **Brainstorm document:** [docs/brainstorms/2026-03-11-website-refinement-brainstorm.md](docs/brainstorms/2026-03-11-website-refinement-brainstorm.md) — Key decisions: work with existing photos + CSS treatments, full copy rewrite from LinkedIn voice, keep dual funnel, expand to 8 testimonials, restructure for conversion psychology

### Internal References
- Content system: `src/lib/site-content.ts` (all copy)
- Testimonial data: `src/lib/testimonials.ts` (interface + data)
- JSON-LD schemas: `src/components/JsonLd.tsx` (`organizationSchema` unused on homepage)
- Image treatments: `src/app/globals.css` (`.photo-dark` utility)
- Homepage structure: `src/app/page.tsx`
- Coaching page: `src/app/coaching/page.tsx`
- About page: `src/app/about/page.tsx`
- Start page: `src/app/start/page.tsx` + `StartForm.tsx` + `actions.ts`
- Layout/meta: `src/app/layout.tsx`
- Nav: `src/components/Nav.tsx`
- Deploy config: `next.config.ts`, `wrangler.jsonc`

### External References
- [Next.js 16 Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld)
- [OpenNext Cloudflare Image Optimization](https://opennext.js.org/cloudflare/howtos/image)
- [OpenNext Cloudflare Assets](https://opennext.js.org/cloudflare/howtos/assets)
- [Tailwind CSS v4 Filter Utilities](https://tailwindcss.com/docs/filter-brightness)
- LinkedIn Post Inspector: for OG tag validation
- Twitter Card Validator: for Twitter card validation
- Notion Voice Library DB: `11cbff4095f2442c987b22d6472a369f`

### Spec Flow Gaps Addressed
- Image delivery pipeline: Phase 2 (pre-optimize WebP, `next/image` with `unoptimized`, explicit dimensions)
- SEO migration risk: Phase 4 (no URL changes, redirects preserved, meta improvements only)
- Contrast/accessibility: Phase 3 (warm-gray FAILS WCAG AA — restrict to large text)
- Dual funnel UX: Phase 3 (discovery call primary, portal secondary)
- Performance budget: Phase 5 (Lighthouse 90+ target, static asset caching)
- Mobile responsive: Phase 5 (QA on all breakpoints)
- Security hardening: Phase 4 + 5 (CSP headers, form validation, XSS prevention in JSON-LD)
