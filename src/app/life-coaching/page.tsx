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

const lc = siteContent.lifeCoaching;

export const metadata: Metadata = {
  title: siteContent.meta.lifeCoaching.title,
  description: siteContent.meta.lifeCoaching.description,
  alternates: { canonical: "/life-coaching" },
  openGraph: {
    title: siteContent.meta.lifeCoaching.title,
    description: siteContent.meta.lifeCoaching.description,
    url: "https://coachjack.xyz/life-coaching",
  },
};

export default function LifeCoaching() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "Life Coaching in Phoenix & Scottsdale",
          siteContent.meta.lifeCoaching.description,
          "https://coachjack.xyz/life-coaching"
        )}
      />
      <JsonLd data={createFaqSchema(lc.faq.items)} />
      <JsonLd data={localBusinessSchema} />

      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {lc.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">{lc.hero.subheadline}</p>
      </Section>

      {/* Intro */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          <p className="font-serif text-xl text-charcoal-600">
            {lc.intro.opening}
          </p>
          {lc.intro.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {lc.approach.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {lc.approach.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* What We Work On */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {lc.whatWeWorkOn.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lc.whatWeWorkOn.items.map((item) => (
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

      {/* Process */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {lc.process.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lc.process.items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-stone-200/60 p-8"
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

      {/* Testimonials */}
      <Section bg="white">
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
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {lc.faq.headline}
        </h2>
        <div className="max-w-3xl space-y-8">
          {lc.faq.items.map((item, i) => (
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
          <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
            {lc.cta.text}
          </h2>
          <Button href={lc.cta.href}>{lc.cta.label}</Button>
        </div>
      </Section>

      {/* Internal Links */}
      <Section bg="cream">
        <div className="max-w-3xl text-stone-600">
          <p className="mb-4">Explore other ways to work together:</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/executive-coaching"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Executive Coaching &rarr;
            </Link>
            <Link
              href="/coaching-for-founders"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Coaching for Founders &rarr;
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
