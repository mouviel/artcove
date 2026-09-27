import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same Lucide "palette" mark as icon.svg, on a full-bleed square (iOS rounds the corners itself).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#212227" }}>
        <svg width="112" height="112" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
          <circle cx="13.5" cy="6.5" r=".5" fill="#fff" />
          <circle cx="17.5" cy="10.5" r=".5" fill="#fff" />
          <circle cx="6.5" cy="12.5" r=".5" fill="#fff" />
          <circle cx="8.5" cy="7.5" r=".5" fill="#fff" />
        </svg>
      </div>
    ),
    size,
  );
}
