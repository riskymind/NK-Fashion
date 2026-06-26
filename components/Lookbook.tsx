import Image, { StaticImageData } from "next/image";
import pix1 from "../public/pix1.png";
import pix2 from "../public/pix2.png";
import pix3 from "../public/pix3.png";
import pix4 from "../public/pix4.png";
import pix5 from "../public/pix5.png";
import pix6 from "../public/pix6.png";
import measureImg from "../public/measure.jpg";
import heroImg from "../public/hero_image.png";

type Slot = {
  id: string;
  col: string;
  square?: boolean;
  src?: StaticImageData;
  label: string;
};

const slots: Slot[] = [
  { id: "g1", col: "span 5", label: "Gown 1", src: pix1 },
  { id: "g2", col: "span 4", label: "Gown 2", src: pix2 },
  { id: "g3", col: "span 3", label: "Detail", src: pix3 },
  { id: "g4", col: "span 4", label: "Ready-to-wear", square: true, src: pix4 },
  { id: "g5", col: "span 4", label: "Ankara set", square: true, src: pix5 },
  { id: "g6", col: "span 4", label: "Back view", square: true, src:pix6 },
];

function ImageSlot({
  src,
  label,
  gridColumn,
  square,
}: {
  src?: StaticImageData;
  label: string;
  gridColumn: string;
  square?: boolean;
}) {
  return (
    <div
      style={{
        gridColumn,
        position: "relative",
        aspectRatio: square ? "1/1" : "4/5",
        borderRadius: 18,
        background: "rgba(251,243,228,0.1)",
        border: "1px solid rgba(251,243,228,0.18)",
        overflow: "hidden",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "rgba(251,243,228,0.45)",
              fontWeight: 600,
              textAlign: "center",
              padding: "0 12px",
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Lookbook() {
  return (
    <section
      id="work"
      style={{
        padding: "clamp(48px,6vw,88px) clamp(18px,4vw,56px)",
        background: "var(--ink)",
        color: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 34,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "3px",
                color: "var(--gold)",
              }}
            >
              THE LOOKBOOK
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
              Pieces I&apos;ve made
            </h2>
          </div>
          <p
            style={{
              maxWidth: 340,
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(251,243,228,0.78)",
              margin: 0,
            }}
          >
            A peek at recent gowns and ready-to-wear. Add your own photos to
            fill each frame.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            gap: 16,
          }}
        >
          {slots.map((s) => (
            <ImageSlot
              key={s.id}
              src={s.src}
              label={s.label}
              gridColumn={s.col}
              square={s.square}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
