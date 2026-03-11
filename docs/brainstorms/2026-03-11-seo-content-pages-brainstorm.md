# Brainstorm: SEO Content Pages for coachjack.xyz

**Date:** 2026-03-11
**Status:** Draft
**Author:** Jack Rosenkrantz + Claude

---

## What We're Building

A content expansion for coachjack.xyz — 15-30 SEO-optimized pages across three categories:

1. **Long-form resource guides** (6-8 pages) — deep articles answering high-intent search queries
2. **Industry/niche landing pages** (5-8 pages) — targeting specific audiences searching for coaching
3. **Location pages** (8-10 pages) — targeting "[coaching type] + [Arizona city]" searches

All pages must sound like Jack wrote them. No AI slop. Prose over bullets. Philosophical, direct, occasionally raw.

---

## Why This Approach

- coachjack.xyz currently has 7 indexable pages. Competitors in the executive coaching space have 30-100+.
- The 2 existing resource pages already target valuable long-tail queries. More of these builds topical authority.
- Location pages capture "[service] in [city]" searches — high-intent, low competition locally.
- Industry/niche pages capture "coaching for [role/situation]" — the exact terms Jack's ideal clients search.
- Combined, this creates a content hub that signals deep expertise to Google and captures organic traffic.

---

## Page Categories & Candidates

### Long-Form Resource Guides

Existing (keep):
- `/resources/what-is-executive-coaching` (live)
- `/resources/executive-coaching-cost` (live)

New:
- `/resources/executive-coaching-vs-therapy` — high search volume, important differentiation
- `/resources/executive-coaching-vs-life-coaching` — common confusion point
- `/resources/how-to-choose-an-executive-coach` — buyer's guide, high intent
- `/resources/executive-coaching-roi` — business case content, speaks to CFOs/boards
- `/resources/what-to-expect-from-executive-coaching` — reduces friction for prospects
- `/resources/nervous-system-coaching-for-leaders` — differentiator, Jack's unique angle

### Industry/Niche Pages

- `/coaching/for-founders` — Jack's primary market
- `/coaching/for-ceos` — highest-intent search term
- `/coaching/for-executives-in-transition` — career change, layoff, new role
- `/coaching/for-high-performers` — "successful but unfulfilled" archetype
- `/coaching/leadership-coaching` — broader term, high volume
- `/coaching/nervous-system-regulation` — Jack's differentiator
- `/coaching/sobriety-and-leadership` — Jack's personal story, unique angle

### Location Pages

- `/coaching/phoenix` — primary
- `/coaching/scottsdale` — affluent market
- `/coaching/tempe` — ASU, startup scene
- `/coaching/mesa`
- `/coaching/chandler`
- `/coaching/gilbert`
- `/coaching/sedona` — retreat/destination coaching
- `/coaching/flagstaff`
- `/coaching/tucson`

---

## Content Voice & Anti-Slop Rules

### Voice

Jack's voice: poetic, philosophical, occasionally profane. Prose over bullets. Present-tense identity. "Transformation is subtraction." Anti-corporate.

### Hard Rules

1. No em dashes (use periods, commas, or restructure)
2. No "delve", "navigate", "leverage", "foster", "tapestry", "testament", "pivotal", "landscape", "realm", "holistic", "robust", "comprehensive", "nuanced", "multifaceted", "innovative", "transformative", "synergy", "paradigm"
3. No "In today's [anything]" openers
4. No "It's worth noting" / "It's important to note"
5. No "Not just X, but also Y" construction
6. No "Furthermore/Moreover/Additionally" transitions
7. No lists of exactly three items (use 2, 4, or 5)
8. No hedging language ("It might be worth considering", "While results may vary")
9. Every page must have at least one specific detail only Jack would know
10. Sentence length must vary — fragments mixed with longer sentences

### Voice Document

Build from:
- Jack's LinkedIn posts (297 in voice library)
- Existing coachjack.xyz copy (site-content.ts)
- Jack's philosophy: "Transformation is subtraction", "Leadership is who you are, not what you do"

### Quality Gate

Install anti-slop Claude Code skill. Every page runs through anti-slop scoring before publish. Target: 40+ out of 50 on the stop-slop 5-dimension scale.

---

## Technical Approach

### Page Generation

- Use Next.js `generateStaticParams` for templatized pages (location, niche)
- Content stored in `/src/lib/` data files (TypeScript objects, not CMS)
- Each page gets: unique metadata, JSON-LD schema, FAQ section, CTA to /start
- Sitemap auto-updates via existing `sitemap.ts`

### SEO Infrastructure

Already in place:
- Metadata API with per-page titles/descriptions
- JSON-LD (LocalBusiness, Person, Service, FAQ, Article schemas)
- sitemap.ts + robots.ts
- OpenGraph + Twitter cards
- 301 redirects for old URLs

To add:
- BreadcrumbList schema on all pages
- Review/AggregateRating schema (from testimonials)
- Unlighthouse full-site audit before and after
- Google Search Console setup for tracking

### Anti-Slop Tooling

- Install `stop-slop` or `anti-slop-writing` as Claude Code skill
- Build voice document from LinkedIn posts + existing site copy
- Include voice doc in every content generation prompt

---

## Key Decisions

1. **Three content categories**: guides, niche, location — all reinforce each other
2. **15-30 pages initial batch** — mix of handcrafted guides and templatized pages
3. **Voice doc + spot check** review process — not reviewing every word, but strong guardrails
4. **8-10 location pages** covering Phoenix metro + Sedona, Flagstaff, Tucson
5. **No blog/article feed** — these are permanent resource pages, not a blog with dates
6. **Anti-slop as a hard requirement** — every page scored before publish
7. **Content lives in code** — TypeScript data files, not a CMS

---

## Open Questions

None — all key decisions resolved through dialogue.

---

## Next Steps

Run `/ce:plan` to design the implementation: file structure, data models, template components, content generation pipeline, and deployment sequence.
