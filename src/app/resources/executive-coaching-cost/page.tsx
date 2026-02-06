import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
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

      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {siteContent.resources.executiveCoachingCost.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">
          {siteContent.resources.executiveCoachingCost.hero.subheadline}
        </p>
      </Section>

      {/* Content */}
      <Section bg="white">
        <article className="max-w-3xl space-y-8 text-stone-600 leading-relaxed">
          <p>
            If you&apos;re exploring executive coaching, one of the first questions is: what does it cost? The honest answer is that it varies\u2014significantly. This guide breaks down what drives pricing, what to expect, and how to think about the investment.
          </p>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            National averages for executive coaching
          </h2>
          <p>
            Across the United States, executive coaching typically falls within these ranges:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Entry-level coaches:</strong> $150\u2013$300 per hour
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Experienced coaches:</strong> $300\u2013$500 per hour
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Premium/specialized coaches:</strong> $500\u2013$1,000+ per hour
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Monthly retainers:</strong> $2,000\u2013$10,000+ per month
            </li>
          </ul>
          <p>
            These ranges reflect the diversity of the coaching market\u2014from newer coaches building their practice to seasoned professionals working with Fortune 500 executives.
          </p>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            Factors that affect executive coaching pricing
          </h2>
          <p>
            Not all coaching is created equal, and several factors influence what you&apos;ll pay:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Coach experience:</strong> Years of coaching experience, professional background, and the depth of leadership challenges they&apos;ve navigated
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Specialization:</strong> Coaches who specialize in specific areas\u2014founder coaching, C-suite transitions, embodied leadership\u2014often charge more than generalists
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Session format:</strong> In-person sessions, longer session lengths, or retreat-style intensives typically cost more than standard video sessions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Engagement structure:</strong> Package-based engagements often offer better value than per-session pricing
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>What&apos;s included:</strong> Some engagements include only sessions; others include assessments, async support, somatic practices, and integration work
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            Common pricing models
          </h2>
          <p>
            Executive coaches typically structure their pricing in one of three ways:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Hourly:</strong> Pay per session. Offers flexibility but can feel transactional. Common at $200\u2013$500/hour.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Monthly retainer:</strong> A fixed monthly investment that covers sessions, async support, and other elements. Creates a more integrated coaching relationship. Typical range: $2,000\u2013$5,000/month.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              <strong>Package/engagement:</strong> A fixed investment for a defined period (e.g., 6 months). Often the best value, as it builds in the commitment and continuity that deep coaching requires. Typical range: $10,000\u2013$30,000+ for a full engagement.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            What&apos;s typically included
          </h2>
          <p>
            A comprehensive executive coaching engagement usually includes more than just sessions:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Regular coaching sessions (bi-weekly or weekly)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Between-session support (email, voice notes, or messaging)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Initial assessment and goal-setting
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Tailored practices or exercises between sessions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-500 mt-1.5 text-xs">&bull;</span>
              Integration and closing review at the end of the engagement
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            What to expect in the Phoenix/Arizona market
          </h2>
          <p>
            The Phoenix and Scottsdale coaching market has grown significantly as the Valley&apos;s business community has expanded. Executive coaching rates in Arizona generally align with national averages, with experienced coaches charging $300\u2013$500 per hour or $2,500\u2013$5,000 per month on retainer.
          </p>
          <p>
            The market includes coaches with a wide range of approaches\u2014from traditional performance coaching to more integrated methods that address the whole person. Some Phoenix-based coaches specialize in working with the tech startup community, while others focus on established corporate leaders.
          </p>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            How to evaluate ROI
          </h2>
          <p>
            The return on executive coaching is both tangible and intangible. Tangible returns include better decision-making, improved team retention, and measurable performance improvements. Intangible returns\u2014greater presence, reduced stress, authentic leadership\u2014are harder to measure but often more valuable.
          </p>
          <p>
            The key question isn&apos;t &quot;What does coaching cost?&quot; It&apos;s &quot;What is the cost of not getting the support you need?&quot; For leaders carrying the weight of an organization, the answer is usually far more than a coaching engagement.
          </p>

          <h2 className="font-serif text-2xl text-charcoal-700 pt-4">
            Jack&apos;s approach to pricing
          </h2>
          <p>
            I structure my coaching as monthly retainer engagements with a minimum 3-month commitment. This creates the container necessary for real transformation\u2014not just a series of disconnected conversations.
          </p>
          <p>
            Every engagement includes bi-weekly sessions, async support, somatic practices tailored to your nervous system, and integration work. The investment reflects the depth and breadth of the work\u2014not just the hours on a call.
          </p>
          <p>
            If you want to explore what working together looks like, start with a conversation. There&apos;s no pitch and no pressure\u2014just a real exchange to see if this is the right fit.
          </p>
        </article>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <h2 className="font-serif text-3xl text-charcoal-700 mb-8">
          Frequently asked questions
        </h2>
        <div className="max-w-3xl space-y-8">
          {faqItems.map((item, i) => (
            <div key={i}>
              <h3 className="font-serif text-lg text-charcoal-700 mb-3">
                {item.question}
              </h3>
              <p className="text-stone-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="sage">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-charcoal-700 mb-4">
            Ready to explore coaching?
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            The best way to understand what coaching costs\u2014and what it&apos;s worth\u2014is to have a real conversation about what you&apos;re navigating.
          </p>
          <Button href="/contact">Book a Call</Button>
        </div>
      </Section>

      {/* Internal Links */}
      <Section bg="white">
        <div className="max-w-3xl text-stone-600">
          <p className="mb-4">Continue exploring:</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/executive-coaching"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              Executive Coaching with Jack &rarr;
            </Link>
            <Link
              href="/resources/what-is-executive-coaching"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              What Is Executive Coaching? &rarr;
            </Link>
            <Link
              href="/about"
              className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
            >
              About Jack &rarr;
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
