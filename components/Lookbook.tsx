"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import pix1 from "../public/pix1.jpeg";
import pix2 from "../public/pix2.jpeg";
import pix3 from "../public/pix3.jpeg";
import pix4 from "../public/pix4.jpeg";
import pix5 from "../public/pix5.jpeg";
import pix6 from "../public/pix6.jpeg";
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
  { id: "g6", col: "span 4", label: "Back view", square: true, src: pix6 },
];

const images = slots.filter((s) => s.src) as Required<Pick<Slot, "src" | "label">>[];

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { src, label } = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "rgba(10,6,20,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)",
        animation: "nkLbFadeIn 0.18s ease",
      }}
    >
      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        style={{
          position: "absolute",
          left: "clamp(12px, 3vw, 36px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#fff",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(90vw, 900px)",
          height: "min(88vh, 860px)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Image
          src={src}
          alt={label}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 90vw, 900px"
          priority
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        style={{
          position: "absolute",
          right: "clamp(12px, 3vw, 36px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#fff",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        style={{
          position: "absolute",
          top: "clamp(12px, 2vw, 24px)",
          right: "clamp(12px, 3vw, 36px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#fff",
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <span
        style={{
          position: "absolute",
          bottom: "clamp(12px, 2vw, 24px)",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.55)",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "1px",
          pointerEvents: "none",
        }}
      >
        {index + 1} / {images.length}
      </span>
    </div>
  );
}

function ImageSlot({
  src,
  label,
  gridColumn,
  square,
  imageIndex,
  onOpen,
}: {
  src?: StaticImageData;
  label: string;
  gridColumn: string;
  square?: boolean;
  imageIndex?: number;
  onOpen?: (i: number) => void;
}) {
  return (
    <div
      data-lookbook-item=""
      className={src ? "nk-about-img-wrap" : undefined}
      onClick={src && imageIndex !== undefined ? () => onOpen?.(imageIndex) : undefined}
      style={{
        gridColumn,
        position: "relative",
        aspectRatio: square ? "1/1" : "4/5",
        borderRadius: 0,
        background: "rgba(251,243,228,0.06)",
        overflow: "hidden",
        cursor: src ? "zoom-in" : undefined,
      }}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={label}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Blend edges into the ink section background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, #221733 0%, transparent 18%, transparent 82%, #221733 100%), " +
                "linear-gradient(to right,  #221733 0%, transparent 12%, transparent 88%, #221733 100%)",
              pointerEvents: "none",
            }}
          />
        </>
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
              color: "rgba(251,243,228,0.35)",
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => i !== null ? (i - 1 + images.length) % images.length : 0), []);
  const next = useCallback(() => setActiveIndex((i) => i !== null ? (i + 1) % images.length : 0), []);

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  // Map each slot to its index within the images-only array
  let imgCounter = -1;
  const slotsWithIndex = slots.map((s) => {
    if (s.src) imgCounter++;
    return { ...s, imageIndex: s.src ? imgCounter : undefined };
  });

  return (
    <>
      <style>{`@keyframes nkLbFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>

      {activeIndex !== null && (
        <Lightbox index={activeIndex} onClose={close} onPrev={prev} onNext={next} />
      )}

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
                data-eyebrow=""
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
              A peek at recent gowns and ready-to-wear.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12,1fr)",
              gap: 16,
            }}
          >
            {slotsWithIndex.map((s) => (
              <ImageSlot
                key={s.id}
                src={s.src}
                label={s.label}
                gridColumn={s.col}
                square={s.square}
                imageIndex={s.imageIndex}
                onOpen={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
