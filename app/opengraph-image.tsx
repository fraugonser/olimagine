import { ImageResponse } from "next/og";

export const alt = "Olimagine — Art from a Different Planet";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#140a23",
          color: "#fffaff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Stars */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 70,
            fontSize: 34,
            color: "#20cfe3",
          }}
        >
          ✦
        </div>

        <div
          style={{
            position: "absolute",
            left: 540,
            top: 90,
            fontSize: 20,
            color: "#ffffff",
          }}
        >
          ✦
        </div>

        <div
          style={{
            position: "absolute",
            right: 90,
            top: 110,
            fontSize: 28,
            color: "#f44ba5",
          }}
        >
          ✦
        </div>

        <div
          style={{
            position: "absolute",
            right: 480,
            bottom: 80,
            fontSize: 24,
            color: "#ffdc18",
          }}
        >
          ✦
        </div>

        {/* Text */}
        <div
          style={{
            width: "58%",
            padding: "92px 0 80px 90px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#f44ba5",
              marginBottom: 24,
            }}
          >
            WELCOME TO OLIMAGINE
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 70,
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            <div style={{ display: "flex" }}>Art from</div>
            <div style={{ display: "flex" }}>a different</div>

            <div style={{ display: "flex", marginTop: 8 }}>
              <span style={{ color: "#f44ba5" }}>p</span>
              <span style={{ color: "#ff7a18" }}>l</span>
              <span style={{ color: "#ffdc18" }}>a</span>
              <span style={{ color: "#18d978" }}>n</span>
              <span style={{ color: "#20cfe3" }}>e</span>
              <span style={{ color: "#b86cff" }}>t</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 35,
              fontSize: 24,
              color: "#d4cddb",
            }}
          >
            A little artist. A big imagination. An open universe.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 55,
              fontSize: 18,
              fontWeight: 700,
              color: "#ffdc18",
            }}
          >
            ART FIRST. BLOCKCHAIN UNDERNEATH.
          </div>
        </div>

        {/* Earth */}
        <div
          style={{
            width: "42%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 55,
          }}
        >
          <img
            src="https://olimagine.vercel.app/brand/earth-logo.png"
            width="410"
            height="410"
            alt=""
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}