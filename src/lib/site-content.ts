// site-content.ts - All copy content for coachjack.xyz
// This makes it easy to update text without touching component code

export const siteContent = {
  // ============================================
  // GLOBAL
  // ============================================
  siteName: "Jack Rosenkrantz",
  siteTagline: "Executive Coach | Phoenix & Scottsdale, Arizona",
  email: "jack@becomingthebridge.co",
  calendlyUrl: "https://calendly.com/YOUR_LINK_HERE", // Update with real link
  linkedinUrl: "https://www.linkedin.com/in/jackrosenkrantz/",
  btbUrl: "https://www.becomingthebridge.co",

  // ============================================
  // NAVIGATION
  // ============================================
  nav: {
    links: [
      { label: "About", href: "/about" },
      { label: "Executive Coaching", href: "/executive-coaching" },
      { label: "Life Coaching", href: "/life-coaching" },
      { label: "For Founders", href: "/coaching-for-founders" },
      { label: "Sedona Retreats", href: "/sedona-retreats" },
      { label: "Writing", href: "/writing" },
    ],
    cta: {
      label: "Book a Call",
      href: "/contact",
    },
  },

  // ============================================
  // HOMEPAGE
  // ============================================
  home: {
    hero: {
      headline: "Leadership is who you are, not what you do.",
      subheadline:
        "Executive coaching for founders and leaders in Phoenix, Scottsdale, and across Arizona. Lead from presence, not performance.",
      cta: {
        label: "Book a Call",
        href: "/contact",
      },
    },

    philosophy: {
      headline: "Better humans make better leaders.",
      body: [
        "Most coaching stops at tactics and frameworks. I go deeper.",
        "I work with founders and executives across Phoenix and Scottsdale who are ready to stop performing leadership and start being leaders. Not through more strategies. Through subtraction. Through presence. Through the body.",
        "My approach blends executive coaching with nervous system regulation, yoga philosophy, and transformational facilitation\u2014because sustainable leadership starts from the inside out.",
      ],
      cta: {
        label: "Learn more about my approach",
        href: "/about",
      },
    },

    services: [
      {
        title: "Executive Coaching",
        description:
          "Deep, ongoing work with C-suite leaders and senior executives in Arizona. Blend of practical leadership and radical self-inquiry.",
        cta: { label: "Learn More", href: "/executive-coaching" },
      },
      {
        title: "Life Coaching",
        description:
          "For professionals navigating personal transformation\u2014sobriety, identity shifts, burnout, purpose. Based in Phoenix, available everywhere.",
        cta: { label: "Learn More", href: "/life-coaching" },
      },
      {
        title: "Coaching for Founders",
        description:
          "Leadership coaching for entrepreneurs who want to scale without losing themselves. Serving founders across Arizona.",
        cta: { label: "Learn More", href: "/coaching-for-founders" },
      },
      {
        title: "Sedona Retreats",
        description:
          "Immersive executive and leadership retreats in Sedona, Arizona. Coaching, yoga, breathwork, and the red rocks.",
        cta: { label: "Learn More", href: "/sedona-retreats" },
      },
    ],

    differentiator: {
      headline: "Why this work?",
      body: [
        "I spent a decade in sales leadership\u2014hitting quotas, climbing ladders, burning out. Then I found yoga. Then I got sober. Then I learned that the version of me I was killing myself to become\u2026 was already there.",
        "Now I work with founders and leaders across Arizona who are ready to stop performing leadership and start being leaders. Not through more tactics. Through subtraction. Through presence. Through the body.",
        "I blend executive coaching with nervous system work, yoga philosophy, and transformational facilitation\u2014not because it\u2019s trendy, but because it\u2019s what actually works.",
      ],
    },

    resources: {
      headline: "Resources",
      items: [
        {
          title: "What Is Executive Coaching?",
          description:
            "A comprehensive guide to executive coaching\u2014what it is, who it\u2019s for, and how to find the right coach.",
          href: "/resources/what-is-executive-coaching",
        },
        {
          title: "Executive Coaching Cost Guide",
          description:
            "What executive coaching costs, what affects pricing, and how to think about ROI.",
          href: "/resources/executive-coaching-cost",
        },
      ],
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
      label: "Book a Call",
      href: "/contact",
    },
  },

  // ============================================
  // EXECUTIVE COACHING PAGE (formerly /coaching)
  // ============================================
  executiveCoaching: {
    hero: {
      headline: "Executive Coaching in Phoenix & Scottsdale, Arizona",
      subheadline:
        "For C-suite leaders, VPs, directors, and senior leaders ready to lead from the inside out.",
    },

    intro: {
      opening:
        "This isn\u2019t coaching for people who want a cheerleader. This is for leaders ready to meet themselves\u2014nervous system, shadow, and all.",
      body: [
        "Most executive coaching is about performance. More productivity. Better delegation. Sharper communication. Those things matter\u2014but they\u2019re not the root.",
        "The leaders I work with in Phoenix and Scottsdale are done with surface-level fixes. They want to understand why they react under pressure, why success still feels hollow, why the team reflects back the tension they carry in their own body.",
      ],
    },

    approach: {
      headline: "The approach",
      body: [
        "My method integrates traditional executive coaching with somatic awareness, nervous system regulation, and yoga philosophy. This isn\u2019t about adding more tools to your leadership toolkit. It\u2019s about stripping away the patterns that keep you leading from anxiety, control, and performance.",
      ],
      items: [
        "Leadership presence\u2014not charisma, but the capacity to hold space under pressure",
        "Decision-making from clarity, not reactivity",
        "Navigating transitions\u2014promotions, exits, pivots\u2014without losing yourself",
        "Team dynamics that start with your own nervous system",
        "Burnout recovery and sustainable high performance",
        "Authentic leadership that doesn\u2019t require a mask",
      ],
    },

    process: {
      headline: "The process",
      items: [
        {
          title: "Discovery call",
          desc: "A real conversation\u2014not a sales pitch. We explore what\u2019s alive for you and whether this work is the right fit.",
        },
        {
          title: "Assessment",
          desc: "Deep intake to understand your leadership landscape, challenges, and what\u2019s actually asking for attention.",
        },
        {
          title: "3\u20136 month engagement",
          desc: "Bi-weekly 60\u201390 minute sessions, async support between calls, somatic practices tailored to your nervous system.",
        },
        {
          title: "Integration",
          desc: "We don\u2019t just create insights\u2014we build capacity. Each engagement ends with integration to sustain the shifts.",
        },
      ],
    },

    whoItsFor: {
      headline: "Who this is for",
      items: [
        "C-suite executives navigating the weight of organizational leadership",
        "VPs and directors stepping into bigger roles in Phoenix and Scottsdale",
        "Senior leaders who\u2019ve done the \u201cmindset work\u201d but still feel stuck in their bodies",
        "Founders scaling their companies while trying not to lose themselves",
        "Leaders in Arizona ready to stop grinding and start leading with ease",
      ],
    },

    outcomes: {
      headline: "What clients experience",
      items: [
        "Greater presence and composure in high-stakes situations",
        "Clearer decision-making without the anxiety spiral",
        "Stronger relationships with direct reports and leadership teams",
        "A leadership style that feels authentic, not performed",
        "The ability to hold more complexity without burning out",
      ],
    },

    investment: {
      headline: "Investment",
      body: "Executive coaching engagements start at 3 months, with most clients working together for 6 months or longer. This work requires commitment\u2014from both of us. Reach out for details on pricing and format.",
      cta: {
        label: "Book a Call",
        href: "/contact",
      },
    },

    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          question:
            "How is this different from traditional executive coaching?",
          answer:
            "Most executive coaching focuses exclusively on performance metrics and behavioral change. My approach integrates somatic awareness, nervous system regulation, and embodied practices. We work with your whole system\u2014not just your strategy.",
        },
        {
          question: "Do I need to be in Phoenix for coaching sessions?",
          answer:
            "No. While I\u2019m based in Phoenix and work with many leaders across the Valley and Scottsdale, most sessions happen over video. I work with clients across Arizona and nationwide.",
        },
        {
          question: "What does a typical session look like?",
          answer:
            "Sessions are 60\u201390 minutes. We start with what\u2019s alive\u2014what\u2019s pressing, what\u2019s showing up in your leadership. We might go tactical on a specific challenge, or we might drop into somatic work if your body is holding something your mind hasn\u2019t caught yet. No two sessions are the same.",
        },
        {
          question: "Is this therapy?",
          answer:
            "No. Coaching is forward-focused and action-oriented. While we work with the nervous system and may touch on personal history, we\u2019re always in service of your leadership and how you show up in the world. I refer to therapists when that\u2019s what\u2019s needed.",
        },
        {
          question:
            "What\u2019s the investment for executive coaching in Arizona?",
          answer:
            "Investment varies based on the engagement length and format. Most executive coaching engagements are structured as monthly retainers over a 3\u20136 month commitment. Reach out for a conversation about what makes sense for your situation.",
        },
      ],
    },
  },

  // ============================================
  // LIFE COACHING PAGE (NEW)
  // ============================================
  lifeCoaching: {
    hero: {
      headline: "Life Coaching in Phoenix & Scottsdale, Arizona",
      subheadline:
        "For professionals navigating personal transformation\u2014sobriety, identity shifts, burnout, and the search for what\u2019s real.",
    },

    intro: {
      opening: "Some seasons of life don\u2019t need a strategy. They need a witness.",
      body: [
        "You\u2019ve built the career. Hit the milestones. Maybe even exceeded them. But something underneath is shifting\u2014and no amount of achievement is going to quiet it.",
        "Life coaching with me is for professionals and entrepreneurs in Phoenix, Scottsdale, and beyond who are navigating the transitions that don\u2019t show up on a resume: sobriety, relationship shifts, the gap between who you\u2019ve been and who you\u2019re becoming.",
      ],
    },

    approach: {
      headline: "The approach",
      body: [
        "This isn\u2019t talk therapy. And it\u2019s not the kind of coaching that hands you a vision board and tells you to think positive.",
        "I integrate nervous system work, breathwork, and somatic practices with deep coaching. We work with the body as much as the mind\u2014because transformation that doesn\u2019t land in your bones doesn\u2019t last.",
      ],
    },

    whatWeWorkOn: {
      headline: "What we work on",
      items: [
        {
          title: "Purpose and direction",
          desc: "When the old map stops working, we build a new one\u2014from your actual values, not someone else\u2019s expectations.",
        },
        {
          title: "Stress and nervous system health",
          desc: "Learn to regulate, not just manage. Build the capacity to hold intensity without it breaking you.",
        },
        {
          title: "Personal relationships",
          desc: "How you relate to others is how you relate to yourself. We work on both.",
        },
        {
          title: "Identity shifts",
          desc: "Navigating the space between who you were and who you\u2019re becoming. This is where the real work happens.",
        },
        {
          title: "Freedom from substances",
          desc: "I got sober. I know this path. If substance use is part of your story, I can meet you there without judgment.",
        },
      ],
    },

    process: {
      headline: "How it works",
      items: [
        {
          title: "Discovery call",
          desc: "A real conversation to explore what\u2019s alive for you and whether we\u2019re the right fit for this season.",
        },
        {
          title: "Assessment",
          desc: "We map your landscape\u2014what\u2019s working, what\u2019s not, and what\u2019s asking for attention.",
        },
        {
          title: "Ongoing sessions",
          desc: "Weekly or bi-weekly sessions\u2014a blend of coaching, somatic practices, and integration work.",
        },
        {
          title: "Integration",
          desc: "This isn\u2019t about creating dependence on a coach. It\u2019s about building the capacity to navigate your own life.",
        },
      ],
    },

    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          question:
            "What\u2019s the difference between a life coach and a therapist?",
          answer:
            "Therapy tends to focus on healing past wounds and diagnosing conditions. Life coaching is forward-focused\u2014we work with where you are and where you want to go. I integrate somatic and nervous system practices, but I\u2019m not a therapist. When therapy is what\u2019s needed, I\u2019ll say so.",
        },
        {
          question: "Do I need to be in Phoenix for sessions?",
          answer:
            "No. I\u2019m based in Phoenix and work with many clients across the Valley, Scottsdale, and Sedona\u2014but most sessions happen over video. I work with clients across Arizona and nationwide.",
        },
        {
          question: "Is this only for people in recovery?",
          answer:
            "Not at all. While my personal journey includes sobriety and I\u2019m comfortable in that space, life coaching is for anyone navigating a meaningful transition\u2014whether that involves substances or not.",
        },
        {
          question: "How long do people typically work with you?",
          answer:
            "Most life coaching engagements last 3\u20136 months, though some clients continue longer. The goal is always to build your own capacity, not to create dependence on a coach.",
        },
        {
          question: "What does this cost?",
          answer:
            "Life coaching is structured as a monthly engagement. Reach out for a conversation about investment\u2014it\u2019s always tailored to the scope of what we\u2019re working on.",
        },
      ],
    },

    cta: {
      text: "Something stirring?",
      label: "Book a Call",
      href: "/contact",
    },
  },

  // ============================================
  // COACHING FOR FOUNDERS PAGE (NEW)
  // ============================================
  coachingForFounders: {
    hero: {
      headline:
        "Executive Coaching for Founders & Entrepreneurs in Arizona",
      subheadline:
        "Leadership coaching that goes deeper than KPIs and revenue targets.",
    },

    intro: {
      opening:
        "You built something from nothing. Now it\u2019s building you\u2014and not always in the direction you wanted.",
      body: [
        "Most business coaching is about scaling the company. More revenue. Better systems. Faster growth. And some of that matters.",
        "But nobody\u2019s coaching the human doing the scaling. The one who hasn\u2019t slept well in months. Who can\u2019t turn off the problem-solving brain. Who built a team but still feels completely alone in the room.",
        "That\u2019s where I come in. I work with founders and entrepreneurs across Phoenix, Scottsdale, and Arizona who are ready for coaching that matches the depth of what they\u2019re building.",
      ],
    },

    problem: {
      headline: "The problem no one talks about",
      body: [
        "Founder loneliness is real. You can\u2019t vent to your team. You can\u2019t always be honest with your investors. Your partner is tired of hearing about the business. And most coaching feels like it\u2019s for someone else\u2019s version of entrepreneurship.",
        "What you need is someone who gets the pressure\u2014and who can meet you underneath it. Not with platitudes. With presence.",
      ],
    },

    approach: {
      headline: "The approach",
      body: [
        "I blend executive coaching with embodied leadership practices\u2014nervous system regulation, somatic awareness, and the kind of honest reflection that most people avoid.",
      ],
      items: [
        "Founder loneliness\u2014having a partner in the fire who isn\u2019t on your payroll",
        "Scaling identity\u2014growing as fast as your company without losing yourself",
        "Team culture from the inside out\u2014your regulation sets the tone for the entire org",
        "Decision-making from clarity, not anxiety",
        "Sustainable high performance\u2014leading without burning down",
        "Nervous system regulation under the unique pressure founders carry",
      ],
    },

    caseExample: {
      headline: "What this looks like in practice",
      body: [
        "A founder came to me running a 30-person company, sleeping four hours a night, and convinced that the only thing between them and the next round was more effort. More hours. More grind.",
        "Within three months, they\u2019d restructured their leadership team, started sleeping again, and made the clearest strategic decisions of their career. Not because I told them what to do. Because they finally had the space\u2014and the nervous system capacity\u2014to see what was already obvious.",
      ],
    },

    cta: {
      text: "Ready to lead without losing yourself?",
      label: "Book a Call",
      href: "/contact",
    },
  },

  // ============================================
  // SEDONA RETREATS PAGE (formerly /retreats)
  // ============================================
  sedonaRetreats: {
    hero: {
      headline: "Executive & Leadership Retreats in Sedona, Arizona",
      subheadline:
        "Intensive transformation in one of the most powerful landscapes on earth.",
    },

    whySedona: {
      headline: "Why Sedona",
      body: [
        "There\u2019s a reason people travel from around the world to Sedona. The red rocks. The silence. The way the landscape strips away everything that isn\u2019t essential.",
        "Sedona is the perfect container for deep leadership work. Away from the office, the inbox, the daily grind\u2014you can finally hear what\u2019s been asking for attention. The Arizona high desert has a way of cracking you open. In the best way.",
      ],
    },

    whatToExpect: {
      headline: "What to expect",
      body: [
        "These aren\u2019t corporate retreats with trust falls and PowerPoints. They\u2019re intensive coaching experiences in Sedona\u2019s red rock landscape\u2014coaching, yoga, breathwork, and nature woven into 1\u20133 day immersive formats.",
      ],
      items: [
        {
          title: "Coaching in nature",
          desc: "Sessions among Sedona\u2019s red rocks\u2014walking, sitting, breathing. The landscape does half the work.",
        },
        {
          title: "Yoga & breathwork",
          desc: "Morning practices to ground each day. No experience required\u2014just willingness.",
        },
        {
          title: "Solo reflection",
          desc: "Structured time for silence, journaling, and integration. The space between sessions is where the real shifts happen.",
        },
        {
          title: "Facilitated deep work",
          desc: "For small groups: guided sessions that build trust, honesty, and collective capacity.",
        },
      ],
    },

    whoItsFor: {
      headline: "Who this is for",
      items: [
        "Leaders who want more than a conference\u2014who want genuine transformation",
        "Founders at a crossroads who need space and clarity to make the next move",
        "Executive teams who want to go deeper together in an environment that demands presence",
        "Anyone who knows that the next level of their leadership requires a different kind of work",
      ],
    },

    btb: {
      headline: "Group retreats through Becoming the Bridge",
      body: "For group retreat experiences\u2014including the upcoming Costa Rica retreat, Spring 2026\u2014visit Becoming the Bridge, co-founded by Jack and Chelsea Linge.",
      cta: {
        label: "Visit Becoming the Bridge",
        href: "https://www.becomingthebridge.co",
      },
    },

    logistics: {
      headline: "Logistics",
      items: [
        "Location: Sedona, Arizona (specific venue details shared upon booking)",
        "Format: 1-day, 2-day, or 3-day intensive\u2014solo or small group",
        "Investment: Varies by format and group size. Reach out for details.",
        "Travel: Sedona is approximately 2 hours north of Phoenix",
      ],
    },

    cta: {
      text: "Ready for something different?",
      label: "Inquire About a Sedona Retreat",
      href: "/contact",
    },
  },

  // ============================================
  // WORKSHOPS PAGE (BTB handoff)
  // ============================================
  workshops: {
    hero: {
      headline: "Workshops & Team Facilitation",
      subheadline: "This work lives at Becoming the Bridge.",
    },

    body: [
      "Workshops, team facilitation, and group nervous system work happen through Becoming the Bridge\u2014co-founded by Jack and Chelsea Linge.",
      "BTB creates immersive experiences for leadership teams and organizations that want to build collective capacity, not just individual performance.",
    ],

    cta: {
      label: "Visit Becoming the Bridge",
      href: "https://www.becomingthebridge.co",
    },
  },

  // ============================================
  // WRITING PAGE
  // ============================================
  writing: {
    hero: {
      headline: "Reflections",
      subheadline: "Thoughts on leadership, presence, and becoming.",
    },
    posts: [
      {
        title: "Ready to stop being your own worst enemy?",
        excerpt:
          "On the inner work of leadership and why the biggest obstacle between you and the leader you want to be is the story you keep telling yourself.",
        date: "2025",
        href: "https://www.linkedin.com/in/jackrosenkrantz/",
        type: "linkedin" as const,
      },
      {
        title: "Coach Life 2.0 Podcast",
        excerpt:
          "Jack shares his journey from a high-stress sales career to becoming a coach. He emphasizes the importance of taking responsibility for one\u2019s life and finding authentic desires and goals.",
        date: "2024",
        href: "https://www.linkedin.com/in/jackrosenkrantz/",
        type: "podcast" as const,
      },
      {
        title: "Transformation is subtraction, not addition",
        excerpt:
          "We\u2019ve been conditioned to believe growth means adding more. More skills, more credentials, more hustle. What if the path forward is actually about letting go?",
        date: "2025",
        href: "https://www.linkedin.com/in/jackrosenkrantz/",
        type: "article" as const,
      },
    ],
  },

  // ============================================
  // TESTIMONIALS PAGE
  // ============================================
  testimonials: {
    hero: {
      headline: "What clients say",
    },
  },

  // ============================================
  // CONTACT PAGE
  // ============================================
  contact: {
    hero: {
      headline: "Let\u2019s talk",
      body: "If something here resonated, I\u2019d love to hear from you. Whether you\u2019re exploring executive coaching, life coaching, or a Sedona retreat\u2014reach out. I\u2019m based in Phoenix, Arizona and work with clients in person and remotely.",
    },

    nap: {
      name: "Jack Rosenkrantz",
      title: "Executive Coach",
      location: "Phoenix, Arizona",
      email: "jack@becomingthebridge.co",
      serviceArea:
        "Serving Phoenix, Scottsdale, Sedona & remote clients nationwide",
    },

    form: {
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@example.com" },
        interest: {
          label: "What brings you here?",
          placeholder: "Select one...",
          options: [
            { value: "executive-coaching", label: "Executive Coaching" },
            { value: "life-coaching", label: "Life Coaching" },
            { value: "founder-coaching", label: "Coaching for Founders" },
            { value: "sedona-retreat", label: "Sedona Retreat" },
            { value: "speaking", label: "Speaking/Podcast" },
            { value: "other", label: "Other" },
          ],
        },
        message: {
          label: "Message",
          placeholder: "Tell me a bit about what\u2019s on your mind...",
        },
      },
      submitLabel: "Send Message",
      successHeadline: "Thank you",
      successBody:
        "I\u2019ll be in touch soon. In the meantime, take a breath.",
    },

    alternative: {
      text: "Prefer to book directly?",
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
        "Executive coaching for founders and leaders in Phoenix, Scottsdale, and across Arizona. Blending nervous system work, yoga philosophy, and transformational facilitation. Book a call today.",
    },
    about: {
      title: "About Jack Rosenkrantz | Executive Coach in Phoenix, Arizona",
      description:
        "From sales leadership to sobriety to embodied coaching. Jack Rosenkrantz is an executive coach based in Phoenix, Arizona, serving leaders across Scottsdale, Sedona, and nationwide.",
    },
    executiveCoaching: {
      title: "Executive Coaching Phoenix & Scottsdale | Jack Rosenkrantz",
      description:
        "Executive coaching for C-suite leaders, VPs, and senior executives in Phoenix and Scottsdale, Arizona. Integrating leadership strategy with nervous system work and embodied practices.",
    },
    lifeCoaching: {
      title: "Life Coach Phoenix & Scottsdale, Arizona | Jack Rosenkrantz",
      description:
        "Life coaching for professionals navigating personal transformation in Phoenix, Scottsdale, and across Arizona. Sobriety, burnout, identity shifts, and personal development coaching.",
    },
    coachingForFounders: {
      title:
        "Executive Coach for Founders & Entrepreneurs | Phoenix, Arizona",
      description:
        "Leadership coaching for founders and entrepreneurs in Phoenix, Scottsdale, and Arizona. Go deeper than KPIs\u2014coaching for the human doing the scaling.",
    },
    sedonaRetreats: {
      title:
        "Executive & Leadership Retreats Sedona, Arizona | Jack Rosenkrantz",
      description:
        "Immersive executive and leadership retreats in Sedona, Arizona. Coaching, yoga, breathwork, and deep work in the red rock landscape. 1\u20133 day intensive formats.",
    },
    workshops: {
      title: "Workshops & Team Facilitation | Becoming the Bridge",
      description:
        "Workshops and team facilitation through Becoming the Bridge. Nervous system work, embodied leadership, and transformational experiences for leadership teams.",
    },
    writing: {
      title: "Reflections on Leadership & Presence | Jack Rosenkrantz",
      description:
        "Thoughts on leadership, presence, and becoming. Essays and reflections from executive coach Jack Rosenkrantz, based in Phoenix, Arizona.",
    },
    testimonials: {
      title: "Client Testimonials | Jack Rosenkrantz, Executive Coach",
      description:
        "Hear from founders, executives, and retreat participants about their experience working with Jack Rosenkrantz, executive coach in Phoenix, Arizona.",
    },
    contact: {
      title:
        "Book a Call | Jack Rosenkrantz, Executive Coach in Phoenix, AZ",
      description:
        "Get in touch about executive coaching, life coaching, or Sedona retreats. Book a conversation with Jack Rosenkrantz, executive coach based in Phoenix, Arizona.",
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
      email: "jack@becomingthebridge.co",
    },
    navLinks: [
      { href: "/about", label: "About" },
      { href: "/executive-coaching", label: "Executive Coaching" },
      { href: "/life-coaching", label: "Life Coaching" },
      { href: "/coaching-for-founders", label: "For Founders" },
      { href: "/sedona-retreats", label: "Sedona Retreats" },
      { href: "/writing", label: "Writing" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact" },
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
