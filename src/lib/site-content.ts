// site-content.ts - All copy content for coachjack.xyz
// Voice: Professional authority with warmth. Direct, concrete, human.
// Structure: Problem-first, then clarity. Every headline earns the next line.

export const siteContent = {
  // ============================================
  // GLOBAL
  // ============================================
  siteName: "Jack Rosenkrantz",
  siteUrl: "https://coachjack.xyz",
  siteTagline: "Executive Coach | Phoenix & Scottsdale, Arizona",
  email: "jack@coachjack.xyz",
  calendlyUrl: "https://calendly.com/jackrosenkrantz/30min?back=1&month=2026-03",
  linkedinUrl: "https://www.linkedin.com/in/jackrosenkrantz/",
  btbUrl: "https://www.becomingthebridge.co",

  // ============================================
  // NAVIGATION — 2 links + 1 CTA
  // ============================================
  nav: {
    links: [
      { label: "Coaching", href: "/coaching" },
      { label: "Resources", href: "/resources" },
      { label: "About", href: "/about" },
    ],
    cta: {
      label: "Start \u2192",
      href: "/start",
    },
  },

  // ============================================
  // HOMEPAGE — Clear value prop, professional authority
  // ============================================
  home: {
    hero: {
      headline: "Lead from who you actually are.",
      subheadline:
        "Executive coaching for founders and leaders who want their internal operating system to match what they\u2019ve built. Not tactics. Not cheerleading. The real work of leadership.",
      cta: {
        label: "Start a Conversation",
        href: "/start",
      },
    },

    philosophy: {
      headline: "The answer isn\u2019t more. It\u2019s less.",
      body: "You don\u2019t need another framework or another version of yourself to perform. The leaders who build things that last are the ones who stop managing their image and start operating from something real. That takes a different kind of work.",
    },

    services: [
      {
        title: "1:1 Coaching",
        description:
          "Private coaching for founders and C-suite leaders. Not tactics. Not cheerleading. The honest conversation you can\u2019t have with your board, your team, or yourself.",
        cta: { label: "Learn More", href: "/coaching" },
      },
      {
        title: "The Portal",
        description:
          "An AI-guided tool that surfaces the patterns running your leadership. Four phases of structured reflection. $20/mo.",
        cta: { label: "Enter The Portal", href: "/start" },
      },
    ],

    differentiator: {
      headline: "I don\u2019t coach the role. I coach the human wearing it.",
      body: [
        "Most coaching is a performance review with better questions. I work where decisions actually get made\u2014your nervous system, your identity, the patterns you\u2019ve never examined. That\u2019s where leadership actually lives.",
        "A decade of sales leadership taught me how performance works. Sobriety, 500+ hours of yoga training, and years of retreat facilitation taught me what happens when it stops working. I bring both sides.",
      ],
    },

    cta: {
      text: "Ready for a different kind of conversation?",
      label: "Start a Conversation",
      href: "/start",
    },
  },

  // ============================================
  // COACHING PAGE — Problem-first, then invitation
  // ============================================
  coaching: {
    hero: {
      headline: "Your leadership got you here. What gets you further?",
      subheadline:
        "Coaching for the person behind the performance\u2014not the role on your LinkedIn. For founders and leaders ready to do the real work.",
    },

    pattern: {
      headline: "The pattern nobody talks about.",
      intro:
        "You\u2019re not broken. You\u2019re running a program that used to work\u2014and it doesn\u2019t anymore.",
      points: [
        {
          title: "The performance trap",
          body: "You\u2019ve optimized everything except how you actually operate. Your team sees confidence. You feel the cost of maintaining it. The gap between the leader people see and the person you experience keeps growing.",
        },
        {
          title: "The isolation",
          body: "You\u2019re the person everyone depends on and no one checks in on. You can\u2019t have this conversation with your board, your partner, or your team. So you keep producing.",
        },
        {
          title: "The plateau",
          body: "You hit the number. Got the title. Built something real. And now the same habits that got you here are the ones holding you back from what\u2019s next.",
        },
      ],
    },

    approach: {
      headline: "How I work.",
      intro:
        "This isn\u2019t coaching for people who want a cheerleader. I work at the nervous system level\u2014where your leadership patterns actually live.",
      items: [
        "Leadership presence\u2014the capacity to stay grounded when everything in you wants to react",
        "Decision-making from clarity instead of anxiety",
        "Navigating major transitions\u2014exits, pivots, promotions, and the identity shifts that come with them",
        "Team dynamics that start with your own nervous system regulation",
        "Sustainable high performance that doesn\u2019t cost you your health or your relationships",
      ],
    },

    outcomes: {
      headline: "What changes.",
      items: [
        {
          title: "Composure under pressure",
          body: "Board meetings, hard conversations, high-stakes decisions. You stop bracing and start leading through them.",
        },
        {
          title: "Decisions from clarity",
          body: "The 2am spiral quiets. You make choices from a grounded place instead of a reactive one. Your team notices the shift before you do.",
        },
        {
          title: "Leadership that\u2019s actually yours",
          body: "Not the version you\u2019ve been performing. Something more grounded, more effective, and built on who you actually are.",
        },
        {
          title: "A life that matches the resume",
          body: "Performance that comes from alignment, not adrenaline. Success you can actually feel.",
        },
      ],
    },

    retreats: {
      headline: "Sedona Retreats",
      body: "Immersive coaching intensives in Sedona\u2014combining coaching, yoga, breathwork, and nature into formats that create more movement than months of weekly calls. For group retreat experiences, visit Becoming the Bridge.",
      cta: {
        label: "Visit Becoming the Bridge",
        href: "https://www.becomingthebridge.co",
      },
    },

    faq: {
      headline: "Common questions",
      items: [
        {
          question: "How is this different from therapy?",
          answer:
            "Coaching is forward-focused. We work with the nervous system and the patterns beneath your decisions, but always in service of how you lead and perform. When therapy is what\u2019s needed, I\u2019ll say so.",
        },
        {
          question: "Do you work virtually or in person?",
          answer:
            "Both. I\u2019m based in Phoenix and meet clients in person across the Valley and Scottsdale. Most sessions happen over video. I work with leaders across Arizona and nationwide.",
        },
        {
          question: "What\u2019s the time commitment?",
          answer:
            "Most engagements run 3\u20136 months, with bi-weekly sessions and async support between calls. The goal is to build your own capacity, not dependence on a coach.",
        },
        {
          question: "What does the investment look like?",
          answer:
            "Engagements are structured as monthly retainers. This work requires real commitment from both of us. Reach out and we\u2019ll talk about what makes sense.",
        },
        {
          question: "What is The Portal?",
          answer:
            "A $20/month AI-guided tool that surfaces the patterns running your leadership. Four phases of structured reflection. Works as a starting point or a complement to 1:1 coaching.",
        },
        {
          question: "Who is this for?",
          answer:
            "Founders scaling past what got them here. Executives navigating transitions they weren\u2019t prepared for. Leaders who want to perform at a higher level without burning out to do it. If you\u2019re ready for honest work, this is for you.",
        },
      ],
    },

    investment: {
      headline: "Investment",
      body: "Engagements start at 3 months. Most clients stay for 6 months or longer\u2014not because they have to, but because the work compounds. Month-to-month after the initial commitment. Reach out to talk about what fits.",
    },

    cta: {
      text: "Ready for a different kind of conversation?",
      label: "Start Here",
      href: "/start",
    },
  },

  // ============================================
  // ABOUT PAGE — Wound / Awakening / Work (Colonna model)
  // ============================================
  about: {
    hero: {
      headline: "I coach the human, not the title.",
    },

    wound: {
      body: [
        "I spent a decade in sales leadership. VP titles, growing teams, hitting numbers. From the outside it looked like a career on a trajectory. From the inside, it was costing me more than I knew how to measure.",
        "I was good at performing. I was burning out doing it. The gap between how things looked and how they felt kept getting wider.",
      ],
    },

    awakening: {
      body: [
        "I walked into a yoga class looking for relief. What I found was a completely different way to operate.",
        "Sobriety followed. Then years of training\u2014500+ hours of yoga certification, retreat facilitation in Sedona, study across somatic and contemplative traditions. Not as an escape from leadership, but as a deeper education in it.",
        "I learned that the nervous system runs the show. That most leaders are making decisions from survival patterns they\u2019ve never examined. And that the real work of leadership is internal.",
      ],
    },

    work: {
      headline: "The work now",
      body: [
        "I coach founders and executives who\u2019ve built impressive things and want their leadership to match what they\u2019ve built. Some are navigating a crisis. Others want to lead at a level their current habits can\u2019t sustain. Both require the same thing: honest work at the identity level.",
        "I\u2019m based in Arizona\u2014Phoenix, Scottsdale, Sedona\u2014and work with clients nationwide. Sessions are private, direct, and go to the places most coaching avoids.",
      ],
      approachLabel: "My approach draws from:",
      bullets: [
        "A decade in sales leadership\u2014I know what performance costs",
        "500+ hours of yoga teacher training",
        "Years facilitating transformational retreats in Sedona",
        "Somatic and nervous system practices",
        "Contemplative traditions that ground the work in something deeper than tactics",
      ],
      closing:
        "I don\u2019t coach people to optimize. I coach them to lead from who they actually are.",
    },

    credentials: {
      headline: "Background",
      items: [
        "Co-founder, Becoming the Bridge (with Chelsea Linge)",
        "Former VP of Sales, Nivati",
        "Certified Yoga Teacher (500+ hours)",
        "Executive Coach",
        "Based in Phoenix, Arizona",
      ],
      personal:
        "When I\u2019m not coaching, I\u2019m playing guitar, writing, or somewhere in the desert.",
    },

    cta: {
      text: "Tell me what\u2019s actually going on.",
      label: "Have the Conversation",
      href: "/start",
    },
  },

  // ============================================
  // CONTACT PAGE — Minimal, direct
  // ============================================
  contact: {
    hero: {
      headline: "Tell me what\u2019s going on.",
      body: "No pitch. No pressure. Start with the intake form or reach out directly. The first conversation is just that\u2014a conversation.",
    },

    nap: {
      name: "Jack Rosenkrantz",
      title: "Executive Coach",
      location: "Phoenix, Arizona",
      email: "jack@coachjack.xyz",
      serviceArea:
        "Serving Phoenix, Scottsdale, Sedona & remote clients nationwide",
    },

    cta: {
      text: "Ready to start?",
      label: "Go to Intake Form",
      href: "/start",
    },
  },

  // ============================================
  // RESOURCES
  // ============================================
  resources: {
    whatIsExecutiveCoaching: {
      hero: {
        headline: "What Is Executive Coaching?",
        subheadline:
          "A comprehensive guide to executive coaching\u2014what it is, who it\u2019s for, and how to find the right coach.",
      },
    },
    executiveCoachingCost: {
      hero: {
        headline: "How Much Does Executive Coaching Cost?",
        subheadline:
          "A transparent guide to executive coaching pricing, what affects cost, and how to think about ROI.",
      },
    },
  },

  // ============================================
  // SEO META — 150-160 chars, keyword-first
  // ============================================
  meta: {
    home: {
      title:
        "Executive Coach Phoenix & Scottsdale | Jack Rosenkrantz",
      description:
        "Executive coaching for founders and leaders ready to lead from who they actually are. Nervous system, identity, and the real work. Phoenix, AZ & nationwide.",
    },
    coaching: {
      title:
        "Executive Coaching for Founders & Leaders | Jack Rosenkrantz",
      description:
        "Coaching at the nervous system level\u2014where leadership patterns actually live. For founders and executives ready for honest work. Phoenix, Scottsdale & remote.",
    },
    about: {
      title:
        "About Jack Rosenkrantz | Executive Coach in Phoenix, Arizona",
      description:
        "A decade in sales leadership, 500+ hours of yoga training, and somatic practices. Jack Rosenkrantz coaches executives in Phoenix, Arizona & nationwide.",
    },
    contact: {
      title:
        "Contact | Jack Rosenkrantz, Executive Coach in Phoenix, AZ",
      description:
        "Start a conversation about executive coaching, founder coaching, or Sedona retreats. Jack Rosenkrantz, executive coach based in Phoenix, Arizona.",
    },
    whatIsExecutiveCoaching: {
      title:
        "What Is Executive Coaching? A Complete Guide | Jack Rosenkrantz",
      description:
        "Learn what executive coaching is, who hires an executive coach, and how to choose the right one. A practical guide from an executive coach in Phoenix, Arizona.",
    },
    executiveCoachingCost: {
      title:
        "Executive Coaching Cost: What to Expect in 2026 | Jack Rosenkrantz",
      description:
        "How much does executive coaching cost? National averages, pricing models, and what to expect. A transparent guide from a Phoenix-based executive coach.",
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      "I don\u2019t coach the role. I coach the human wearing it.",
    serviceArea:
      "Serving Phoenix, Scottsdale, Sedona & remote clients nationwide",
    nap: {
      name: "Jack Rosenkrantz",
      title: "Executive Coach",
      location: "Arizona",
      email: "jack@coachjack.xyz",
    },
    navLinks: [
      { href: "/coaching", label: "Coaching" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/resources", label: "Resources" },
    ],
    resourceLinks: [
      {
        href: "/resources/what-is-executive-coaching",
        label: "What Is Executive Coaching?",
      },
      {
        href: "/resources/executive-coaching-cost",
        label: "Executive Coaching Cost",
      },
    ],
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jackrosenkrantz/",
      },
    ],
    externalLinks: [
      {
        label: "Becoming the Bridge",
        href: "https://www.becomingthebridge.co",
      },
    ],
    copyright: "\u00a9 2026 Jack Rosenkrantz",
  },
};
