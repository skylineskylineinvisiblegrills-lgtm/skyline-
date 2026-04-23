import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #020617 0%, #111827 55%, #1f2937 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, opacity: 0.92 }}>Skyline Invisible Grills</div>
        <div style={{ fontSize: 74, marginTop: 18, fontWeight: 700, lineHeight: 1.05 }}>
          Premium Balcony & Window Safety
        </div>
        <div style={{ fontSize: 36, marginTop: 24, opacity: 0.92 }}>
          Invisible Grills | Smart Cloth Hangers
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
