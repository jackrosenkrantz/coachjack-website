import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import JsonLd, { createServiceSchema, localBusinessSchema } from "@/components/JsonLd";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const cf = siteContent.coachingForFounders;

export const metadata: Metadata = {
  title: siteContent.meta.coachingForFounders.title,
  description: siteContent.meta.coachingForFounders.description,
  alternates: { canonical: "/coaching-for-founders" },
  openGraph: {
    title: siteContent.meta.coachingForFounders.title,
    description: siteContent.meta.coachingForFounders.description,
    url: "https://coachjack.xyz/coaching-for-founders",
  },
};

export default function CoachingForFounders() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "Executive Coaching for Founders & Entrepreneurs in Arizona",
          siteContent.meta.coachingForFounders.description,
          "https://coachjack.xyz/coaching-for-founders"
        )}
      />
      <JsonLd data={localBusinessSchema} />

      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {cf.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">{cf.hero.subheadline}</p>
      </Section>

      {/* Intro */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          <p className="font-serif text-xl text-charcoal-600">
            {cf.intro.opening}
          </p>
          {cf.intro.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* The Problem */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {cf.problem.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {cf.problem.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {cf.approach.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {cf.approach.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <h3 className="font-serif text-xl text-charcoal-700 pt-4">
            What we work on
          </h3>
          <ul className="space-y-4">
            {cf.approach.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Case Example */}
      <Section bg="sage">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {cf.caseExample.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed italic">
          {cf.caseExample.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
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

      {/* CTA */}
      <Section bg="cream">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-6">
            {cf.cta.text}
          </h2>
          <Button href={cf.cta.href}>{cf.cta.label}</Button>
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
              href="/life-coaching"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Life Coaching &rarr;
            </Link>
            <Link
              href="/sedona-retreats"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Sedona Retreats &rarr;
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
