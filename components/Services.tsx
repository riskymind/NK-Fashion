const WA_BASE = "https://wa.me/2348162740294?text=";

const services = [
  {
    n: "01",
    accent: "var(--terra)",
    title: "Bespoke Ankara gowns",
    desc: "Made-to-measure occasion gowns — weddings, owambe, birthdays. Your style, your fabric, your fit.",
    ctaLabel: "Request this",
    waText: "Hi%20Nkechi%2C%20I%27d%20like%20a%20bespoke%20Ankara%20gown.",
  },
  {
    n: "02",
    accent: "var(--gold)",
    title: "Ready-to-wear",
    desc: "Pre-made Ankara sets, tops and skirts in standard sizes — ready to ship across Nigeria.",
    ctaLabel: "See what's in",
    waText: "Hi%20Nkechi%2C%20what%20ready-to-wear%20pieces%20do%20you%20have%3F",
  },
  {
    n: "03",
    accent: "var(--emerald)",
    title: "Alterations & restyle",
    desc: "Resizing, hemming and giving an old favourite a fresh, modern shape that fits perfectly again.",
    ctaLabel: "Ask about it",
    waText: "Hi%20Nkechi%2C%20I%20need%20an%20alteration.",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "clamp(48px,6vw,88px) clamp(18px,4vw,56px)",
        background: "var(--ink)",
        color: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div
            data-eyebrow=""
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "3px",
              color: "var(--gold)",
            }}
          >
            WHAT I MAKE
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
              flexWrap: "wrap",
              marginTop: 10,
            }}
          >
            <h2
              data-section-h2=""
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px,4.4vw,52px)",
                lineHeight: 1.02,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Services
            </h2>
            <p
              style={{
                maxWidth: 360,
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(251,243,228,0.65)",
                margin: 0,
              }}
            >
              Prices are a guide — final cost depends on fabric and detailing.
              Message me for an exact quote.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 20,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              data-service-card=""
              className="nk-service-card"
              style={{
                position: "relative",
                background: "rgba(251,243,228,0.06)",
                border: "1px solid rgba(251,243,228,0.12)",
                borderRadius: 24,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Accent top stripe */}
              <div style={{ height: 4, background: s.accent, flexShrink: 0 }} />

              <div
                style={{
                  padding: "26px 26px 24px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Watermark number */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 18,
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 800,
                    fontSize: 88,
                    lineHeight: 1,
                    color: s.accent,
                    opacity: 0.1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {s.n}
                </div>

                {/* Number badge */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    background: s.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 800,
                    fontSize: 13,
                    color: "#fff",
                    marginBottom: 22,
                    flexShrink: 0,
                  }}
                >
                  {s.n}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    lineHeight: 1.15,
                    margin: "0 0 10px",
                    color: "var(--cream)",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    color: "rgba(251,243,228,0.72)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>

               

                {/* CTA */}
                <a
                  href={`${WA_BASE}${s.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    textDecoration: "none",
                    background: s.accent,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "13px 16px",
                    borderRadius: 999,
                  }}
                >
                  <WhatsAppIcon />
                  {s.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
