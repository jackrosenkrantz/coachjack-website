---
title: "feat: Add SEO content pages to coachjack.xyz"
type: feat
status: active
date: 2026-03-11
origin: docs/brainstorms/2026-03-11-seo-content-pages-brainstorm.md
---

# Add SEO Content Pages to coachjack.xyz

## Overview

Expand coachjack.xyz from 7 indexable pages to ~25 by adding three categories of SEO-optimized content: long-form resource guides, industry/niche landing pages, and location pages. All content must sound like Jack wrote it. No AI slop, no em dashes, no corporate jargon. (See brainstorm: docs/brainstorms/2026-03-11-seo-content-pages-brainstorm.md)

## Problem Statement

coachjack.xyz has strong SEO foundations (metadata, JSON-LD, sitemap) but only 7 pages. Competitors have 30-100+. The site ranks for almost nothing because there isn't enough content to build topical authority or capture long-tail search queries. Prospects searching "executive coaching for founders" or "executive coaching Scottsdale" don't find Jack.

## Proposed Solution

Three phases, each independently deployable:

1. **Infrastructure** -- restructure content data, refactor sitemap, add shared templates
2. **Content pages** -- resource guides, niche pages, location pages (generated with anti-slop quality gate)
3. **Navigation and linking** -- resources hub page, internal linking, breadcrumbs, nav updates

---

## Technical Approach

### URL Structure (Critical Decision)

| Page Type | URL Pattern | Example |
|-----------|-------------|---------|
| Resource guides | `/resources/[slug]` | `/resources/executive-coaching-vs-therapy` |
| Niche pages | `/coaching/for-[slug]` | `/coaching/for-founders` |
| Location pages | `/coaching/in-[slug]` | `/coaching/in-scottsdale` |
| Resources hub | `/resources` | `/resources` |

Rationale: `/coaching/for-*` and `/coaching/in-*` keep coaching-related pages under the `/coaching` namespace. The `for-` and `in-` prefixes prevent slug collisions and make intent clear. Resource guides stay under `/resources` (matching the 2 existing pages).

### Content Data Architecture

Split the monolithic `site-content.ts` into separate typed data files:

```
src/lib/content/
  resources.ts      -- resource guide data (slug, meta, hero, sections, faqs, relatedSlugs, dates)
  industries.ts     -- niche page data (slug, meta, hero, sections, faqs, relatedSlugs, dates)
  locations.ts      -- location page data (slug, meta, hero, sections, faqs, relatedSlugs, dates, city-specific fields)
  types.ts          -- shared ContentPage interface
```

**`types.ts`:**
```typescript
export interface ContentPage {
  slug: string
  meta: { title: string; description: string }
  datePublished: string  // ISO date
  dateModified: string   // ISO date
  hero: { headline: string; subheadline: string; tag: string }
  sections: ContentSection[]
  faqs: { question: string; answer: string }[]
  cta: { headline: string; body: string }
  relatedSlugs: string[]  // slugs of related pages for internal linking
}

export interface ContentSection {
  headline: string
  body: string[]  // paragraphs
  items?: string[]  // optional bullet list
}

export interface LocationPage extends ContentPage {
  city: string
  state: string
  areaDescription: string  // what makes this market unique
  nearbyAreas: string[]
}
```

This keeps the bundle lightweight. Each page only imports its own data file, not the full content corpus. Next.js tree-shakes the rest.

### Page Templates (3 dynamic routes)

```
src/app/resources/page.tsx                    -- hub/index page
src/app/resources/[slug]/page.tsx             -- resource guide template
src/app/coaching/for-[slug]/page.tsx          -- niche page template
src/app/coaching/in-[slug]/page.tsx           -- location page template
```

Each uses `generateStaticParams()` to pre-render from its data file. Each gets `generateMetadata()` for dynamic per-page SEO.

**Template structure (all three share the same skeleton):**
1. Hero section (headline, subheadline, tag label)
2. Article body (sections with headlines, paragraphs, optional lists)
3. FAQ section with FaqSchema
4. Testimonials (filtered by context)
5. CTA to /start
6. "Continue exploring" with contextual related links
7. JSON-LD (Article + FAQ for resources, Service + FAQ for niches, LocalBusiness + Service + FAQ for locations)

### Sitemap Refactor

Replace the manual array in `sitemap.ts` with programmatic generation:

