import Image from "next/image";
import profilePic from '../public/nk_hero.jpeg';
const WA_ORDER =
  "https://wa.me/2348162740294?text=Hi%20Nkechi%2C%20I%27d%20love%20to%20order%20a%20bespoke%20Ankara%20piece.";

function WhatsAppIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const stats = [
  { value: "8+ yrs", label: "stitching" },
  { value: "600+", label: "happy clients" },
  { value: "5–10", label: "days turnaround" },
];

export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "clamp(28px,4vw,64px)",
        alignItems: "center",
        padding: "clamp(40px,6vw,84px) clamp(18px,4vw,56px) clamp(56px,7vw,96px)",
        maxWidth: "var(--maxw)",
        margin: "0 auto",
      }}
    >
      {/* Text column */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          data-hero-badge=""
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "#fff",
            border: "1px solid rgba(34,23,51,0.12)",
            padding: "7px 14px",
            borderRadius: 999,
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: "0.5px",
            color: "var(--wine)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--emerald)",
              display: "inline-block",
            }}
          />
          BESPOKE ANKARA · EMII, OWERRI-NORTH
        </div>

        <h1
          data-hero-h1=""
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px,6.4vw,76px)",
            lineHeight: 0.98,
            letterSpacing: "-1.5px",
            margin: "22px 0 0",
          }}
        >
          Ankara that
          <br />
          <span style={{ color: "var(--terra)" }}>fits like it was</span>
          <br />
          made for you.
        </h1>

        <p
          data-hero-p=""
          style={{
            fontSize: "clamp(15.5px,1.6vw,18.5px)",
            lineHeight: 1.6,
            color: "#4a3f57",
            maxWidth: 480,
            margin: "22px 0 0",
          }}
        >
          I&apos;m{" "}
          <strong style={{ color: "var(--ink)" }}>Okenwa Nkechi</strong> — I
          cut, stitch and finish made-to-measure Ankara gowns and ready-to-wear
          right here in Owerri. Send your idea, I&apos;ll bring it to life.
        </p>

        <div
          data-hero-ctas=""
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            marginTop: 30,
          }}
        >
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              background: "var(--wa)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              padding: "15px 24px",
              borderRadius: 999,
              boxShadow: "0 10px 24px rgba(31,178,85,0.32)",
            }}
          >
            <WhatsAppIcon size={19} />
            Order on WhatsApp
          </a>
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              background: "transparent",
              color: "var(--ink)",
              fontWeight: 700,
              fontSize: 16,
              padding: "15px 24px",
              borderRadius: 999,
              border: "1.5px solid rgba(34,23,51,0.25)",
            }}
          >
            View the lookbook
          </a>
        </div>

        <div
          data-hero-stats=""
          style={{
            display: "flex",
            gap: 30,
            marginTop: 38,
            flexWrap: "wrap",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                  color: "var(--ink)",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "#6a607a", fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image column */}
      <div data-hero-img="" style={{ position: "relative", zIndex: 2 }}>
        {/* Spinning conic ring */}
        {/* <div
          style={{
            position: "absolute",
            inset: "-22px -22px auto auto",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background:
              "repeating-conic-gradient(var(--gold) 0deg 18deg,var(--ink) 18deg 36deg)",
            opacity: 0.9,
            // zIndex: -1,
            animation: "nkspin 36s linear infinite",
          }}
        /> */}
        {/* Emerald blob */}
        {/* <div
          style={{
            position: "absolute",
            left: -70,
            bottom: -26,
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "var(--emerald)",
            // zIndex: -1,
            transform: "rotate(12deg)",
          }}
        /> */}

        {/* Hero image */}
        <div
          className="nk-about-img-wrap"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/5",
            borderRadius: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src={profilePic}
            alt="Okenwa Nkechi – bespoke Ankara tailor, Owerri"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Blend edges into cream background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, var(--cream) 0%, transparent 16%, transparent 82%, var(--cream) 100%), " +
                "linear-gradient(to right, var(--cream) 0%, transparent 12%, transparent 88%, var(--cream) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Badge */}
        {/* <div
          style={{
            position: "absolute",
            right: 18,
            bottom: 18,
            background: "#fff",
            borderRadius: 16,
            padding: "12px 16px",
            boxShadow: "0 12px 28px rgba(34,23,51,0.2)",
            display: "flex",
            alignItems: "center",
            gap: 11,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: 12,
              background: "var(--terra)",
              color: "#fff",
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            ✦
          </span>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Made-to-measure</div>
            <div style={{ fontSize: 12, color: "#6a607a" }}>
              every piece, just for you
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}
