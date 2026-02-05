// site-content.ts - All copy content for coachjack.xyz
// This makes it easy to update text without touching component code

export const siteContent = {
  // ============================================
  // GLOBAL
  // ============================================
  siteName: "Jack Rosenkrantz",
  siteTagline: "Executive Coach for Founders",
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
      { label: "Coaching", href: "/coaching" },
      { label: "Workshops", href: "/workshops" },
      { label: "Retreats", href: "/retreats" },
      { label: "Writing", href: "/writing" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // ============================================
  // HOMEPAGE
  // ============================================
  home: {
    hero: {
      headline: "Leadership is who you are, not what you do.",
      subheadline:
        "Executive coaching for founders who want to lead from presence, not performance.",
      cta: {
        label: "Book a Conversation",
        href: "/contact",
      },
    },

    philosophy: {
      headline: "Better humans make better leaders.",
      body: [
        "Most coaching stops at tactics and frameworks. I go deeper.",
        "I work with founders who are ready to stop performing leadership and start being leaders. Not through more strategies. Through subtraction. Through presence. Through the body.",
        "My approach blends executive coaching with nervous system regulation, yoga philosophy, and transformational facilitation\u2014because sustainable leadership starts from the inside out.",
      ],
      cta: {
        label: "Learn more about my approach",
        href: "/about",
      },
    },

    services: [
      {
        title: "1:1 Executive Coaching",
        description:
          "Deep, ongoing work with founders. Blend of practical leadership and radical self-inquiry.",
        cta: { label: "Learn More", href: "/coaching" },
      },
      {
        title: "Workshops & Facilitation",
        description:
          "Nervous system workshops and transformational facilitation for leadership teams.",
        cta: { label: "Inquire", href: "/workshops" },
      },
      {
        title: "Retreats",
        description:
          "Immersive experiences for entrepreneurs and seekers. Costa Rica Spring 2026.",
        cta: { label: "Join the Waitlist", href: "/retreats" },
      },
    ],

    differentiator: {
      headline: "Why this work?",
      body: [
        "I spent a decade in sales leadership\u2014hitting quotas, climbing ladders, burning out. Then I found yoga. Then I got sober. Then I learned that the version of me I was killing myself to become\u2026 was already there.",
        "Now I work with founders who are ready to stop performing leadership and start being leaders. Not through more tactics. Through subtraction. Through presence. Through the body.",
        "I blend executive coaching with nervous system work, yoga philosophy, and transformational facilitation\u2014not because it\u2019s trendy, but because it\u2019s what actually works.",
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
        "Now I hold space for others walking this path.",
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
      ],
      personal:
        "I live in Phoenix. When I\u2019m not coaching, I\u2019m playing guitar, writing, or exploring the desert.",
    },

    cta: {
      text: "Ready to have a real conversation?",
      label: "Book a Call",
      href: "/contact",
    },
  },

  // ============================================
  // COACHING PAGE
  // ============================================
  coaching: {
    hero: {
      headline: "1:1 Executive Coaching",
      subheadline: "For founders ready to lead from the inside out.",
    },

    intro: {
      opening: "This isn\u2019t performance coaching. It\u2019s presence coaching.",
      body: "We\u2019ll work together over a minimum of 6 months to:",
      bullets: [
        "Uncover the patterns that drive your leadership (and the ones that limit it)",
        "Integrate nervous system regulation so you can hold more without breaking",
        "Clarify your vision and align your actions with your values",
        "Build the capacity to lead with humanity and equanimity",
      ],
      closing:
        "My approach blends practical leadership skills with radical self-inquiry. We\u2019ll talk strategy when strategy is what\u2019s needed. And we\u2019ll go deeper when something else is asking for attention.",
    },

    whatToExpect: {
      headline: "What to expect",
      items: [
        {
          title: "Bi-weekly sessions",
          desc: "60\u201390 minute coaching sessions, designed to go as deep as we need to go.",
        },
        {
          title: "Async support",
          desc: "Between-session access for when things come up that can\u2019t wait.",
        },
        {
          title: "Somatic practices",
          desc: "Breathwork and body-based practices tailored to your nervous system.",
        },
        {
          title: "A real partner",
          desc: "Someone who will meet you where you are\u2014and won\u2019t let you stay stuck.",
        },
      ],
    },

    whoItsFor: {
      headline: "Who this is for",
      items: [
        "Founders carrying the weight of their company",
        "Executives navigating high-stakes leadership",
        "Leaders who\u2019ve done the \u201cmindset work\u201d but still feel stuck in their bodies",
        "Anyone ready to stop grinding and start leading with ease",
      ],
    },

    investment: {
      headline: "Investment",
      body: "Investment starts at a 6-month engagement. This work requires commitment\u2014from both of us. Reach out for details on pricing.",
      cta: {
        label: "Apply for Coaching",
        href: "/contact",
      },
    },
  },

  // ============================================
  // WORKSHOPS PAGE
  // ============================================
  workshops: {
    hero: {
      headline: "Workshops & Facilitation",
      subheadline: "Nervous system work for leadership teams.",
    },

    intro: {
      body: [
        "High-performing teams often share the same challenge: they\u2019re optimized for output, not for presence.",
        "I offer workshops and facilitation experiences that help leadership teams:",
      ],
      bullets: [
        "Understand how their nervous systems shape decision-making",
        "Build collective capacity to hold complexity without reactivity",
        "Move from chronic stress to sustainable performance",
        "Lead meetings, offsites, and high-stakes conversations from a regulated state",
      ],
      closing:
        "These aren\u2019t lectures. They\u2019re embodied experiences\u2014blending breathwork, somatic practices, and facilitated dialogue.",
    },

    formats: {
      headline: "Formats",
      items: [
        {
          title: "Half-day or full-day workshops",
          desc: "Concentrated experiences for teams ready to go deep in a single session.",
        },
        {
          title: "Multi-session series",
          desc: "4\u20136 week programs that build capacity over time.",
        },
        {
          title: "Custom offsites & retreats",
          desc: "Immersive team experiences designed around your specific needs.",
        },
        {
          title: "Keynote talks",
          desc: "Conference sessions and speaking engagements on embodied leadership.",
        },
      ],
    },

    clients: {
      headline: "Past clients",
      placeholder:
        "I\u2019ve worked with teams at Refine Labs and other forward-thinking organizations. Logos and case studies coming soon.",
    },

    cta: {
      headline: "Bring this work to your team",
      label: "Inquire About a Workshop",
      href: "/contact",
    },
  },

  // ============================================
  // RETREATS PAGE
  // ============================================
  retreats: {
    hero: {
      headline: "Retreats",
      subheadline: "Immersive transformation for entrepreneurs and seekers.",
    },

    intro: {
      body: [
        "Some work can\u2019t happen on a Zoom call. It needs space. Nature. Community. Time.",
        "Through Becoming the Bridge, I co-lead transformational retreats with Chelsea Linge. These are not wellness vacations\u2014they\u2019re structured containers for deep work, designed for founders and leaders ready to step into their next chapter.",
      ],
    },

    upcoming: {
      headline: "Upcoming",
      event: {
        label: "Next Retreat",
        title: "Costa Rica | Spring 2026",
        description:
          "Dates and details coming soon. Join the waitlist to be first to know when registration opens.",
        cta: {
          label: "Join the Waitlist",
          href: "mailto:jack@becomingthebridge.co",
        },
      },
    },

    whatHappens: {
      headline: "What happens at a retreat",
      items: [
        {
          title: "Daily practices",
          desc: "Yoga, breathwork, and meditation to ground each day.",
        },
        {
          title: "Facilitated group work",
          desc: "Coaching circles and structured dialogue for collective insight.",
        },
        {
          title: "Solo reflection",
          desc: "Integration time for personal processing and journaling.",
        },
        {
          title: "Nature & connection",
          desc: "Nourishment, real conversation, and the space to just be.",
        },
      ],
    },

    cta: {
      headline: "Learn more about our retreats",
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
      body: "If something here resonated, I\u2019d love to hear from you. Whether you\u2019re exploring coaching, interested in a workshop, or just want to connect\u2014reach out.",
    },

    form: {
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@example.com" },
        interest: {
          label: "What brings you here?",
          placeholder: "Select one...",
          options: [
            { value: "coaching", label: "1:1 Coaching" },
            { value: "workshop", label: "Workshop Inquiry" },
            { value: "retreat", label: "Retreat Interest" },
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
  // SEO META
  // ============================================
  meta: {
    home: {
      title: "Jack Rosenkrantz | Executive Coach for Founders",
      description:
        "Executive coaching for founders who want to lead from presence, not performance. Blending nervous system work, yoga philosophy, and transformational facilitation.",
    },
    about: {
      title: "About Jack Rosenkrantz | Executive Coach",
      description:
        "From sales leadership to sobriety to embodied coaching. Learn about Jack's journey and approach to transformational executive coaching.",
    },
    coaching: {
      title: "1:1 Executive Coaching | Jack Rosenkrantz",
      description:
        "Deep, ongoing coaching for founders and executives. Blend of practical leadership skills and radical self-inquiry.",
    },
    workshops: {
      title: "Nervous System Workshops for Leadership Teams | Jack Rosenkrantz",
      description:
        "Workshops and facilitation experiences that help leadership teams move from chronic stress to sustainable performance.",
    },
    retreats: {
      title: "Transformational Retreats | Jack Rosenkrantz",
      description:
        "Immersive retreat experiences for entrepreneurs and seekers. Co-led with Chelsea Linge through Becoming the Bridge.",
    },
    writing: {
      title: "Reflections | Jack Rosenkrantz",
      description:
        "Thoughts on leadership, presence, and becoming. Essays and reflections from executive coach Jack Rosenkrantz.",
    },
    testimonials: {
      title: "Testimonials | Jack Rosenkrantz",
      description:
        "Hear from founders, executives, and retreat participants about their experience working with Jack Rosenkrantz.",
    },
    contact: {
      title: "Contact | Jack Rosenkrantz",
      description:
        "Get in touch about executive coaching, workshops, or speaking. Book a conversation with Jack Rosenkrantz.",
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      "Executive coaching for founders who want to lead from presence, not performance.",
    navLinks: [
      { href: "/about", label: "About" },
      { href: "/coaching", label: "Coaching" },
      { href: "/workshops", label: "Workshops" },
      { href: "/retreats", label: "Retreats" },
      { href: "/writing", label: "Writing" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact" },
    ],
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jackrosenkrantz/",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/",
      },
    ],
    copyright: "\u00a9 2026 Jack Rosenkrantz. All rights reserved.",
  },
};

export default siteContent;
