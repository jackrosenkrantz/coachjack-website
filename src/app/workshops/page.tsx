import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
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
      {/* Hero */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 60% 50%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Workshops</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
              {workshops.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
              {workshops.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {workshops.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mt-10">
                <Button href={workshops.cta.href} external>
                  {workshops.cta.label}
                </Button>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <FadeIn delay={200} direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-sage-200/20 rounded-softer rotate-2" />
                <Image
                  src="/images/retreat-leading-meditation.jpg"
                  alt="Jack leading a group workshop with meditation props"
                  width={800}
                  height={533}
                  className="relative rounded-softer shadow-lifted object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Internal Links */}
      <Section bg="cream">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium mb-6">
              Looking for 1:1 work? Explore coaching options
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: "/executive-coaching", label: "Executive Coaching" },
                { href: "/life-coaching", label: "Life Coaching" },
                { href: "/sedona-retreats", label: "Sedona Retreats" },
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
