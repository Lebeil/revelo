import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F4C5C",
          borderRadius: 14,
          color: "#F8F4E3",
          fontSize: 38,
          fontWeight: 700,
          fontFamily: "system-ui",
          letterSpacing: -1,
          position: "relative",
        }}
      >
        R
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#FF6B35",
          }}
        />
      </div>
    ),
    size
  );
}
