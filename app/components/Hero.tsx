"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  const reveal = (delay = 0): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 1.6s ${ease} ${delay}s, transform 1.6s ${ease} ${delay}s`,
  });

  return (
    <section
      id="hero"
      style={{ position: "relative", width: "100%", height: "100svh", minHeight: "600px", overflow: "hidden" }}
    >
      {/* Render MINA — fullscreen */}
      <Image
        src="/images/hero-bg.png"
        alt="Punta Cana — Plusval Inversión Inmobiliaria"
        fill
        priority
        sizes="100vw"
        quality={90}
        style={{ objectFit: "cover", objectPosition: "50% 30%" }}
      />

      {/* Overlay estratificado */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background:
            "linear-gradient(to top, rgba(10,13,8,0.93) 0%, rgba(10,13,8,0.52) 35%, rgba(10,13,8,0.14) 62%, rgba(10,13,8,0.04) 100%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "radial-gradient(ellipse 130% 100% at 50% 50%, transparent 40%, rgba(6,8,5,0.42) 100%)",
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", flexDirection: "column",
          padding: "0 2.5rem 4.5rem",
          maxWidth: "1280px", margin: "0 auto", left: 0, right: 0,
          justifyContent: "flex-end",
        }}
      >
        {/* Badge SIMA — centrado, sin logo */}
        <div
          style={{
            position: "absolute", top: "9rem", left: "50%",
            transform: loaded ? "translateX(-50%)" : "translate(-50%, 12px)",
            opacity: loaded ? 1 : 0,
            transition: `opacity 1.4s ${ease} 0.15s, transform 1.4s ${ease} 0.15s`,
            display: "flex", alignItems: "center", gap: "1.25rem",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "block", width: "40px", height: "1px", background: "rgba(245,240,232,0.35)" }} />
          <span style={{
            color: "rgba(245,240,232,0.88)",
            fontSize: "clamp(10px, 1.2vw, 13px)",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            fontFamily: "var(--font-arimo)",
            fontWeight: 300,
            textShadow: "0 1px 16px rgba(0,0,0,0.9)",
          }}>
            SIMA Madrid 2026
          </span>
          <span style={{ display: "block", width: "40px", height: "1px", background: "rgba(245,240,232,0.35)" }} />
        </div>

        {/* Texto inferior */}
        <div>
          <h1
            style={{
              ...reveal(0.45),
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#f5f0e8",
              maxWidth: "760px",
            }}
          >
            Inversión inmobiliaria en Punta Cana,
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(245,240,232,0.45)" }}>
              Un Destino Fuera de lo Ordinario.
            </em>
          </h1>

          <p
            style={{
              ...reveal(0.65),
              fontFamily: "var(--font-arimo)",
              fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)",
              fontWeight: 300,
              color: "rgba(245,240,232,0.4)",
              letterSpacing: "0.04em",
              marginTop: "1.5rem",
              maxWidth: "400px",
              lineHeight: 1.75,
            }}
          >
            Residencias curadas en Cap Cana y Punta Cana para inversionistas internacionales.
          </p>

          <div
            style={{
              ...reveal(0.85),
              display: "flex", flexWrap: "wrap", gap: "0.875rem",
              marginTop: "2.5rem",
            }}
          >
            <a
              href="#mina"
              style={{
                background: "#78BE21", color: "#101820",
                fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase",
                fontFamily: "var(--font-arimo)", fontWeight: 500,
                padding: "1rem 2.25rem", textDecoration: "none",
                transition: "background 0.4s",
                display: "inline-flex", alignItems: "center",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#8ed42a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#78BE21")}
            >
              Explorar Proyectos
            </a>
            <a
              href="#contacto"
              style={{
                border: "1px solid rgba(245,240,232,0.2)",
                color: "rgba(245,240,232,0.65)",
                fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase",
                fontFamily: "var(--font-arimo)", fontWeight: 400,
                padding: "1rem 2.25rem", textDecoration: "none",
                transition: "background 0.4s, border-color 0.4s, color 0.4s",
                display: "inline-flex", alignItems: "center",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#78BE21"; el.style.borderColor = "#78BE21"; el.style.color = "#101820"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = "rgba(245,240,232,0.2)"; el.style.color = "rgba(245,240,232,0.65)"; }}
            >
              Consulta Privada
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: "2.25rem", right: "2.5rem", zIndex: 2,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: loaded ? 0.4 : 0, transition: `opacity 2s ${ease} 1.4s`,
        }}
      >
        <div style={{ width: "1px", height: "44px", background: "linear-gradient(to bottom, transparent, rgba(120,190,33,0.7), transparent)", animation: "pulse 2s ease infinite" }} />
      </div>
    </section>
  );
}
