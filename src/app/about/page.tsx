import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import JsonLd, { personSchema } from "@/components/JsonLd";
import { getTestimonialsForContext } from "@/lib/testimonials";
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
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <FadeIn delay={0}>
                <span className="tag mb-8 inline-block">About Jack</span>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep leading-[1.1] tracking-tight">
                  {about.hero.headline}
                </h1>
              </FadeIn>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <FadeIn delay={200} direction="right">
                <div className="photo-dark relative rounded-softer overflow-hidden">
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
      <Section>
        <div className="max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-earth leading-relaxed text-lg">
              {about.wound.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* The Awakening */}
      <Section bg="alt">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 hidden md:block">
              <FadeIn direction="left">
                <div className="photo-grain relative rounded-softer overflow-hidden">
                  <Image
                    src="/images/jack-sedona-grounded.jpg"
                    alt="Jack Rosenkrantz grounded in Sedona's landscape"
                    width={800}
                    height={533}
                    className="rounded-softer shadow-lifted object-cover"
                  />
                </div>
              </FadeIn>
            </div>
            <div className="md:col-span-7">
              <FadeIn>
                <div className="accent-line mb-8" />
              </FadeIn>
              <FadeIn delay={100}>
                <div className="space-y-6 text-earth leading-relaxed text-lg">
                  {about.awakening.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* The Work */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="accent-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-deep md:sticky md:top-24">
                {about.work.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="space-y-6 text-earth leading-relaxed text-lg">
                {about.work.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="my-10">
                <div className="photo-cinematic relative rounded-softer overflow-hidden">
                  <Image
                    src="/images/retreat-group-meditation.jpg"
                    alt="Group meditation session at a Sedona retreat led by Jack"
                    width={800}
                    height={1200}
                    className="relative rounded-softer shadow-lifted object-cover w-full max-h-[500px]"
                  />
                </div>
              </div>
              <p className="font-medium text-deep mt-8 mb-4 text-lg">
                {about.work.approachLabel}
              </p>
              <ul className="space-y-4 mb-8">
                {about.work.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 text-earth">
                    <span className="w-6 h-6 rounded-full bg-amber-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="font-serif text-2xl text-deep leading-relaxed">
                {about.work.closing}
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section bg="alt">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-deep mb-8">
              {about.credentials.headline}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {about.credentials.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 card-dark p-5">
                  <span className="w-6 h-6 rounded-full bg-amber-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-8" stroke="var(--color-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-earth text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="italic text-warm-gray text-lg leading-relaxed">
              {about.credentials.personal}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials */}
      <Section wide>
        <FadeIn>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-warm-gray text-sm uppercase tracking-widest font-medium">What people say</p>
          </div>
        </FadeIn>
        <div className="testimonial-grid">
          {getTestimonialsForContext("about").map((t, i) => (
            <FadeIn key={t.id} delay={i * 80}>
              <TestimonialCard testimonial={t} compact />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-stone">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-deep mb-6">
              {about.cta.text}
            </h2>
            <Button href={about.cta.href}>{about.cta.label}</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
