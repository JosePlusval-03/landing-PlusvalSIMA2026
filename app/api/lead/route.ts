import { NextRequest, NextResponse } from "next/server";

const PERFILES: Record<string, string> = {
  inversion: "Inversión",
  vacacional: "Casa Vacacional",
  residencia: "Residencia",
  renta: "Renta",
};

export async function POST(req: NextRequest) {
  const { nombre, email, telefono, pais, interes } = await req.json();

  // 1 — Google Sheet via Apps Script
  try {
    await fetch(process.env.APPS_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, telefono, pais, interes }),
      redirect: "follow",
    });
  } catch (err) {
    console.error("Sheet error:", err);
  }

  // 2 — WhatsApp via CallMeBot
  try {
    const perfil = PERFILES[interes] ?? interes ?? "No especificado";
    const msg = `Nuevo lead SIMA 2026\nNombre: ${nombre}\nEmail: ${email}\nTel: ${telefono || "N/A"}\nPais: ${pais}\nPerfil: ${perfil}`;
    await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=18099784770&text=${encodeURIComponent(msg)}&apikey=${process.env.CALLMEBOT_KEY}`
    );
  } catch (err) {
    console.error("WhatsApp error:", err);
  }

  return NextResponse.json({ ok: true });
}
