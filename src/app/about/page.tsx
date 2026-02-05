import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteContent } from "@/lib/site-content";

const about = siteContent.about;

export const metadata: Metadata = {
  title: siteContent.meta.about.title,
  description: siteContent.meta.about.description,
};

export default function About() {
  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-6">
          {about.hero.headline}
        </h1>
      </Section>

      {/* The Wound */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {about.wound.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* The Awakening */}
      <Section bg="cream">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {about.awakening.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* The Work */}
      <Section bg="white">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-8">
          {about.work.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {about.work.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p className="font-medium text-charcoal-600">{about.work.approachLabel}</p>
          <ul className="space-y-3 text-stone-600">
            {about.work.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {bullet}
              </li>
            ))}
          </ul>
          <p className="font-serif text-xl text-charcoal-600 pt-4">
            {about.work.closing}
          </p>
        </div>
      </Section>

      {/* Credentials */}
      <Section bg="sage">
        <h2 className="font-serif text-2xl text-charcoal-700 mb-6">
          {about.credentials.headline}
        </h2>
        <div className="max-w-3xl space-y-3 text-stone-600">
          <ul className="space-y-2">
            {about.credentials.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="italic pt-2">{about.credentials.personal}</p>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="cream">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-6">
            {about.cta.text}
          </h2>
          <Button href={about.cta.href}>{about.cta.label}</Button>
        </div>
      </Section>
    </>
  );
}
