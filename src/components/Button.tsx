import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 rounded-soft text-sm font-medium tracking-wide transition-all duration-200";

  const variants = {
    primary:
      "bg-charcoal-700 text-cream-100 hover:bg-charcoal-600 active:bg-charcoal-500 shadow-soft hover:shadow-medium",
    secondary:
      "border border-stone-400 text-stone-700 hover:border-stone-600 hover:text-charcoal-700 active:bg-cream-200",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
