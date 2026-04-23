import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          Skyline Invisible Grills
        </div>
        <div style={{ fontSize: 34, marginTop: 20, opacity: 0.95 }}>
          Seamless Safety. Premium Finish.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
