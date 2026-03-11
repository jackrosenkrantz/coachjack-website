---
title: "coachjack.xyz Radical Redesign — Minimalist Dual-Funnel Site"
date: 2026-03-10
status: brainstorm
---

# coachjack.xyz Radical Redesign

## What We're Building

A radically simplified coachjack.xyz that serves as the conversion-optimized front end for two funnels: The Portal ($20/mo self-serve AI transformation journey) and 1:1 coaching. Full Jack OS dark theme. Every page funnels to `/start`.

**Current state:** 13 pages, 6 nav links, light cream/sage theme, cumbersome and over-designed.

**Target state:** 4 core pages + SEO content, 3 nav links + CTA, full dark theme, clean and focused.

## Why This Approach

The Minimalist Funnel approach (Approach A) was chosen over a hub-and-spoke (B) or single-page (C) model because:

- **vs. Single-page (C):** Loses ability to rank for individual search intents like "executive coaching Phoenix" and "coaching for founders." SEO surface area matters.
- **vs. Hub-and-spoke (B):** Retreats don't warrant a standalone nav slot. They're seasonal and Chelsea-co-led. A section on /coaching handles it.
- **Approach A gives:** Maximum clarity, one conversion path, clean nav, and enough SEO surface area to rank for both local and national terms.

## Key Decisions

### 1. Page Structure (4 core + SEO)

| Route | Purpose | Nav? |
|-------|---------|------|
| `/` | Full marketing story in one scroll: hero, philosophy, social proof, services overview, differentiation, CTA | Home (logo) |
| `/coaching` | Unified coaching page with anchor sections: executive coaching, founder coaching, retreats. FAQ. All service SEO lives here. | Yes |
| `/about` | Jack's story, credentials, philosophy. Trust-building. | Yes |
| `/start` | Dual-funnel intake form (already built and live) | CTA button |
| `/contact` | Minimal: email, location, link to /start. NAP for local SEO. No form. | Footer only |
| `/resources/*` | SEO articles (keep existing + add more over time). No nav link — linked internally + footer. | No |

**Killed pages:** Executive Coaching (absorbed into /coaching), Life Coaching (absorbed), Coaching for Founders (absorbed), Sedona Retreats (section in /coaching), Workshops (stays as redirect to BTB — separate destination), Writing (LinkedIn handles this), Testimonials (folded into homepage + /coaching)

### 2. Navigation

```
Jack Rosenkrantz     Coaching    About    [Start →]
```

2 links + 1 CTA. Logo links home. Mobile: hamburger with same links + full-width CTA.

### Homepage Section Blueprint

| Section | Content Direction |
|---------|------------------|
| **Hero** | "Leadership is who you are, not what you do." + sub-copy + photo + single CTA to /start |
| **Philosophy** | "Better humans make better leaders." 2-3 sentences max. Who this work is for. |
| **Social proof** | 2-3 real testimonials with names (LinkedIn recommendations) |
| **What I do** | Two offerings in brief: 1:1 coaching + The Portal. Not detailed — just enough to intrigue. Links to /coaching for depth. |
| **Differentiation** | Why Jack. Nervous system + leadership + AI fluency. Short, punchy. |
| **Final CTA** | One closing line + button to /start |

### /coaching Page Structure

| Section | Content |
|---------|---------|
| **Hero** | Coaching-specific headline + sub-copy |
| **Executive Coaching** | Anchor section. Who it's for, approach, outcomes. Absorbs old /executive-coaching content. |
| **Coaching for Founders** | Anchor section. Founder-specific framing. Absorbs old /coaching-for-founders. |
| **Sedona Retreats** | Anchor section. Brief — what it is, when, co-led with Chelsea. Links to BTB for details. |
| **FAQ** | Consolidated from all old service pages. 5-6 questions max. |
| **CTA** | Single button to /start |

### 3. Design: Full Jack OS Dark Theme

Entire site uses the Portal dark palette:

```
--sand: #1a1714        (page background)
--stone: #3d352f       (borders, dividers)
--warm-gray: #7a726b   (muted/disabled text)
--earth: #9a918a       (secondary text, labels)
--deep: #e8e0d8        (primary text)
--sage: #7a8b6f        (success/nature accent)
--amber: #c4956a       (primary accent — links, highlights, CTAs)
--amber-light: #2e2418 (amber-tinted surfaces)
```

Cards/surfaces: `#242019`. Typography: Lora serif headings, Inter sans body. No jarring theme switch between marketing and /start.

### 4. Universal CTA: /start

Every CTA on every page points to `/start`. No Calendly links in the main flow. /start captures into both funnels simultaneously (Portal account + Notion People DB + Pipeline). Post-submit reveals both options (Portal magic link + Calendly).

### 5. SEO Strategy: Local + National

**Local SEO (keep):**
- LocalBusiness schema on homepage
- NAP info on /contact
- Service area mentions (Phoenix, Scottsdale, Sedona, Arizona)
- "Executive coaching Phoenix" keyword targeting on /coaching

**National SEO (add):**
- /coaching targets "executive coaching for founders" nationally
- /resources articles target informational queries
- Person schema for Jack across all pages
- The Portal as a nationally accessible digital product

### 6. Conversion Architecture

```
Visitor arrives (organic, LinkedIn, referral)
    ↓
Homepage (one scroll: hook → philosophy → proof → services → CTA)
    ↓
Optional deeper pages: /coaching (details), /about (trust), /resources (education)
    ↓
/start (dual-funnel intake form)
    ↓
Both funnels activated: Portal account + coaching pipeline
```

## Resolved Questions

1. **Homepage hero copy:** Keep "Leadership is who you are, not what you do." It's strong, philosophical, distinctly Jack. The Portal is the delivery mechanism, not the brand.
2. **Social proof:** Use real LinkedIn recommendations. Two publicly attributed: Elizabeth Blass (Karbon) and Sims Tillirson (Founder, Tillirson Consulting Group). 5 more behind LinkedIn auth wall — Jack to grab full text from linkedin.com/in/jackrosenkrantz/details/recommendations/.
3. **Redirects:** All old service URLs (/executive-coaching, /life-coaching, /coaching-for-founders, /sedona-retreats, /workshops, /writing, /testimonials) 301 redirect to /coaching. Preserves SEO equity.
4. **Resources nav visibility:** No nav link. Articles exist for SEO and are linked internally from other pages + footer. Nav stays ultra-clean: Coaching | About | [Start].
5. **Photography:** Darken and desaturate existing photos. Apply subtle overlay so they blend with the dark theme — moody, cinematic feel rather than bright daylight.
