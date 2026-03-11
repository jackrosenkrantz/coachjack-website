import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "See How You Actually Operate | The Portal by Jack Rosenkrantz",
  description:
    "A guided AI transformation journey for founders and leaders. Discover the patterns running your leadership, decisions, and life.",
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    title: "See How You Actually Operate | The Portal",
    description:
      "A guided AI transformation journey for founders and leaders.",
    url: "https://coachjack.xyz/start",
  },
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="portal-start">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .portal-start { position: fixed; inset: 0; z-index: 100; overflow-y: auto; background: #1a1714; color: #e8e0d8; }
        .portal-start ::selection { background: #3d352f; color: #e8e0d8; }
      `,
        }}
      />
      {children}
    </div>
  );
}
