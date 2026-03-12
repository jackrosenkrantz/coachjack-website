---
title: Full Site Copy Revamp
type: refactor
status: active
date: 2026-03-12
origin: docs/brainstorms/2026-03-12-site-copy-revamp-brainstorm.md
---

# Full Site Copy Revamp

Rewrite all marketing copy on coachjack.xyz to shift from poetic/abstract/vulnerable to professional authority with warmth. Broader audience (growth-seekers + crisis), concrete language, somatic differentiator framed with authority.

## Scope

**In scope:** All string values in `src/lib/site-content.ts` for 5 pages: Home, About, Coaching, Contact, Start. Includes headlines, body copy, CTAs, meta titles, meta descriptions. Nav labels and footer copy only if they conflict with new tone.

**Out of scope:** Resource/SEO articles (`src/lib/content/resources.ts`), testimonials (`src/lib/testimonials.ts`), layout/structural changes to page components, CSS/styling changes, new pages or routes.

## Voice Calibration

Reference sentences that nail the target tone (from current copy that already works):

- "You're not broken. You're running a program that used to work — and it doesn't anymore." (plain, direct, authoritative)
- "I work at the level where decisions actually get made — your nervous system, your identity." (specific, authoritative, clear)
- "Not tactics. Not cheerleading. The honest conversation you can't have with your board, your team, or yourself." (punchy, concrete)

**Kill list** — patterns to eliminate:
- Extended metaphors ("mosaic table", "sleeping in the living room of my own life")
- Sentences that require interpretation
- Wound-language as the primary register ("something was breaking", "lost themselves")
- Generic coaching platitudes
- Sentences longer than ~25 words

## Implementation Plan

### Phase 1: Rewrite `src/lib/site-content.ts`

Single file edit. Preserve the exact object structure and all property keys. Only change string values.

**Page order** (hardest first):

#### 1. About Page (`siteContent.about`)

Current: Full memoir arc with opaque metaphors across `wound`, `awakening`, `work` sections.

Rewrite direction (see brainstorm):
- **Keep the three-act arc** (past career → transformation → current work)
- **`wound` section:** Make concrete. "I was a VP of Sales, burning through titles and achievements. On paper it looked like success. In practice I was running on fumes and disconnected from the work." No mosaic tables.
- **`awakening` section:** Brief, factual. Yoga, sobriety, retreat work. What happened, not how it felt poetically. 2-3 sentences max per paragraph.
- **`work` section:** Lead with authority. "Now I coach executives..." The credentials list is already good — keep it. The closing line "I don't coach people to optimize. I coach them to come home." — evaluate if it fits new tone. It's on the edge — punchy but poetic. Keep or replace with something equally strong but clearer.
- **`credentials` section:** Fine as-is. Light touch only.

#### 2. Coaching Page (`siteContent.coaching`)

Current: Strong structure, overwrought language in pain points.

Rewrite direction:
- **`hero`:** "You've achieved everything they told you to want" is good but narrow (crisis-only). Broaden: speak to both "something's off" AND "I want to lead differently."
- **`pattern` section:** Keep the 3-point structure. Rewrite each point's description to be recognizable, not artful. "The performance trap" heading is fine. Body underneath should be 2-3 plain sentences.
- **`approach` section:** Already decent. Tighten. Remove any sentences that sound like a brochure.
- **`outcomes` section:** 4 cards are strong conceptually. Rewrite descriptions to be shorter and more concrete.
- **`investment`, `retreats`:** Light touch. Already practical.
- **`faq`:** Review answers for tone consistency. Remove any poetic flourishes.

#### 3. Home Page (`siteContent.home`)

Current: "Status-fied but unfulfilled?" hook is clever but may alienate broader audience.

