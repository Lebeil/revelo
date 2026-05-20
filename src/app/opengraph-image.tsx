import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Revelo, le copilote de rétention CS, Health Score hybride et plans d'action IA";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A2E36",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#F8F4E3",
          fontFamily: "system-ui",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(255, 107, 53, 0.32)",
            filter: "blur(12px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "rgba(143, 181, 190, 0.22)",
            filter: "blur(20px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#F8F4E3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "#0F4C5C",
              position: "relative",
            }}
          >
            R
            <span
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#FF6B35",
              }}
            />
          </div>
          <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>Revelo</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 1020 }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#FF8A5F",
              fontWeight: 600,
            }}
          >
            Le copilote de rétention CS
          </span>
          <h1
            style={{
              fontSize: 60,
              lineHeight: 1.05,
              fontWeight: 600,
              margin: 0,
              letterSpacing: -1.5,
            }}
          >
            Health Score hybride et plans d'action IA, pour sécuriser chaque renouvellement.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(248,244,227,0.75)",
          }}
        >
          <span>Beta privée · saison 1 ouvre en juin 2026</span>
          <span style={{ color: "#FF6B35", fontWeight: 600 }}>revelo.io</span>
        </div>
      </div>
    ),
    size
  );
}
