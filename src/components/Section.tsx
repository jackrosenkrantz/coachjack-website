interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "white" | "warm" | "sage";
  id?: string;
}

const bgClasses = {
  cream: "bg-cream-100",
  white: "bg-white",
  warm: "bg-cream-300",
  sage: "bg-sage-50",
};

export default function Section({
  children,
  className = "",
  bg = "cream",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bgClasses[bg]} py-20 md:py-28 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">{children}</div>
    </section>
  );
}
