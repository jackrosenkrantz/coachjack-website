import type { Metadata } from "next";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import { getAllTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.meta.testimonials.title,
  description: siteContent.meta.testimonials.description,
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
    </>
  );
}
