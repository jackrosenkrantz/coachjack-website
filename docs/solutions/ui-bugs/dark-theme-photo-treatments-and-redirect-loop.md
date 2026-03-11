---
title: Dark Theme Photo Treatments, Redirect Loop & About Page Layout
category: ui-bugs
tags:
  - css-filters
  - dark-mode
  - photo-treatments
  - redirects
  - cloudflare-workers
  - next-js
  - layout
module: globals.css, page.tsx (home/about), public/_redirects, next.config.ts
symptom: |
  - Photos nearly invisible on dark background (#1a1714) due to aggressive CSS filter treatments
  - /coaching route produced infinite redirect loop (ERR_TOO_MANY_REDIRECTS)
  - About page hero photo looked washed out and poorly composed on dark theme
date: 2026-03-11
severity: high
resolution_time: single-session
root_cause: |
  1. CSS photo filter brightness values (0.65-0.80) were calibrated for lighter backgrounds; dark theme needed higher values
  2. Stale public/_redirects file (/coaching → /executive-coaching 301) conflicted with next.config.ts redirect (/executive-coaching → /coaching#executive-coaching 308), creating an infinite loop
  3. Wrong photo choice (tight headshot) and side-by-side layout didn't work on dark background
---

# Dark Theme Photo Treatments, Redirect Loop & About Page Layout

## Problem

Three related issues on coachjack.xyz after the dark theme redesign:

1. **Photos invisible**: All 4 CSS photo treatment classes (`photo-dark`, `photo-cinematic`, `photo-grain`, `photo-amber`) made images nearly invisible against the `#1a1714` background. Brightness values of 0.65-0.80 with heavy dark overlays crushed the images.

2. **Redirect loop on /coaching**: `curl -sI https://coachjack.xyz/coaching` revealed:
   - `/coaching` → 301 to `/executive-coaching` (from `public/_redirects`)
   - `/executive-coaching` → 308 to `/coaching#executive-coaching` (from `next.config.ts`)
   - Loop repeats infinitely

3. **About page hero**: `jack-headshot.jpg` looked washed out and pasted-on with the `photo-dark` treatment on the dark background. Side-by-side grid layout wasted space.

## Solution

### 1. Lighten Photo Treatments (globals.css)

Increased brightness, raised saturation, reduced overlay opacities across all 4 classes:

```css
/* photo-dark: brightness 0.80→0.92, saturate 0.70→0.85, overlay 0.15→0.08 */
.photo-dark img {
  filter: brightness(0.92) saturate(0.85);
}
.photo-dark::after {
  background: rgba(26, 23, 20, 0.08);
}

/* photo-cinematic: brightness 0.75→0.90, saturate 0.60→0.80, simplified gradient */
.photo-cinematic img {
  filter: brightness(0.9) saturate(0.8) contrast(1.05);
}
.photo-cinematic::after {
  background: linear-gradient(180deg, transparent 50%, rgba(26, 23, 20, 0.3) 100%);
}

/* photo-grain: brightness 0.70→0.88, saturate 0.50→0.70, noise 0.30→0.15 */
.photo-grain img {
  filter: brightness(0.88) saturate(0.7) sepia(0.1);
}
.photo-grain::before { opacity: 0.15; }
.photo-grain::after {
  background: linear-gradient(180deg, transparent 60%, rgba(26, 23, 20, 0.35) 100%);
}

/* photo-amber: brightness 0.65→0.88, saturate 0.30→0.60, overlay 0.12→0.08 */
.photo-amber img {
  filter: brightness(0.88) saturate(0.6) sepia(0.15);
}
.photo-amber::after {
  background: rgba(196, 149, 106, 0.08);
}
```

### 2. Fix Redirect Loop

Deleted `public/_redirects` entirely. All redirects are managed in `next.config.ts`:

```typescript
// next.config.ts — single source of truth for redirects
async redirects() {
  return [
    { source: '/executive-coaching', destination: '/coaching#executive-coaching', permanent: true },
    { source: '/life-coaching', destination: '/coaching', permanent: true },
    // ... 5 more redirects
  ];
},
```

### 3. About Page Hero Restructure

Swapped `jack-headshot.jpg` for `jack-sedona-smiling.jpg`. Changed from side-by-side grid to stacked layout:

```jsx
{/* Headline above */}
<div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-4">
  <h1 className="font-serif text-4xl md:text-6xl max-w-3xl">
    {about.hero.headline}
  </h1>
</div>
{/* Photo below, 35% width, shifted right */}
<div className="max-w-6xl mx-auto px-6 pb-8 md:pb-16">
  <div className="photo-cinematic w-[60%] md:w-[35%] ml-12 md:ml-24">
    <Image src="/images/jack-sedona-smiling.jpg" ... />
  </div>
</div>
```

## Prevention

1. **Photo filters on dark backgrounds**: Keep brightness >= 0.85 for any image on `#1a1714`. Test all treatments visually before deploying — full-page screenshots catch what code review misses.

2. **No dual redirect sources**: Never commit `public/_redirects`. Add to `.gitignore`. All redirects live in `next.config.ts` only. After deploy, verify with `curl -sI` that key routes return 200, not 301 chains.

3. **Hero photo selection for dark themes**: Prefer landscape photos with warm tones and high subject contrast. Avoid tight headshots — they look pasted-on against dark backgrounds. Test at actual deployed size, not just in code.

## Related Documentation

- `docs/plans/2026-03-11-feat-website-refinement-plan.md` — Photo treatment specs and WCAG audit
- `docs/plans/2026-03-10-feat-site-radical-redesign-plan.md` — Dark theme architecture and redirect strategy
- `docs/brainstorms/2026-03-11-photo-strategy-brainstorm.md` — Photo inventory and placement matrix
