"use client";

import Image from "next/image";
import { useReveal } from "../hooks/useReveal";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ── ESCENA 1: Fullscreen render SALADO III hero ── */
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
        src="/images/salado-pool.png"
        alt="Salado III — Punta Cana, piscina tropical"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "50% 58%" }}
      />

      {/* Overlay — sky breathes, text anchors at bottom */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(to top, rgba(10,13,8,0.92) 0%, rgba(10,13,8,0.4) 32%, rgba(10,13,8,0.08) 58%, rgba(10,13,8,0.01) 100%)",
        }}
      />
      {/* Dark vignette top-left — ensures label legibility on bright sky */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 38% at 12% 10%, rgba(10,13,8,0.85) 0%, transparent 70%)",
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
          White Sands · Punta Cana
        </span>
      </div>

      {/* Nombre + precio — zona inferior */}
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
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(5rem, 13vw, 13rem)",
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            color: "#f5f0e8",
          }}
        >
          Salado <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.32)" }}>III</em>
        </h2>

        <div
          style={{
            ...r(0.45),
            display: "flex", alignItems: "baseline", gap: "1.5rem",
            marginTop: "0.6rem", flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-arimo)",
              fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)",
              fontWeight: 100,
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
              textShadow: "0 1px 16px rgba(0,0,0,0.8)",
            }}
          >
            Desde USD $153.000
          </span>
          <span style={{ fontFamily: "var(--font-arimo)", fontSize: "10px", letterSpacing: "0.25em", color: "rgba(245,240,232,0.65)", textTransform: "uppercase", fontWeight: 300, textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}>
            Bienestar · Rentabilidad
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── ESCENA 2: Grid editorial 3 renders ── */
function SceneGrid() {
  const { ref, visible } = useReveal(0.04);
  const r = (d = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 1.5s ${ease} ${d}s`,
  });

  return (
    <div ref={ref} style={{ background: "#0a0d08" }}>
      {/* Grid — large left + two stacked right */}
      <div style={{ display: "grid" }} className="salado-grid-layout">
        {/* Imagen grande izquierda */}
        <div style={{ ...r(0.1), position: "relative", minHeight: "580px" }}>
          <Image
            src="/images/salado-bar.png"
            alt="Salado III — Pool bar"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            style={{ objectFit: "cover", objectPosition: "50% 45%" }}
          />
        </div>

        {/* Stack derecha */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ ...r(0.22), position: "relative", flex: 1, minHeight: "290px" }}>
            <Image
              src="/images/salado-4.png"
              alt="Salado III — Zona lounge tropical"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }}
            />
          </div>
          <div style={{ ...r(0.38), position: "relative", flex: 1, minHeight: "290px" }}>
            <Image
              src="/images/salado-terrace.png"
              alt="Salado III — Terraza"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>
      </div>

      <style>{`.salado-grid-layout { grid-template-columns: 58fr 42fr; } @media (max-width: 768px) { .salado-grid-layout { grid-template-columns: 1fr; } }`}</style>
    </div>
  );
}

/* ── ESCENA 3: Panel crema — detalles + CTA ── */
function SceneDetails() {
  const { ref, visible } = useReveal(0.04);
  const r = (d = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 1.5s ${ease} ${d}s, transform 1.5s ${ease} ${d}s`,
  });

  return (
    <div
      ref={ref}
      style={{ background: "#ffffff", padding: "7rem 2.5rem 8rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "grid" }} className="salado-details-grid">
          <div>
            <span style={{ ...r(0.1), color: "#78BE21", fontSize: "9px", letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "block", width: "16px", height: "1px", background: "#78BE21" }} />
              Inversión Inteligente
            </span>
            <h3
              style={{
                ...r(0.2),
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#78BE21",
                marginTop: "1.5rem",
              }}
            >
              Vivir bien.
              <br />
              <em style={{ fontStyle: "italic", color: "rgba(16,24,32,0.36)" }}>Invertir mejor.</em>
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "0.5rem" }}>
            <p style={{ ...r(0.3), fontFamily: "var(--font-arimo)", fontSize: "13px", color: "rgba(16,24,32,0.45)", lineHeight: 1.85, fontWeight: 300, maxWidth: "380px" }}>
              Comunidad de bienestar contemporáneo. Diseñada para quienes esperan rentabilidad y calidad de vida en igual medida.
            </p>
          </div>
        </div>

        {/* Métricas */}
        <div
          style={{
            ...r(0.4),
            display: "grid",
            marginTop: "5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(16,24,32,0.08)",
          }}
          className="salado-metrics"
        >
          {[
            { v: "Terminaciones de primera", l: "Materiales de altos estándares" },
            { v: "Airbnb", l: "Optimizado para renta corta" },
            { v: "1–3 Habitaciones", l: "Unidades disponibles" },
            { v: "White Sands", l: "Corredor alto acceso, Punta Cana" },
          ].map((m, i) => (
            <div
              key={m.l}
              style={{
                paddingRight: "2rem",
                borderRight: i < 3 ? "1px solid rgba(16,24,32,0.07)" : "none",
                paddingLeft: i > 0 ? "2rem" : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", fontWeight: 700, color: "#78BE21", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                {m.v}
              </div>
              <p style={{ fontFamily: "var(--font-arimo)", fontSize: "9px", letterSpacing: "0.15em", color: "rgba(16,24,32,0.36)", marginTop: "0.75rem", textTransform: "uppercase", fontWeight: 300, lineHeight: 1.5 }}>
                {m.l}
              </p>
            </div>
          ))}
        </div>

        {/* Amenidades + CTA */}
        <div
          style={{
            ...r(0.55),
            display: "grid",
            gap: "4rem",
            marginTop: "4rem",
            alignItems: "end",
          }}
          className="salado-amenidades"
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1px", background: "rgba(16,24,32,0.07)" }}>
            {[
              "Piscinas", "Yoga deck", "Co-working", "Café Lounge",
              "Gimnasio", "Acceso playa", "Social Club", "Airbnb OK",
            ].map((a) => (
              <div key={a} style={{ background: "#ffffff", padding: "1rem 1.5rem", flexGrow: 1, minWidth: "130px" }}>
                <span style={{ fontFamily: "var(--font-arimo)", fontSize: "11px", color: "rgba(16,24,32,0.48)", fontWeight: 300, letterSpacing: "0.04em" }}>{a}</span>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#contacto"
              style={{
                display: "inline-flex", alignItems: "center", gap: "1.25rem",
                background: "#101820", color: "#f5f0e8",
                fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase",
                fontFamily: "var(--font-arimo)", fontWeight: 400,
                padding: "1rem 2.25rem", textDecoration: "none",
                transition: "background 0.4s, color 0.4s",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#78BE21"; el.style.color = "#101820"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#101820"; el.style.color = "#f5f0e8"; }}
            >
              Recibir Detalles de Inversión
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .salado-details-grid { grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end; }
        .salado-metrics { grid-template-columns: repeat(4, 1fr); }
        .salado-amenidades { grid-template-columns: 3fr 1fr; }
        @media (max-width: 900px) {
          .salado-details-grid { grid-template-columns: 1fr; gap: 2rem; }
          .salado-metrics { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .salado-metrics > div { border-right: none !important; padding: 0 !important; border-top: 1px solid rgba(16,24,32,0.07); padding-top: 1.5rem !important; }
          .salado-amenidades { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </div>
  );
}

export default function SaladoSection() {
  return (
    <section id="salado">
      <SceneCinematic />
      <SceneGrid />
      <SceneDetails />
    </section>
  );
}
