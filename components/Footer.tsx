const exploreLinks = [
  { href: "#work", label: "Lookbook" },
  { href: "#services", label: "Services & pricing" },
  { href: "#about", label: "About Nkechi" },
  { href: "#measure", label: "Measurement guide" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#16101f",
        color: "rgba(251,243,228,0.85)",
        padding: "clamp(44px,5vw,72px) clamp(18px,4vw,56px) 40px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 32,
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "var(--gold)",
                color: "var(--ink)",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                fontSize: 17,
              }}
            >
              NK
            </span>
            <span
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                fontSize: 19,
                color: "var(--cream)",
              }}
            >
              Stitches by NK Fashions
            </span>
          </div>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 14.5,
              lineHeight: 1.6,
              maxWidth: 340,
            }}
          >
            Bespoke Ankara gowns &amp; ready-to-wear, hand-finished in Emii,
            Owerri-North. Let&apos;s make something beautiful.
          </p>
        </div>

        {/* Explore */}
        <div>
          <div
            style={{
              fontWeight: 700,
              color: "var(--cream)",
              fontSize: 14,
              letterSpacing: "1px",
              marginBottom: 14,
            }}
          >
            EXPLORE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5 }}>
            {exploreLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: "rgba(251,243,228,0.85)", textDecoration: "none" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Reach */}
        <div>
          <div
            style={{
              fontWeight: 700,
              color: "var(--cream)",
              fontSize: 14,
              letterSpacing: "1px",
              marginBottom: 14,
            }}
          >
            REACH ME
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5 }}>
            <a
              href="https://wa.me/2348162740294"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--wa)",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              WhatsApp · +234 816 274 0294
            </a>
            <span>Emii, Owerri-North, Imo State</span>
            <span>Mon–Sat · 9am–7pm</span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "var(--maxw)",
          margin: "32px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(251,243,228,0.14)",
          fontSize: 13,
          color: "rgba(251,243,228,0.55)",
        }}
      >
        © 2026 Stitches by NK Fashions · Owerri, Nigeria
      </div>
    </footer>
  );
}
