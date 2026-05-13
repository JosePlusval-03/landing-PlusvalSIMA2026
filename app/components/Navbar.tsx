"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#destino", label: "Destino" },
  { href: "#mina", label: "MINA" },
  { href: "#salado", label: "Salado III" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.8s ease, padding 0.5s ease, border-color 0.8s ease",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(16,24,32,0.08)" : "1px solid transparent",
        padding: scrolled ? "1.25rem 0" : "2rem 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a href="#hero" style={{ flexShrink: 0 }}>
          <Image
            src={scrolled ? "/logos/plusval-dark.png" : "/logos/plusval-white.png"}
            alt="Plusval"
            width={220}
            height={64}
            style={{ height: "clamp(46px, 5.5vw, 62px)", width: "auto", objectFit: "contain", transition: "opacity 0.4s" }}
            priority
          />
        </a>

        {/* Desktop nav — visibility controlled ONLY by CSS class, no inline display */}
        <nav className="nav-desktop" style={{ alignItems: "center", gap: "2.5rem" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: scrolled ? "rgba(16,24,32,0.5)" : "rgba(240,234,222,0.42)",
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "var(--font-arimo)",
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? "rgba(16,24,32,0.9)" : "rgba(240,234,222,0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "rgba(16,24,32,0.5)" : "rgba(240,234,222,0.42)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA — visibility controlled ONLY by CSS class */}
        <a
          href="#contacto"
          className="nav-cta"
          style={{
            border: scrolled ? "1px solid rgba(16,24,32,0.22)" : "1px solid rgba(245,240,232,0.22)",
            color: scrolled ? "rgba(16,24,32,0.65)" : "rgba(245,240,232,0.7)",
            fontSize: "10px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontFamily: "var(--font-arimo)",
            fontWeight: 400,
            padding: "0.75rem 1.75rem",
            textDecoration: "none",
            alignItems: "center",
            transition: "background 0.4s, border-color 0.4s, color 0.4s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#78BE21"; el.style.borderColor = "#78BE21"; el.style.color = "#101820"; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.borderColor = scrolled ? "rgba(16,24,32,0.22)" : "rgba(245,240,232,0.22)"; el.style.color = scrolled ? "rgba(16,24,32,0.65)" : "rgba(245,240,232,0.7)"; }}
        >
          Consulta Privada
        </a>

        {/* Mobile hamburger — visibility controlled ONLY by CSS class */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          aria-label="Menú"
          style={{ flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: "20px", height: "1px",
                background: scrolled ? "rgba(16,24,32,0.6)" : "rgba(240,234,222,0.6)",
                transition: "transform 0.3s, opacity 0.3s",
                transform: open
                  ? i === 0 ? "rotate(45deg) translateY(6px)" : i === 2 ? "rotate(-45deg) translateY(-6px)" : "none"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(10,13,8,0.98)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          maxHeight: open ? "320px" : 0,
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", padding: open ? "2.5rem 1.5rem" : "0 1.5rem" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "rgba(240,234,222,0.45)", fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            style={{ border: "1px solid rgba(245,240,232,0.22)", color: "rgba(245,240,232,0.7)", fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", padding: "0.75rem 2.5rem", textDecoration: "none" }}
          >
            Consulta Privada
          </a>
        </nav>
      </div>

      <style>{`
        .nav-desktop { display: none; }
        .nav-cta    { display: none; }
        .nav-hamburger { display: flex; }
        @media (min-width: 1024px) {
          .nav-desktop   { display: flex; }
          .nav-cta       { display: inline-flex; }
          .nav-hamburger { display: none; }
        }
      `}</style>
    </header>
  );
}
