import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = "Development and SEO consulting with Luisangela Marcano. Your project is just the beginning. Monthly support packages and consultations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ConsultPreviewImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 64,
          background: "#faf9f5",
          color: "#141413",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
          <span style={{ fontWeight: 700 }}>{profile.name}</span>
          <span style={{ color: "#38658b" }}>Development & SEO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 80, lineHeight: 1.1, letterSpacing: -3, fontWeight: 700 }}>
            <span>Your project is</span>
            <span>just the beginning.</span>
          </div>
          <span style={{ fontSize: 28, color: "#63625b" }}>Ongoing support for what comes next.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #dedcd2", paddingTop: 24, fontSize: 24 }}>
          <span>Monthly packages & consultations</span>
          <span style={{ color: "#38658b" }}>/consult</span>
        </div>
      </div>
    ),
    size,
  );
}