Rewrite direction:
- **`hero`:** New headline that speaks to both crisis and growth. Subheadline should state what Jack does in one clear sentence, then what makes it different.
- **`philosophy`:** "The answer isn't more. It's less." — this works if the body copy is concrete. Rewrite body to be authoritative, not philosophical.
- **`services`:** Two cards (1:1 Coaching, The Portal). Descriptions are decent. Tighten.
- **`differentiator`:** "I don't coach the role. I coach the human wearing it." — strong line. Keep. Rewrite body paragraphs to be shorter and more specific.
- **`cta`:** "What would change if you stopped performing?" — evaluate. May be too narrow for broader audience.

#### 4. Contact Page (`siteContent.contact`)

Light touch. "Tell me what's going on." is good. Verify subheadline copy matches new tone.

#### 5. Start Page (`siteContent.start` — if exists, otherwise in page component)

Light touch. "See How You Actually Operate" works. Ensure form-adjacent copy (if any lives in site-content.ts) matches new tone.

### Phase 2: SEO Meta Check

After copy rewrite, verify:
- [ ] All `siteContent.meta.*` descriptions are 150-160 chars
- [ ] All meta titles are 50-60 chars
- [ ] Primary keywords preserved: "executive coaching", "executive coach phoenix", "somatic", "nervous system", "founder coaching"
- [ ] OG titles and descriptions are complete for each page (not relying on shallow merge fallback)

### Phase 3: Local Test

- [ ] `npm run dev` — navigate all 5 pages, read every section
- [ ] Verify no TypeScript errors (all string fields present, correct types)
- [ ] Check that no copy spills layout (very long strings breaking cards, etc.)
- [ ] Spot-check: read each page aloud. If any sentence sounds like it could appear on any coaching website, rewrite it.

### Phase 4: Deploy

- [ ] `npm run build` — confirm clean build
- [ ] `npm run deploy` — deploy to Cloudflare Workers
- [ ] Verify routes: `curl -sI https://coachjack.xyz/{,coaching,about,contact,start}` — all return 200
- [ ] Spot-check live pages in browser
- [ ] Rollback plan: `git revert HEAD && npm run deploy` if issues found

## Acceptance Criteria

- [ ] All 5 pages rewritten in `src/lib/site-content.ts`
- [ ] Object structure unchanged (no added/removed keys)
- [ ] Tone: professional authority, concrete, direct. No extended metaphors.
- [ ] Audience: speaks to growth-seekers AND crisis — not exclusively crisis language
- [ ] Somatic/nervous system angle present on Home and Coaching pages, framed with authority
- [ ] About page arc preserved (career → transformation → current work) in plain language
- [ ] No sentence requires interpretation to understand
- [ ] SEO meta descriptions 150-160 chars, titles 50-60 chars
- [ ] Primary SEO keywords preserved in H1s and meta tags
- [ ] Clean build (`npm run build` passes)
- [ ] Deployed and verified live

## Technical Notes

- **File to edit:** `src/lib/site-content.ts` (~395 lines)
- **Type safety:** Match existing TypeScript interfaces exactly. No new fields.
- **Default export:** Line 368 has `export default siteContent` duplicating the named export. Delete it during this pass.
- **WCAG:** `--warm-gray` (#7a726b) fails AA for body text. Not in scope for this plan, but don't write copy that depends on gray-text emphasis for meaning.
- **Deploy:** `npm run deploy` requires Cloudflare auth (`npx wrangler login` if needed)

## Sources

- **Origin brainstorm:** [docs/brainstorms/2026-03-12-site-copy-revamp-brainstorm.md](docs/brainstorms/2026-03-12-site-copy-revamp-brainstorm.md) — tone, audience, structure, and per-page direction decisions
- **Prior refinement plan:** [docs/plans/2026-03-11-feat-website-refinement-plan.md](docs/plans/2026-03-11-feat-website-refinement-plan.md) — WCAG contrast issue, OG metadata handling, export cleanup
- **Content file:** `src/lib/site-content.ts` — single source of truth for all copy
