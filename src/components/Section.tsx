interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "white" | "warm" | "sage" | "dark" | "sage-dark";
  id?: string;
  narrow?: boolean;
  wide?: boolean;
}

const bgClasses = {
  cream: "bg-cream-100",
  white: "bg-white",
  warm: "bg-cream-200",
  sage: "bg-sage-50",
  dark: "section-dark",
  "sage-dark": "section-sage",
};

export default function Section({
  children,
  className = "",
  bg = "cream",
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
