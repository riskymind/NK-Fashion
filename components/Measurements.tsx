"use client";

import Image from "next/image";
import { useState } from "react";
import profilePic from '../public/measure.jpg';

const FIELDS = [
  { key: "bust",      n: "1", label: "Bust / chest" },
  { key: "waist",     n: "2", label: "Waist" },
  { key: "hips",      n: "3", label: "Hips" },
  { key: "shoulder",  n: "4", label: "Shoulder width" },
  { key: "sleeve",    n: "5", label: "Sleeve length" },
  { key: "length",    n: "6", label: "Full length" },
] as const;

type FieldKey = typeof FIELDS[number]["key"];
type Values = Record<FieldKey, string>;

function buildWhatsAppUrl(values: Values) {
  const lines = [
    "Hi Nkechi, here are my measurements (inches):",
    `Bust: ${values.bust || "_"}`,
    `Waist: ${values.waist || "_"}`,
    `Hips: ${values.hips || "_"}`,
    `Shoulder: ${values.shoulder || "_"}`,
    `Sleeve: ${values.sleeve || "_"}`,
    `Full length: ${values.length || "_"}`,
  ].join("\n");
  return `https://wa.me/2348162740294?text=${encodeURIComponent(lines)}`;
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
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

export default function Measurements() {
  const [values, setValues] = useState<Values>({
    bust: "", waist: "", hips: "", shoulder: "", sleeve: "", length: "",
  });

  const allFilled = FIELDS.every((f) => values[f.key].trim() !== "");

  function handleChange(key: FieldKey, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  return (
    <section
      id="measure"
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
          gap: "clamp(28px,4vw,56px)",
          alignItems: "center",
        }}
      >
        {/* Text + form */}
        <div>
          <div
            data-eyebrow=""
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "3px",
              color: "var(--emerald)",
            }}
          >
            BEFORE YOU ORDER
          </div>
          <h2
            data-section-h2=""
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px,4vw,46px)",
              lineHeight: 1.04,
              letterSpacing: "-1px",
              margin: "10px 0 0",
            }}
          >
            Measurements to send me
          </h2>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "#4a3f57",
              margin: "14px 0 22px",
            }}
          >
            Use a soft tape, measure over light clothing, and keep it snug —
            not tight. Enter your numbers in inches below and hit send.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {FIELDS.map((f) => (
              <div
                key={f.key}
                data-measure-card=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  border: "1px solid rgba(34,23,51,0.1)",
                  borderRadius: 14,
                  padding: "10px 12px",
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    color: "var(--ink)",
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {f.n}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <label
                    htmlFor={`m-${f.key}`}
                    style={{
                      display: "block",
                      fontWeight: 600,
                      fontSize: 12.5,
                      color: "#4a3f57",
                      marginBottom: 3,
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={`m-${f.key}`}
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder='e.g. 36"'
                    value={values[f.key]}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                    style={{
                      width: "100%",
                      border: "1px solid rgba(34,23,51,0.15)",
                      borderRadius: 8,
                      padding: "5px 8px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--ink)",
                      background: "transparent",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {!allFilled && (
            <p style={{ fontSize: 13, color: "#9a8fa8", margin: "10px 0 0" }}>
              Fill in all 6 measurements to enable the send button.
            </p>
          )}

          <a
            href={allFilled ? buildWhatsAppUrl(values) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={!allFilled ? (e) => e.preventDefault() : undefined}
            aria-disabled={!allFilled}
            style={{
              marginTop: 18,
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              background: allFilled ? "var(--wa)" : "rgba(31,178,85,0.35)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15.5,
              padding: "14px 22px",
              borderRadius: 999,
              boxShadow: allFilled ? "0 10px 24px rgba(31,178,85,0.3)" : "none",
              cursor: allFilled ? "pointer" : "not-allowed",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
          >
            <WhatsAppIcon />
            Send my measurements
          </a>
        </div>

        {/* Image */}
        <div data-measure-img="" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: 0,
              overflow: "hidden",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.045)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            <Image
              src={profilePic}
              alt="Measurement guide"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, var(--cream) 0%, transparent 16%, transparent 82%, var(--cream) 100%), " +
                  "linear-gradient(to right, var(--cream) 0%, transparent 12%, transparent 88%, var(--cream) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
