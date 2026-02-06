import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import JsonLd, { createArticleSchema, createFaqSchema } from "@/components/JsonLd";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.meta.executiveCoachingCost.title,
  description: siteContent.meta.executiveCoachingCost.description,
  alternates: { canonical: "/resources/executive-coaching-cost" },
  openGraph: {
    title: siteContent.meta.executiveCoachingCost.title,
    description: siteContent.meta.executiveCoachingCost.description,
    url: "https://coachjack.xyz/resources/executive-coaching-cost",
  },
};

const faqItems = [
  {
    question: "How much does executive coaching cost per session?",
    answer:
      "Individual session rates for executive coaching typically range from $200\u2013$500 per hour, depending on the coach\u2019s experience, specialization, and location. However, most coaches structure engagements as monthly retainers rather than per-session pricing, which can change the effective cost.",
  },
  {
    question: "Is executive coaching worth the investment?",
    answer:
      "For leaders who are genuinely ready for the work, the ROI is significant. The ICF reports that 86% of companies see positive returns from coaching investments. Beyond measurable outcomes, leaders consistently report clearer decision-making, stronger presence, and sustainable high performance\u2014benefits that compound over the course of a career.",
  },
  {
    question: "Does insurance cover executive coaching?",
    answer:
      "No. Executive coaching is not covered by health insurance, as it\u2019s a professional development service rather than a healthcare service. However, many organizations cover coaching costs as a leadership development expense.",
  },
  {
    question: "What\u2019s the difference between cheap and expensive coaching?",
    answer:
      "Price correlates with experience, specialization, and depth. Lower-cost coaches may be newer to the field or use more formulaic approaches. Higher-cost coaches typically bring deeper experience, more specialized methodologies, and the capacity to work with complex leadership challenges. The right choice depends on your specific needs and where you are in your leadership journey.",
  },
  {
    question: "How much does executive coaching cost in Phoenix?",
    answer:
      "Executive coaching rates in the Phoenix and Scottsdale market generally range from $250\u2013$500 per hour, or $2,000\u2013$5,000 per month for retainer-based engagements. Premium coaches with specialized approaches may charge more. The market is competitive, with a growing number of experienced coaches serving the Valley\u2019s business community.",
  },
];

