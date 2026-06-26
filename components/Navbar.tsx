"use client";

const WA_URL =
  "https://wa.me/2348162740294?text=Hi%20Nkechi%2C%20I%27d%20love%20to%20order%20a%20bespoke%20Ankara%20piece.";

const links = [
  { href: "#work", label: "Lookbook" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
];

function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
        padding: "14px clamp(18px,4vw,56px)",
        background: "rgba(251,243,228,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(34,23,51,0.1)",
      }}
    >
      <a
        href="#top"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "var(--ink)",
            color: "var(--gold)",
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 800,
            fontSize: 17,
            letterSpacing: "0.5px",
          }}
        >
          NK
        </span>
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "-0.2px",
            }}
          >
            Stitches by NK
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "3px",
              color: "var(--terra)",
              marginTop: 3,
            }}
          >
            FASHIONS · OWERRI
          </span>
        </span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              textDecoration: "none",
              color: "var(--ink)",
              fontWeight: 600,
              fontSize: 14.5,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            background: "var(--wa)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 14.5,
            padding: "11px 18px",
            borderRadius: 999,
            boxShadow: "0 6px 16px rgba(31,178,85,0.32)",
          }}
        >
          <WhatsAppIcon size={17} />
          Chat now
        </a>
      </div>
    </nav>
  );
}
