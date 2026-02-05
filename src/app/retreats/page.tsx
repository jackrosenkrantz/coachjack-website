import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteContent } from "@/lib/site-content";

const retreats = siteContent.retreats;

export const metadata: Metadata = {
  title: siteContent.meta.retreats.title,
  description: siteContent.meta.retreats.description,
};

export default function Retreats() {
  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {retreats.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">
          {retreats.hero.subheadline}
        </p>
      </Section>

      {/* Description */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {retreats.intro.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Upcoming */}
      <Section bg="sage">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {retreats.upcoming.headline}
        </h2>
        <div className="bg-white border border-stone-200/60 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest text-terracotta-600 font-medium">
              {retreats.upcoming.event.label}
            </span>
          </div>
          <h3 className="font-serif text-2xl text-charcoal-700 mb-3">
            {retreats.upcoming.event.title}
          </h3>
          <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
            {retreats.upcoming.event.description}
          </p>
          <Button href={retreats.upcoming.event.cta.href}>
            {retreats.upcoming.event.cta.label}
          </Button>
        </div>
      </Section>

      {/* What Happens */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {retreats.whatHappens.headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {retreats.whatHappens.items.map((item) => (
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

      {/* CTA */}
      <Section bg="white">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
            {retreats.cta.headline}
          </h2>
          <Button
            href={retreats.cta.href}
            external
            variant="secondary"
          >
            {retreats.cta.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
