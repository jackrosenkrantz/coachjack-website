import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import JsonLd, { createServiceSchema, createFaqSchema } from "@/components/JsonLd";
import { getTestimonialsForContext } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const coaching = siteContent.coaching;

export const metadata: Metadata = {
  title: siteContent.meta.coaching.title,
  description: siteContent.meta.coaching.description,
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: siteContent.meta.coaching.title,
    description: siteContent.meta.coaching.description,
    url: "https://coachjack.xyz/coaching",
  },
};

export default function Coaching() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "Executive Coaching — Jack Rosenkrantz",
          "Executive coaching for C-suite leaders, founders, and entrepreneurs in Phoenix, Scottsdale, and nationwide.",
          "https://coachjack.xyz/coaching"
        )}
      />
      <JsonLd data={createFaqSchema(coaching.faq.items)} />

      {/* Hero */}
      <section className="hero-gradient min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <FadeIn delay={0}>
                <span className="tag mb-8 inline-block">Coaching</span>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep leading-[1.1] mb-6 tracking-tight">
                  {coaching.hero.headline}
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-lg md:text-xl text-earth max-w-2xl leading-relaxed">
                  {coaching.hero.subheadline}
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <FadeIn delay={200} direction="right">
                <div className="photo-amber relative rounded-softer overflow-hidden">
                  <Image
                    src="/images/retreat-254.jpg"
                    alt="Jack Rosenkrantz smiling in Sedona, Arizona"
                    width={1200}
                    height={800}
                    className="rounded-softer shadow-lifted object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* The Pattern — Agitation */}
      <Section id="executive-coaching">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-deep mb-4">
            {coaching.pattern.headline}
          </h2>
          <p className="text-amber text-lg font-medium mb-10 font-serif italic">
            {coaching.pattern.intro}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coaching.pattern.points.map((point, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-dark p-8">
                <h3 className="font-serif text-xl text-deep mb-4">{point.title}</h3>
                <p className="text-earth leading-relaxed text-sm">{point.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Visual break — presence */}
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="photo-dark relative rounded-softer overflow-hidden">
              <Image
                src="/images/retreat-196.jpg"
                alt="Jack Rosenkrantz in meditation practice"
                width={1200}
                height={800}
                className="rounded-softer shadow-lifted object-cover w-full max-h-[400px]"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* The Approach */}
      <Section bg="alt">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-deep mb-4">
                {coaching.approach.headline}
              </h2>
              <p className="text-amber text-lg font-medium font-serif italic">
                {coaching.approach.intro}
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            <FadeIn delay={100}>
              <ul className="space-y-4">
                {coaching.approach.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-earth">
                    <span className="w-6 h-6 rounded-full bg-amber-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section wide>
        <FadeIn>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-deep">
              {coaching.outcomes.headline}
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coaching.outcomes.items.map((outcome, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="card-dark p-8">
                <h3 className="font-serif text-xl text-deep mb-3">{outcome.title}</h3>
                <p className="text-earth leading-relaxed text-sm">{outcome.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Retreat energy — photo grid */}
      <div className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="photo-amber relative rounded-softer overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/retreat-63.jpg"
                  alt="Outdoor group yoga class in Sedona"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="photo-cinematic relative rounded-softer overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/retreat-16.jpg"
                  alt="Jack Rosenkrantz with confident, direct gaze in Sedona"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="photo-grain relative rounded-softer overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/retreat-134.jpg"
                  alt="Close-up journaling detail at retreat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="photo-dark relative rounded-softer overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/retreat-148.jpg"
                  alt="Jack facilitating at whiteboard during retreat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Testimonials */}
      <Section bg="alt" wide>
        <FadeIn>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-warm-gray text-sm uppercase tracking-widest font-medium">What clients say</p>
          </div>
        </FadeIn>
        <div className="testimonial-grid">
          {getTestimonialsForContext("coaching").map((t, i) => (
            <FadeIn key={t.id} delay={i * 80}>
              <TestimonialCard testimonial={t} compact />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Retreats */}
      <Section id="retreats">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 hidden md:block">
            <FadeIn direction="left">
              <div className="photo-grain relative rounded-softer overflow-hidden">
                <Image
                  src="/images/retreat-64.jpg"
                  alt="Outdoor yoga and stretching with Cathedral Rock, Sedona retreat"
                  width={1200}
                  height={800}
                  className="rounded-softer shadow-lifted object-cover w-full"
                />
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
                {coaching.retreats.headline}
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-earth leading-relaxed text-lg mb-8">
                {coaching.retreats.body}
              </p>
              <Button href={coaching.retreats.cta.href} variant="secondary" external>
                {coaching.retreats.cta.label}
              </Button>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Investment */}
      <Section bg="alt">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl text-deep mb-4">
            {coaching.investment.headline}
          </h2>
          <p className="text-earth leading-relaxed text-lg">
            {coaching.investment.body}
          </p>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section id="faq" wide>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl text-deep mb-10">
            {coaching.faq.headline}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coaching.faq.items.map((item, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="card-dark p-6 md:p-8">
                <h3 className="font-serif text-lg text-deep mb-3">
                  {item.question}
                </h3>
                <p className="text-earth leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-stone">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
              {coaching.cta.text}
            </h2>
            <Button href={coaching.cta.href}>{coaching.cta.label}</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
