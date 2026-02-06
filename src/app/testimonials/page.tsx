import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
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
      {/* Hero */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 40%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Testimonials</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] tracking-tight">
              {siteContent.testimonials.hero.headline}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <Section bg="white">
        <div className="grid grid-cols-1 gap-8">
          {getAllTestimonials().map((t, i) => (
            <FadeIn key={t.id} delay={i * 100}>
              <TestimonialCard testimonial={t} />
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
              Ready to start your own journey?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              Book a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <Section bg="cream">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium mb-6">
              Explore coaching options
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: "/executive-coaching", label: "Executive Coaching" },
                { href: "/life-coaching", label: "Life Coaching" },
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
