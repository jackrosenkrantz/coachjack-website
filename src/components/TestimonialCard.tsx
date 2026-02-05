import { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
}

export default function TestimonialCard({
  testimonial,
  compact = false,
}: TestimonialCardProps) {
  const displayQuote =
    compact && testimonial.shortQuote
      ? testimonial.shortQuote
      : testimonial.quote;

  return (
    <blockquote className="bg-white border border-stone-200/60 rounded-soft p-8 md:p-10 shadow-soft">
      <p className="text-stone-600 leading-relaxed italic">
        &ldquo;{displayQuote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
            <span className="text-sage-600 text-sm font-medium">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-charcoal-700">
            {testimonial.name}
          </p>
          {(testimonial.title || testimonial.company) && (
            <p className="text-xs text-stone-500">
              {[testimonial.title, testimonial.company]
                .filter(Boolean)
                .join(", ")}
            </p>
          )}
        </div>
      </footer>
    </blockquote>
  );
}
