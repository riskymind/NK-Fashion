const tags = ["Hand-finished", "Owerri-based", "Nationwide delivery"];

export default function About() {
  return (
    <section
      id="about"
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
          gap: "clamp(28px,4vw,60px)",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "auto auto -22px -22px",
              width: 130,
              height: 130,
              borderRadius: 22,
              background:
                "repeating-linear-gradient(45deg,var(--wine) 0 14px,var(--gold) 14px 28px)",
              zIndex: -1,
            }}
          />
          <div
            style={{
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: 26,
              background: "rgba(34,23,51,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 26px 50px rgba(34,23,51,0.24)",
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "rgba(34,23,51,0.4)",
                fontWeight: 600,
                textAlign: "center",
                padding: "0 24px",
              }}
            >
              Nkechi at work
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "3px",
              color: "var(--wine)",
            }}
          >
            MEET THE MAKER
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
            Hi, I&apos;m Nkechi.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#4a3f57",
              margin: "18px 0 0",
            }}
          >
            I&apos;ve been sewing since I was a teenager, and today I run my own
            little studio in Emii, Owerri-North. Ankara is my first love — the
            colour, the movement, the way the right print can make someone walk
            taller.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#4a3f57",
              margin: "14px 0 0",
            }}
          >
            Every piece I make starts with a conversation. Tell me the occasion,
            show me what you love, and I&apos;ll handle the rest — cutting,
            stitching and finishing each garment myself so it fits you and only
            you.
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginTop: 22,
            }}
          >
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(34,23,51,0.12)",
                  borderRadius: 999,
                  padding: "8px 14px",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
