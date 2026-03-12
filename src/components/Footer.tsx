import Link from "next/link";
import { siteContent } from "@/lib/site-content";

const coachingLinks = [
  { href: "/coaching/for-founders", label: "Founders" },
  { href: "/coaching/for-ceos", label: "CEOs" },
  { href: "/coaching/for-executives-in-transition", label: "Executives in Transition" },
  { href: "/coaching/for-high-performers", label: "High Performers" },
  { href: "/coaching/for-leadership-coaching", label: "Leadership Coaching" },
];

const resourceLinks = [
  { href: "/resources/what-is-executive-coaching", label: "What Is Executive Coaching?" },
  { href: "/resources/executive-coaching-cost", label: "Executive Coaching Cost" },
  { href: "/resources/how-to-choose-an-executive-coach", label: "How to Choose a Coach" },
  { href: "/resources/executive-coaching-vs-therapy", label: "Coaching vs. Therapy" },
  { href: "/resources/nervous-system-coaching-for-leaders", label: "Nervous System Coaching" },
];

const locationLinks = [
  { href: "/coaching/in-phoenix", label: "Phoenix" },
  { href: "/coaching/in-scottsdale", label: "Scottsdale" },
  { href: "/coaching/in-sedona", label: "Sedona" },
  { href: "/coaching/in-tucson", label: "Tucson" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Navigate */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-deep hover:text-amber transition-colors"
            >
              {siteContent.siteName}
            </Link>
            <p className="mt-2 text-sm text-warm-gray mb-6">
              {siteContent.footer.tagline}
            </p>
            <div className="flex flex-col gap-2">
              {siteContent.footer.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-earth hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Coaching */}
          <div>
            <h3 className="font-serif text-deep mb-4 text-base">Coaching</h3>
            <div className="flex flex-col gap-2">
              {coachingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-earth hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-stone/50">
                <p className="text-xs text-warm-gray uppercase tracking-widest mb-2">Locations</p>
                {locationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-earth hover:text-amber transition-colors block mb-1.5"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-deep mb-4 text-base">Resources</h3>
            <div className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-earth hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/resources"
                className="text-sm text-amber hover:text-deep transition-colors mt-1"
              >
                View all resources
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-deep mb-4 text-base">Connect</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteContent.email}`}
                className="text-earth hover:text-amber transition-colors"
              >
                {siteContent.email}
              </a>
              {siteContent.footer.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth hover:text-amber transition-colors"
                >
                  {item.label}
                </a>
              ))}
              {siteContent.footer.externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-earth hover:text-amber transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Service Area + Copyright */}
        <div className="mt-12 pt-8 border-t border-stone text-center text-sm text-warm-gray">
          <p className="mb-2">{siteContent.footer.serviceArea}</p>
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