```typescript
// src/app/sitemap.ts
import { resources } from '@/lib/content/resources'
import { industries } from '@/lib/content/industries'
import { locations } from '@/lib/content/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://coachjack.xyz'

  return [
    // Static pages (keep existing)
    { url: base, priority: 1, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${base}/coaching`, priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    // ... about, contact

    // Hub
    { url: `${base}/resources`, priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },

    // Dynamic pages from content data
    ...resources.map(r => ({
      url: `${base}/resources/${r.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: new Date(r.dateModified),
    })),
    ...industries.map(i => ({
      url: `${base}/coaching/for-${i.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: new Date(i.dateModified),
    })),
    ...locations.map(l => ({
      url: `${base}/coaching/in-${l.slug}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
      lastModified: new Date(l.dateModified),
    })),
  ]
}
```

### JSON-LD Updates

**`src/components/JsonLd.tsx` changes:**
- Update `createArticleSchema` to accept `datePublished` and `dateModified` params (currently hardcoded)
- Add `createBreadcrumbSchema(items: {name: string, url: string}[])` function
- Location pages use existing `localBusinessSchema` with city-specific `areaServed` override

### Anti-Slop Quality Gate

**Voice document:** Build `src/lib/content/voice-guide.ts` from:
- 20 example paragraphs from Jack's LinkedIn posts (via voice library API)
- Existing site-content.ts copy examples
- The 10 hard rules from the brainstorm

**Enforcement:** Every content generation prompt includes the voice guide. After generation, run a validation pass that checks:
1. No banned words (the Tier 1/2/3 lists from anti-slop research)
2. No em dashes
3. Sentence length variance (burstiness check -- no 5+ consecutive sentences of similar length)
4. At least one specific detail per page that only Jack would know (flagged for manual addition)
5. No "In today's..." openers, no "It's worth noting", no "Furthermore/Moreover"

Install `stop-slop` or `anti-slop-writing` Claude Code skill for scoring during content authoring sessions.

---

## Page Inventory

### Resource Guides (6 new + 2 existing = 8 total)

| Slug | Target Query | Notes |
|------|-------------|-------|
| `what-is-executive-coaching` | "what is executive coaching" | EXISTING |
| `executive-coaching-cost` | "executive coaching cost" | EXISTING |
| `executive-coaching-vs-therapy` | "executive coaching vs therapy" | High search volume differentiation |
| `executive-coaching-vs-life-coaching` | "executive coaching vs life coaching" | Common confusion |
| `how-to-choose-an-executive-coach` | "how to choose executive coach" | Buyer's guide, high intent |
| `executive-coaching-roi` | "executive coaching ROI" | Business case for CFOs/boards |
| `what-to-expect-from-executive-coaching` | "what to expect executive coaching" | Reduces prospect friction |
| `nervous-system-coaching-for-leaders` | "nervous system coaching" | Jack's differentiator |

### Niche Landing Pages (5 pages)

Each must target a distinct segment NOT covered by the main `/coaching` page.

| Slug | Target Query | Differentiation from /coaching |
|------|-------------|-------------------------------|
| `founders` | "coaching for founders" / "founder coach" | Startup-specific: isolation, scaling identity, post-exit |
| `ceos` | "CEO coaching" / "executive coaching for CEOs" | Board dynamics, loneliness at the top, legacy |
| `executives-in-transition` | "coaching for career transition" | New role, layoff, promotion, post-acquisition |
| `high-performers` | "coaching for high performers" | "Successful but unfulfilled" archetype |
| `leadership-coaching` | "leadership coaching" / "leadership development" | Broader term, high volume, team/org focus |

Dropped from brainstorm:
- `nervous-system-regulation` -- covered by the resource guide instead (informational intent, not commercial)
- `sobriety-and-leadership` -- too personal for a landing page, better as a future essay

### Location Pages (4 pages, reduced from 8-10)

**Critical change from brainstorm:** Reduced to 4 genuinely distinct markets. Mesa, Chandler, Gilbert, Tempe, and Flagstaff are cut. They're Phoenix suburbs with no distinct coaching market. Creating near-identical pages with swapped city names is a Google doorway page violation.

| Slug | Target Query | What Makes It Distinct |
|------|-------------|----------------------|
| `phoenix` | "executive coaching Phoenix" | Primary market, metro hub, corporate scene |
| `scottsdale` | "executive coaching Scottsdale" | Affluent market, golf/country club culture, luxury positioning |
| `sedona` | "executive coaching Sedona" / "leadership retreat Sedona" | Retreat/destination coaching, nature-based transformation |
| `tucson` | "executive coaching Tucson" | Separate metro, university town, distinct economy |

Each location page must have substantively unique content: local market context, specific industries in that city, why coaching works differently there. Not just "Jack offers coaching in [city]."

---

## Implementation Phases

### Phase 1: Infrastructure (1 session)

**Files to create:**
- `src/lib/content/types.ts` -- shared interfaces
- `src/lib/content/resources.ts` -- migrate existing 2 resource pages + add 6 new stubs
- `src/lib/content/industries.ts` -- 5 niche page data entries
- `src/lib/content/locations.ts` -- 4 location page data entries

**Files to modify:**
- `src/components/JsonLd.tsx` -- add datePublished/dateModified params to createArticleSchema, add createBreadcrumbSchema
- `src/app/sitemap.ts` -- refactor to programmatic generation from content data

**Files to create (templates):**
- `src/app/resources/page.tsx` -- resources hub/index
- `src/app/resources/[slug]/page.tsx` -- resource guide template with generateStaticParams + generateMetadata
- `src/app/coaching/for-[slug]/page.tsx` -- niche page template
- `src/app/coaching/in-[slug]/page.tsx` -- location page template

**Verification:**
- Build succeeds on Cloudflare Workers (test with `npm run build`)
- All routes resolve correctly
- Sitemap includes all pages
- Existing 2 resource pages still work (migrated from hardcoded to data-driven)

### Phase 2: Content Generation (2-4 sessions)

Generate content for all pages using the anti-slop voice guide. Order of priority:

1. **Resource guides** (highest SEO value, informational intent)
2. **Niche pages** (commercial intent, closer to conversion)
3. **Location pages** (local intent, requires city-specific research)

**Per-page process:**
1. Draft content with voice guide + anti-slop rules in prompt
2. Run anti-slop scoring (target 40+/50)
3. Flag "[JACK: add personal detail here]" placeholders for manual review
4. Jack spot-checks a sample from each category
5. Deploy incrementally (don't wait for all pages)

**Content requirements per page:**
- 1500-2500 words for resource guides
- 800-1200 words for niche pages
- 600-1000 words for location pages
- 4-6 FAQ items per page
- Unique meta title (< 60 chars) and description (150-160 chars)
- At least 1 personal/specific detail per page

### Phase 3: Navigation and Linking (1 session)

**Files to modify:**
- `src/components/Nav.tsx` -- add "Resources" link (or dropdown if needed)
- `src/components/Footer.tsx` -- restructure resource links section (can't list all 25 pages)
- All page templates -- add BreadcrumbList schema, "Continue exploring" section with relatedSlugs

**Internal linking strategy:**
- Each page links to 2-4 related pages via `relatedSlugs` field
- Resource guides link to other resources + relevant niche page
- Niche pages link to 1-2 resources + 1 location page
- Location pages link to 1-2 resources + 1-2 niche pages
- All pages link back to `/coaching` and `/start`
- Resources hub page links to all resource guides, grouped by topic

**Footer restructure:**
- "Resources" column shows top 4-5 guides (highest priority)
- "Coaching" column shows niche pages
- "Locations" column shows location pages (or "Arizona" umbrella link)

---

## Acceptance Criteria

### Functional
- [ ] 15 new pages render correctly (6 resource guides + 5 niche + 4 location)
- [ ] Resources hub page (`/resources`) lists all guides with descriptions
- [ ] All pages have unique meta title, description, canonical URL, and OG tags
- [ ] All pages have appropriate JSON-LD (Article/Service/LocalBusiness + FAQ + Breadcrumb)
- [ ] Sitemap auto-generates from content data files
- [ ] Existing 2 resource pages still work at their current URLs
- [ ] All pages CTA links to `/start`
- [ ] Internal "Continue exploring" links work on every page
- [ ] Nav includes Resources link

### SEO Quality
- [ ] No two pages target the same primary keyword
- [ ] Location pages have substantively unique content (not city-name swaps)
- [ ] No banned words from anti-slop list appear in any page content
- [ ] No em dashes in any content
- [ ] Each page has at least 1 specific detail only Jack would know (or placeholder flagged)
- [ ] Meta descriptions are 150-160 chars, keyword-first

### Technical
- [ ] Build succeeds on Cloudflare Workers (`npm run build`)
- [ ] Bundle size stays under Cloudflare Worker limits (< 10MB compressed)
- [ ] Cold start time acceptable (< 500ms)
- [ ] All `generateStaticParams` pages pre-render at build time
- [ ] No content data duplication between files

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Location pages flagged as doorway pages | Domain penalty | Reduced to 4 distinct markets, each with unique content |
| Niche pages cannibalize /coaching | Split ranking signals | Each niche targets distinct segment not covered by /coaching |
| Bundle size exceeds Cloudflare limit | Build failure | Content split across files, tree-shaken per route |
| AI-sounding content hurts brand | Trust loss | Anti-slop scoring + voice guide + spot checks |
| generateStaticParams incompatible with OpenNext | Runtime errors | Test with single page before building all |

---

## Sources & References

- **Origin brainstorm:** [docs/brainstorms/2026-03-11-seo-content-pages-brainstorm.md](docs/brainstorms/2026-03-11-seo-content-pages-brainstorm.md) -- key decisions: three content categories, voice doc + spot check review, anti-slop as hard requirement, content in code
- **Existing resource page template:** `src/app/resources/what-is-executive-coaching/page.tsx`
- **Content data pattern:** `src/lib/site-content.ts`
- **JSON-LD schemas:** `src/components/JsonLd.tsx`
- **Sitemap:** `src/app/sitemap.ts`
- **Anti-slop tools:** [stop-slop](https://github.com/hardikpandya/stop-slop), [anti-slop-writing](https://github.com/adenaufal/anti-slop-writing)
- **Google doorway page policy:** [Google Search Central - Doorway pages](https://developers.google.com/search/docs/essentials/spam-policies#doorway-pages)
