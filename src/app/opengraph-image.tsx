import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "artcove: Your commissions, finally in one place.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f3f5f8",
          color: "#212227",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
          <div style={{ width: 60, height: 60, borderRadius: 15, background: "#212227", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
              <circle cx="13.5" cy="6.5" r=".5" fill="#fff" />
              <circle cx="17.5" cy="10.5" r=".5" fill="#fff" />
              <circle cx="6.5" cy="12.5" r=".5" fill="#fff" />
              <circle cx="8.5" cy="7.5" r=".5" fill="#fff" />
            </svg>
          </div>
          artcove
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: "92px", letterSpacing: -4, maxWidth: 1000 }}>{site.tagline}</div>
        </div>
        <div style={{ fontSize: 28, color: "#676b75" }}>A Windows app for artists who take commissions on Discord and X.</div>
      </div>
    ),
    size,
  );
}
