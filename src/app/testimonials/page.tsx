import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import { getAllTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.meta.testimonials.title,
  description: siteContent.meta.testimonials.description,
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: siteContent.meta.testimonials.title,
    description: siteContent.meta.testimonials.description,
    url: "https://coachjack.xyz/testimonials",
  },
};

export default function Testimonials() {
  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {siteContent.testimonials.hero.headline}
        </h1>
      </Section>

      {/* Testimonials */}
      <Section bg="white">
        <div className="grid grid-cols-1 gap-8">
          {getAllTestimonials().map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="sage">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-charcoal-700 mb-6">
            Ready to start your own journey?
          </h2>
          <Button href="/contact">Book a Call</Button>
        </div>
      </Section>

      {/* Internal Links */}
      <Section bg="cream">
        <div className="max-w-3xl text-stone-600">
          <p className="mb-4">Explore coaching options:</p>
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
