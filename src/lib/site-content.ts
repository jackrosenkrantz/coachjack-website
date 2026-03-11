// site-content.ts - All copy content for coachjack.xyz
// Radical redesign: 4 core pages + SEO content, dark theme, universal /start CTA

export const siteContent = {
  // ============================================
  // GLOBAL
  // ============================================
  siteName: "Jack Rosenkrantz",
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
  // HOMEPAGE — Single-scroll conversion page
  // ============================================
  home: {
    hero: {
      headline: "Leadership is who you are, not what you do.",
      subheadline:
        "Executive coaching for founders and leaders who are ready to stop performing and start leading. Phoenix, Scottsdale, and nationwide.",
      cta: {
        label: "Begin",
        href: "/start",
      },
    },

    philosophy: {
      headline: "Better humans make better leaders.",
      body: "I work with founders and executives who are done with surface-level fixes. My approach blends executive coaching with nervous system regulation and transformational facilitation\u2014because sustainable leadership starts from the inside out.",
    },

    services: [
      {
        title: "1:1 Coaching",
        description:
          "Deep, ongoing work with founders and C-suite leaders. Blending leadership strategy with nervous system work, somatic practices, and radical honesty.",
        cta: { label: "Learn More", href: "/coaching" },
      },
      {
        title: "The Portal",
        description:
          "A structured AI journey that helps you see your patterns, design better systems, and operate sustainably. Four phases. Real transformation. $20/mo.",
        cta: { label: "Start Free", href: "/start" },
      },
    ],

    differentiator: {
      headline: "Why this work is different",
      body: [
        "Most coaching stops at tactics and frameworks. I go deeper\u2014into the nervous system, the patterns running beneath your decisions, the gap between who you perform as and who you actually are.",
        "I blend a decade of sales leadership experience with somatic practices, AI fluency, and the kind of honest reflection most people avoid. Not because it\u2019s trendy. Because it\u2019s what actually works.",
      ],
    },
  },

  // ============================================
  // COACHING PAGE — Unified services
  // ============================================
  coaching: {
    hero: {
      headline: "Coaching that meets you where you are",
      subheadline:
        "Executive coaching, founder coaching, and immersive retreats. In-person in Phoenix and Scottsdale, or remote anywhere.",
    },

    executiveCoaching: {
      headline: "Executive Coaching",
      intro:
        "This isn\u2019t coaching for people who want a cheerleader. This is for leaders ready to meet themselves\u2014nervous system, shadow, and all.",
      body: [
        "Most executive coaching is about performance. More productivity. Better delegation. Sharper communication. Those things matter\u2014but they\u2019re not the root.",
        "The leaders I work with are done with surface-level fixes. They want to understand why they react under pressure, why success still feels hollow, why the team reflects back the tension they carry in their own body.",
      ],
      approach: [
        "Leadership presence\u2014not charisma, but the capacity to hold space under pressure",
        "Decision-making from clarity, not reactivity",
        "Navigating transitions\u2014promotions, exits, pivots\u2014without losing yourself",
        "Team dynamics that start with your own nervous system",
        "Burnout recovery and sustainable high performance",
      ],
      outcomes: [
        "Greater presence and composure in high-stakes situations",
        "Clearer decision-making without the anxiety spiral",
        "Stronger relationships with direct reports and leadership teams",
        "A leadership style that feels authentic, not performed",
      ],
    },

    founders: {
      headline: "Coaching for Founders",
      intro:
        "You built something from nothing. Now it\u2019s building you\u2014and not always in the direction you wanted.",
      body: [
        "Nobody\u2019s coaching the human doing the scaling. The one who hasn\u2019t slept well in months. Who can\u2019t turn off the problem-solving brain. Who built a team but still feels completely alone in the room.",
        "I work with founders who are ready for coaching that matches the depth of what they\u2019re building.",
      ],
      items: [
        "Founder loneliness\u2014having a partner in the fire who isn\u2019t on your payroll",
        "Scaling identity\u2014growing as fast as your company without losing yourself",
        "Team culture from the inside out\u2014your regulation sets the tone for the entire org",
        "Decision-making from clarity, not anxiety",
      ],
    },

    retreats: {
      headline: "Sedona Retreats",
      body: "Immersive coaching experiences in Sedona\u2019s red rock landscape\u2014coaching, yoga, breathwork, and nature woven into 1\u20133 day intensive formats. Solo or small group. For group retreat experiences, visit Becoming the Bridge, co-founded with Chelsea Linge.",
      cta: {
        label: "Visit Becoming the Bridge",
        href: "https://www.becomingthebridge.co",
      },
    },

    faq: {
      headline: "Frequently asked questions",
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
            "Investment varies based on the engagement length and format. Most coaching engagements are structured as monthly retainers. Reach out for a conversation about what makes sense for your situation.",
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
      label: "Start Here",
      href: "/start",
    },
  },

  // ============================================
  // ABOUT PAGE
  // ============================================
  about: {
    hero: {
      headline: "The path to yourself begins here.",
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
      headline: "The work",
      body: [
        "Now I hold space for others walking this path\u2014from my home base in Arizona, serving clients across Phoenix, Scottsdale, Sedona, and nationwide.",
        "As an executive coach, I work with founders and leaders who have achieved success but feel the cost. Who are ready to lead from presence, not performance. Who want their work to be a vehicle for becoming, not a machine that grinds them down.",
      ],
      approachLabel: "My approach draws from:",
      bullets: [
        "A decade in sales leadership and executive roles",
        "500+ hours of yoga teacher training",
        "Years of transformational retreat facilitation",
        "Somatic and nervous system practices",
        "The wisdom traditions that remind us who we already are",
      ],
      closing: "I don\u2019t coach people to optimize. I coach them to come home.",
    },

    credentials: {
      headline: "Background",
      items: [
        "Co-founder, Becoming the Bridge (with Chelsea Linge)",
        "Former VP of Sales, Nivati",
        "Certified Yoga Teacher",
        "Executive Coach",
        "Based in Phoenix, Arizona",
      ],
      personal:
        "I live in Phoenix, Arizona. When I\u2019m not coaching, I\u2019m playing guitar, writing, or exploring the desert landscape that makes this place home.",
    },

    cta: {
      text: "Ready to have a real conversation?",
      label: "Start Here",
      href: "/start",
    },
  },

  // ============================================
  // CONTACT PAGE — Minimal NAP, no form
  // ============================================
  contact: {
    hero: {
      headline: "Get in touch",
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
  // SEO META
  // ============================================
  meta: {
    home: {
      title: "Executive Coach Phoenix & Scottsdale, Arizona | Jack Rosenkrantz",
      description:
        "Executive coaching for founders and leaders in Phoenix, Scottsdale, and across Arizona. Blending nervous system work, yoga philosophy, and transformational facilitation.",
    },
    coaching: {
      title: "Executive Coaching & Coaching for Founders | Jack Rosenkrantz",
      description:
        "Executive coaching for C-suite leaders, founders, and entrepreneurs. In-person in Phoenix and Scottsdale, or remote nationwide. Integrating leadership strategy with nervous system work.",
    },
    about: {
      title: "About Jack Rosenkrantz | Executive Coach in Phoenix, Arizona",
      description:
        "From sales leadership to sobriety to embodied coaching. Jack Rosenkrantz is an executive coach based in Phoenix, Arizona, serving leaders across Scottsdale, Sedona, and nationwide.",
    },
    contact: {
      title:
        "Contact | Jack Rosenkrantz, Executive Coach in Phoenix, AZ",
      description:
        "Get in touch about executive coaching, founder coaching, or Sedona retreats. Jack Rosenkrantz, executive coach based in Phoenix, Arizona.",
    },
    whatIsExecutiveCoaching: {
      title:
        "What Is Executive Coaching? A Complete Guide | Jack Rosenkrantz",
      description:
        "Learn what executive coaching is, who hires an executive coach, what a typical engagement looks like, and how to choose the right coach. Executive coaching guide from Phoenix, Arizona.",
    },
    executiveCoachingCost: {
      title:
        "Executive Coaching Cost: What to Expect in 2026 | Jack Rosenkrantz",
      description:
        "How much does executive coaching cost? National averages, pricing models, what\u2019s included, and what to expect in the Phoenix/Arizona market. Transparent pricing guide.",
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      "Executive coaching for founders and leaders in Phoenix, Scottsdale, Sedona, and across Arizona.",
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

export default siteContent;
