function ChatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9"  cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <line x1="6"  y1="7" x2="6"  y2="12" />
      <line x1="10" y1="7" x2="10" y2="11" />
      <line x1="14" y1="7" x2="14" y2="12" />
      <line x1="18" y1="7" x2="18" y2="11" />
    </svg>
  );
}

function NeedleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 4.76a3 3 0 0 0-4.24 0L3 17.76V21h3.24l13-13a3 3 0 0 0 0-4.24z" />
      <line x1="15" y1="9" x2="18" y2="6" />
      <path d="M7 17c1-3 3-5 5-6" strokeDasharray="2 2" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" rx="1" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <polyline points="12 7 9 3 15 3 12 7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffe7b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

const steps = [
  {
    num: "01",
    title: "Say hello",
    desc: "Message me on WhatsApp with what you have in mind — an event, a vibe, a picture.",
    Icon: ChatIcon,
    delay: "0s",
    iconBg: "rgba(255,255,255,0.18)",
  },
  {
    num: "02",
    title: "Style & measure",
    desc: "We agree on the design and fabric. You send measurements (guide below) or come in.",
    Icon: RulerIcon,
    delay: "0.8s",
    iconBg: "rgba(255,255,255,0.14)",
  },
  {
    num: "03",
    title: "I stitch it",
    desc: "Cutting and sewing begin once a deposit is in. I'll share progress photos along the way.",
    Icon: NeedleIcon,
    delay: "1.6s",
    iconBg: "rgba(255,255,255,0.18)",
  },
  {
    num: "04",
    title: "Pickup or delivery",
    desc: "Collect in Owerri or I'll ship it to you anywhere in Nigeria. Final fit, guaranteed.",
    Icon: PackageIcon,
    delay: "2.4s",
    iconBg: "rgba(255,255,255,0.14)",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "clamp(48px,6vw,88px) clamp(18px,4vw,56px)",
        background: "var(--terra)",
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
              color: "#ffe7b0",
            }}
          >
            HOW IT WORKS
          </div>
          <h2
            data-section-h2=""
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(30px,4.4vw,52px)",
              lineHeight: 1.02,
              letterSpacing: "-1px",
              margin: "10px 0 0",
              maxWidth: 640,
            }}
          >
            From first message to finished outfit
          </h2>
        </div>

        {/* Step flow */}
        <div className="nk-process-flow">
          {steps.map((s, i) => (
            <>
              {/* Card */}
              <div
                key={s.num}
                data-step-card=""
                className="nk-step-card"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 22,
                  padding: "28px 24px 26px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Large watermark number */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 12,
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 800,
                    fontSize: 88,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.07)",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {s.num}
                </div>

                {/* Icon ring */}
                <div
                  className="nk-step-icon-ring"
                  style={{
                    animationDelay: s.delay,
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    background: s.iconBg,
                    border: "1.5px solid rgba(255,231,176,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffe7b0",
                    marginBottom: 20,
                  }}
                >
                  <s.Icon />
                </div>

                {/* Step badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#ffe7b0",
                      color: "var(--terra)",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontWeight: 800,
                      fontSize: 11,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "2px",
                      color: "rgba(251,243,228,0.55)",
                      textTransform: "uppercase",
                    }}
                  >
                    Step
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    margin: "0 0 10px",
                    lineHeight: 1.15,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "rgba(251,243,228,0.82)",
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Connector arrow (not after last card) */}
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className="nk-process-arrow">
                  <ArrowRight />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
