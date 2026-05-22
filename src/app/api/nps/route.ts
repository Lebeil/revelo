import { NextResponse, type NextRequest } from "next/server";
import { npsSchema } from "@/lib/schemas/nps";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  const parsed = npsSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Champs invalides.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const appsScriptUrl = process.env.FEEDBACK_APPS_SCRIPT_URL;
  const submittedAt = new Date().toISOString();

  const enriched = {
    submittedAt,
    ...parsed.data,
    source: parsed.data.source ?? "inline-demo",
    kind: "nps-only",
  };

  if (!appsScriptUrl) {
    console.warn("FEEDBACK_APPS_SCRIPT_URL non configurée. NPS reçu en local :", enriched);
    return NextResponse.json({
      ok: true,
      warning:
        "FEEDBACK_APPS_SCRIPT_URL non configurée, NPS loggé côté serveur.",
    });
  }

  try {
    const upstream = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enriched),
      redirect: "follow",
      cache: "no-store",
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      console.error("Apps Script error (NPS)", upstream.status, text);
      return NextResponse.json(
        { error: "Erreur côté Google Sheet NPS. Réessayez dans quelques instants." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("NPS forward failed", error);
    return NextResponse.json(
      { error: "Erreur réseau. Réessayez ou écrivez à liedel.lam@rocket-school.eu." },
      { status: 500 }
    );
  }
}
