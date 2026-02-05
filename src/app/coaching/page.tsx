import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const coaching = siteContent.coaching;

export const metadata: Metadata = {
  title: siteContent.meta.coaching.title,
  description: siteContent.meta.coaching.description,
};

export default function Coaching() {
  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {coaching.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">
          {coaching.hero.subheadline}
        </p>
      </Section>

      {/* Description */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          <p className="font-serif text-xl text-charcoal-600">
            {coaching.intro.opening}
          </p>
          <p>
            {coaching.intro.body}
          </p>
          <ul className="space-y-4">
            {coaching.intro.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {bullet}
              </li>
            ))}
          </ul>
          <p>
            {coaching.intro.closing}
          </p>
        </div>
      </Section>

      {/* What to Expect */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {coaching.whatToExpect.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coaching.whatToExpect.items.map((item) => (
            <div key={item.title} className="bg-white border border-stone-200/60 p-8">
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

      {/* Who This Is For */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {coaching.whoItsFor.headline}
        </h2>
        <div className="max-w-3xl space-y-4 text-stone-600 leading-relaxed">
          <ul className="space-y-4">
            {coaching.whoItsFor.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Investment */}
      <Section bg="sage">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
          {coaching.investment.headline}
        </h2>
        <p className="text-stone-600 leading-relaxed max-w-3xl mb-8">
          {coaching.investment.body}
        </p>
        <Button href={coaching.investment.cta.href}>
          {coaching.investment.cta.label}
        </Button>
      </Section>

      {/* Testimonials */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-10 text-center">
          {siteContent.testimonials.hero.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFeaturedTestimonials().slice(0, 2).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} compact />
          ))}
        </div>
      </Section>
    </>
  );
}
