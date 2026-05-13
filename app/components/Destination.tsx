"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

const stats = [
  { end: 8, format: (n: number) => `${n}M+`, label: "Visitantes internacionales al año" },
  { end: 300, format: (n: number) => `${n}+`, label: "Rutas directas desde Europa" },
  { end: 30, format: (n: number) => `${n}%+`, label: "Rentabilidad bruta potencial" },
];

function Counter({ end, format, active }: { end: number; format: (n: number) => string; active: boolean }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const DURATION = 2000;
    startRef.current = null;

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, end]);

  return <>{format(value)}</>;
}

export default function Destination() {
  // For section fade-in (triggers early, on section enter)
  const { ref: sectionRef, visible } = useReveal(0.04);
  // For counter animation (triggers when stats div first enters view)
  const { ref: statsRef, visible: statsVisible } = useReveal(0.1);

  const r = (d = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 1.6s ${ease} ${d}s, transform 1.6s ${ease} ${d}s`,
  });

  return (
    <section
      id="destino"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Image
        src="/images/destino-bg.png"
        alt="El Destino — Punta Cana"
        fill
        sizes="100vw"
        quality={90}
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
      />

      {/* Cinematic overlay */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(10,13,8,0.97) 0%, rgba(10,13,8,0.65) 32%, rgba(10,13,8,0.22) 62%, rgba(10,13,8,0.04) 100%)",
      }} />
      {/* Top-left vignette for label */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 45% 35% at 12% 12%, rgba(10,13,8,0.72) 0%, transparent 70%)",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 2.5rem 5rem" }}>

        {/* Label */}
        <div style={{ ...r(0), display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ display: "block", width: "24px", height: "1px", background: "#D0DF00" }} />
          <span style={{ color: "#D0DF00", fontSize: "9px", letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", fontWeight: 700, textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}>
            El Destino
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
          ...r(0.18),
          fontFamily: "var(--font-arimo)",
          fontSize: "clamp(1.9rem, 5.5vw, 5.8rem)",
          fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.022em",
          color: "#f5f0e8", maxWidth: "940px",
        }}>
          Los proyectos inmobiliarios más exclusivos
          <br />
          <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.38)" }}>del Caribe.</em>
        </h2>

        {/* Stats — ref separado para que el counter se active al ver los números */}
        <div
          ref={statsRef}
          style={{ ...r(0.45), display: "grid", marginTop: "4rem", paddingTop: "2.25rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}
          className="dest-stats"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                paddingRight: "2.5rem",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingLeft: i > 0 ? "2.5rem" : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-arimo)", fontSize: "clamp(2.2rem, 4.5vw, 4.2rem)", fontWeight: 100, color: "#f5f0e8", lineHeight: 1, letterSpacing: "-0.04em" }}>
                <Counter end={s.end} format={s.format} active={statsVisible} />
              </div>
              <p style={{ fontFamily: "var(--font-arimo)", fontSize: "10px", letterSpacing: "0.14em", color: "rgba(245,240,232,0.55)", marginTop: "0.85rem", lineHeight: 1.55, fontWeight: 300, textTransform: "uppercase" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dest-stats { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 640px) {
          .dest-stats { grid-template-columns: 1fr; gap: 2rem; }
          .dest-stats > div { border-right: none !important; padding: 0 !important; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1.5rem !important; }
          .dest-stats > div:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}
