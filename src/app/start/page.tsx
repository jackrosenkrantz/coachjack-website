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

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4 px-6 text-center">
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "#9a918a" }}
          >
            THE PORTAL
          </p>
        </header>

        {/* Hero */}
        <section className="flex-1 flex items-center justify-center px-6 pb-12">
          <div className="max-w-2xl mx-auto w-full">
            <div className="text-center mb-12">
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-display-sm font-normal mb-6"
                style={{ color: "#e8e0d8", lineHeight: 1.15 }}
              >
                See How You Actually Operate
              </h1>
              <p
                className="text-lg md:text-xl max-w-lg mx-auto"
                style={{ color: "#9a918a", lineHeight: 1.6 }}
              >
                Most leaders optimize without ever seeing the system they're
                optimizing. This changes that.
              </p>
            </div>

            <StartForm />
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-6 px-6 text-center text-xs"
          style={{ color: "#7a726b", borderTop: "1px solid #3d352f" }}
        >
          <p>
            &copy; {new Date().getFullYear()} Jack Rosenkrantz &middot;
            coachjack.xyz
          </p>
        </footer>
      </div>
    </>
  );
}
