import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteContent } from "@/lib/site-content";
import "./globals.css";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteContent.meta.home.title,
    template: "%s",
  },
  description: siteContent.meta.home.description,
  metadataBase: new URL("https://coachjack.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.meta.home.title,
    description: siteContent.meta.home.description,
    url: "https://coachjack.xyz",
    siteName: siteContent.siteName,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
