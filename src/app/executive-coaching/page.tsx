import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import JsonLd, {
  createServiceSchema,
  createFaqSchema,
  localBusinessSchema,
} from "@/components/JsonLd";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const ec = siteContent.executiveCoaching;

export const metadata: Metadata = {
  title: siteContent.meta.executiveCoaching.title,
  description: siteContent.meta.executiveCoaching.description,
  alternates: { canonical: "/executive-coaching" },
  openGraph: {
    title: siteContent.meta.executiveCoaching.title,
    description: siteContent.meta.executiveCoaching.description,
    url: "https://coachjack.xyz/executive-coaching",
  },
};

export default function ExecutiveCoaching() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "Executive Coaching in Phoenix & Scottsdale",
          siteContent.meta.executiveCoaching.description,
          "https://coachjack.xyz/executive-coaching"
        )}
      />
      <JsonLd data={createFaqSchema(ec.faq.items)} />
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="hero-gradient min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Executive Coaching</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
              {ec.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
              {ec.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <FadeIn>
              <p className="font-serif text-2xl text-charcoal-600 leading-relaxed mb-8">
                {ec.intro.opening}
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {ec.intro.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <FadeIn delay={200} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage-200/20 rounded-softer rotate-2" />
                <Image
                  src="/images/jack-chair.jpg"
                  alt="Jack Rosenkrantz - Executive Coach in Sedona"
                  width={600}
                  height={750}
                  className="relative rounded-softer shadow-lifted object-cover w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 md:sticky md:top-24">
                {ec.approach.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg mb-10">
                {ec.approach.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <h3 className="font-serif text-xl text-charcoal-700 mb-6">
                What we work on
              </h3>
              <ul className="space-y-4">
                {ec.approach.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-600">
                    <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700">
              {ec.process.headline}
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ec.process.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="bg-cream-100 border border-stone-200/60 rounded-softer p-8 md:p-10 hover:shadow-soft transition-all duration-300">
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

      {/* Who It's For */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="w-12 h-[2px] bg-sage-500 mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-10">
              {ec.whoItsFor.headline}
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <ul className="space-y-5">
              {ec.whoItsFor.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-stone-400">
                  <span className="w-6 h-6 rounded-full bg-sage-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Outcomes */}
      <Section bg="cream">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-10">
            {ec.outcomes.headline}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ec.outcomes.items.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="flex items-start gap-4 bg-white border border-stone-200/60 rounded-softer p-6">
                <span className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l4 4 6-8" stroke="var(--color-sage-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-stone-600">{item}</span>
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
            {ec.faq.headline}
          </h2>
        </FadeIn>
        <div className="max-w-3xl space-y-8">
          {ec.faq.items.map((item, i) => (
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

      {/* Investment + CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">
              Investment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
              {ec.investment.headline}
            </h2>
            <p className="text-sage-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              {ec.investment.body}
            </p>
            <Link
              href={ec.investment.cta.href}
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              {ec.investment.cta.label}
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
                { href: "/life-coaching", label: "Life Coaching" },
                { href: "/coaching-for-founders", label: "Coaching for Founders" },
                { href: "/sedona-retreats", label: "Sedona Retreats" },
                { href: "/resources/what-is-executive-coaching", label: "What Is Executive Coaching?" },
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
