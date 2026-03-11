import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Here | Jack Rosenkrantz",
  description:
    "Tell us what you're navigating. We'll connect you with the right path — whether that's The Portal, a conversation with Jack, or both.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    title: "Start Here | Jack Rosenkrantz",
    description:
      "Tell us what you're navigating. We'll connect you with the right path.",
    url: "https://coachjack.xyz/start",
  },
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
