import type { Metadata } from "next";
import Section from "@/components/Section";
import PostCard from "@/components/PostCard";
import { siteContent } from "@/lib/site-content";

const writing = siteContent.writing;

export const metadata: Metadata = {
  title: siteContent.meta.writing.title,
  description: siteContent.meta.writing.description,
  alternates: { canonical: "/writing" },
  openGraph: {
    title: siteContent.meta.writing.title,
    description: siteContent.meta.writing.description,
    url: "https://coachjack.xyz/writing",
  },
};

export default function Writing() {
  return (
    <>
      {/* Header */}
      <Section bg="cream">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-700 mb-4">
          {writing.hero.headline}
        </h1>
        <p className="text-xl text-stone-500">
          {writing.hero.subheadline}
        </p>
      </Section>

      {/* Posts */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {writing.posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </Section>
    </>
  );
}
