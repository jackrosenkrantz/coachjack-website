// site-content.ts - All copy content for coachjack.xyz
// Voice: Jack's LinkedIn posts — poetic, philosophical, occasionally profane.
// Structure: Problem-Agitation-Solution. Every headline passes "would a CEO stop scrolling?" test.

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
      { label: "About", href: "/about" },
    ],
    cta: {
      label: "Start \u2192",
      href: "/start",
    },
  },

  // ============================================
  // HOMEPAGE — Pain-first, conversion-focused
  // ============================================
  home: {
    hero: {
      headline: "You built the thing. Why does it feel like this?",
      subheadline:
        "Executive coaching for founders and leaders who are done performing and ready to lead from the inside out. Phoenix, Scottsdale, and nationwide.",
      cta: {
        label: "Start a Conversation",
        href: "/start",
      },
    },

    philosophy: {
      headline: "Transformation is subtraction, not addition.",
      body: "You don\u2019t need another framework. Another productivity system. Another version of yourself to perform. The leaders who change the world are the ones who stop performing leadership and start practicing presence\u2014who lead from alignment, not expectation. That\u2019s the work.",
    },

    services: [
      {
        title: "1:1 Coaching",
        description:
          "Deep, ongoing work with founders and C-suite leaders. Not cheerleading. Not tactics. The real work\u2014nervous system, shadow, and the patterns running beneath your decisions.",
        cta: { label: "Learn More", href: "/coaching" },
      },
      {
        title: "The Portal",
        description:
          "A structured AI journey that surfaces the patterns running your leadership, your decisions, and your life. Four phases. Real transformation. $20/mo.",
        cta: { label: "Enter The Portal", href: "/start" },
      },
    ],

    differentiator: {
      headline: "This is not advice. This is the real work.",
      body: [
        "Most coaching stops at tactics and frameworks. I go deeper\u2014into the nervous system, the patterns running beneath your decisions, the gap between who you perform as and who you actually are.",
        "A decade of sales leadership. 500+ hours of yoga teacher training. Somatic practices. AI fluency. And the kind of honest reflection most people avoid. Not because it\u2019s trendy. Because it\u2019s what actually works.",
      ],
    },

    cta: {
      text: "Ready to stop performing and start leading?",
      label: "Start a Conversation",
      href: "/start",
    },
  },

  // ============================================
  // COACHING PAGE — Problem-first, outcome-specific
  // ============================================
  coaching: {
    hero: {
      headline: "You\u2019ve achieved everything they told you to want.",
      subheadline:
        "And something still isn\u2019t right. Executive coaching for founders and leaders ready to lead from alignment, not expectation.",
    },

    pattern: {
      headline: "The pattern nobody talks about.",
      intro:
        "You\u2019re not broken. You\u2019re running a program that used to work\u2014and it doesn\u2019t anymore.",
      points: [
        {
          title: "The performance trap",
          body: "You\u2019ve optimized everything except the thing that matters most. The team sees confidence. You feel compression. Another quarter of performing a version of yourself that used to fit.",
        },
        {
          title: "The isolation",
          body: "Nobody\u2019s coaching the human doing the scaling. The one who hasn\u2019t slept well in months. Who can\u2019t turn off the problem-solving brain. Who built a team but still feels completely alone in the room.",
        },
        {
          title: "The hollow win",
          body: "You hit the number. Got the title. Built the thing from nothing. And now you\u2019re asking the question you never expected: is this it?",
        },
      ],
    },

    approach: {
      headline: "The work.",
      intro:
        "This isn\u2019t coaching for people who want a cheerleader. This is for leaders ready to meet themselves\u2014nervous system, shadow, and all.",
      items: [
        "Leadership presence\u2014not charisma, but the capacity to hold space under pressure",
        "Decision-making from clarity, not reactivity",
        "Navigating transitions\u2014promotions, exits, pivots\u2014without losing yourself",
        "Team dynamics that start with your own nervous system",
        "Burnout recovery and sustainable high performance",
      ],
    },

    outcomes: {
      headline: "What changes.",
      items: [
        {
          title: "Composure under fire",
          body: "Greater presence in high-stakes moments. The board room, the hard conversation, the decision that keeps you up at night\u2014you meet it differently.",
        },
        {
          title: "Decisions from clarity",
          body: "Your choices stop coming from anxiety and start coming from alignment. The spiral quiets. The path gets clearer.",
        },
        {
          title: "Authentic leadership",
          body: "A leadership style that feels like yours, not performed. Your team feels the shift before you even name it.",
        },
        {
          title: "Sustainable performance",
          body: "High performance that doesn\u2019t cost you your health, your relationships, or your sense of self. Building from alignment, not burnout.",
        },
      ],
    },

    retreats: {
      headline: "Sedona Retreats",
      body: "Immersive coaching experiences in Sedona\u2019s red rock landscape\u2014coaching, yoga, breathwork, and nature woven into intensive formats. You don\u2019t become fireproof by standing at the edge of the fire. For group retreat experiences, visit Becoming the Bridge.",
      cta: {
        label: "Visit Becoming the Bridge",
        href: "https://www.becomingthebridge.co",
      },
    },

    faq: {
      headline: "Questions worth asking",
      items: [
        {
          question: "How is this different from therapy?",
          answer:
            "Coaching is forward-focused and action-oriented. While we work with the nervous system and may touch on personal history, we\u2019re always in service of your leadership and how you show up in the world. I refer to therapists when that\u2019s what\u2019s needed.",
        },
        {
          question: "Do you work virtually or in person?",
          answer:
            "Both. I\u2019m based in Phoenix and work with many leaders across the Valley and Scottsdale in person. Most sessions happen over video. I work with clients across Arizona and nationwide.",
        },
        {
          question: "What\u2019s the time commitment?",
          answer:
            "Most engagements are 3\u20136 months, with bi-weekly 60\u201390 minute sessions plus async support between calls. The goal is always to build your own capacity, not dependence on a coach.",
        },
        {
          question: "What does the investment look like?",
          answer:
            "Investment varies based on the engagement length and format. Most coaching engagements are structured as monthly retainers. This work requires commitment\u2014from both of us. Reach out for a conversation about what makes sense for your situation.",
        },
        {
          question: "What is The Portal?",
          answer:
            "The Portal is a $20/month AI-guided transformation journey. Four phases of Socratic conversation that surface the patterns running your leadership, your decisions, and your life. It\u2019s a structured starting point\u2014or a complement to 1:1 coaching.",
        },
        {
          question: "Who is this for?",
          answer:
            "Founders, C-suite executives, VPs, and senior leaders who are done with surface-level fixes and ready to lead from the inside out. If you\u2019re navigating a transition, building something ambitious, or feeling the cost of success\u2014this work is for you.",
        },
      ],
    },

    investment: {
      headline: "Investment",
      body: "Executive coaching engagements start at 3 months, with most clients working together for 6 months or longer. This work requires commitment\u2014from both of us. Reach out for details on pricing and format.",
    },

    cta: {
      text: "Ready to lead differently?",
      label: "Start a Conversation",
      href: "/start",
    },
  },

  // ============================================
  // ABOUT PAGE — Wound / Awakening / Work
  // ============================================
  about: {
    hero: {
      headline: "I coach leaders back to themselves.",
    },

    wound: {
      body: [
        "For years, I chased a version of success that looked impressive from the outside. VP of Sales. Escalating titles. The metrics of a life well-lived, if you measured by someone else\u2019s scorecard.",
        "But inside, something was breaking. The mosaic table I\u2019d built\u2014piece by piece, achievement by achievement\u2014was coming apart. I was sleeping in the living room of my own life, disconnected from the person I was supposed to be becoming.",
      ],
    },

    awakening: {
      body: [
        "Then I walked into a yoga class. Not because I was seeking enlightenment\u2014I was seeking relief.",
        "What I found was breath. Presence. The radical idea that I didn\u2019t need to add anything to become whole. That transformation is subtraction, not addition.",
        "Sobriety followed. Then a decade of transformational retreats, study across spiritual traditions, and the slow, humbling work of becoming myself.",
      ],
    },

    work: {
      headline: "The work now",
      body: [
        "Now I hold space for others walking this path\u2014from my home base in Arizona, serving clients across Phoenix, Scottsdale, Sedona, and nationwide.",
        "I work with founders and leaders who have achieved success but feel the cost. Who are ready to lead from presence, not performance. Who want their work to be a vehicle for becoming, not a machine that grinds them down.",
      ],
      approachLabel: "My approach draws from:",
      bullets: [
        "A decade in sales leadership and executive roles",
        "500+ hours of yoga teacher training",
        "Years of transformational retreat facilitation",
        "Somatic and nervous system practices",
        "The wisdom traditions that remind us who we already are",
      ],
      closing:
        "I don\u2019t coach people to optimize. I coach them to come home.",
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
        "I live in Phoenix, Arizona. When I\u2019m not coaching, I\u2019m playing guitar, writing, or exploring the desert landscape that makes this place home.",
    },

    cta: {
      text: "Ready to have a real conversation?",
      label: "Start a Conversation",
      href: "/start",
    },
  },

  // ============================================
  // CONTACT PAGE — Minimal, direct
  // ============================================
  contact: {
    hero: {
      headline: "Let\u2019s talk.",
      body: "The best way to start is through the intake form. If you prefer email, reach out directly.",
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
        "Executive Coach Phoenix & Scottsdale, Arizona | Jack Rosenkrantz",
      description:
        "Executive coaching for founders who built the company but lost themselves in the process. Transformation through presence, not performance. Phoenix & nationwide.",
    },
    coaching: {
      title:
        "Executive Coaching for Founders & Leaders | Jack Rosenkrantz",
      description:
        "Executive coaching that goes deeper than tactics. Nervous system work, radical honesty, and the patterns beneath your decisions. Phoenix, Scottsdale & remote.",
    },
    about: {
      title:
        "About Jack Rosenkrantz | Executive Coach in Phoenix, Arizona",
      description:
        "From sales leadership to sobriety to embodied coaching. Jack Rosenkrantz coaches founders and executives back to themselves. Phoenix, Arizona & nationwide.",
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
      "Executive coaching for founders and leaders who are done performing and ready to lead from the inside out.",
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
      { href: "/resources/what-is-executive-coaching", label: "Resources" },
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
