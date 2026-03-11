// testimonials.ts - Data file for coachjack.xyz testimonials

export type TestimonialContext = "homepage" | "coaching" | "about";

export interface Testimonial {
  id: string;
  quote: string;
  shortQuote?: string;
  name: string;
  title?: string;
  company?: string;
  image?: string;
  contexts: TestimonialContext[];
}

export const testimonials: Testimonial[] = [
  {
    id: "elizabeth-blass",
    quote:
      "Working with Jack has been nothing short of transformative. It was an easy decision to renew my contract for a second year. Jack starts every session with a grounding breath, which immediately sets the tone for thoughtful, reflective, and meaningful work. He\u2019s an incredible listener who brings equal parts compassion and accountability to our conversations. When my self-doubt creeps in, he calls it out with clarity and kindness, challenging me to focus on what I truly want and how my energy and mindset can help me get there. He\u2019s taught me to celebrate my wins, embrace my value, and approach challenges with curiosity rather than fear. Jack has been my safe place to share professional frustrations and fears, offering unwavering support while helping me prepare for key meetings and conversations. He brings a unique blend of executive coaching expertise, mindfulness tools, and an unshakably positive spirit that reframes struggles into opportunities. Jack sees the world as abundant, and his optimism is both infectious and empowering.",
    shortQuote:
      "Working with Jack has been nothing short of transformative. He\u2019s taught me to celebrate my wins, embrace my value, and approach challenges with curiosity rather than fear.",
    name: "Elizabeth Blass",
    title: "Chief Customer Officer",
    company: "Karbon",
    contexts: ["homepage", "coaching"],
  },
  {
    id: "sims-tillirson",
    quote:
      "When I went full-time into my business, Jack coached me for free until I could afford to invest in myself. Since then, he\u2019s helped me learn to stay in the pocket and navigate the ups and downs of entrepreneurship. And even more than that, Jack has taught me how to better show up for myself through a (new to me) mindfulness practice. If it weren\u2019t for Jack, I would\u2019ve doubted myself so much that I\u2019d be back in a W2 job plotting my escape. Cannot recommend him enough for high-performers who want more out of life.",
    shortQuote:
      "If it weren\u2019t for Jack, I would\u2019ve doubted myself so much that I\u2019d be back in a W2 job plotting my escape. Cannot recommend him enough for high-performers who want more out of life.",
    name: "Sims Tillirson",
    title: "Founder & Keynote Speaker",
    contexts: ["homepage", "coaching"],
  },
  {
    id: "jared-robin",
    quote:
      "I\u2019ve been meeting with Jack weekly for the past few months. What makes him so special is how he leads with love. As founders, we are already feeling the pressures of the world and probably are pushing ourselves as hard as we ever have (or far harder). I didn\u2019t necessarily need somebody to push me harder or teach me GTM tactics (he\u2019s fully capable of doing those things) but more to have a voice helping me remove the mental and emotional ways that I\u2019m blocking myself from being present right here and now. So much of leadership\u2019s challenges route from emotional barriers. Jack helps you unlock those and lead with love. Especially in loving yourself. I\u2019m a stronger leader because of him. You will be too.",
    shortQuote:
      "So much of leadership\u2019s challenges route from emotional barriers. Jack helps you unlock those and lead with love. I\u2019m a stronger leader because of him.",
    name: "Jared Robin",
    title: "Founder",
    contexts: ["homepage", "coaching"],
  },
  {
    id: "ryan-libby",
    quote:
      "Working with Jack as my executive coach over the past year and a half has been a game changer. I first met him in an online sales leadership community, where he stood out by offering thoughtful guidance and support on a challenge I was facing. Working with Jack has helped me grow in areas like managing up, staying accountable, and turning ideas into action. What sets Jack apart is his ability to adapt and evolve the coaching relationship as I grew. Over time, our sessions shifted from Jack providing direction to becoming a collaborative space where I bring my ideas, goals, and challenges to the table.",
    shortQuote:
      "Working with Jack has helped me grow in areas like managing up, staying accountable, and turning ideas into action. What sets him apart is his ability to adapt and evolve.",
    name: "Ryan Libby",
    title: "Clean Energy Executive",
    contexts: ["coaching"],
  },
  {
    id: "ashley-beck-cuellar",
    quote:
      "I have had a few coaches in my life, but none have been like Jack. I found him at a tender time when I was transitioning out of a company I\u2019d been with for 17 years. He has empowered me and held me accountable and helped me breathe through this season of life. When I tell people about him, I say, \u2018We start every session with a short breathing meditation,\u2019 and they instantly understand why we vibe. And I love that he has been a sales leader so when I need that sales coach to step in, he\u2019s got me. Five stars. Would highly recommend.",
    shortQuote:
      "I found him at a tender time when I was transitioning out of a company I\u2019d been with for 17 years. He has empowered me and held me accountable and helped me breathe through this season of life.",
    name: "Ashley Beck Cuellar",
    title: "Head of Expansion",
    company: "Seamless Roofing",
    contexts: ["coaching", "about"],
  },
  {
    id: "christina-hubbard",
    quote:
      "Becoming the Bridge was a truly transformative experience. Jack and Chelsea created a space that felt safe, deeply supportive, and powerfully connective from day one. Their guidance, wisdom, and authenticity set the tone for a cohort where vulnerability was welcomed, growth was inevitable, and meaningful relationships were formed across gender and generations. The structure of the program struck the perfect balance\u2014thoughtfully designed, yet flexible and easeful\u2014making the learning both impactful and sustainable. In a world that often feels chaotic, this experience gave me hope, grounded me in practices that calm my nervous system, and reminded me of the power of intentional community.",
    shortQuote:
      "Jack and Chelsea created a space that felt safe, deeply supportive, and powerfully connective from day one. Vulnerability was welcomed, growth was inevitable.",
    name: "Christina Hubbard",
    title: "RevOps Project Manager",
    contexts: ["about"],
  },
  {
    id: "jocelyn-nowak",
    quote:
      "Jack has been a spectacular Executive Coach. Coaching has supported me professionally as I have been emboldened through his support to step into a reality where my authentic self is in alignment with the version of me I present at work.",
    shortQuote:
      "Coaching has supported me professionally as I have been emboldened to step into a reality where my authentic self is in alignment with the version of me I present at work.",
    name: "Jocelyn Nowak",
    title: "Human-Centered Growth",
    contexts: ["coaching"],
  },
  {
    id: "justin-sternberg",
    quote:
      "I\u2019ve had the opportunity and pleasure to work with Jack Rosenkrantz as an executive coach. His insights and actionable feedback refined my approach towards strategic planning, improved my communication skills, and increased the value I was able to provide to my business partners. While Jack always made our work fun and light-hearted, he never shied away from addressing big challenges head on. His sense of meaning and purpose, combined with his spirited sense of adventure, helped me to realize deep insights about myself, while positively affecting outcomes in real world scenarios.",
    shortQuote:
      "His insights and actionable feedback refined my approach towards strategic planning and improved my communication skills. He never shied away from addressing big challenges head on.",
    name: "Justin Sternberg",
    title: "Entrepreneur",
    contexts: ["coaching", "about"],
  },
];

// Get testimonials for a specific page context
export function getTestimonialsForContext(
  context: TestimonialContext
): Testimonial[] {
  return testimonials.filter((t) => t.contexts.includes(context));
}

