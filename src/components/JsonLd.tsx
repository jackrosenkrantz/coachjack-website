interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Shared schema data
const serviceArea = [
  "Phoenix, AZ",
  "Scottsdale, AZ",
  "Tempe, AZ",
  "Mesa, AZ",
  "Chandler, AZ",
  "Gilbert, AZ",
  "Sedona, AZ",
  "Flagstaff, AZ",
  "Tucson, AZ",
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Jack Rosenkrantz Executive Coaching",
  description:
    "Executive coaching for founders and leaders in Phoenix, Scottsdale, and across Arizona. Blending nervous system work, yoga philosophy, and transformational facilitation.",
  url: "https://coachjack.xyz",
  email: "jack@becomingthebridge.co",
  founder: {
    "@type": "Person",
    name: "Jack Rosenkrantz",
    jobTitle: "Executive Coach",
    url: "https://coachjack.xyz/about",
    sameAs: ["https://www.linkedin.com/in/jackrosenkrantz/"],
  },
  areaServed: serviceArea.map((area) => ({
    "@type": "City",
    name: area,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/jackrosenkrantz/",
    "https://www.becomingthebridge.co",
  ],
  priceRange: "$$$$",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jack Rosenkrantz Executive Coaching",
  url: "https://coachjack.xyz",
  logo: "https://coachjack.xyz/images/jack-hero.jpg",
  email: "jack@becomingthebridge.co",
  founder: {
    "@type": "Person",
    name: "Jack Rosenkrantz",
  },
  sameAs: [
    "https://www.linkedin.com/in/jackrosenkrantz/",
    "https://www.becomingthebridge.co",
  ],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jack Rosenkrantz",
  jobTitle: "Executive Coach",
  url: "https://coachjack.xyz",
  email: "jack@becomingthebridge.co",
  sameAs: ["https://www.linkedin.com/in/jackrosenkrantz/"],
  worksFor: {
    "@type": "Organization",
    name: "Jack Rosenkrantz Executive Coaching",
    url: "https://coachjack.xyz",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  knowsAbout: [
    "Executive Coaching",
    "Leadership Development",
    "Life Coaching",
    "Nervous System Regulation",
    "Yoga",
    "Breathwork",
    "Somatic Practices",
  ],
};

export function createServiceSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "ProfessionalService",
      name: "Jack Rosenkrantz Executive Coaching",
      url: "https://coachjack.xyz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "AZ",
        addressCountry: "US",
      },
    },
    areaServed: serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}

export function createFaqSchema(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createArticleSchema(
  headline: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    author: {
      "@type": "Person",
      name: "Jack Rosenkrantz",
      url: "https://coachjack.xyz/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Jack Rosenkrantz Executive Coaching",
      url: "https://coachjack.xyz",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-02-01",
  };
}
