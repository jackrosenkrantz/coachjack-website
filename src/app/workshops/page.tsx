import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteContent } from "@/lib/site-content";

const workshops = siteContent.workshops;

export const metadata: Metadata = {
  title: siteContent.meta.workshops.title,
  description: siteContent.meta.workshops.description,
};

export default function Workshops() {
  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {workshops.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">
          {workshops.hero.subheadline}
        </p>
      </Section>

      {/* Description */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {workshops.intro.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <ul className="space-y-4">
            {workshops.intro.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
                {bullet}
              </li>
            ))}
          </ul>
          <p>
            {workshops.intro.closing}
          </p>
        </div>
      </Section>

      {/* Formats */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          {workshops.formats.headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workshops.formats.items.map((item) => (
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

      {/* Past Clients */}
      <Section bg="white">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
          {workshops.clients.headline}
        </h2>
        <p className="text-stone-500 italic">
          {workshops.clients.placeholder}
        </p>
      </Section>

      {/* CTA */}
      <Section bg="sage">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
            {workshops.cta.headline}
          </h2>
          <Button href={workshops.cta.href}>{workshops.cta.label}</Button>
        </div>
      </Section>
    </>
  );
}
