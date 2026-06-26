const WA_URL =
  "https://wa.me/2348162740294?text=Hi%20Nkechi%2C%20I%27d%20love%20to%20work%20with%20you%21";

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
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

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "clamp(18px,4vw,56px)" }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: 30,
          background: "var(--gold)",
          padding: "clamp(40px,5vw,72px) clamp(26px,4vw,64px)",
          textAlign: "center",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 14% 22%,rgba(34,23,51,0.16) 0 9px,transparent 10px),radial-gradient(circle at 80% 70%,rgba(217,70,30,0.22) 0 11px,transparent 12px)",
            backgroundSize: "90px 90px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <h2
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px,4.6vw,56px)",
              lineHeight: 1.02,
              letterSpacing: "-1.2px",
              margin: 0,
              color: "var(--ink)",
            }}
          >
            Let&apos;s make your
            <br />
            next outfit.
          </h2>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "#3a2d18",
              maxWidth: 480,
              margin: "16px auto 0",
              fontWeight: 500,
            }}
          >
            WhatsApp is the fastest way to reach me. Send a message, a photo,
            or a voice note — I reply within hours.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 28,
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              textDecoration: "none",
              background: "var(--wa)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              padding: "17px 30px",
              borderRadius: 999,
              boxShadow: "0 14px 30px rgba(31,178,85,0.4)",
            }}
          >
            <WhatsAppIcon />
            +234 816 274 0294
          </a>
          <div
            style={{
              marginTop: 18,
              fontSize: 14,
              color: "#3a2d18",
              fontWeight: 600,
            }}
          >
            Emii, Owerri-North · Mon–Sat, 9am–7pm
          </div>
        </div>
      </div>
    </section>
  );
}
