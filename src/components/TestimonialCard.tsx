import { Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
}

export default function TestimonialCard({
  testimonial,
  compact = false,
}: TestimonialCardProps) {
  const quote =
    compact && testimonial.shortQuote
      ? testimonial.shortQuote
      : testimonial.quote;

  return (
    <div className="relative card-dark p-8 md:p-10">
      {/* Quote mark accent */}
      <div className="absolute top-6 left-8 text-stone font-serif text-6xl leading-none select-none" aria-hidden="true">
        &ldquo;
      </div>

      <div className="relative pt-6">
        <p className="text-earth leading-relaxed italic text-sm md:text-base">
          {quote}
        </p>

        <div className="mt-6 pt-6 border-t border-stone flex items-center gap-4">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={`${testimonial.name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-amber-light flex items-center justify-center text-amber font-medium text-sm">
              {testimonial.name[0]}
            </div>
          )}
          <div>
            <p className="text-deep font-medium text-sm">
              {testimonial.name}
            </p>
            {(testimonial.title || testimonial.company) && (
              <p className="text-warm-gray text-xs">
                {[testimonial.title, testimonial.company]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
