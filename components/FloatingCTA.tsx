"use client";

const WA_URL =
  "https://wa.me/2348162740294?text=Hi%20Nkechi%2C%20I%27d%20love%20to%20place%20an%20order.";

export default function FloatingCTA() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: 22,
        bottom: 22,
        zIndex: 100,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "var(--wa)",
        color: "#fff",
        fontWeight: 700,
        fontSize: 15,
        padding: "14px 20px",
        borderRadius: 999,
        textDecoration: "none",
        boxShadow: "0 12px 30px rgba(31,178,85,0.45)",
        animation: "nkfloat 3.4s ease-in-out infinite",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      Chat on WhatsApp
    </a>
  );
}
