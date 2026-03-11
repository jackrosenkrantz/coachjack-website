import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  cta: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  cta,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block card-dark p-8 md:p-10"
    >
      <div className="flex flex-col h-full">
        <div className="w-10 h-10 rounded-full bg-amber-light flex items-center justify-center mb-6 group-hover:bg-amber/10 transition-colors">
          <div className="w-2 h-2 rounded-full bg-amber" />
        </div>
        <h3 className="font-serif text-xl text-deep mb-3 group-hover:text-amber transition-colors">
          {title}
        </h3>
        <p className="text-earth leading-relaxed text-sm mb-6 flex-1">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-amber text-sm font-medium group-hover:gap-3 transition-all">
          {cta}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}
