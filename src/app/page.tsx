import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import JsonLd, { localBusinessSchema, organizationSchema } from "@/components/JsonLd";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const home = siteContent.home;

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={organizationSchema} />

      {/* Hero */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Executive Coach &middot; Phoenix, AZ</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal-700 leading-[1.1] mb-8 tracking-tight">
              Leadership is who you are,
              <br />
              <span className="text-sage-600">not what you do.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-xl mb-12 leading-relaxed">
              {home.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4 items-center">
              <Button href={home.hero.cta.href}>{home.hero.cta.label}</Button>
              <Button href="/about" variant="secondary">Learn My Story</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social Proof */}
      <Section bg="white">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium">What clients say</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getFeaturedTestimonials().map((t, i) => (
            <FadeIn key={t.id} delay={i * 100}>
              <TestimonialCard testimonial={t} compact />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section bg="cream">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 md:sticky md:top-24">
                {home.philosophy.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                {home.philosophy.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10">
                <Button href={home.philosophy.cta.href} variant="secondary">
                  {home.philosophy.cta.label}
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="white" wide>
        <FadeIn>
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700">
              How we can work together
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {home.services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                cta={service.cta.label}
                href={service.cta.href}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Differentiator */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <FadeIn>
                <div className="w-12 h-[2px] bg-sage-500 mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-cream-100">
                  {home.differentiator.headline}
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-8">
              <FadeIn delay={100}>
                <div className="space-y-6 text-stone-400 leading-relaxed text-lg">
                  {home.differentiator.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-cream-100 text-sm font-medium border border-stone-500 px-8 py-3 rounded-soft hover:border-cream-100 hover:bg-cream-100/5 transition-all"
                  >
                    Read My Story
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <Section bg="cream">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700">
              {home.resources.headline}
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {home.resources.items.map((item, i) => (
            <FadeIn key={item.href} delay={i * 100}>
              <Link
                href={item.href}
                className="group block bg-white border border-stone-200 rounded-softer p-8 md:p-10 hover:shadow-medium hover:border-sage-300 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-serif text-xl text-charcoal-700 mb-3 group-hover:text-sage-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sage-600 text-sm font-medium group-hover:gap-3 transition-all">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">Ready?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6">
              The path to yourself begins here.
            </h2>
            <p className="text-sage-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you&apos;re exploring executive coaching, life coaching, or just want to have a real conversation&mdash;reach out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-cream-100 text-charcoal-700 text-sm font-medium tracking-wide rounded-soft hover:bg-white transition-colors shadow-medium"
            >
              Book a Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
