import { MessageSquare, Hash } from "lucide-react";
import type { SlackMessage } from "@/lib/data/mock-accounts";

type SlackAlertPreviewProps = {
  message: SlackMessage;
};

export function SlackAlertPreview({ message }: Readonly<SlackAlertPreviewProps>) {
  return (
    <article className="overflow-hidden rounded-2xl border border-cream-deep bg-card">
      <header className="flex items-center justify-between border-b border-cream-deep px-5 py-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-orange/10 text-orange">
            <MessageSquare size={14} />
          </span>
          <span className="font-semibold text-midnight">Alerte Slack envoyée</span>
        </div>
        <span className="text-[11px] uppercase tracking-widest text-midnight/55">
          MCP webhook
        </span>
      </header>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-midnight/55">
          <Hash size={12} />
          <span className="font-mono">{message.channel}</span>
          <span className="text-midnight/40">·</span>
          <span>{message.time}</span>
        </div>

        <div className="mt-3 flex items-start gap-3 rounded-xl bg-cream-soft p-4">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal text-cream font-mono text-xs">
            R
          </span>
          <div>
            <p className="text-sm font-semibold text-midnight">
              Revelo Agent <span className="font-normal text-midnight/55">via Slack</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-midnight/85">{message.body}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-teal/10 px-3 py-1 font-semibold text-teal">
                Ouvrir le brief hybride
              </span>
              <span className="rounded-full bg-orange/10 px-3 py-1 font-semibold text-orange-deep">
                Voir les plans d'action IA
              </span>
              <span className="rounded-full bg-cream-deep/60 px-3 py-1 font-semibold text-midnight/65">
                Reporter
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
