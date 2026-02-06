import Link from "next/link";
import { siteContent } from "@/lib/site-content";

const navLinks = siteContent.footer.navLinks;
const resourceLinks = siteContent.footer.resourceLinks;
const social = siteContent.footer.social;
const externalLinks = siteContent.footer.externalLinks;
const nap = siteContent.footer.nap;

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-stone-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & NAP */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl text-cream-100 hover:text-sage-400 transition-colors"
            >
              {siteContent.siteName}
            </Link>
            <p className="mt-2 text-sm text-stone-400">
              {nap.title} | {nap.location}
            </p>
            <p className="mt-1 text-sm text-stone-400">
              {nap.email}
            </p>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              {siteContent.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-cream-100 mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-cream-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-cream-100 mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-cream-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-cream-100 mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteContent.email}`}
                className="text-stone-400 hover:text-cream-100 transition-colors"
              >
                {siteContent.email}
              </a>
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-cream-100 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-cream-100 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Service Area + Copyright */}
        <div className="mt-12 pt-8 border-t border-charcoal-600 text-center text-sm text-stone-500">
          <p className="mb-2">{siteContent.footer.serviceArea}</p>
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
