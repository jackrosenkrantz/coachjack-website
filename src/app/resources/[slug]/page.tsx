import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import JsonLd, {
  createArticleSchema,
  createFaqSchema,
  createBreadcrumbSchema,
} from "@/components/JsonLd";
import { resources, getResource } from "@/lib/content/resources";
import { industries } from "@/lib/content/industries";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getResource(slug);
  if (!page) return {};

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: `/resources/${page.slug}` },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url: `https://coachjack.xyz/resources/${page.slug}`,
    },
  };
}

function resolveRelatedLink(s: string): { href: string; label: string } | null {
  const resource = resources.find((r) => r.slug === s);
  if (resource) return { href: `/resources/${s}`, label: resource.hero.headline };

  const industry = industries.find((i) => i.slug === s);
  if (industry) return { href: `/coaching/${s}`, label: industry.hero.headline };

  return null;
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getResource(slug);
  if (!page) notFound();

  const base = "https://coachjack.xyz";

  const relatedLinks = [
    { href: "/coaching", label: "Coaching with Jack" },
    ...page.relatedSlugs
      .map(resolveRelatedLink)
      .filter((l): l is { href: string; label: string } => l !== null),
  ];

  return (
    <>
      <JsonLd
        data={createArticleSchema(
          page.hero.headline,
          page.meta.description,
          `${base}/resources/${page.slug}`,
          page.datePublished,
          page.dateModified,
        )}
      />
      <JsonLd data={createFaqSchema(page.faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: base },
          { name: "Resources", url: `${base}/resources` },
          { name: page.hero.headline, url: `${base}/resources/${page.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="hero-gradient min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative">
          <FadeIn delay={0}>
            <span className="tag mb-8 inline-block">{page.hero.tag}</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep leading-[1.1] mb-6 tracking-tight">
              {page.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-earth max-w-2xl leading-relaxed">
              {page.hero.subheadline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <Section>
        <FadeIn>
          <article className="max-w-3xl space-y-8 text-earth leading-relaxed text-lg">
            {page.sections.map((section, si) => (
              <div key={si}>
                {si > 0 && <div className="accent-line my-12" />}
                <h2 className="font-serif text-2xl md:text-3xl text-deep pt-4">
                  {section.headline}
                </h2>
                {section.body.map((para, pi) => (
                  <p key={pi} className="mt-4">
                    {para}
                  </p>
                ))}
                {section.items && (
                  <ul className="space-y-4 mt-4">
                    {section.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section bg="alt">
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-deep mb-10">
            Frequently asked questions
          </h2>
        </FadeIn>
        <div className="max-w-3xl space-y-6">
          {page.faqs.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
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
            <p className="text-warm-gray text-sm uppercase tracking-widest font-medium mb-6">
              Next step
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-deep mb-4">
              {page.cta.headline}
            </h2>
            <p className="text-earth text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              {page.cta.body}
            </p>
            <Button href="/start">Start Here</Button>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <Section bg="alt">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-warm-gray text-sm uppercase tracking-widest font-medium mb-6">
              Continue exploring
            </p>
            <div className="flex flex-wrap gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-amber hover:text-deep font-medium transition-colors"
                >
                  {link.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
