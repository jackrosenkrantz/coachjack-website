"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { siteContent } from "@/lib/site-content";

const contact = siteContent.contact;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {contact.hero.headline}
        </h1>
        <p className="text-lg text-stone-500 max-w-2xl">
          {contact.hero.body}
        </p>
      </Section>

      {/* Form */}
      <Section bg="white">
        <div className="max-w-2xl">
          {submitted ? (
            <div className="bg-sage-100 border border-sage-400/30 p-8 text-center">
              <h2 className="font-serif text-2xl text-charcoal-700 mb-3">
                {contact.form.successHeadline}
              </h2>
              <p className="text-stone-600">
                {contact.form.successBody}
              </p>
            </div>
          ) : (
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
                  className="w-full px-4 py-3 border border-stone-200 bg-cream-100 focus:outline-none focus:border-sage-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-stone-200 bg-cream-100 focus:outline-none focus:border-sage-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-stone-200 bg-cream-100 focus:outline-none focus:border-sage-500 transition-colors"
                >
                  <option value="">{contact.form.fields.interest.placeholder}</option>
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
                  className="w-full px-4 py-3 border border-stone-200 bg-cream-100 focus:outline-none focus:border-sage-500 transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 bg-charcoal-700 text-cream-100 text-sm font-medium tracking-wide hover:bg-charcoal-600 transition-colors"
              >
                {contact.form.submitLabel}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-stone-200">
            <p className="text-stone-600 mb-4">
              {contact.alternative.text}
            </p>
            <a
              href={`mailto:${siteContent.email}`}
              className="text-sage-600 hover:text-sage-700 transition-colors font-medium"
            >
              {siteContent.email} &rarr;
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
