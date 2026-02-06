import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import JsonLd, { createServiceSchema, localBusinessSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

const sr = siteContent.sedonaRetreats;

export const metadata: Metadata = {
  title: siteContent.meta.sedonaRetreats.title,
  description: siteContent.meta.sedonaRetreats.description,
  alternates: { canonical: "/sedona-retreats" },
  openGraph: {
    title: siteContent.meta.sedonaRetreats.title,
    description: siteContent.meta.sedonaRetreats.description,
    url: "https://coachjack.xyz/sedona-retreats",
  },
};

const sedonaServiceSchema = {
  ...createServiceSchema(
    "Executive & Leadership Retreats in Sedona, Arizona",
    siteContent.meta.sedonaRetreats.description,
    "https://coachjack.xyz/sedona-retreats"
  ),
  "@type": ["Service", "TouristAttraction"],
};

export default function SedonaRetreats() {
  return (
    <>
      <JsonLd data={sedonaServiceSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {sr.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">{sr.hero.subheadline}</p>
      </Section>

      {/* Why Sedona */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {sr.whySedona.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {sr.whySedona.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* What to Expect */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
          {sr.whatToExpect.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed mb-8">
          {sr.whatToExpect.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sr.whatToExpect.items.map((item) => (
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

      {/* Who It's For */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {sr.whoItsFor.headline}
        </h2>
        <div className="max-w-3xl space-y-4 text-stone-600 leading-relaxed">
          <ul className="space-y-4">
            {sr.whoItsFor.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* BTB */}
      <Section bg="sage">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
          {sr.btb.headline}
        </h2>
        <p className="text-stone-600 leading-relaxed max-w-3xl mb-8">
          {sr.btb.body}
        </p>
        <Button href={sr.btb.cta.href} external variant="secondary">
          {sr.btb.cta.label}
        </Button>
      </Section>

      {/* Logistics */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {sr.logistics.headline}
        </h2>
        <div className="max-w-3xl space-y-3 text-stone-600">
          <ul className="space-y-3">
            {sr.logistics.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="cream">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-6">
            {sr.cta.text}
          </h2>
          <Button href={sr.cta.href}>{sr.cta.label}</Button>
        </div>
      </Section>

      {/* Internal Links */}
      <Section bg="white">
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
            <Link
              href="/contact"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
