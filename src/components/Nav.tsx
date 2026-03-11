"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteContent } from "@/lib/site-content";

const links = siteContent.nav.links;
const cta = siteContent.nav.cta;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-stone/60 shadow-soft"
          : "border-b border-transparent"
      }`}
      style={{
        background: scrolled
          ? "rgba(26, 23, 20, 0.95)"
          : "rgba(26, 23, 20, 0.80)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-deep hover:text-amber transition-colors"
        >
          {siteContent.siteName}
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-earth hover:text-deep transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center px-5 py-2 bg-amber text-sand text-[13px] font-medium tracking-wide rounded-soft hover:opacity-85 transition-all ml-2"
          >
            {cta.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-earth hover:text-deep transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t border-stone/50"
          style={{
            background: "rgba(26, 23, 20, 0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-earth hover:text-deep transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone/50">
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber text-sand text-sm font-medium tracking-wide rounded-soft hover:opacity-85 transition-colors"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
