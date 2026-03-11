# Brainstorm: coachjack.xyz Full Website Refinement

**Date:** 2026-03-11
**Status:** Active
**Scope:** Copy rewrite, photo strategy, image treatments, conversion restructuring, SEO fixes

---

## What We're Building

A complete frontend refinement of coachjack.xyz that transforms it from a generic coaching website into a high-converting, voice-authentic site that sounds like Jack's LinkedIn posts, uses existing photos strategically with visual treatments for variety, and restructures pages around conversion psychology -- all while maintaining the Jack OS dark mode aesthetic.

### Target audience
C-suite founders who are "status-fied but unfulfilled." People who've built the thing and now feel empty. They're not looking for a life coach -- they're looking for someone who gets it and won't coddle them.

### Conversion goal
Dual funnel to /start: The Portal ($20/mo AI coaching) + Discovery Call (high-touch pipeline). Both pathways stay.

---

## Why This Approach

### The Problems
1. **Photos are wrong vibe.** All from one Sedona shoot (same gray sweater, same golden-hour light). Meditation poses and retreat imagery say "yoga teacher" not "executive coach." Zero photos in a professional coaching context.
2. **Copy is generic.** "Coaching that meets you where you are" could be on any coach's website. No edge, no urgency, no voice. Jack's actual voice is poetic, philosophical, occasionally profane -- the site sounds like a copywriter's template.
3. **Structure doesn't convert.** Pages organized around storytelling, not conversion. Social proof buried. No problem-agitation before solution. Philosophy without specificity.
4. **SEO gaps.** No OG images, no Twitter cards, organizationSchema defined but never used. Only 3 testimonials (one person appears twice).

### The Fix: Three-Layer Approach
- **Layer 1 (Content):** Full copy rewrite pulling voice from Jack's 297 LinkedIn posts. Every headline, every paragraph, every CTA.
- **Layer 2 (Visual):** Strategic photo placement (drop yoga poses, lead with confident/direct shots) + image treatments (dark overlays, close crops, grain, duotone) to create variety from a single shoot.
- **Layer 3 (Structure):** Restructure sections around conversion psychology. Problem-agitation-solution flow. Social proof above fold. Specificity over philosophy where it matters.

---

## Key Decisions

