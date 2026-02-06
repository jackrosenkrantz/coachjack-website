import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import JsonLd, {
  createServiceSchema,
  createFaqSchema,
  localBusinessSchema,
} from "@/components/JsonLd";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const ec = siteContent.executiveCoaching;

export const metadata: Metadata = {
  title: siteContent.meta.executiveCoaching.title,
  description: siteContent.meta.executiveCoaching.description,
  alternates: { canonical: "/executive-coaching" },
  openGraph: {
    title: siteContent.meta.executiveCoaching.title,
    description: siteContent.meta.executiveCoaching.description,
    url: "https://coachjack.xyz/executive-coaching",
  },
};

export default function ExecutiveCoaching() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "Executive Coaching in Phoenix & Scottsdale",
          siteContent.meta.executiveCoaching.description,
          "https://coachjack.xyz/executive-coaching"
        )}
      />
      <JsonLd data={createFaqSchema(ec.faq.items)} />
      <JsonLd data={localBusinessSchema} />

      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {ec.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">{ec.hero.subheadline}</p>
      </Section>

      {/* Intro */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          <p className="font-serif text-xl text-charcoal-600">
            {ec.intro.opening}
          </p>
          {ec.intro.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {ec.approach.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {ec.approach.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <h3 className="font-serif text-xl text-charcoal-700 pt-4">
            What we work on
          </h3>
          <ul className="space-y-4">
            {ec.approach.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {ec.process.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ec.process.items.map((item) => (
            <div
              key={item.title}
              className="bg-cream-100 border border-stone-200/60 p-8"
            >
              <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who It's For */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {ec.whoItsFor.headline}
        </h2>
        <div className="max-w-3xl space-y-4 text-stone-600 leading-relaxed">
          <ul className="space-y-4">
            {ec.whoItsFor.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Outcomes */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {ec.outcomes.headline}
        </h2>
        <div className="max-w-3xl space-y-4 text-stone-600 leading-relaxed">
          <ul className="space-y-4">
            {ec.outcomes.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-10 text-center">
          {siteContent.testimonials.hero.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFeaturedTestimonials()
            .slice(0, 2)
            .map((t) => (
              <TestimonialCard key={t.id} testimonial={t} compact />
            ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {ec.faq.headline}
        </h2>
        <div className="max-w-3xl space-y-8">
          {ec.faq.items.map((item, i) => (
            <div key={i}>
              <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                {item.question}
              </h3>
              <p className="text-stone-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investment + CTA */}
      <Section bg="sage">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
          {ec.investment.headline}
        </h2>
        <p className="text-stone-600 leading-relaxed max-w-3xl mb-8">
          {ec.investment.body}
        </p>
        <Button href={ec.investment.cta.href}>{ec.investment.cta.label}</Button>
      </Section>

      {/* Internal Links */}
      <Section bg="cream">
        <div className="max-w-3xl text-stone-600">
          <p className="mb-4">
            Explore other ways to work together:
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/life-coaching"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Life Coaching &rarr;
            </Link>
            <Link
              href="/coaching-for-founders"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Coaching for Founders &rarr;
            </Link>
            <Link
              href="/sedona-retreats"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Sedona Retreats &rarr;
            </Link>
            <Link
              href="/resources/what-is-executive-coaching"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              What Is Executive Coaching? &rarr;
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
