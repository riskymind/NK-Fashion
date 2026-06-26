const steps = [
  {
    num: "01",
    title: "Say hello",
    desc: "Message me on WhatsApp with what you have in mind — an event, a vibe, a picture.",
  },
  {
    num: "02",
    title: "Style & measure",
    desc: "We agree on the design and fabric. You send measurements (guide below) or come in.",
  },
  {
    num: "03",
    title: "I stitch it",
    desc: "Cutting and sewing begin once a deposit is in. I'll share progress photos along the way.",
  },
  {
    num: "04",
    title: "Pickup or delivery",
    desc: "Collect in Owerri or I'll ship it to you anywhere in Nigeria. Final fit, guaranteed.",
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
        <div style={{ marginBottom: 40 }}>
          <div
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 18,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: 20,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 34,
                  color: "#ffe7b0",
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  margin: "12px 0 0",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(251,243,228,0.86)",
                  margin: "8px 0 0",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
