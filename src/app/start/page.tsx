import Link from "next/link";
import StartForm from "./StartForm";
import { createServiceSchema } from "@/components/JsonLd";
import JsonLd from "@/components/JsonLd";

export default function StartPage() {
  return (
    <>
      <JsonLd
        data={createServiceSchema(
          "The Portal — AI-Guided Transformation Journey",
          "A structured 4-phase transformation journey for founders and leaders, guided by AI.",
          "https://coachjack.xyz/start"
        )}
      />

      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="tag mb-6 inline-block">Start Here</span>
          <h1 className="font-serif text-4xl md:text-5xl text-deep mb-6" style={{ lineHeight: 1.15 }}>
            See How You Actually Operate
          </h1>
          <p className="text-lg md:text-xl text-earth max-w-lg mx-auto" style={{ lineHeight: 1.6 }}>
            Tell us what you&apos;re navigating. We&apos;ll connect you with the right path&mdash;whether that&apos;s The Portal, a conversation with Jack, or both.
          </p>
        </div>

        <StartForm />

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-warm-gray hover:text-earth transition-colors text-sm"
          >
            &larr; Back to site
          </Link>
        </div>
      </div>
    </>
  );
}
