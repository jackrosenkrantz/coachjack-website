import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import JsonLd, {
  createServiceSchema,
  createFaqSchema,
  localBusinessSchema,
} from "@/components/JsonLd";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const lc = siteContent.lifeCoaching;

export const metadata: Metadata = {
  title: siteContent.meta.lifeCoaching.title,
  description: siteContent.meta.lifeCoaching.description,
  alternates: { canonical: "/life-coaching" },
  openGraph: {
    title: siteContent.meta.lifeCoaching.title,
    description: siteContent.meta.lifeCoaching.description,
    url: "https://coachjack.xyz/life-coaching",
  },
};

export default function LifeCoaching() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "Life Coaching in Phoenix & Scottsdale",
          siteContent.meta.lifeCoaching.description,
          "https://coachjack.xyz/life-coaching"
        )}
      />
      <JsonLd data={createFaqSchema(lc.faq.items)} />
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="hero-gradient min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 40% 50%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Life Coaching</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
              {lc.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
              {lc.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <Section bg="white">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="font-serif text-2xl text-charcoal-600 leading-relaxed mb-8">
              {lc.intro.opening}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              {lc.intro.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Approach */}
      <Section bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 md:sticky md:top-24">
                {lc.approach.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {lc.approach.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* What We Work On */}
      <Section bg="white" wide>
        <FadeIn>
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700">
              {lc.whatWeWorkOn.headline}
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lc.whatWeWorkOn.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="bg-cream-100 border border-stone-200/60 rounded-softer p-8 hover:shadow-soft transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-sage-500" />
                </div>
                <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section bg="cream">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-12">
            {lc.process.headline}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lc.process.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="bg-white border border-stone-200/60 rounded-softer p-8 md:p-10 hover:shadow-soft transition-all duration-300">
                <div className="number-accent mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium">
              What clients say
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFeaturedTestimonials()
            .slice(0, 2)
            .map((t, i) => (
              <FadeIn key={t.id} delay={i * 100}>
                <TestimonialCard testimonial={t} compact />
              </FadeIn>
            ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-10">
            {lc.faq.headline}
          </h2>
        </FadeIn>
        <div className="max-w-3xl space-y-8">
          {lc.faq.items.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="quote-accent">
                <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                  {item.question}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">Ready?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
              {lc.cta.text}
            </h2>
            <Link
              href={lc.cta.href}
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              {lc.cta.label}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <Section bg="cream">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium mb-6">
              Explore more
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: "/executive-coaching", label: "Executive Coaching" },
                { href: "/coaching-for-founders", label: "Coaching for Founders" },
                { href: "/about", label: "About Jack" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
