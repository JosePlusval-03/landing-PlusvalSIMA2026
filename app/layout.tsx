import type { Metadata } from "next";
import { Cormorant_Garamond, Bodoni_Moda, Arimo } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plusval Punta Cana · SIMA Madrid 2026 · Residencias de Lujo en el Caribe",
  description:
    "Descubre oportunidades exclusivas de inversión en Cap Cana y Punta Cana. Residencias boutique de lujo para el inversor internacional. SIMA Madrid 2026.",
  keywords: [
    "inmobiliaria Punta Cana",
    "residencias de lujo Cap Cana",
    "SIMA Madrid 2026",
    "inversión Caribe",
    "Mina Cap Cana",
    "Salado III",
    "Plusval",
    "residencias lujo República Dominicana",
    "inversión inmobiliaria Caribe",
  ],
  metadataBase: new URL("https://sima2026.plusval.com.do"),
  authors: [{ name: "Plusval Punta Cana" }],
  creator: "Plusval Punta Cana",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sima2026.plusval.com.do",
    siteName: "Plusval Punta Cana",
    title: "Residencias Exclusivas en el Caribe · SIMA Madrid 2026",
    description:
      "Residencias boutique de lujo en Cap Cana y Punta Cana. Curadas para el inversor internacional.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Plusval Punta Cana – SIMA Madrid 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plusval Punta Cana · SIMA Madrid 2026",
    description: "Oportunidades exclusivas de inversión en Cap Cana y Punta Cana.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${bodoni.variable} ${arimo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
