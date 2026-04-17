import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
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
          justifyContent: "space-between",
          padding: "52px",
          background:
            "radial-gradient(ellipse at 65% 45%, rgba(240,121,33,0.10) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(45,45,181,0.16) 0%, transparent 48%), linear-gradient(160deg, #080808 0%, #0d0d0d 60%, #080808 100%)",
          color: "#F8F6F3"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg width="54" height="44" viewBox="0 0 42 34" fill="none">
            <rect x="4" y="8" width="34" height="22" rx="3" fill="#2D2DB5" />
            <rect x="14" y="2" width="14" height="8" rx="2" fill="#2D2DB5" />
            <circle cx="21" cy="19" r="7" fill="#1a1a90" />
            <circle cx="21" cy="19" r="4.5" fill="#2D2DB5" stroke="#F07921" strokeWidth="1.5" />
            <circle cx="21" cy="19" r="2" fill="#4545D4" />
            <rect x="6" y="11" width="5" height="3" rx="1" fill="#1a1a8a" />
          </svg>
          <div
            style={{
              width: "2px",
              height: "40px",
              background: "linear-gradient(180deg,#F07921,#2D2DB5)"
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F07921" }}>
              studio
            </span>
            <span style={{ fontSize: "28px", letterSpacing: "0.2em", color: "#6B6B6B", fontWeight: 700 }}>
              ALPHA
            </span>
            <span style={{ fontSize: "10px", letterSpacing: "0.34em", textTransform: "uppercase", color: "#888888" }}>
              Production
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "760px" }}>
          <div style={{ fontSize: "14px", letterSpacing: "0.34em", textTransform: "uppercase", color: "#F07921" }}>
            Production audiovisuelle a Cotonou
          </div>
          <div style={{ fontSize: "104px", lineHeight: 0.84, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Vision.
            <br />
            Image.
            <br />
            Impact.
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.45, color: "#888888", maxWidth: "690px" }}>
            Video, drone, photographie, diffusion live et formation professionelle avec la palette
            et la tension visuelle du studio.
          </div>
        </div>

        <div style={{ display: "flex", gap: "18px", fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#6B6B6B" }}>
          <span>Video</span>
          <span>Drone</span>
          <span>Formation</span>
          <span>Live</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
