// Soft glowing lavender / violet / magenta orbs bleeding behind all content.
export function OrbBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -left-32 top-[-10%] h-[36rem] w-[36rem] rounded-full opacity-60 blur-[120px]"
        style={{ background: "var(--gradient-orb-1)" }}
      />
      <div
        className="absolute right-[-15%] top-[18%] h-[40rem] w-[40rem] rounded-full opacity-50 blur-[140px]"
        style={{ background: "var(--gradient-orb-2)" }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[34rem] w-[34rem] rounded-full opacity-40 blur-[130px]"
        style={{ background: "var(--gradient-orb-1)" }}
      />
      {/* faint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
