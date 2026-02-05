import Button from "./Button";

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
    <div className="bg-white border border-stone-200/60 rounded-soft p-8 md:p-10 flex flex-col shadow-soft">
      <h3 className="font-serif text-xl text-charcoal-700 mb-4">{title}</h3>
      <p className="text-stone-600 leading-relaxed mb-8 flex-1">
        {description}
      </p>
      <Button href={href} variant="secondary">
        {cta}
      </Button>
    </div>
  );
}
