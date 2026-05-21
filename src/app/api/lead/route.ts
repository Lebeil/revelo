import { NextResponse, type NextRequest } from "next/server";
import { leadSchema } from "@/lib/schemas/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Champs invalides.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL;

  const submittedAt = new Date().toISOString();
  const source =
    typeof (payload as { source?: unknown })?.source === "string"
      ? ((payload as { source: string }).source)
      : "landing";

  const enriched = {
    submittedAt,
    source,
    ...parsed.data,
  };

  if (!appsScriptUrl) {
    console.warn("APPS_SCRIPT_URL non configurée. Lead reçu en local :", enriched);
    return NextResponse.json({
      ok: true,
      warning:
        "Apps Script URL non configurée, lead loggé côté serveur. Configurez APPS_SCRIPT_URL.",
    });
  }

  try {
    const upstream = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enriched),
      redirect: "manual",
      cache: "no-store",
    });

    // Apps Script Web App répond systématiquement en 302 vers script.googleusercontent.com.
    // doPost() a déjà écrit dans la Sheet avant cette redirection, donc 3xx = succès.
    if (upstream.status >= 400) {
      const text = await upstream.text().catch(() => "");
      console.error("Apps Script error", upstream.status, text);
      return NextResponse.json(
        { error: "Erreur côté Google Sheet. Réessayez dans quelques instants." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead forward failed", error);
    return NextResponse.json(
      { error: "Erreur réseau. Réessayez ou écrivez à liedel.lam@rocket-school.eu." },
      { status: 500 }
    );
  }
}
