"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

const contact = siteContent.contact;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Get in Touch</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
              {contact.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
              {contact.hero.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* NAP + Form */}
      <Section bg="white">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="bg-sage-50 border border-sage-400/20 rounded-softer p-6 md:p-8 mb-12">
              <p className="font-serif text-lg text-charcoal-700">
                {contact.nap.name}
              </p>
              <p className="text-stone-600 text-sm mt-1">
                {contact.nap.title} | {contact.nap.location}
              </p>
              <p className="text-stone-600 text-sm mt-1">
                <a
                  href={`mailto:${contact.nap.email}`}
                  className="text-sage-600 hover:text-sage-700 transition-colors"
                >
                  {contact.nap.email}
                </a>
              </p>
              <p className="text-stone-500 text-sm mt-3 italic">
                {contact.nap.serviceArea}
              </p>
            </div>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div className="bg-sage-100 border border-sage-400/30 rounded-softer p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5 9-12" stroke="var(--color-sage-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-charcoal-700 mb-3">
                  {contact.form.successHeadline}
                </h2>
                <p className="text-stone-600">{contact.form.successBody}</p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={100}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal-600 mb-2"
                  >
                    {contact.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={contact.form.fields.name.placeholder}
                    required
                    className="w-full px-4 py-3 border border-stone-200 bg-cream-100 rounded-soft focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal-600 mb-2"
                  >
                    {contact.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={contact.form.fields.email.placeholder}
                    required
                    className="w-full px-4 py-3 border border-stone-200 bg-cream-100 rounded-soft focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-charcoal-600 mb-2"
                  >
                    {contact.form.fields.interest.label}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-stone-200 bg-cream-100 rounded-soft focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500/20 transition-all"
                  >
                    <option value="">
                      {contact.form.fields.interest.placeholder}
                    </option>
                    {contact.form.fields.interest.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal-600 mb-2"
                  >
                    {contact.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={contact.form.fields.message.placeholder}
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-200 bg-cream-100 rounded-soft focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-500/20 transition-all resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 bg-charcoal-700 text-cream-100 text-sm font-medium tracking-wide rounded-soft hover:bg-charcoal-600 transition-colors shadow-soft hover:shadow-medium"
                >
                  {contact.form.submitLabel}
                </button>
              </form>
            </FadeIn>
          )}

          <FadeIn delay={200}>
            <div className="mt-12 pt-8 border-t border-stone-200">
              <p className="text-stone-600 mb-4">{contact.alternative.text}</p>
              <a
                href={`mailto:${siteContent.email}`}
                className="group inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors font-medium"
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

      {/* Internal Links */}
      <Section bg="cream">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium mb-6">
              Learn more about working together
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
