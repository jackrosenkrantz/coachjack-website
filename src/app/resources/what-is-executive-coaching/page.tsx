import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
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

      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {siteContent.resources.whatIsExecutiveCoaching.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">
          {siteContent.resources.whatIsExecutiveCoaching.hero.subheadline}
        </p>
      </Section>

      {/* Content */}
      <Section bg="white">
        <article className="max-w-3xl space-y-8 text-stone-600 leading-relaxed">
          <p>
            Executive coaching is a professional development partnership between a trained coach and a leader\u2014typically a C-suite executive, VP, director, or founder. Unlike consulting (which provides answers) or mentoring (which shares experience), coaching draws out the leader&apos;s own insight, awareness, and capacity for growth.
          </p>
          <p>
            The best way to understand executive coaching is to forget what you think it is. It&apos;s not someone telling you what to do. It&apos;s not motivational speaking in a private room. And it&apos;s not therapy, though the line can blur in the best engagements.
          </p>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            What executive coaching isn&apos;t
          </h2>
          <p>
            Executive coaching isn&apos;t advice-giving. A good coach doesn&apos;t tell you what to do\u2014they help you see what you already know but haven&apos;t been able to access. It&apos;s not therapy, though it may touch on personal patterns that affect your leadership. And it&apos;s not a performance improvement plan in disguise\u2014though it may dramatically improve performance as a byproduct.
          </p>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            Who hires an executive coach
          </h2>
          <p>
            Executive coaching used to be reserved for leaders who were &quot;in trouble.&quot; Today, it&apos;s the opposite. The leaders most likely to seek coaching are high-performers who recognize that the next level of their leadership requires a different kind of work.
          </p>
          <p>Common scenarios include:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Founders scaling from startup to established company and needing to evolve their leadership style
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Executives stepping into bigger roles who want to show up differently than they did at the last level
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Senior leaders navigating complex organizational dynamics, mergers, or major transitions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              High-achievers who have the success but feel the cost\u2014burnout, disconnection, or the nagging sense that something is off
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            What a typical engagement looks like
          </h2>
          <p>
            While every coach structures engagements differently, most executive coaching follows a similar arc:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Discovery:</strong> An initial conversation to explore goals, challenges, and fit. This is mutual\u2014both coach and client need to feel the alignment.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Assessment:</strong> A deep intake to understand the leader&apos;s landscape. Some coaches use formal assessments; others rely on conversation and observation.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Ongoing sessions:</strong> Regular meetings (typically bi-weekly) where the real work happens. Sessions might address specific challenges, explore patterns, or go deeper into leadership identity.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Integration:</strong> The work between sessions matters as much as the sessions themselves. Good coaching builds capacity that outlasts the engagement.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            Benefits and ROI of executive coaching
          </h2>
          <p>
            The returns on executive coaching show up in ways both measurable and intangible. Leaders consistently report clearer decision-making, stronger relationships with their teams, greater composure under pressure, and a leadership style that feels authentic rather than performed.
          </p>
          <p>
            Organizations see the benefits too: improved retention, stronger team culture, better cross-functional collaboration, and leaders who can hold more complexity without burning out.
          </p>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            How to choose the right executive coach
          </h2>
          <p>
            Choosing a coach is a deeply personal decision. Credentials matter, but chemistry matters more. Look for someone whose approach resonates with how you learn and grow. Ask about their methodology. Have a real conversation before committing.
          </p>
          <p>Key things to consider:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Do they have experience with leaders at your level and in your context?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              What&apos;s their coaching philosophy\u2014not just their credentials, but how they actually work?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Can they meet you where you are, or do they have a one-size-fits-all program?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Does the conversation feel like a genuine exchange, or like a sales pitch?
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            Executive coaching in Phoenix and Arizona
          </h2>
          <p>
            If you&apos;re considering executive coaching in Phoenix, Scottsdale, or anywhere in Arizona, you have access to a growing community of experienced coaches. The Valley has become home to a diverse business landscape\u2014tech startups, established enterprises, and entrepreneurial founders\u2014creating demand for coaching that goes beyond generic leadership development.
          </p>
          <p>
            The best coaches in this market integrate deep professional experience with approaches that address the whole person\u2014not just the leader in the conference room, but the human carrying the weight of leadership in their body.
          </p>
        </article>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          Frequently asked questions
        </h2>
        <div className="max-w-3xl space-y-8">
          {faqItems.map((item, i) => (
            <div key={i}>
              <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                {item.question}
              </h3>
              <p className="text-stone-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="sage">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-charcoal-700 mb-4">
            Considering executive coaching?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            If you&apos;re exploring coaching, start with a conversation. No pitch, no pressure\u2014just a real exchange to see if this work is right for you.
          </p>
          <Button href="/contact">Book a Call</Button>
        </div>
      </Section>

      {/* Internal Links */}
      <Section bg="white">
        <div className="max-w-3xl text-stone-600">
          <p className="mb-4">Continue exploring:</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/executive-coaching"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Executive Coaching with Jack &rarr;
            </Link>
            <Link
              href="/resources/executive-coaching-cost"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Executive Coaching Cost Guide &rarr;
            </Link>
            <Link
              href="/about"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              About Jack &rarr;
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
