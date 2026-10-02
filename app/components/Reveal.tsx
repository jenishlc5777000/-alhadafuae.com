"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Fades in [data-reveal] blocks and counts up [data-count] numbers as they enter the viewport. */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (reduce || !Number.isFinite(target)) { el.textContent = String(target); return; }
      const start = performance.now(), duration = 1600;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 4))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      el.classList.add("is-visible");
      el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
      if (el.dataset.count) countUp(el);
      observer.unobserve(el);
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
