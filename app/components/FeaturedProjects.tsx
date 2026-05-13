"use client";

const proyectos = [
  {
    id: "mina",
    etiqueta: "Cap Cana · Boutique",
    nombre: "MINA",
    subtitulo: "Cap Cana",
    descripcion:
      "Treinta residencias boutique. Una dirección extraordinaria. MINA redefine el concepto de lujo a través de la arquitectura tropical contemporánea.",
    destacados: ["30 Residencias Boutique", "Piscina Semi-Olímpica en Azotea", "Servicios de Conserjería & Resort", "Las Iguanas Golf, Cap Cana"],
    cta: "Explorar MINA",
    href: "#mina",
    badge: "PROYECTO ESTRELLA",
    grande: true,
    // Gradiente cinematográfico: tonos ámbar profundo y arena
    bg: "radial-gradient(ellipse 110% 90% at 40% 30%, #1e1508 0%, #12100a 50%, #0a0908 100%)",
    acento: "radial-gradient(ellipse 60% 50% at 70% 80%, rgba(180,130,40,0.1) 0%, transparent 60%)",
  },
  {
    id: "salado",
    etiqueta: "Punta Cana · Contemporáneo",
    nombre: "SALADO III",
    subtitulo: "White Sands, Punta Cana",
    descripcion:
      "Una comunidad de bienestar donde el estilo de vida caribeño contemporáneo se encuentra con la inteligencia de la inversión. Desde USD $153.000.",
    destacados: ["Desde USD $153.000", "Bienestar & Co-working", "Apto para Airbnb", "Cerca de la Playa"],
    cta: "Descubrir Salado III",
    href: "#salado",
    badge: null,
    grande: false,
    bg: "radial-gradient(ellipse 100% 80% at 60% 40%, #111510 0%, #0c100b 50%, #080a08 100%)",
    acento: "radial-gradient(ellipse 50% 40% at 30% 70%, rgba(85,102,72,0.12) 0%, transparent 55%)",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="bg-[#0a0a0a] py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Cabecera */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <span
              className="inline-flex items-center gap-3 text-[#c8983f] tracking-ultra text-[10px] uppercase mb-7"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="block w-8 h-px bg-[#c8983f]" />
              Proyectos Destacados
            </span>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#faf8f3" }}
            >
              Residencias Curadas
              <br />
              <em style={{ fontStyle: "italic", color: "#c8983f" }}>para el Exigente</em>
            </h2>
          </div>
          <p
            className="max-w-xs text-white/35 text-sm font-light leading-relaxed lg:text-right"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Cada propiedad es seleccionada por su mérito arquitectónico,
            potencial de inversión y alineación con el estilo de vida internacional de lujo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-5 gap-px bg-white/[0.03]">
          {proyectos.map((p, i) => (
            <a
              key={p.id}
              href={p.href}
              className={`group relative flex flex-col justify-end overflow-hidden min-h-[580px] lg:min-h-[74vh] cursor-pointer ${
                p.grande ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              {/* Fondo */}
              <div className="absolute inset-0 z-0" aria-hidden>
                <div className="absolute inset-0" style={{ background: p.bg }} />
                <div className="absolute inset-0" style={{ background: p.acento }} />
                {/* Grain */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: "200px 200px",
                  }}
                />
                {/* Gradiente ascendente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-600" />
              </div>

              {/* Badge */}
              {p.badge && (
                <div className="absolute top-7 left-7 z-10">
                  <span
                    className="bg-[#c8983f] text-[#080808] tracking-ultra text-[9px] uppercase px-4 py-2"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
                  >
                    {p.badge}
                  </span>
                </div>
              )}

              {/* Contenido */}
              <div className="relative z-10 p-9 lg:p-11">
                <span
                  className="text-white/30 tracking-ultra text-[9px] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {p.etiqueta}
                </span>

                <h3
                  className="mt-3 text-white"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: p.grande ? "clamp(2.5rem, 3.8vw, 3.4rem)" : "clamp(2rem, 2.8vw, 2.8rem)",
                    fontWeight: 300,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.nombre}
                  <br />
                  <span
                    className="text-white/40 tracking-ultra not-italic"
                    style={{ fontSize: "0.35em", fontFamily: "var(--font-inter)", fontWeight: 400 }}
                  >
                    {p.subtitulo}
                  </span>
                </h3>

                <p className="mt-5 text-white/55 text-sm font-light leading-relaxed max-w-xs"
                  style={{ fontFamily: "var(--font-inter)" }}>
                  {p.descripcion}
                </p>

                <ul className="mt-5 flex flex-col gap-2">
                  {p.destacados.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-white/40 text-xs"
                      style={{ fontFamily: "var(--font-inter)" }}>
                      <span className="w-1 h-1 rounded-full bg-[#c8983f] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-8 inline-flex items-center gap-3 text-[#c8983f] tracking-ultra text-[10px] uppercase font-medium group-hover:gap-5 transition-all duration-400"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {p.cta}
                  <span className="block h-px bg-[#c8983f] w-5 group-hover:w-9 transition-all duration-400" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
