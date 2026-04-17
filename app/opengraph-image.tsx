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
            "radial-gradient(circle at top left, rgba(159,91,52,0.26), transparent 34%), radial-gradient(circle at 82% 12%, rgba(53,92,74,0.18), transparent 26%), linear-gradient(180deg, #faf5ed 0%, #efe7dc 56%, #e8ddcf 100%)",
          color: "#11161a"
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px"
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #13181c, #2a3036)",
              color: "#f8efe3",
              fontSize: "36px",
              fontWeight: 700
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: 700 }}>Studio ALPHA PRODUCTION</span>
            <span style={{ fontSize: "18px", color: "#5f655f" }}>Cotonou, Bénin</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px" }}>
          <span
            style={{
              display: "inline-flex",
              width: "fit-content",
              borderRadius: "999px",
              border: "1px solid rgba(17, 22, 26, 0.08)",
              background: "rgba(255, 255, 255, 0.46)",
              padding: "10px 16px",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#4b534c"
            }}
          >
            Production audiovisuelle à Cotonou
          </span>
          <div style={{ fontSize: "72px", lineHeight: 0.95, fontWeight: 700, letterSpacing: "-0.07em" }}>
            Des images qui installent une présence nette.
          </div>
          <div style={{ fontSize: "26px", lineHeight: 1.45, color: "#5f655f" }}>
            Vidéo, photo, captation et postproduction pour marques, institutions et événements.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            color: "#5f655f",
            fontSize: "20px"
          }}
        >
          <span>Brand</span>
          <span>Event</span>
          <span>Corporate</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
