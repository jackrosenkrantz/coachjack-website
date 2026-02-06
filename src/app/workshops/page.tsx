import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteContent } from "@/lib/site-content";

const workshops = siteContent.workshops;

export const metadata: Metadata = {
  title: siteContent.meta.workshops.title,
  description: siteContent.meta.workshops.description,
  alternates: { canonical: "/workshops" },
};

export default function Workshops() {
  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {workshops.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">{workshops.hero.subheadline}</p>
      </Section>

      {/* Body */}
      <Section bg="white">
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {workshops.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="pt-4">
            <Button href={workshops.cta.href} external>
              {workshops.cta.label}
            </Button>
          </div>
        </div>
      </Section>

      {/* Internal Links */}
      <Section bg="cream">
        <div className="max-w-3xl text-stone-600">
          <p className="mb-4">
            Looking for 1:1 work? Explore coaching options:
          </p>
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
          </div>
        </div>
      </Section>
    </>
  );
}
