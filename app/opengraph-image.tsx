import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Public Journey — Build your SaaS in public";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial fade overlay bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 110%, white 0%, transparent 100%)",
          }}
        />

        {/* PUBLIC JOURNEY watermark */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: "-4px",
            background: "linear-gradient(to right, #a78bfa, #60a5fa, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 0.85,
            display: "flex",
            justifyContent: "center",
          }}
        >
          PUBLIC JOURNEY
        </div>

        {/* Main card */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 120,
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#f5f3ff",
              border: "1px solid #ede9fe",
              borderRadius: 999,
              padding: "8px 16px",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#7c3aed",
              }}
            />
            <span style={{ fontSize: 16, fontWeight: 600, color: "#7c3aed" }}>
              Early access — limited spots
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#030712",
              textAlign: "center",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>Build your SaaS in public</span>
            <span
              style={{
                background: "linear-gradient(to right, #a78bfa, #60a5fa, #22d3ee)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              with a page people follow.
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "#6b7280",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            One public page for your roadmap, progress, waitlist and updates.
          </div>
        </div>

        {/* Bottom URL pill */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: 999,
            padding: "10px 24px",
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 600, color: "#9ca3af" }}>
            journey.page
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
