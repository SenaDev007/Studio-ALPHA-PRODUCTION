import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

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
          borderRadius: "18px",
          background: "linear-gradient(135deg, #13181c, #2a3036)",
          color: "#f8efe3",
          fontSize: 36,
          fontWeight: 700
        }}
      >
        A
      </div>
    ),
    {
      ...size
    }
  );
}
