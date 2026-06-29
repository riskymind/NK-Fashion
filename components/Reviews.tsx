const reviews = [
  {
    text: '"My wedding guest gown fit perfectly the very first try. Nkechi understood exactly what I wanted from one voice note. Pure talent."',
    name: "Adaeze O.",
    location: "Owerri",
    initial: "A",
    color: "var(--terra)",
  },
  {
    text: '"Ordered Ankara sets for my whole family for Christmas. Delivered to Lagos on time and the finishing was so clean. Highly recommend."',
    name: "Chinwe E.",
    location: "Lagos",
    initial: "C",
    color: "var(--emerald)",
  },
  {
    text: '"She restyled an old gown of mine into something I now get compliments on everywhere. Fast replies on WhatsApp too. Bless her hands!"',
    name: "Blessing N.",
    location: "Abuja",
    initial: "B",
    color: "var(--wine)",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        padding: "clamp(48px,6vw,88px) clamp(18px,4vw,56px)",
        background: "var(--ink)",
        color: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 38 }}>
          <div
            data-eyebrow=""
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "3px",
              color: "var(--gold)",
            }}
          >
            KIND WORDS
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
            }}
          >
            What clients say
          </h2>
        </div>

        <div
          className="nk-reviews-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(248px,1fr))",
            gap: 20,
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              data-review-card=""
              style={{
                background: "rgba(251,243,228,0.07)",
                border: "1px solid rgba(251,243,228,0.16)",
                borderRadius: 20,
                padding: 26,
              }}
            >
              <div
                style={{ color: "var(--gold)", fontSize: 18, letterSpacing: 2 }}
              >
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  margin: "14px 0 0",
                }}
              >
                {r.text}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 20,
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: r.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {r.initial}
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14.5 }}>{r.name}</div>
                  <div
                    style={{ fontSize: 12.5, color: "rgba(251,243,228,0.6)" }}
                  >
                    {r.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
