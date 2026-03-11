import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import JsonLd, { createServiceSchema, createFaqSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

const coaching = siteContent.coaching;

export const metadata: Metadata = {
  title: siteContent.meta.coaching.title,
  description: siteContent.meta.coaching.description,
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: siteContent.meta.coaching.title,
    description: siteContent.meta.coaching.description,
    url: "https://coachjack.xyz/coaching",
  },
};

export default function Coaching() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "Executive Coaching — Jack Rosenkrantz",
          "Executive coaching for C-suite leaders, founders, and entrepreneurs in Phoenix, Scottsdale, and nationwide.",
          "https://coachjack.xyz/coaching"
        )}
      />
      <JsonLd data={createFaqSchema(coaching.faq.items)} />

      {/* Hero */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Coaching</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep leading-[1.1] mb-6 tracking-tight">
              {coaching.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-earth max-w-2xl leading-relaxed">
              {coaching.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Executive Coaching */}
      <Section id="executive-coaching">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
            {coaching.executiveCoaching.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-amber text-lg font-medium mb-6 font-serif italic">
            {coaching.executiveCoaching.intro}
          </p>
          <div className="space-y-6 text-earth leading-relaxed text-lg mb-10">
            {coaching.executiveCoaching.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-serif text-xl text-deep mb-4">The approach</h3>
              <ul className="space-y-3">
                {coaching.executiveCoaching.approach.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-earth text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-deep mb-4">What clients experience</h3>
              <ul className="space-y-3">
                {coaching.executiveCoaching.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-earth text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Coaching for Founders */}
      <Section bg="alt" id="founders">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
            {coaching.founders.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-amber text-lg font-medium mb-6 font-serif italic">
            {coaching.founders.intro}
          </p>
          <div className="space-y-6 text-earth leading-relaxed text-lg mb-10">
            {coaching.founders.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="space-y-3">
            {coaching.founders.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-earth">
                <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      {/* Retreats */}
      <Section id="retreats">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
            {coaching.retreats.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-earth leading-relaxed text-lg mb-8">
            {coaching.retreats.body}
          </p>
          <Button href={coaching.retreats.cta.href} variant="secondary" external>
            {coaching.retreats.cta.label}
          </Button>
        </FadeIn>
      </Section>

      {/* Investment */}
      <Section bg="alt">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl text-deep mb-4">
            {coaching.investment.headline}
          </h2>
          <p className="text-earth leading-relaxed text-lg">
            {coaching.investment.body}
          </p>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl text-deep mb-10">
            {coaching.faq.headline}
          </h2>
        </FadeIn>
        <div className="space-y-6">
          {coaching.faq.items.map((item, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="card-dark p-6 md:p-8">
                <h3 className="font-serif text-lg text-deep mb-3">
                  {item.question}
                </h3>
                <p className="text-earth leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-stone">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
              {coaching.cta.text}
            </h2>
            <Button href={coaching.cta.href}>{coaching.cta.label}</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
