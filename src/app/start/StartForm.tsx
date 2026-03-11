"use client";

import { useState, useTransition } from "react";
import { submitIntake } from "./actions";

const inputStyle: React.CSSProperties = {
  background: "#242019",
  border: "1px solid #3d352f",
  borderRadius: "8px",
  padding: "12px 16px",
  color: "#e8e0d8",
  fontSize: "15px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "var(--font-sans), Inter, sans-serif",
};

const labelStyle: React.CSSProperties = {
  color: "#9a918a",
  fontSize: "13px",
  fontWeight: 500,
  letterSpacing: "0.02em",
  marginBottom: "6px",
  display: "block",
};

export default function StartForm() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitIntake(formData);
      if (result.ok) {
        setSuccess(true);
      } else {
        setError(result.error || "Something went wrong.");
      }
    });
  }

  if (success) {
    return (
      <div
        className="text-center py-12"
        style={{
          animation: "fadeUp 0.6s ease-out forwards",
        }}
      >
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
          style={{ background: "#2e2418" }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c4956a"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2
          className="font-serif text-2xl md:text-3xl mb-4"
          style={{ color: "#e8e0d8" }}
        >
          Check your email
        </h2>
        <p className="text-base mb-10" style={{ color: "#9a918a" }}>
          We sent you a magic link to enter The Portal. It expires in 10
          minutes.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
          <div
            className="p-6 rounded-xl text-center"
            style={{ background: "#242019", border: "1px solid #3d352f" }}
          >
            <div
              className="text-sm font-medium mb-2"
              style={{ color: "#c4956a" }}
            >
              The Portal
            </div>
            <p className="text-xs" style={{ color: "#7a726b" }}>
              AI-guided transformation journey. Check your inbox for the magic
              link.
            </p>
          </div>

          <a
            href={
              process.env.NEXT_PUBLIC_CALENDLY_URL ||
              "https://calendly.com/jackrosenkrantz"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl text-center block transition-all"
            style={{
              background: "#242019",
              border: "1px solid #3d352f",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#7a8b6f")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "#3d352f")
            }
          >
            <div
              className="text-sm font-medium mb-2"
              style={{ color: "#7a8b6f" }}
            >
              Discovery Call
            </div>
            <p className="text-xs" style={{ color: "#7a726b" }}>
              Want to go deeper? Book a real conversation with Jack.
            </p>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            maxLength={100}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#c4956a")}
            onBlur={(e) => (e.target.style.borderColor = "#3d352f")}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            maxLength={254}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#c4956a")}
            onBlur={(e) => (e.target.style.borderColor = "#3d352f")}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" style={labelStyle}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company"
            maxLength={200}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#c4956a")}
            onBlur={(e) => (e.target.style.borderColor = "#3d352f")}
          />
        </div>

        <div>
          <label htmlFor="role" style={labelStyle}>
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="Your role"
            maxLength={200}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#c4956a")}
            onBlur={(e) => (e.target.style.borderColor = "#3d352f")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="navigating" style={labelStyle}>
          What are you navigating right now?
        </label>
        <textarea
          id="navigating"
          name="navigating"
          rows={3}
          placeholder="A transition, a team dynamic, a decision that won't let you sleep..."
          maxLength={1000}
          style={{ ...inputStyle, resize: "vertical" as const, minHeight: "80px" }}
          onFocus={(e) => (e.target.style.borderColor = "#c4956a")}
          onBlur={(e) => (e.target.style.borderColor = "#3d352f")}
        />
      </div>

      <div>
        <label htmlFor="bestSelf" style={labelStyle}>
          What would change if you were operating at your best?
        </label>
        <textarea
          id="bestSelf"
          name="bestSelf"
          rows={3}
          placeholder="The impact you'd have, the clarity you'd feel..."
          maxLength={1000}
          style={{ ...inputStyle, resize: "vertical" as const, minHeight: "80px" }}
          onFocus={(e) => (e.target.style.borderColor = "#c4956a")}
          onBlur={(e) => (e.target.style.borderColor = "#3d352f")}
        />
      </div>

      {error && (
        <p className="text-sm text-center" style={{ color: "#c97b5d" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-lg text-base font-medium transition-all"
        style={{
          background: isPending ? "#7a726b" : "#c4956a",
          color: "#1a1714",
          cursor: isPending ? "wait" : "pointer",
          border: "none",
        }}
        onMouseEnter={(e) => {
          if (!isPending)
            e.currentTarget.style.background = "#d4a57a";
        }}
        onMouseLeave={(e) => {
          if (!isPending)
            e.currentTarget.style.background = "#c4956a";
        }}
      >
        {isPending ? "Setting up your Portal..." : "Begin"}
      </button>

      <p
        className="text-center text-xs"
        style={{ color: "#7a726b" }}
      >
        Free to start &middot; 7-day trial &middot; No credit card required
      </p>
    </form>
  );
}
