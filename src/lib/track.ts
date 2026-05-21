import { track } from "@vercel/analytics";

export type CtaLocation =
  | "hero"
  | "header"
  | "header-mobile"
  | "lead-section"
  | "footer";

export function trackCtaClick(location: CtaLocation, label: string) {
  track("cta_click", { location, label });
}

export function trackLeadSubmit(
  source: string,
  role?: string,
  teamSize?: string,
) {
  track("lead_submitted", {
    source,
    role: role ?? "unknown",
    teamSize: teamSize ?? "unknown",
  });
}
