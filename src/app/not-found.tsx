import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-warm-gray text-sm uppercase tracking-widest font-medium mb-4">
          Page not found
        </p>
        <h1 className="font-serif text-4xl text-deep mb-4">
          Nothing here.
        </h1>
        <p className="text-earth mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/start" variant="secondary">Start Here</Button>
        </div>
      </div>
    </div>
  );
}
