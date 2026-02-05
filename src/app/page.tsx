import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { siteContent } from "@/lib/site-content";

const home = siteContent.home;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 min-h-[85vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-tight mb-8">
            Leadership is who you are,
            <br />
            <span className="text-sage-600">not what you do.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mb-12 leading-relaxed">
            {home.hero.subheadline}
          </p>
          <Button href={home.hero.cta.href}>{home.hero.cta.label}</Button>
        </div>
      </section>

      {/* Social Proof */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getFeaturedTestimonials().map((t) => (
            <TestimonialCard key={t.id} testimonial={t} compact />
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-8">
          {home.philosophy.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {home.philosophy.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          <Button href={home.philosophy.cta.href} variant="secondary">
            {home.philosophy.cta.label}
          </Button>
        </div>
      </Section>

      {/* Services */}
      <Section bg="warm">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-12 text-center">
          How we can work together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              cta={service.cta.label}
              href={service.cta.href}
            />
          ))}
        </div>
      </Section>

      {/* Differentiator */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-8">
          {home.differentiator.headline}
        </h2>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          {home.differentiator.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/about">Read My Story</Button>
        </div>
      </Section>
    </>
  );
}
