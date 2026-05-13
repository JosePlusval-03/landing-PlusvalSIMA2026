"use client";

import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const { ref, visible } = useReveal(0.04);
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <section
      id="proyectos"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "#040303", position: "relative" }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "8rem 2.5rem 5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 1.4s ${ease}, transform 1.4s ${ease}`,
        }}
      >
        <span
          style={{
            display: "inline-flex", alignItems: "center", gap: "1rem",
            color: "#c49a3c", fontSize: "9px", letterSpacing: "0.32em",
            textTransform: "uppercase", fontFamily: "var(--font-inter)", fontWeight: 400,
          }}
        >
          <span style={{ display: "block", width: "24px", height: "1px", background: "#c49a3c" }} />
          Proyectos
        </span>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          minHeight: "90vh",
        }}
        className="cards-grid"
      >
        {/* MINA */}
        <a
          href="#mina"
          className="grain"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "3.5rem",
            minHeight: "80vh",
            textDecoration: "none",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse 80% 70% at 45% 35%, #231608 0%, #120d06 50%, #080604 100%)",
            cursor: "pointer",
            transition: "filter 0.8s ease",
          }}
        >
          {/* Badge */}
          <span
            style={{
              position: "absolute", top: "2.5rem", left: "2.5rem",
              background: "#c49a3c",
              color: "#070604",
              fontSize: "8px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              padding: "0.5rem 1rem",
            }}
          >
            Proyecto Estrella
          </span>

          <div>
            <span style={{ color: "rgba(240,234,222,0.25)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              Cap Cana · Boutique
            </span>
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(3.5rem, 6vw, 6rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
                color: "#f0eade",
                marginTop: "0.75rem",
              }}
            >
              MINA
            </h3>
            <p style={{ color: "rgba(240,234,222,0.35)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-inter)", marginTop: "1rem" }}>
              Las Iguanas Golf · Cap Cana
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 1.4vw, 1.3rem)", fontStyle: "italic", color: "rgba(240,234,222,0.45)", marginTop: "1.5rem", fontWeight: 300 }}>
              Treinta residencias en quieto equilibrio.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "2.5rem" }}>
              <span style={{ color: "#c49a3c", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-inter)", fontWeight: 400 }}>
                Descubrir
              </span>
              <span style={{ display: "block", height: "1px", width: "32px", background: "#c49a3c" }} />
            </div>
          </div>
        </a>

        {/* Salado */}
        <a
          href="#salado"
          className="grain"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "3.5rem",
            textDecoration: "none",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse 80% 70% at 55% 45%, #10150e 0%, #0b0e09 50%, #060706 100%)",
            borderLeft: "1px solid rgba(255,255,255,0.03)",
            cursor: "pointer",
          }}
        >
          <div>
            <span style={{ color: "rgba(240,234,222,0.25)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              Punta Cana · Contemporáneo
            </span>
            <h3
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
                color: "#f0eade",
                marginTop: "0.75rem",
              }}
            >
              Salado<br />
              <em style={{ fontStyle: "italic", fontSize: "0.7em", color: "rgba(240,234,222,0.4)" }}>III</em>
            </h3>
            <p style={{ color: "rgba(240,234,222,0.35)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-inter)", marginTop: "1rem" }}>
              White Sands · Punta Cana
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 1.3vw, 1.2rem)", fontStyle: "italic", color: "rgba(240,234,222,0.45)", marginTop: "1.5rem", fontWeight: 300 }}>
              Desde USD $153.000.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "2.5rem" }}>
              <span style={{ color: "#c49a3c", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-inter)", fontWeight: 400 }}>
                Descubrir
              </span>
              <span style={{ display: "block", height: "1px", width: "32px", background: "#c49a3c" }} />
            </div>
          </div>
        </a>
      </div>

      <style>{`
        .cards-grid { grid-template-columns: 3fr 2fr; }
        @media (max-width: 768px) { .cards-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