### Photo Strategy
- **Hero (homepage):** `jack-sedona-standing.jpg` -- walking toward camera, confident, slightly intense. Dark gradient overlay to integrate with site palette.
- **About hero:** `jack-headshot.jpg` -- warm, approachable, direct eye contact. Best quality portrait.
- **Coaching page:** `jack-chair.jpg` -- leaning on chair, panoramic Sedona behind him. Relaxed authority.
- **Social proof sections:** `retreat-group-portrait.jpg` (full group), `retreat-leading-meditation.jpg` (Jack in action leading), `retreat-outdoor-conversation.jpg` (coaching dynamic)
- **Drop from active use:** `jack-meditation.jpg` (too yoga), `jack-heart.jpg` (cross-legged meditation), `retreat-writing-sepia.jpg` (back turned), `retreat-candid-laughing.jpg` (Jack's back turned), `retreat-group-activity.jpg` (chaotic)
- **Image treatments:** Apply dark overlays, subtle grain, amber tint washes, and strategic cropping to create visual variety across the same-shoot photos

### Copy Direction
- Pull voice patterns from LinkedIn posts (poetic, direct, occasionally profane)
- Every headline should make a C-suite founder stop scrolling
- Replace philosophy-only sections with problem-agitation-solution structure
- Be specific about outcomes, not just vibes
- Kill any line that could appear on a generic coaching website

### Page Structure Changes
- **Homepage:** Lead with pain point ("You built the thing. Why does it feel like this?"), then philosophy, then social proof, then services, then CTA
- **Coaching:** Problem-first, then approach, then outcomes with specificity, then investment framing, then FAQ
- **About:** Story serves conversion -- wound/awakening/work structure stays but with sharper copy
- **Contact:** Minimal, as-is -- just tighten copy
- **/start:** Keep dual funnel structure, refine headline and subhead

### SEO Fixes
- Add OG image (use jack-headshot.jpg, properly sized)
- Add Twitter card meta tags
- Render organizationSchema on homepage
- Review and tighten all page meta descriptions for click-through
- Ensure all images have descriptive, keyword-rich alt text

---

## Resolved Questions

1. **Testimonials:** Scraped 9 LinkedIn recommendations (see Appendix). Upgrade from 3 to 8 usable testimonials. Drop the 2015 CDW colleague rec (not coaching-related).
2. **Portal positioning:** Keep secondary. 1:1 coaching is the real offering. The Portal is a nice-to-have add-on.
3. **Voice source:** Use Notion voice library (297 posts) via bot API. This is the canonical source.

---

## Success Criteria

- Every page headline passes the "would a CEO stop scrolling?" test
- Photo placement matches page mood (confident for coaching, warm for about, bold for home)
- Social proof visible within first scroll on homepage
- OG image renders correctly when shared on LinkedIn/Twitter
- Copy sounds like Jack's LinkedIn posts, not a coaching template
- /start conversion path feels natural from any page

---

## Appendix: LinkedIn Recommendations (Scraped 2026-03-11)

### 1. Elizabeth Blass -- Chief Customer Officer, Karbon (Nov 2025, coaching client)
"Working with Jack has been nothing short of transformative. It was an easy decision to renew my contract for a second year. Jack starts every session with a grounding breath, which immediately sets the tone for thoughtful, reflective, and meaningful work. He's an incredible listener who brings equal parts compassion and accountability to our conversations. When my self-doubt creeps in, he calls it out with clarity and kindness, challenging me to focus on what I truly want and how my energy and mindset can help me get there. He's taught me to celebrate my wins, embrace my value, and approach challenges with curiosity rather than fear. Jack has been my safe place to share professional frustrations and fears, offering unwavering support while helping me prepare for key meetings and conversations. He brings a unique blend of executive coaching expertise, mindfulness tools, and an unshakably positive spirit that reframes struggles into opportunities. Jack sees the world as abundant, and his optimism is both infectious and empowering. If you're looking for someone to help you navigate professional challenges, celebrate your growth, and rediscover your confidence, Jack is that coach. He's not only helped me manage stress but has also shifted my perspective and approach to leadership and success. I'm so grateful for the opportunity to work with him."

### 2. Sims Tillirson -- Founder, Keynote Speaker (Sep 2025, coaching client)
"When I went full-time into my business, Jack coached me for free until I could afford to invest in myself. Since then, he's helped me learn to stay in the pocket and navigate the ups and downs of entrepreneurship. And even more than that, Jack has taught me how to better show up for myself through a (new to me) mindfulness practice. If it weren't for Jack, I would've doubted myself so much that I'd be back in a W2 job plotting my escape. Cannot recommend him enough for high-performers who want more out of life."

### 3. Christina Hubbard -- RevOps Project Manager (Mar 2025, coaching client)
"Becoming the Bridge was a truly transformative experience. Jack and Chelsea created a space that felt safe, deeply supportive, and powerfully connective from day one. Their guidance, wisdom, and authenticity set the tone for a cohort where vulnerability was welcomed, growth was inevitable, and meaningful relationships were formed across gender and generations. The structure of the program struck the perfect balance -- thoughtfully designed, yet flexible and easeful -- making the learning both impactful and sustainable. In a world that often feels chaotic, this experience gave me hope, grounded me in practices that calm my nervous system, and reminded me of the power of intentional community."

### 4. Jared Robin -- Founder (Dec 2024, coaching client)
"I've been meeting with Jack weekly for the past few months. What makes him so special is how he leads with love. As founders, we are already feeling the pressures of the world and probably are pushing ourselves as hard as we ever have (or far harder). I didn't necessarily need somebody to push me harder or teach me GTM tactics (he's fully capable of doing those things) but more to have a voice helping me remove the mental and emotional ways that I'm blocking myself from being present right here and now. So much of leadership's challenges route from emotional barriers. Jack helps you unlock those and lead with love. Especially in loving yourself. I'm a stronger leader because of him. You will be too."

### 5. Ryan Libby -- Clean Energy Executive (Dec 2024, coaching client)
"Working with Jack as my executive coach over the past year and a half has been a game changer. I first met in an online sales leadership community, where he stood out by offering thoughtful guidance and support on a challenge I was facing. Working with Jack has helped me grow in areas like managing up, staying accountable, and turning ideas into action. What sets Jack apart is his ability to adapt and evolve the coaching relationship as I grew. Over time, our sessions shifted from Jack providing direction to becoming a collaborative space where I bring my ideas, goals, and challenges to the table."

### 6. Jocelyn Nowak -- Human-Centered Growth (Dec 2024, coaching client)
"Jack has been a spectacular Executive Coach. Coaching has supported me professionally as I have been emboldened through his support to step into a reality where my authentic self is in alignment with the version of me I present at work."

### 7. Justin Sternberg -- Entrepreneur (Dec 2024, coaching client)
"I've had the opportunity and pleasure to work with Jack Rosenkrantz as an executive coach. His insights and actionable feedback refined my approach towards strategic planning, improved my communication skills, and increased the value I was able to provide to my business partners. While Jack always made our work fun and light-hearted, he never shied away from addressing big challenges head on. His sense of meaning and purpose, combined with his spirited sense of adventure, helped me to realize deep insights about myself, while positively affecting outcomes in real world scenarios."

### 8. Ashley Beck Cuellar -- Head of Expansion, Seamless Roofing (Nov 2024, coaching client)
"I have had a few coaches in my life, but none have been like Jack. I found him at a tender time when I was transitioning out of a company I'd been with for 17 years. He has empowered me and held me accountable and helped me breathe through this season of life. When I tell people about him, I say, 'We start every session with a short breathing meditation,' and instantly understand why we vibe. And I love that he has been a sales leader so when I need that sales coach to step in, he's got me. Five stars. Would highly recommend."

### 9. Gary R. Ghezzi -- Executive Business Advisor (Mar 2015, CDW colleague)
*Not recommended for use -- colleague testimonial from 2015, not coaching-related.*
