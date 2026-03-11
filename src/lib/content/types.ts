export interface ContentPage {
  slug: string
  meta: { title: string; description: string }
  datePublished: string
  dateModified: string
  hero: { headline: string; subheadline: string; tag: string }
  sections: ContentSection[]
  faqs: { question: string; answer: string }[]
  cta: { headline: string; body: string }
  relatedSlugs: string[]
}

export interface ContentSection {
  headline: string
  body: string[]
  items?: string[]
}

export interface LocationPage extends ContentPage {
  city: string
  state: string
  areaDescription: string
  nearbyAreas: string[]
}