export default function ExecutiveCoachingCost() {
  return (
    <>
      <JsonLd
        data={createArticleSchema(
          "How Much Does Executive Coaching Cost?",
          siteContent.meta.executiveCoachingCost.description,
          "https://coachjack.xyz/resources/executive-coaching-cost"
        )}
      />
      <JsonLd data={createFaqSchema(faqItems)} />

      {/* Hero */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-sage-500) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">Resource Guide</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-700 leading-[1.1] mb-6 tracking-tight">
              {siteContent.resources.executiveCoachingCost.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
              {siteContent.resources.executiveCoachingCost.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <Section bg="white">
        <FadeIn>
          <article className="max-w-3xl space-y-8 text-stone-600 leading-relaxed text-lg">
            <p>
              If you&apos;re exploring executive coaching, one of the first questions is: what does it cost? The honest answer is that it varies&mdash;significantly. This guide breaks down what drives pricing, what to expect, and how to think about the investment.
            </p>

            <div className="accent-line my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              National averages for executive coaching
            </h2>
            <p>
              Across the United States, executive coaching typically falls within these ranges:
            </p>
            <ul className="space-y-4">
              {[
                { label: "Entry-level coaches:", text: "$150\u2013$300 per hour" },
                { label: "Experienced coaches:", text: "$300\u2013$500 per hour" },
                { label: "Premium/specialized coaches:", text: "$500\u2013$1,000+ per hour" },
                { label: "Monthly retainers:", text: "$2,000\u2013$10,000+ per month" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                  </span>
                  <span><strong>{item.label}</strong> {item.text}</span>
                </li>
              ))}
            </ul>
            <p>
              These ranges reflect the diversity of the coaching market&mdash;from newer coaches building their practice to seasoned professionals working with Fortune 500 executives.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              Factors that affect executive coaching pricing
            </h2>
            <p>
              Not all coaching is created equal, and several factors influence what you&apos;ll pay:
            </p>
            <ul className="space-y-4">
              {[
                { label: "Coach experience:", text: "Years of coaching experience, professional background, and the depth of leadership challenges they\u2019ve navigated" },
                { label: "Specialization:", text: "Coaches who specialize in specific areas\u2014founder coaching, C-suite transitions, embodied leadership\u2014often charge more than generalists" },
                { label: "Session format:", text: "In-person sessions, longer session lengths, or retreat-style intensives typically cost more than standard video sessions" },
                { label: "Engagement structure:", text: "Package-based engagements often offer better value than per-session pricing" },
                { label: "What\u2019s included:", text: "Some engagements include only sessions; others include assessments, async support, somatic practices, and integration work" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                  </span>
                  <span><strong>{item.label}</strong> {item.text}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              Common pricing models
            </h2>
            <p>
              Executive coaches typically structure their pricing in one of three ways:
            </p>
            <ul className="space-y-4">
              {[
                { label: "Hourly:", text: "Pay per session. Offers flexibility but can feel transactional. Common at $200\u2013$500/hour." },
                { label: "Monthly retainer:", text: "A fixed monthly investment that covers sessions, async support, and other elements. Creates a more integrated coaching relationship. Typical range: $2,000\u2013$5,000/month." },
                { label: "Package/engagement:", text: "A fixed investment for a defined period (e.g., 6 months). Often the best value, as it builds in the commitment and continuity that deep coaching requires. Typical range: $10,000\u2013$30,000+ for a full engagement." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                  </span>
                  <span><strong>{item.label}</strong> {item.text}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              What&apos;s typically included
            </h2>
            <p>
              A comprehensive executive coaching engagement usually includes more than just sessions:
            </p>
            <ul className="space-y-4">
              {[
                "Regular coaching sessions (bi-weekly or weekly)",
                "Between-session support (email, voice notes, or messaging)",
                "Initial assessment and goal-setting",
                "Tailored practices or exercises between sessions",
                "Integration and closing review at the end of the engagement",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              What to expect in the Phoenix/Arizona market
            </h2>
            <p>
              The Phoenix and Scottsdale coaching market has grown significantly as the Valley&apos;s business community has expanded. Executive coaching rates in Arizona generally align with national averages, with experienced coaches charging $300&ndash;$500 per hour or $2,500&ndash;$5,000 per month on retainer.
            </p>
            <p>
              The market includes coaches with a wide range of approaches&mdash;from traditional performance coaching to more integrated methods that address the whole person. Some Phoenix-based coaches specialize in working with the tech startup community, while others focus on established corporate leaders.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              How to evaluate ROI
            </h2>
            <p>
              The return on executive coaching is both tangible and intangible. Tangible returns include better decision-making, improved team retention, and measurable performance improvements. Intangible returns&mdash;greater presence, reduced stress, authentic leadership&mdash;are harder to measure but often more valuable.
            </p>
            <p>
              The key question isn&apos;t &quot;What does coaching cost?&quot; It&apos;s &quot;What is the cost of not getting the support you need?&quot; For leaders carrying the weight of an organization, the answer is usually far more than a coaching engagement.
            </p>

            <div className="accent-line my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-700 pt-4">
              Jack&apos;s approach to pricing
            </h2>
            <p>
              I structure my coaching as monthly retainer engagements with a minimum 3-month commitment. This creates the container necessary for real transformation&mdash;not just a series of disconnected conversations.
            </p>
            <p>
              Every engagement includes bi-weekly sessions, async support, somatic practices tailored to your nervous system, and integration work. The investment reflects the depth and breadth of the work&mdash;not just the hours on a call.
            </p>
            <p>
              If you want to explore what working together looks like, start with a conversation. There&apos;s no pitch and no pressure&mdash;just a real exchange to see if this is the right fit.
            </p>
          </article>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-700 mb-10">
            Frequently asked questions
          </h2>
        </FadeIn>
        <div className="max-w-3xl space-y-8">
          {faqItems.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="quote-accent">
                <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                  {item.question}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="section-sage py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sage-300 text-sm uppercase tracking-widest font-medium mb-6">Next step</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-4">
              Ready to explore coaching?
            </h2>
            <p className="text-sage-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              The best way to understand what coaching costs&mdash;and what it&apos;s worth&mdash;is to have a real conversation about what you&apos;re navigating.
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

      {/* Internal Links */}
      <Section bg="cream">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-stone-500 text-sm uppercase tracking-widest font-medium mb-6">
              Continue exploring
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: "/executive-coaching", label: "Executive Coaching with Jack" },
                { href: "/resources/what-is-executive-coaching", label: "What Is Executive Coaching?" },
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
