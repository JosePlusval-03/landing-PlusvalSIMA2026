"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8, suffix: "M+", label: "Visitantes internacionales al año", sub: "Uno de los destinos más visitados del Caribe" },
  { value: 12, suffix: "%", label: "Crecimiento turístico anual", sub: "Trayectoria ascendente sostenida desde 2021" },
  { value: 30, suffix: "%+", label: "Rentabilidad bruta potencial", sub: "Mercado de alquiler vacacional (Airbnb, VRBO)" },
  { value: 300, suffix: "+", label: "Rutas directas internacionales", sub: "Aeropuerto Internacional de Punta Cana" },
];

const razones = [
  {
    num: "01",
    titulo: "Ubicación Estratégica",
    cuerpo:
      "Posicionado entre dos mares, Cap Cana ofrece una conectividad sin igual — a 30 minutos del aeropuerto más activo de la región y puerta de entrada al Caribe.",
  },
  {
    num: "02",
    titulo: "Rentabilidad Comprobada",
    cuerpo:
      "Rendimientos netos de alquiler a corto plazo entre el 8 y el 12% anual atraen a family offices e inversores individuales. Historial demostrado a través de operadores hoteleros de lujo.",
  },
  {
    num: "03",
    titulo: "Demanda de Turismo de Lujo",
    cuerpo:
      "Four Seasons, Ritz-Carlton y Aman han puesto sus ojos en la región. La demanda de alojamiento ultra-premium supera la oferta en todas las categorías.",
  },
  {
    num: "04",
    titulo: "Activo en USD",
    cuerpo:
      "Un mercado inmobiliario completamente dolarizado. Valoraciones estables, marcos legales transparentes y condiciones fiscales favorables para el comprador internacional.",
  },
  {
    num: "05",
    titulo: "Estilo de Vida Caribeño",
    cuerpo:
      "18 campos de golf, 48 km de playas de arena blanca, marinas de clase mundial y una escena gastronómica que rivaliza con el Mediterráneo. Vida, no solo inversión.",
  },
  {
    num: "06",
    titulo: "Comunidad Internacional",
    cuerpo:
      "Una próspera comunidad de residentes de Norteamérica, Europa y América Latina crea un entorno cosmopolita dinámico y sofisticado.",
  },
];

function useCounter(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, sub, started }: { value: number; suffix: string; label: string; sub: string; started: boolean }) {
  const count = useCounter(value, 1800, started);
  return (
    <div className="border-t border-[#c8983f]/20 pt-8">
      <div
        style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.8rem, 4.5vw, 4rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em", color: "#c8983f" }}
      >
        {count}
        <span style={{ fontSize: "0.5em", letterSpacing: "0em" }}>{suffix}</span>
      </div>
      <p className="mt-3 text-[#0e0e0e] text-sm font-medium tracking-wide"
        style={{ fontFamily: "var(--font-inter)" }}>
        {label}
      </p>
      <p className="mt-1 text-[#0e0e0e]/45 text-xs leading-relaxed font-light"
        style={{ fontFamily: "var(--font-inter)" }}>
        {sub}
      </p>
    </div>
  );
}

export default function WhyPuntaCana() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="destino" ref={ref} className="bg-[#faf8f3] py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Cabecera editorial */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 mb-24">
          <div>
            <span
              className="inline-flex items-center gap-3 text-[#c8983f] tracking-ultra text-[10px] uppercase mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="block w-8 h-px bg-[#c8983f]" />
              El Destino
            </span>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em" }}
              className="text-[#0e0e0e]"
            >
              Por Qué el Capital
              <br />
              <em style={{ fontStyle: "italic" }}>Más Inteligente del Mundo</em>
              <br />
              Fluye a Punta Cana
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[#0e0e0e]/55 text-base lg:text-lg font-light leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}>
              Cap Cana y Punta Cana se han convertido en la dirección más buscada del Caribe
              para inversores internacionales, buscadores de estilo de vida y familias exigentes.
              Una convergencia perfecta de geografía, infraestructura y visión.
            </p>
            <a
              href="#contacto"
              className="mt-8 self-start inline-flex items-center gap-3 text-[#0e0e0e] text-[10px] tracking-ultra uppercase font-medium group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Solicitar Informe de Inversión
              <span className="block h-px bg-[#c8983f] w-6 group-hover:w-10 transition-all duration-400" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-28">
          {stats.map((s) => <StatCard key={s.label} {...s} started={started} />)}
        </div>

        {/* Grid de razones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c8983f]/10">
          {razones.map((r) => (
            <div key={r.num} className="bg-[#faf8f3] hover:bg-[#f2ede4] transition-colors duration-500 p-10 lg:p-12 group">
              <span
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.8rem", fontWeight: 300, color: "#c8983f", opacity: 0.2, lineHeight: 1 }}
              >
                {r.num}
              </span>
              <h3
                className="mt-4 text-[#0e0e0e] font-medium tracking-wide text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {r.titulo}
              </h3>
              <p className="mt-3 text-[#0e0e0e]/50 text-sm font-light leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}>
                {r.cuerpo}
              </p>
            </div>
          ))}
        </div>

        {/* Banda inferior */}
        <div className="mt-20 bg-[#0e0e0e] px-10 lg:px-16 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <p
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)", fontWeight: 300, color: "#faf8f3", lineHeight: 1.4 }}
          >
            El <em style={{ fontStyle: "italic", color: "#c8983f" }}>Aeropuerto Internacional de Punta Cana</em> conecta
            con más de 300 rutas directas a Europa, Norteamérica y América Latina.
          </p>
          <a
            href="#contacto"
            className="shrink-0 border border-[#c8983f]/50 text-[#c8983f] hover:bg-[#c8983f] hover:text-[#080808] text-[10px] tracking-ultra uppercase px-8 py-4 transition-all duration-400 whitespace-nowrap"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Conocer el Equipo
          </a>
        </div>
      </div>
    </section>
  );
}
