import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

const logoUrl = `${siteConfig.domain}/gallery/logo%20Studio%20ALPHA%20PRODUCTION.png`;

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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src={logoUrl}
            alt="Studio ALPHA PRODUCTION"
            width="246"
            height="123"
            style={{ objectFit: "contain" }}
          />
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
