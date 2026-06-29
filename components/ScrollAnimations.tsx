"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    let st: { getAll: () => Array<{ kill: () => void }> } | undefined;

    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      st = ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // ── Hero: entrance on load (no scroll trigger)
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from("[data-hero-badge]",            { y: 22,  opacity: 0, duration: 0.65 }, 0.15)
        .from("[data-hero-h1]",               { y: 64,  opacity: 0, duration: 1.1  }, 0.3)
        .from("[data-hero-p]",                { y: 36,  opacity: 0, duration: 0.9  }, 0.55)
        .from("[data-hero-ctas]",             { y: 24,  opacity: 0, duration: 0.75 }, 0.7)
        .from("[data-hero-stats] > div",      { y: 20,  opacity: 0, stagger: 0.1, duration: 0.6 }, 0.85)
        .from("[data-hero-img]",              { scale: 1.06, opacity: 0, duration: 1.3, ease: "power2.out" }, 0.2);

      // shared option — prevents GSAP setting opacity:0 before the trigger fires
      const ir = { immediateRender: false };

      // ── Eyebrow labels (all sections)
      gsap.utils.toArray<Element>("[data-eyebrow]").forEach(el => {
        gsap.from(el, {
          ...ir,
          scrollTrigger: { trigger: el, start: "top 92%" },
          y: 14, opacity: 0, duration: 0.55, ease: "power2.out",
        });
      });

      // ── Section h2 headings
      gsap.utils.toArray<Element>("[data-section-h2]").forEach(el => {
        gsap.from(el, {
          ...ir,
          scrollTrigger: { trigger: el, start: "top 90%" },
          y: 44, opacity: 0, duration: 0.9, ease: "power3.out",
        });
      });

      // ── Services: spring stagger from below
      gsap.from("[data-service-card]", {
        ...ir,
        scrollTrigger: { trigger: "#services", start: "top 72%" },
        y: 60, opacity: 0, stagger: 0.15, duration: 0.88, ease: "back.out(1.3)",
      });

      // ── Lookbook: clip-path wipe reveal staggered
      gsap.fromTo(
        "[data-lookbook-item]",
        { y: 50, opacity: 0, clipPath: "inset(20% 0% 0% 0%)", immediateRender: false },
        {
          y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)",
          scrollTrigger: { trigger: "#work", start: "top 70%" },
          stagger: { each: 0.1, from: "start" },
          duration: 0.95, ease: "power2.out",
        }
      );

      // ── About: image slides from left; only paragraphs + tags slide from right
      //    (eyebrow & h2 are handled by their own loops above — no double-targeting)
      gsap.from("[data-about-img]", {
        ...ir,
        scrollTrigger: { trigger: "#about", start: "top 73%" },
        x: -60, opacity: 0, duration: 1.05, ease: "power3.out",
      });
      gsap.from("[data-about-text] > p, [data-about-text] > div:last-child", {
        ...ir,
        scrollTrigger: { trigger: "#about", start: "top 70%" },
        x: 44, opacity: 0, stagger: 0.11, duration: 0.85, ease: "power2.out",
      });

      // ── Process: spring stagger from below
      gsap.from("[data-step-card]", {
        ...ir,
        scrollTrigger: { trigger: "#process", start: "top 72%" },
        y: 74, opacity: 0, stagger: 0.18, duration: 0.95, ease: "back.out(1.4)",
      });

      // ── Measurements: field cards stagger + image zoom
      gsap.from("[data-measure-card]", {
        ...ir,
        scrollTrigger: { trigger: "#measure", start: "top 76%" },
        y: 30, opacity: 0, stagger: 0.07, duration: 0.65, ease: "power2.out",
      });
      gsap.from("[data-measure-img]", {
        ...ir,
        scrollTrigger: { trigger: "#measure", start: "top 68%" },
        scale: 1.06, opacity: 0, duration: 1.15, ease: "power2.out",
      });

      // ── Reviews: fan up with perspective tilt
      gsap.from("[data-review-card]", {
        ...ir,
        scrollTrigger: { trigger: "#reviews", start: "top 76%" },
        y: 54, opacity: 0, rotationX: 10, stagger: 0.14, duration: 0.9,
        ease: "power2.out", transformOrigin: "top center",
      });

      // ── Decorative parallax blobs/rings
      gsap.utils.toArray<Element>("[data-parallax]").forEach(el => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax ?? "0.25");
        gsap.to(el, {
          scrollTrigger: {
            trigger: (el as HTMLElement).closest("section") ?? el,
            start: "top bottom", end: "bottom top", scrub: true,
          },
          y: `${speed * 110}px`, ease: "none",
        });
      });
    })();

    return () => st?.getAll().forEach(t => t.kill());
  }, []);

  return null;
}
