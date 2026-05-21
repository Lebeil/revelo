import { NextResponse, type NextRequest } from "next/server";
import { feedbackSchema } from "@/lib/schemas/feedback";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  const parsed = feedbackSchema.safeParse(payload);
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
    source: parsed.data.source ?? "demo-feedback",
  };

  if (!appsScriptUrl) {
    console.warn("FEEDBACK_APPS_SCRIPT_URL non configurée. Feedback reçu en local :", enriched);
    return NextResponse.json({
      ok: true,
      warning:
        "FEEDBACK_APPS_SCRIPT_URL non configurée, feedback loggé côté serveur. Configurez la variable d'environnement.",
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
      console.error("Apps Script error (feedback)", upstream.status, text);
      return NextResponse.json(
        { error: "Erreur côté Google Sheet feedback. Réessayez dans quelques instants." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Feedback forward failed", error);
    return NextResponse.json(
      { error: "Erreur réseau. Réessayez ou écrivez à liedel.lam@rocket-school.eu." },
      { status: 500 }
    );
  }
}
