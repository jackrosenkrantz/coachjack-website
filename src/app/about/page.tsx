import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import JsonLd, { personSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

const about = siteContent.about;

export const metadata: Metadata = {
  title: siteContent.meta.about.title,
  description: siteContent.meta.about.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: siteContent.meta.about.title,
    description: siteContent.meta.about.description,
    url: "https://coachjack.xyz/about",
  },
};

export default function About() {
  return (
    <>
      <JsonLd data={personSchema} />

      {/* Hero */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <FadeIn delay={0}>
                <span className="tag mb-8 inline-block">About Jack</span>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] tracking-tight">
                  {about.hero.headline}
                </h1>
              </FadeIn>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <FadeIn delay={200} direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-sage-200/20 rounded-softer rotate-2" />
                  <Image
                    src="/images/jack-headshot.jpg"
                    alt="Jack Rosenkrantz - Executive Coach"
                    width={500}
                    height={750}
                    className="relative rounded-softer shadow-lifted object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* The Wound */}
      <Section bg="white">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              {about.wound.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* The Awakening */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 hidden md:block">
              <FadeIn direction="left">
                <Image
                  src="/images/jack-heart.jpg"
                  alt="Jack Rosenkrantz in meditation, Sedona Arizona"
                  width={800}
                  height={533}
                  className="rounded-softer shadow-lifted object-cover"
                />
              </FadeIn>
            </div>
            <div className="md:col-span-7">
              <FadeIn>
                <div className="w-12 h-[2px] bg-sage-500 mb-8" />
              </FadeIn>
              <FadeIn delay={100}>
                <div className="space-y-6 text-stone-400 leading-relaxed text-lg">
                  {about.awakening.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* The Work */}
      <Section bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 md:sticky md:top-24">
                {about.work.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {about.work.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <p className="font-medium text-charcoal-600 mt-8 mb-4 text-lg">
                {about.work.approachLabel}
              </p>
              <ul className="space-y-4 mb-8">
                {about.work.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-600">
                    <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="font-serif text-2xl text-charcoal-600 leading-relaxed">
                {about.work.closing}
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section bg="white">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 mb-8">
              {about.credentials.headline}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {about.credentials.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream-100 border border-stone-200/60 rounded-softer p-5">
                  <span className="w-6 h-6 rounded-full bg-sage-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-8" stroke="var(--color-sage-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-stone-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="italic text-stone-500 text-lg leading-relaxed">
              {about.credentials.personal}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Work Together Links */}
      <Section bg="cream">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 mb-8">
              Work with Jack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/executive-coaching", label: "Executive Coaching", desc: "For C-suite leaders and senior executives" },
                { href: "/life-coaching", label: "Life Coaching", desc: "For professionals navigating personal transformation" },
                { href: "/coaching-for-founders", label: "Coaching for Founders", desc: "For entrepreneurs scaling without losing themselves" },
                { href: "/sedona-retreats", label: "Sedona Retreats", desc: "Immersive leadership retreats in the red rocks" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block bg-white border border-stone-200/60 rounded-softer p-6 hover:shadow-soft hover:border-sage-300 transition-all duration-300"
                >
                  <h3 className="font-serif text-lg text-charcoal-700 mb-1 group-hover:text-sage-700 transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-stone-500 text-sm mb-3">{link.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sage-600 text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">Ready?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
              {about.cta.text}
            </h2>
            <Link
              href={about.cta.href}
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              {about.cta.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
