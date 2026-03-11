import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-stone">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-deep hover:text-amber transition-colors"
            >
              {siteContent.siteName}
            </Link>
            <p className="mt-2 text-sm text-warm-gray">
              {siteContent.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-deep mb-4">Navigate</h4>
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

          {/* Connect */}
          <div>
            <h4 className="font-serif text-deep mb-4">Connect</h4>
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
