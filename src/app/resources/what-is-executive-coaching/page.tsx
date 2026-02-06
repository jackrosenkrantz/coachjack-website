import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import JsonLd, { createArticleSchema, createFaqSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.meta.whatIsExecutiveCoaching.title,
  description: siteContent.meta.whatIsExecutiveCoaching.description,
  alternates: { canonical: "/resources/what-is-executive-coaching" },
  openGraph: {
    title: siteContent.meta.whatIsExecutiveCoaching.title,
    description: siteContent.meta.whatIsExecutiveCoaching.description,
    url: "https://coachjack.xyz/resources/what-is-executive-coaching",
  },
};

const faqItems = [
  {
    question: "Is executive coaching the same as therapy?",
    answer:
      "No. Therapy focuses on healing past experiences and diagnosing conditions. Executive coaching is forward-focused\u2014working with leaders on their current challenges and future goals. While coaching may touch on personal patterns, it\u2019s always in service of leadership growth and professional performance.",
  },
  {
    question: "How long does a typical executive coaching engagement last?",
    answer:
      "Most engagements last 3\u20136 months, though some continue for a year or longer. The duration depends on the client\u2019s goals, the depth of the work, and the pace of transformation. Short-term engagements are possible for specific challenges.",
  },
  {
    question: "Can executive coaching be done remotely?",
    answer:
      "Yes. Most executive coaching happens over video calls, making it accessible regardless of location. Some coaches, including those based in Phoenix and Scottsdale, also offer in-person sessions for local clients.",
  },
  {
    question: "Who pays for executive coaching?",
    answer:
      "It varies. Some leaders are sponsored by their organizations. Others invest personally. Both models work\u2014what matters is that the leader is genuinely committed to the process, not just going through the motions.",
  },
  {
    question: "What\u2019s the ROI of executive coaching?",
    answer:
      "Studies consistently show significant ROI from executive coaching. The ICF reports that 86% of companies that invested in coaching saw a positive return. Benefits include better decision-making, stronger leadership presence, improved team performance, and reduced burnout\u2014outcomes that compound over time.",
  },
];

export default function WhatIsExecutiveCoaching() {
  return (
    <>
      <JsonLd
        data={createArticleSchema(
          "What Is Executive Coaching? A Complete Guide",
          siteContent.meta.whatIsExecutiveCoaching.description,
          "https://coachjack.xyz/resources/what-is-executive-coaching"
        )}
      />
      <JsonLd data={createFaqSchema(faqItems)} />

      {/* Hero */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Resource Guide</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
              {siteContent.resources.whatIsExecutiveCoaching.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
              {siteContent.resources.whatIsExecutiveCoaching.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <Section bg="white">
        <FadeIn>
          <article className="max-w-3xl space-y-8 text-stone-600 leading-relaxed text-lg">
            <p>
              Executive coaching is a professional development partnership between a trained coach and a leader&mdash;typically a C-suite executive, VP, director, or founder. Unlike consulting (which provides answers) or mentoring (which shares experience), coaching draws out the leader&apos;s own insight, awareness, and capacity for growth.
            </p>
            <p>
              The best way to understand executive coaching is to forget what you think it is. It&apos;s not someone telling you what to do. It&apos;s not motivational speaking in a private room. And it&apos;s not therapy, though the line can blur in the best engagements.
            </p>

            <div className="accent-line my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              What executive coaching isn&apos;t
            </h2>
            <p>
              Executive coaching isn&apos;t advice-giving. A good coach doesn&apos;t tell you what to do&mdash;they help you see what you already know but haven&apos;t been able to access. It&apos;s not therapy, though it may touch on personal patterns that affect your leadership. And it&apos;s not a performance improvement plan in disguise&mdash;though it may dramatically improve performance as a byproduct.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              Who hires an executive coach
            </h2>
            <p>
              Executive coaching used to be reserved for leaders who were &quot;in trouble.&quot; Today, it&apos;s the opposite. The leaders most likely to seek coaching are high-performers who recognize that the next level of their leadership requires a different kind of work.
            </p>
            <p>Common scenarios include:</p>
            <ul className="space-y-4">
              {[
                "Founders scaling from startup to established company and needing to evolve their leadership style",
                "Executives stepping into bigger roles who want to show up differently than they did at the last level",
                "Senior leaders navigating complex organizational dynamics, mergers, or major transitions",
                "High-achievers who have the success but feel the cost\u2014burnout, disconnection, or the nagging sense that something is off",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              What a typical engagement looks like
            </h2>
            <p>
              While every coach structures engagements differently, most executive coaching follows a similar arc:
            </p>
            <ul className="space-y-4">
              {[
                { label: "Discovery:", text: "An initial conversation to explore goals, challenges, and fit. This is mutual\u2014both coach and client need to feel the alignment." },
                { label: "Assessment:", text: "A deep intake to understand the leader\u2019s landscape. Some coaches use formal assessments; others rely on conversation and observation." },
                { label: "Ongoing sessions:", text: "Regular meetings (typically bi-weekly) where the real work happens. Sessions might address specific challenges, explore patterns, or go deeper into leadership identity." },
                { label: "Integration:", text: "The work between sessions matters as much as the sessions themselves. Good coaching builds capacity that outlasts the engagement." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                  </span>
                  <span><strong>{item.label}</strong> {item.text}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              Benefits and ROI of executive coaching
            </h2>
            <p>
              The returns on executive coaching show up in ways both measurable and intangible. Leaders consistently report clearer decision-making, stronger relationships with their teams, greater composure under pressure, and a leadership style that feels authentic rather than performed.
            </p>
            <p>
              Organizations see the benefits too: improved retention, stronger team culture, better cross-functional collaboration, and leaders who can hold more complexity without burning out.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              How to choose the right executive coach
            </h2>
            <p>
              Choosing a coach is a deeply personal decision. Credentials matter, but chemistry matters more. Look for someone whose approach resonates with how you learn and grow. Ask about their methodology. Have a real conversation before committing.
            </p>
            <p>Key things to consider:</p>
            <ul className="space-y-4">
              {[
                "Do they have experience with leaders at your level and in your context?",
                "What\u2019s their coaching philosophy\u2014not just their credentials, but how they actually work?",
                "Can they meet you where you are, or do they have a one-size-fits-all program?",
                "Does the conversation feel like a genuine exchange, or like a sales pitch?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              Executive coaching in Phoenix and Arizona
            </h2>
            <p>
              If you&apos;re considering executive coaching in Phoenix, Scottsdale, or anywhere in Arizona, you have access to a growing community of experienced coaches. The Valley has become home to a diverse business landscape&mdash;tech startups, established enterprises, and entrepreneurial founders&mdash;creating demand for coaching that goes beyond generic leadership development.
            </p>
            <p>
              The best coaches in this market integrate deep professional experience with approaches that address the whole person&mdash;not just the leader in the conference room, but the human carrying the weight of leadership in their body.
            </p>
          </article>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-10">
            Frequently asked questions
          </h2>
        </FadeIn>
        <div className="max-w-3xl space-y-8">
          {faqItems.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="quote-accent">
                <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                  {item.question}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">Next step</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
              Considering executive coaching?
            </h2>
            <p className="text-sage-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              If you&apos;re exploring coaching, start with a conversation. No pitch, no pressure&mdash;just a real exchange to see if this work is right for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              Book a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <Section bg="cream">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium mb-6">
              Continue exploring
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: "/executive-coaching", label: "Executive Coaching with Jack" },
                { href: "/resources/executive-coaching-cost", label: "Executive Coaching Cost Guide" },
                { href: "/about", label: "About Jack" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
