import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
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

      {/* Hero */}
      <section className="hero-gradient min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">For Founders</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
              {cf.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
              {cf.hero.subheadline}
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
                {cf.intro.opening}
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {cf.intro.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <FadeIn delay={200} direction="right">
              <Image
                src="/images/jack-sedona-grounded.jpg"
                alt="Jack Rosenkrantz - Coach for Founders in Arizona"
                width={800}
                height={533}
                className="rounded-softer shadow-lifted object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <FadeIn>
                <div className="w-12 h-[2px] bg-sage-500 mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-cream-100">
                  {cf.problem.headline}
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-8">
              <FadeIn delay={100}>
                <div className="space-y-6 text-stone-400 leading-relaxed text-lg">
                  {cf.problem.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <Section bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 md:sticky md:top-24">
                {cf.approach.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg mb-10">
                {cf.approach.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <h3 className="font-serif text-xl text-charcoal-700 mb-6">
                What we work on
              </h3>
              <ul className="space-y-4">
                {cf.approach.items.map((item, i) => (
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

      {/* Case Example */}
      <Section bg="white">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="accent-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-10">
              {cf.caseExample.headline}
            </h2>
            <div className="bg-sage-50 border border-sage-200/40 rounded-softer p-8 md:p-12">
              <div className="text-sage-300 text-6xl font-serif leading-none mb-4">&ldquo;</div>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg italic">
                {cf.caseExample.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials */}
      <Section bg="cream">
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

      {/* CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">Ready?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
              {cf.cta.text}
            </h2>
            <Link
              href={cf.cta.href}
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              {cf.cta.label}
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
                { href: "/life-coaching", label: "Life Coaching" },
                { href: "/sedona-retreats", label: "Sedona Retreats" },
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
