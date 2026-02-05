interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  type?: "article" | "podcast" | "linkedin";
}

const typeLabels = {
  article: "Essay",
  podcast: "Podcast",
  linkedin: "LinkedIn",
};

export default function PostCard({
  title,
  excerpt,
  date,
  href,
  type = "article",
}: PostCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-stone-200/60 rounded-soft p-8 hover:border-stone-300 hover:shadow-medium transition-all group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs uppercase tracking-widest text-sage-600 font-medium">
          {typeLabels[type]}
        </span>
        <span className="text-xs text-stone-400">{date}</span>
      </div>
      <h3 className="font-serif text-lg text-charcoal-700 mb-3 group-hover:text-sage-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-stone-500 leading-relaxed">{excerpt}</p>
      <span className="inline-block mt-4 text-sm text-stone-600 group-hover:text-sage-600 transition-colors">
        Read more &rarr;
      </span>
    </a>
  );
}
