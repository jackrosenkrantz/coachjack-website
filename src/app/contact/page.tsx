import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

const contact = siteContent.contact;

export const metadata: Metadata = {
  title: siteContent.meta.contact.title,
  description: siteContent.meta.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: siteContent.meta.contact.title,
    description: siteContent.meta.contact.description,
    url: "https://coachjack.xyz/contact",
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Contact</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep leading-[1.1] mb-6 tracking-tight">
              {contact.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-earth max-w-2xl leading-relaxed">
              {contact.hero.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* NAP */}
      <Section>
        <div className="max-w-2xl">
          <FadeIn>
            <div className="card-dark p-6 md:p-8 mb-12">
              <p className="font-serif text-lg text-deep">
                {contact.nap.name}
              </p>
              <p className="text-earth text-sm mt-1">
                {contact.nap.title} | {contact.nap.location}
              </p>
              <p className="text-earth text-sm mt-1">
                <a
                  href={`mailto:${contact.nap.email}`}
                  className="text-amber hover:opacity-85 transition-colors"
                >
                  {contact.nap.email}
                </a>
              </p>
              <p className="text-warm-gray text-sm mt-3 italic">
                {contact.nap.serviceArea}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="text-center">
              <h2 className="font-serif text-2xl text-deep mb-4">
                {contact.cta.text}
              </h2>
              <Button href={contact.cta.href}>{contact.cta.label}</Button>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-12 pt-8 border-t border-stone">
              <p className="text-earth mb-4">Prefer to email directly?</p>
              <a
                href={`mailto:${siteContent.email}`}
                className="group inline-flex items-center gap-2 text-amber hover:opacity-85 transition-colors font-medium"
              >
                {siteContent.email}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
