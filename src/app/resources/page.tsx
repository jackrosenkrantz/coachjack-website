import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import JsonLd, { createBreadcrumbSchema } from "@/components/JsonLd";
import { resources } from "@/lib/content/resources";

export const metadata: Metadata = {
  title: "Executive Coaching Resources | Jack Rosenkrantz",
  description:
    "Guides on executive coaching: what it is, what it costs, how to choose a coach, and how it differs from therapy and life coaching.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Executive Coaching Resources | Jack Rosenkrantz",
    description:
      "Guides on executive coaching: what it is, what it costs, how to choose a coach, and how it differs from therapy and life coaching.",
    url: "https://coachjack.xyz/resources",
  },
};

export default function ResourcesHub() {
  const base = "https://coachjack.xyz";

  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: base },
          { name: "Resources", url: `${base}/resources` },
        ])}
      />

      {/* Hero */}
      <section className="hero-gradient min-h-[40vh] flex items-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Resources</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep leading-[1.1] mb-6 tracking-tight">
              Executive Coaching Resources
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-earth max-w-2xl leading-relaxed">
              Everything you need to understand executive coaching before you
              start. No jargon. No sales pitch. Just clear answers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Resource List */}
      <Section>
        <div className="max-w-3xl space-y-6">
          {resources.map((resource, i) => (
            <FadeIn key={resource.slug} delay={i * 60}>
              <Link
                href={`/resources/${resource.slug}`}
                className="card-dark p-6 md:p-8 block group hover:border-amber transition-colors"
              >
                <p className="text-warm-gray text-xs uppercase tracking-widest font-medium mb-2">
                  {resource.hero.tag}
                </p>
                <h2 className="font-serif text-xl md:text-2xl text-deep mb-3 group-hover:text-amber transition-colors">
                  {resource.hero.headline}
                </h2>
                <p className="text-earth text-sm leading-relaxed">
                  {resource.meta.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
