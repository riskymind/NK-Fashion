const services = [
  {
    icon: "👗",
    iconBg: "var(--terra)",
    title: "Bespoke Ankara gowns",
    desc: "Made-to-measure occasion gowns — weddings, owambe, birthdays. Your style, your fabric, your fit.",
    price: "from ₦35,000",
    ctaLabel: "Request this",
    waText: "Hi%20Nkechi%2C%20I%27d%20like%20a%20bespoke%20Ankara%20gown.",
  },
  {
    icon: "🧵",
    iconBg: "var(--gold)",
    title: "Ready-to-wear",
    desc: "Pre-made Ankara sets, tops and skirts in standard sizes — ready to ship across Nigeria.",
    price: "from ₦12,000",
    ctaLabel: "See what's in",
    waText: "Hi%20Nkechi%2C%20what%20ready-to-wear%20pieces%20do%20you%20have%3F",
  },
  {
    icon: "✂️",
    iconBg: "var(--emerald)",
    title: "Alterations & restyle",
    desc: "Resizing, hemming and giving an old favourite a fresh, modern shape that fits perfectly again.",
    price: "from ₦5,000",
    ctaLabel: "Ask about it",
    waText: "Hi%20Nkechi%2C%20I%20need%20an%20alteration.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "clamp(48px,6vw,88px) clamp(18px,4vw,56px)",
        background: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "3px",
              color: "var(--terra)",
            }}
          >
            WHAT I MAKE
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px,4.4vw,52px)",
              lineHeight: 1.02,
              letterSpacing: "-1px",
              margin: "10px 0 0",
            }}
          >
            Services &amp; pricing
          </h2>
          <p
            style={{
              maxWidth: 520,
              margin: "14px auto 0",
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "#4a3f57",
            }}
          >
            Prices are a starting guide — final cost depends on fabric,
            detailing and beadwork. Message me for an exact quote.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(248px,1fr))",
            gap: 20,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#fff",
                border: "1px solid rgba(34,23,51,0.1)",
                borderRadius: 22,
                padding: 26,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: s.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 23,
                  margin: "18px 0 0",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#4a3f57",
                  margin: "10px 0 0",
                  flex: 1,
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  marginTop: 18,
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  color: "var(--ink)",
                }}
              >
                {s.price}
              </div>
              <a
                href={`https://wa.me/2348162740294?text=${s.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  textDecoration: "none",
                  background: "var(--ink)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14.5,
                  padding: 12,
                  borderRadius: 999,
                }}
              >
                {s.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
