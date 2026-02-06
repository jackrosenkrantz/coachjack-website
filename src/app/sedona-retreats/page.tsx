import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import JsonLd, { createServiceSchema, localBusinessSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

const sr = siteContent.sedonaRetreats;

export const metadata: Metadata = {
  title: siteContent.meta.sedonaRetreats.title,
  description: siteContent.meta.sedonaRetreats.description,
  alternates: { canonical: "/sedona-retreats" },
  openGraph: {
    title: siteContent.meta.sedonaRetreats.title,
    description: siteContent.meta.sedonaRetreats.description,
    url: "https://coachjack.xyz/sedona-retreats",
  },
};

const sedonaServiceSchema = {
  ...createServiceSchema(
    "Executive & Leadership Retreats in Sedona, Arizona",
    siteContent.meta.sedonaRetreats.description,
    "https://coachjack.xyz/sedona-retreats"
  ),
  "@type": ["Service", "TouristAttraction"],
};

export default function SedonaRetreats() {
  return (
    <>
      <JsonLd data={sedonaServiceSchema} />
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="hero-gradient min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 60%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <FadeIn delay={0}>
                <span className="tag mb-8 inline-block">Sedona Retreats</span>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
                  {sr.hero.headline}
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
                  {sr.hero.subheadline}
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <FadeIn delay={200} direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-sage-200/20 rounded-softer rotate-2" />
                  <Image
                    src="/images/retreat-meditation-wide.jpg"
                    alt="Group meditation at Sedona leadership retreat"
                    width={600}
                    height={900}
                    className="relative rounded-softer shadow-lifted object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sedona */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-3 bg-sage-200/20 rounded-softer -rotate-2" />
                <Image
                  src="/images/retreat-leading-meditation.jpg"
                  alt="Jack Rosenkrantz leading a guided meditation at Sedona retreat"
                  width={800}
                  height={533}
                  className="relative rounded-softer shadow-lifted object-cover"
                />
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-8">
                {sr.whySedona.headline}
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {sr.whySedona.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-6">
                {sr.whatToExpect.headline}
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {sr.whatToExpect.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <FadeIn delay={200} direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-sage-200/20 rounded-softer -rotate-2" />
                <Image
                  src="/images/retreat-group-meditation.jpg"
                  alt="Retreat participants in group meditation session"
                  width={600}
                  height={900}
                  className="relative rounded-softer shadow-lifted object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sr.whatToExpect.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className="bg-white border border-stone-200/60 rounded-softer p-8 hover:shadow-soft transition-all duration-300 h-full">
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 hidden md:block">
              <FadeIn direction="left">
                <Image
                  src="/images/retreat-writing-sepia.jpg"
                  alt="Retreat participant writing reflections on wall during breakout session"
                  width={600}
                  height={900}
                  className="rounded-softer shadow-lifted object-cover"
                />
              </FadeIn>
            </div>
            <div className="md:col-span-7">
              <FadeIn>
                <div className="w-12 h-[2px] bg-sage-500 mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-10">
                  {sr.whoItsFor.headline}
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <ul className="space-y-5">
                  {sr.whoItsFor.items.map((item, i) => (
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
          </div>
        </div>
      </section>

      {/* BTB */}
      <Section bg="white">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-6">
              {sr.btb.headline}
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg mb-8">
              {sr.btb.body}
            </p>
            <Button href={sr.btb.cta.href} external variant="secondary">
              {sr.btb.cta.label}
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Logistics */}
      <Section bg="cream">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-10">
            {sr.logistics.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sr.logistics.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-stone-200/60 rounded-softer p-5">
                <span className="w-6 h-6 rounded-full bg-sage-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                </span>
                <span className="text-stone-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">Ready?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
              {sr.cta.text}
            </h2>
            <Link
              href={sr.cta.href}
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              {sr.cta.label}
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
                { href: "/contact", label: "Get in Touch" },
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
