"use client";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const paises = [
  "España", "Estados Unidos", "Reino Unido", "Francia", "Alemania", "Italia",
  "Canadá", "México", "Colombia", "Venezuela", "Argentina", "Brasil",
  "Suiza", "Portugal", "República Dominicana", "Otro",
];

const intereses = [
  { v: "inversion", l: "Inversión" },
  { v: "vacacional", l: "Casa Vacacional" },
  { v: "residencia", l: "Residencia" },
  { v: "renta", l: "Renta" },
];

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function ContactForm() {
  const { ref, visible } = useReveal(0.04);
  const [form, setForm] = useState({ nombre: "", email: "", pais: "", telefono: "", interes: "" });
  const [enviado, setEnviado] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section
      id="contacto"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#ffffff",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 2.5rem",
        position: "relative",
      }}
    >
      {/* Subtle radial accent */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(120,190,33,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 2,
          display: "grid",
          alignItems: "start",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 1.6s ${ease}, transform 1.6s ${ease}`,
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <span style={{ color: "#78BE21", fontSize: "9px", letterSpacing: "0.32em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            <span style={{ display: "block", width: "20px", height: "1px", background: "#78BE21" }} />
            Consulta Privada
          </span>

          <h2
            style={{
              fontFamily: "var(--font-arimo)",
              fontSize: "clamp(1.6rem, 5vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#78BE21",
            }}
          >
            Inicia tu
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(16,24,32,0.38)" }}>viaje al Caribe.</em>
          </h2>

          <p style={{ fontFamily: "var(--font-arimo)", fontSize: "13px", color: "rgba(16,24,32,0.45)", lineHeight: 1.9, marginTop: "2.5rem", fontWeight: 300, maxWidth: "360px" }}>
            Nuestro equipo en SIMA Madrid 2026 está disponible para una presentación privada adaptada a tu perfil.
          </p>

          {/* WhatsApp */}
          <a
            href="https://wa.me/18094000000?text=Hola%2C%20vi%20a%20Plusval%20en%20SIMA%20Madrid%202026."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "3rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.875rem",
              color: "rgba(16,24,32,0.5)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "var(--font-arimo)",
              fontWeight: 400,
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.85)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.5)")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#78BE21">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chatear por WhatsApp
          </a>
        </div>

        {/* Right — Form */}
        <div>
          {enviado ? (
            <div style={{ paddingTop: "3rem" }}>
              <div style={{ width: "40px", height: "1px", background: "#78BE21", marginBottom: "2.5rem" }} />
              <h3 style={{ fontFamily: "var(--font-arimo)", fontSize: "2.5rem", fontWeight: 700, color: "#78BE21", lineHeight: 1.15 }}>
                Gracias.<br />
                <em style={{ fontStyle: "italic", color: "rgba(16,24,32,0.38)" }}>Estaremos en contacto.</em>
              </h3>
              <p style={{ fontFamily: "var(--font-arimo)", fontSize: "13px", color: "rgba(16,24,32,0.38)", lineHeight: 1.9, marginTop: "1.5rem", fontWeight: 300 }}>
                Un miembro del equipo se pondrá en contacto en las próximas 24 horas.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}
              style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
            >
              <p style={{ fontFamily: "var(--font-arimo)", fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(16,24,32,0.28)", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(16,24,32,0.08)" }}>
                Presentación Privada
              </p>

              {[
                { name: "nombre", label: "Nombre Completo", type: "text", placeholder: "Tu nombre", req: true },
                { name: "email", label: "Correo Electrónico", type: "email", placeholder: "tu@correo.com", req: true },
                { name: "telefono", label: "Teléfono / WhatsApp", type: "tel", placeholder: "+34 600 000 000", req: false },
              ].map((f) => (
                <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <label style={{ fontFamily: "var(--font-arimo)", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(16,24,32,0.33)", fontWeight: 400 }}>
                    {f.label}{f.req && " *"}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    required={f.req}
                    value={form[f.name as keyof typeof form]}
                    onChange={set}
                    placeholder={f.placeholder}
                    style={{
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(16,24,32,0.12)",
                      padding: "0.75rem 0",
                      fontFamily: "var(--font-arimo)",
                      fontSize: "14px",
                      color: "#78BE21",
                      fontWeight: 300,
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#78BE21")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(16,24,32,0.12)")}
                  />
                </div>
              ))}

              {/* País */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <label style={{ fontFamily: "var(--font-arimo)", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(16,24,32,0.33)", fontWeight: 400 }}>País de Residencia *</label>
                <select
                  name="pais" required value={form.pais} onChange={set}
                  style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(16,24,32,0.12)", padding: "0.75rem 0", fontFamily: "var(--font-arimo)", fontSize: "14px", color: "#78BE21", fontWeight: 300, outline: "none", appearance: "none", cursor: "pointer" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#78BE21")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(16,24,32,0.12)")}
                >
                  <option value="" disabled>Selecciona país</option>
                  {paises.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>

              {/* Interés */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <label style={{ fontFamily: "var(--font-arimo)", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(16,24,32,0.33)", fontWeight: 400 }}>Perfil de Inversión</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                  {intereses.map((opt) => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, interes: opt.v }))}
                      style={{
                        border: `1px solid ${form.interes === opt.v ? "#78BE21" : "rgba(16,24,32,0.1)"}`,
                        background: form.interes === opt.v ? "rgba(120,190,33,0.07)" : "transparent",
                        fontFamily: "var(--font-arimo)",
                        fontSize: "10px",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: form.interes === opt.v ? "#101820" : "rgba(16,24,32,0.38)",
                        padding: "0.875rem 1rem",
                        cursor: "pointer",
                        transition: "all 0.25s",
                        textAlign: "left",
                      }}
                    >
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                style={{
                  background: "#101820",
                  color: "#f5f0e8",
                  fontFamily: "var(--font-arimo)",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  padding: "1.1rem 2.5rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.4s, color 0.4s",
                  alignSelf: "flex-start",
                  marginTop: "0.5rem",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#78BE21"; el.style.color = "#101820"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#101820"; el.style.color = "#f5f0e8"; }}
              >
                Agendar Presentación
              </button>

              <p style={{ fontFamily: "var(--font-arimo)", fontSize: "10px", color: "rgba(16,24,32,0.22)", fontWeight: 300, lineHeight: 1.7, marginTop: "-0.5rem" }}>
                Tu información se gestiona con absoluta discreción.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1fr; gap: 8rem; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
}
