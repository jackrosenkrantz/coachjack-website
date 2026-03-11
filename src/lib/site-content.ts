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
      { label: "Resources", href: "/resources" },
      { label: "About", href: "/about" },
    ],
    cta: {
      label: "Start \u2192",
      href: "/start",
    },
  },

  // ============================================
  // HOMEPAGE — Identity-level provocation, premium positioning
  // ============================================
  home: {
    hero: {
      headline: "Status-fied but unfulfilled?",
      subheadline:
        "You don\u2019t need another strategy. You need to meet the person behind the performance. Executive coaching for founders and leaders ready to close the gap between who they appear to be and who they actually are.",
      cta: {
        label: "Start a Conversation",
        href: "/start",
      },
    },

    philosophy: {
      headline: "The answer isn\u2019t more. It\u2019s less.",
      body: "You don\u2019t need another framework, another productivity system, another version of yourself to perform. The leaders who change industries are the ones who stop managing their image and start trusting their presence. That\u2019s not soft\u2014it\u2019s the hardest work you\u2019ll ever do.",
    },

    services: [
      {
        title: "1:1 Coaching",
        description:
          "Deep, private work for founders and C-suite leaders navigating what no one prepared them for. Not tactics. Not cheerleading. The honest conversation you can\u2019t have with your board, your team, or yourself.",
        cta: { label: "Learn More", href: "/coaching" },
      },
      {
        title: "The Portal",
        description:
          "An AI-guided journey that surfaces the patterns running your leadership before you walk into a room with me. Four phases. Real mirrors. $20/mo.",
        cta: { label: "Enter The Portal", href: "/start" },
      },
    ],

    differentiator: {
      headline: "I don\u2019t coach the role. I coach the human wearing it.",
      body: [
        "Most coaching is a performance review with better questions. I work at the level where decisions actually get made\u2014your nervous system, your identity, the stories you\u2019ve mistaken for truth. The gap between your title and your experience of being alive.",
        "A decade of sales leadership taught me how performance works. Sobriety, 500+ hours of yoga training, and years of retreat facilitation taught me what happens when it stops working. I bring both.",
      ],
    },

    cta: {
      text: "What would change if you stopped performing?",
      label: "Start a Conversation",
      href: "/start",
    },
  },

  // ============================================
  // COACHING PAGE — Pattern-Interrupt-Invitation framework
  // ============================================
  coaching: {
    hero: {
      headline: "You\u2019ve achieved everything they told you to want.",
      subheadline:
        "And something still isn\u2019t right. This is coaching for the person behind the performance\u2014not the role on your LinkedIn.",
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
          body: "A hundred people depend on you and you have no one to talk to. You can\u2019t say this to your board. You can\u2019t say it to your partner. So you keep solving, keep producing, keep disappearing.",
        },
        {
          title: "The hollow win",
          body: "You hit the number. Got the title. Built the thing from nothing. And now you\u2019re asking the question you never expected: is this it?",
        },
      ],
    },

    approach: {
      headline: "How I work.",
      intro:
        "This isn\u2019t coaching for people who want a cheerleader. This is for leaders ready to meet themselves\u2014nervous system, shadow, and all.",
      items: [
        "Leadership presence\u2014not charisma, but the capacity to hold space when everything in you wants to react",
        "Decision-making from clarity, not the anxiety spiral at 2am",
        "Navigating the transitions nobody prepared you for\u2014the exit, the pivot, the promotion that broke something",
        "Team dynamics that start with your own nervous system regulation",
        "Sustainable high performance that doesn\u2019t cost you your health or your marriage",
      ],
    },

    outcomes: {
      headline: "What changes.",
      items: [
        {
          title: "Composure under fire",
          body: "The board room. The hard conversation. The decision that\u2019s been keeping you up. You stop bracing and start meeting it.",
        },
        {
          title: "Decisions from clarity",
          body: "The spiral quiets. Choices stop coming from anxiety and start coming from a place you trust. Your team notices before you do.",
        },
        {
          title: "Leadership that\u2019s actually yours",
          body: "Not the version you\u2019ve been performing. Something quieter, more grounded, and more powerful than anything you could manufacture.",
        },
        {
          title: "A life that matches the resume",
          body: "Success that doesn\u2019t hollow you out. Performance that comes from alignment, not adrenaline. The outside and the inside finally in the same room.",
        },
      ],
    },

    retreats: {
      headline: "Sedona Retreats",
      body: "Immersive coaching in Sedona\u2019s red rock landscape\u2014coaching, yoga, breathwork, and nature woven into intensive formats designed to move you faster than a weekly call ever could. For group retreat experiences, visit Becoming the Bridge.",
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
            "Coaching is forward-focused. We work with the nervous system and the patterns beneath your decisions, but always in service of how you lead and show up. When therapy is what\u2019s needed, I\u2019ll say so.",
        },
        {
          question: "Do you work virtually or in person?",
          answer:
            "Both. I\u2019m based in Phoenix and meet clients in person across the Valley and Scottsdale. Most sessions happen over video. I work with leaders across Arizona and nationwide.",
        },
        {
          question: "What\u2019s the time commitment?",
          answer:
            "Most engagements run 3\u20136 months, with bi-weekly sessions and async support between calls. The point is to build your own capacity\u2014not dependence on a coach.",
        },
        {
          question: "What does the investment look like?",
          answer:
            "Engagements are structured as monthly retainers. This work requires real commitment from both of us. Reach out and we\u2019ll talk about what makes sense.",
        },
        {
          question: "What is The Portal?",
          answer:
            "A $20/month AI-guided journey that surfaces the patterns running your leadership before you walk into a room with me. Four phases of Socratic conversation. A starting point\u2014or a complement to 1:1 work.",
        },
        {
          question: "Who is this for?",
          answer:
            "Founders who built eight-figure companies and can\u2019t sleep. VPs who got the promotion and lost the plot. CEOs with a hundred people depending on them and no one to be honest with. If you\u2019re feeling the cost of success\u2014this work is for you.",
        },
      ],
    },

    investment: {
      headline: "Investment",
      body: "Engagements start at 3 months. Most clients stay for 6 months or longer\u2014not because they have to, but because the work keeps revealing what matters. Month-to-month after the initial commitment. Reach out to talk about what fits.",
    },

    cta: {
      text: "The program stopped working. Now what?",
      label: "Have the Conversation",
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
        "For years, I chased a version of success that looked impressive from the outside. VP of Sales. Escalating titles. The metrics of a life well-lived\u2014if you measured by someone else\u2019s scorecard.",
        "Inside, something was breaking. The mosaic table I\u2019d built\u2014piece by piece, achievement by achievement\u2014was coming apart. I was sleeping in the living room of my own life, disconnected from the person I was supposed to be becoming.",
      ],
    },

    awakening: {
      body: [
        "Then I walked into a yoga class. Not because I was seeking enlightenment\u2014I was seeking relief.",
        "What I found was breath. Presence. The radical idea that I didn\u2019t need to add anything to become whole. That the answer was subtraction, not addition.",
        "Sobriety followed. Then a decade of transformational retreats, study across wisdom traditions, and the slow, humbling work of becoming myself.",
      ],
    },

    work: {
      headline: "The work now",
      body: [
        "Now I hold space for others walking this path\u2014founders who built the company and lost themselves in the process, executives who got the corner office and can\u2019t feel anything, leaders whose teams see confidence while they feel compression.",
        "I work from my home base in Arizona\u2014Phoenix, Scottsdale, Sedona, and nationwide. The format is private. The conversations are honest. And the work goes to the places most coaching is afraid to touch.",
      ],
      approachLabel: "My approach draws from:",
      bullets: [
        "A decade in sales leadership\u2014I know what performance costs",
        "500+ hours of yoga teacher training",
        "Years facilitating transformational retreats in Sedona",
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
        "When I\u2019m not coaching, I\u2019m playing guitar, writing, or somewhere in the desert. This place is home.",
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
      body: "No pitch. No pressure. Start with the intake form or reach out directly. Either way, the first conversation is just that\u2014a conversation.",
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
        "Status-fied but unfulfilled? Executive coaching for the person behind the performance. Nervous system, identity, and the patterns beneath your decisions. Phoenix & nationwide.",
    },
    coaching: {
      title:
        "Executive Coaching for Founders & Leaders | Jack Rosenkrantz",
      description:
        "Not tactics. Not cheerleading. Coaching that goes where most coaches won\u2019t\u2014your nervous system, your identity, the stories you\u2019ve mistaken for truth. Phoenix, Scottsdale & remote.",
    },
    about: {
      title:
        "About Jack Rosenkrantz | Executive Coach in Phoenix, Arizona",
      description:
        "From VP of Sales to sobriety to embodied coaching. Jack Rosenkrantz coaches founders and executives back to themselves. Phoenix, Arizona & nationwide.",
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
