"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#78BE21",
        borderTop: "1px solid rgba(16,24,32,0.08)",
        padding: "4rem 2.5rem 3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {/* Top row */}
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", flexWrap: "wrap" }}>
            {[
              { label: "MINA Cap Cana", href: "#mina" },
              { label: "Salado III", href: "#salado" },
              { label: "Contacto", href: "#contacto" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ color: "rgba(16,24,32,0.55)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-arimo)", textDecoration: "none", fontWeight: 300, transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.9)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.55)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a href="https://wa.me/18094000000" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(16,24,32,0.55)", transition: "color 0.3s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.9)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.55)")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://instagram.com/plusvalpuntacana" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(16,24,32,0.55)", transition: "color 0.3s" }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.9)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(16,24,32,0.55)")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-arimo)", fontSize: "10px", color: "rgba(16,24,32,0.5)", fontWeight: 300, letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Plusval Punta Cana · SIMA Madrid 2026
          </p>
          <p style={{ fontFamily: "var(--font-arimo)", fontSize: "10px", color: "rgba(16,24,32,0.38)", fontWeight: 300, maxWidth: "480px", textAlign: "right", lineHeight: 1.7 }}>
            Información con fines de presentación. Las inversiones inmobiliarias están sujetas al riesgo de mercado.
          </p>
        </div>
      </div>
    </footer>
  );
}
