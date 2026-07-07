import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// Route metadata for the generated Open Graph / Twitter card image.
export const alt = "Ashish — Software Engineer | DTU";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.45), transparent 55%), radial-gradient(circle at 85% 80%, rgba(217,70,239,0.4), transparent 55%), #0a0a0f",
          color: "#f5f3ff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c4b5fd",
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 700,
            marginTop: 12,
            background: "linear-gradient(120deg, #c4b5fd, #a78bfa 42%, #f0abfc)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.name}
        </div>
        <div style={{ fontSize: 44, marginTop: 8, color: "#e9d5ff" }}>
          {`${profile.title} · Full-Stack Developer`}
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#a1a1aa" }}>
          React · Next.js · TypeScript · Data Analysis
        </div>
      </div>
    ),
    { ...size }
  );
}
