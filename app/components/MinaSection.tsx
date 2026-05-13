"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ── ESCENA 1: Fullscreen render MINA con nombre superpuesto ── */
function SceneCinematic() {
  const { ref, visible } = useReveal(0.04);
  const r = (d = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 1.7s ${ease} ${d}s, transform 1.7s ${ease} ${d}s`,
  });

  return (
    <div
      ref={ref}
      style={{ position: "relative", height: "100svh", minHeight: "600px", overflow: "hidden" }}
    >
      <Image
        src="/images/mina-2.jpg"
        alt="MINA Cap Cana — Arquitectura tropical contemporánea"
        fill
        sizes="100vw"
        unoptimized
        style={{ objectFit: "cover", objectPosition: "55% center" }}
      />

      {/* Overlay degradado */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(to top, rgba(10,13,8,0.92) 0%, rgba(10,13,8,0.45) 30%, rgba(10,13,8,0.12) 55%, rgba(10,13,8,0.02) 100%)",
        }}
      />

      {/* Label top */}
      <div
        style={{
          ...r(0.1),
          position: "absolute", top: "3rem", left: "2.5rem", zIndex: 2,
          display: "flex", alignItems: "center", gap: "1rem",
        }}
      >
        <span style={{ display: "block", width: "20px", height: "1px", background: "#D0DF00", boxShadow: "0 0 8px rgba(0,0,0,0.8)" }} />
        <span style={{ color: "#D0DF00", fontSize: "9px", letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", fontWeight: 700, textShadow: "0 1px 12px rgba(0,0,0,1), 0 0 24px rgba(0,0,0,0.9)" }}>
          Proyecto Estrella · Cap Cana
        </span>
      </div>

      {/* Nombre + copy — zona inferior */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
          padding: "0 2.5rem 4rem",
          maxWidth: "1280px", margin: "0 auto",
        }}
      >
        <h2
          style={{
            ...r(0.25),
            fontFamily: "var(--font-arimo)",
            fontSize: "clamp(5rem, 13vw, 13rem)",
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            color: "#f5f0e8",
          }}
        >
          MINA
        </h2>
        <p
          style={{
            ...r(0.45),
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1rem, 2vw, 1.75rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(245,240,232,0.72)",
            marginTop: "0.4rem",
            letterSpacing: "-0.01em",
            textShadow: "0 1px 16px rgba(0,0,0,0.9)",
          }}
        >
          30 residencias exclusivas · Cap Cana.
        </p>
        <p
          style={{
            ...r(0.6),
            fontFamily: "var(--font-arimo)",
            fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
            fontWeight: 100,
            color: "#f5f0e8",
            marginTop: "0.6rem",
            letterSpacing: "-0.02em",
            textShadow: "0 1px 16px rgba(0,0,0,0.8)",
          }}
        >
          Desde USD $280.000
        </p>
      </div>
    </div>
  );
}

/* ── ESCENA 2: Split — imagen izquierda + panel crema derecha ── */
function SceneSplit() {
  const { ref, visible } = useReveal(0.04);
  const r = (d = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 1.5s ${ease} ${d}s, transform 1.5s ${ease} ${d}s`,
  });

  return (
    <div ref={ref} style={{ display: "grid" }} className="mina-split">
      {/* Imagen izquierda */}
      <div style={{ position: "relative", minHeight: "600px" }}>
        <Image
          src="/images/mina-1.jpg"
          alt="MINA Cap Cana — Entrada"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
          style={{ objectFit: "cover", objectPosition: "70% center" }}
        />
      </div>

      {/* Panel crema derecha */}
      <div
        style={{
          background: "#ffffff",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "6rem 4.5rem",
        }}
      >
        <span style={{ ...r(0.1), color: "#78BE21", fontSize: "9px", letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ display: "block", width: "16px", height: "1px", background: "#78BE21" }} />
          Cap Cana · Boutique
        </span>

        <h3
          style={{
            ...r(0.2),
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 3vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#78BE21",
            marginTop: "1.5rem",
          }}
        >
          Curado para quienes
          <br />
          <em style={{ fontStyle: "italic", color: "rgba(16,24,32,0.38)" }}>valoran la privacidad</em>
          <br />
          y la atmósfera.
        </h3>

        {/* Stats 2×2 */}
        <div style={{ ...r(0.35), display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "rgba(120,190,33,0.08)", marginTop: "3rem" }}>
          {[
            { v: "30", l: "Residencias boutique" },
            { v: "1–2 Hab.", l: "+ Penthouses" },
            { v: "Atelier Reach", l: "Arquitectos" },
            { v: "Las Iguanas", l: "Golf · Cap Cana" },
          ].map((s) => (
            <div key={s.l} style={{ background: "#ffffff", padding: "1.75rem 1.5rem" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.3rem, 2vw, 1.9rem)", fontWeight: 700, color: "#78BE21", lineHeight: 1.1 }}>
                {s.v}
              </div>
              <p style={{ fontFamily: "var(--font-arimo)", fontSize: "9px", letterSpacing: "0.16em", color: "rgba(16,24,32,0.38)", marginTop: "0.4rem", textTransform: "uppercase", fontWeight: 300 }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>

        {/* Atributos */}
        <div style={{ ...r(0.5), marginTop: "2.5rem" }}>
          {[
            "Piscina semi-olímpica en azotea",
            "Vida indoor-outdoor",
            "Conserjería & resort privado",
            "Tecnología de hogar inteligente",
          ].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.875rem 0", borderBottom: "1px solid rgba(16,24,32,0.07)" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#78BE21", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-arimo)", fontSize: "13px", color: "rgba(16,24,32,0.52)", fontWeight: 300 }}>{item}</span>
            </div>
          ))}
        </div>

        <a
          href="#contacto"
          style={{
            ...r(0.65),
            marginTop: "2.5rem",
            display: "inline-flex", alignItems: "center", gap: "1.25rem",
            background: "#101820", color: "#f5f0e8",
            fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase",
            fontFamily: "var(--font-arimo)", fontWeight: 400,
            padding: "1rem 2.25rem", textDecoration: "none",
            transition: "background 0.4s, color 0.4s",
            alignSelf: "flex-start",
          }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#78BE21"; el.style.color = "#101820"; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#101820"; el.style.color = "#f5f0e8"; }}
        >
          Solicitar Disponibilidad
        </a>
      </div>

      <style>{`.mina-split { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .mina-split { grid-template-columns: 1fr; } }`}</style>
    </div>
  );
}

/* ── ESCENA 3: Cita arquitectónica sobre oscuro ── */
function SceneQuote() {
  const { ref, visible } = useReveal(0.06);
  return (
    <div
      ref={ref}
      style={{
        background: "#78BE21",
        padding: "7rem 2.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(1.4rem, 2.8vw, 2.5rem)",
          fontStyle: "italic",
          color: "#f5f0e8",
          fontWeight: 700,
          lineHeight: 1.4,
          maxWidth: "720px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 1.6s ${ease} 0.1s, transform 1.6s ${ease} 0.1s`,
        }}
      >
        "Una escala boutique que convierte la residencia en experiencia —
        y la inversión en legado."
      </p>
      <p style={{
        fontFamily: "var(--font-arimo)", fontSize: "9px", letterSpacing: "0.28em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.65)",
        marginTop: "2rem",
        opacity: visible ? 1 : 0, transition: `opacity 1.4s ${ease} 0.35s`,
      }}>
        Atelier Reach Architects · Las Iguanas Golf, Cap Cana
      </p>
    </div>
  );
}

export default function MinaSection() {
  return (
    <section id="mina">
      <SceneCinematic />
      <SceneSplit />
      <SceneQuote />
    </section>
  );
}
