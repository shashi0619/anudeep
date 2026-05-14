"use client";

export default function AnimatedOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Amber orb — top right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
          animation: "orbDrift1 18s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />
      {/* Violet orb — bottom left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          bottom: "-20%",
          left: "-15%",
          background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
          animation: "orbDrift2 22s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />
      {/* Blue orb — center left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "40%",
          left: "20%",
          background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
          animation: "orbDrift3 15s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(245,158,11,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
