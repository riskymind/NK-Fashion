import Image from "next/image";
import profilePic from '../public/measure.jpg';

const measurements = [
  { n: "1", label: "Bust / chest" },
  { n: "2", label: "Waist" },
  { n: "3", label: "Hips" },
  { n: "4", label: "Shoulder width" },
  { n: "5", label: "Sleeve length" },
  { n: "6", label: "Full length" },
];

const WA_MEASURE =
  "https://wa.me/2348162740294?text=Hi%20Nkechi%2C%20here%20are%20my%20measurements%20(inches)%3A%0ABust%3A%20%0AWaist%3A%20%0AHips%3A%20%0AShoulder%3A%20%0ASleeve%3A%20%0AFull%20length%3A%20";

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
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

export default function Measurements() {
  return (
    <section
      id="measure"
      style={{
        padding: "clamp(48px,6vw,88px) clamp(18px,4vw,56px)",
        background: "var(--cream)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(28px,4vw,56px)",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "3px",
              color: "var(--emerald)",
            }}
          >
            BEFORE YOU ORDER
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px,4vw,46px)",
              lineHeight: 1.04,
              letterSpacing: "-1px",
              margin: "10px 0 0",
            }}
          >
            Measurements to send me
          </h2>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "#4a3f57",
              margin: "14px 0 22px",
            }}
          >
            Use a soft tape, measure over light clothing, and keep it snug —
            not tight. Send the numbers in inches and I&apos;ll take it from
            there.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {measurements.map((m) => (
              <div
                key={m.n}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#fff",
                  border: "1px solid rgba(34,23,51,0.1)",
                  borderRadius: 14,
                  padding: 14,
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    color: "var(--ink)",
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {m.n}
                </span>
                <span style={{ fontWeight: 600, fontSize: 14.5 }}>{m.label}</span>
              </div>
            ))}
          </div>

          <a
            href={WA_MEASURE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 22,
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              background: "var(--wa)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15.5,
              padding: "14px 22px",
              borderRadius: 999,
              boxShadow: "0 10px 24px rgba(31,178,85,0.3)",
            }}
          >
            <WhatsAppIcon />
            Send my measurements
          </a>
        </div>

        {/* Image */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "-18px auto auto -18px",
              width: 110,
              height: 110,
              borderRadius: "50%",
              background:
                "repeating-conic-gradient(var(--emerald) 0deg 20deg,var(--cream) 20deg 40deg)",
              zIndex: -1,
            }}
          />
          <div
            style={{
              width: "100%",
              borderRadius: 26,
              background: "rgba(34,23,51,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 24px 48px rgba(34,23,51,0.2)",
            }}
          >
              <Image
          src={profilePic}
           alt="External descriptive text"
          width={800}
          height={800}
        />
          </div>
        </div>
      </div>
    </section>
  );
}
