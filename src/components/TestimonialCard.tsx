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
    <div className="relative bg-white border border-stone-200 rounded-softer p-8 md:p-10 shadow-soft hover:shadow-medium transition-all duration-300">
      {/* Quote mark accent */}
      <div className="absolute top-6 left-8 text-sage-200 font-serif text-6xl leading-none select-none" aria-hidden="true">
        &ldquo;
      </div>

      <div className="relative pt-6">
        <p className="text-stone-600 leading-relaxed italic text-sm md:text-base">
          {quote}
        </p>

        <div className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-4">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={`${testimonial.name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-medium text-sm">
              {testimonial.name[0]}
            </div>
          )}
          <div>
            <p className="text-charcoal-700 font-medium text-sm">
              {testimonial.name}
            </p>
            {(testimonial.title || testimonial.company) && (
              <p className="text-stone-500 text-xs">
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
