interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "default" | "alt" | "hero";
  id?: string;
  narrow?: boolean;
  wide?: boolean;
}

const bgClasses = {
  default: "",
  alt: "section-alt",
  hero: "hero-gradient",
};

export default function Section({
  children,
  className = "",
  bg = "default",
  id,
  narrow = false,
  wide = false,
}: SectionProps) {
  const maxWidth = wide ? "max-w-6xl" : narrow ? "max-w-3xl" : "max-w-4xl";

  return (
    <section id={id} className={`${bgClasses[bg]} py-20 md:py-28 ${className}`}>
      <div className={`${maxWidth} mx-auto px-6`}>{children}</div>
    </section>
  );
}
