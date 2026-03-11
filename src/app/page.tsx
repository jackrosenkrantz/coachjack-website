import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import JsonLd, { localBusinessSchema, personSchema } from "@/components/JsonLd";
import { getTestimonialsForContext } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const home = siteContent.home;

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={personSchema} />

      {/* Hero — Pain-first headline */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <FadeIn delay={0}>
                <span className="tag mb-8 inline-block">Executive Coach &middot; Phoenix, AZ</span>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-deep leading-[1.1] mb-8 tracking-tight">
                  {home.hero.headline}
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-lg md:text-xl text-earth max-w-xl mb-12 leading-relaxed">
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
            <div className="md:col-span-5 hidden md:block">
              <FadeIn delay={200} direction="right">
                <div className="photo-cinematic relative rounded-softer overflow-hidden">
                  <Image
                    src="/images/jack-sedona-standing.jpg"
                    alt="Jack Rosenkrantz - Executive Coach in Sedona, Arizona"
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

      {/* Social Proof Strip */}
      <div className="proof-strip py-6">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-warm-gray text-xs uppercase tracking-widest font-medium mb-4">
              {home.proofStrip.label}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {getTestimonialsForContext("homepage")
                .filter((t) => t.company)
                .map((t) => (
                  <span key={t.id} className="proof-strip-item text-earth text-sm">
                    {t.company}
                  </span>
                ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Philosophy */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-deep md:sticky md:top-24">
                {home.philosophy.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <p className="text-earth leading-relaxed text-lg">
                {home.philosophy.body}
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* What I Do */}
      <Section wide bg="alt">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-deep">
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

      {/* Testimonials — Masonry grid */}
      <Section wide>
        <FadeIn>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-warm-gray text-sm uppercase tracking-widest font-medium">What clients say</p>
          </div>
        </FadeIn>
        <div className="testimonial-grid">
          {getTestimonialsForContext("homepage").map((t, i) => (
            <FadeIn key={t.id} delay={i * 80}>
              <TestimonialCard testimonial={t} compact />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Differentiation */}
      <Section bg="alt" wide>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 hidden md:block">
            <FadeIn direction="left">
              <div className="photo-grain relative rounded-softer overflow-hidden">
                <Image
                  src="/images/retreat-outdoor-conversation.jpg"
                  alt="Coaching conversation in Sedona's red rock landscape"
                  width={600}
                  height={900}
                  className="rounded-softer shadow-lifted object-cover max-h-[500px] w-full"
                />
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-deep">
                {home.differentiator.headline}
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="space-y-6 text-earth leading-relaxed text-lg mt-8">
                {home.differentiator.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10">
                <Button href="/about" variant="secondary">Read My Story</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 border-t border-stone">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
              {home.cta.text}
            </h2>
            <p className="text-earth text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you&apos;re exploring coaching or want to start with The Portal&mdash;the first step is the same.
            </p>
            <Button href={home.cta.href}>{home.cta.label}</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
