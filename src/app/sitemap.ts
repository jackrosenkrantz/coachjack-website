import type { MetadataRoute } from "next";
import { resources } from "@/lib/content/resources";
import { industries } from "@/lib/content/industries";
import { locations } from "@/lib/content/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://coachjack.xyz";

  return [
    // Static pages
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/coaching`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // Resources hub
    {
      url: `${base}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Resource guides (includes existing 2 + new 6)
    ...resources.map((r) => ({
      url: `${base}/resources/${r.slug}`,
      lastModified: new Date(r.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Niche/industry pages
    ...industries.map((i) => ({
      url: `${base}/coaching/for-${i.slug}`,
      lastModified: new Date(i.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Location pages
    ...locations.map((l) => ({
      url: `${base}/coaching/in-${l.slug}`,
      lastModified: new Date(l.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
