"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Lightweight interaction layer:
 *  [data-hero]       sets --hero-scroll (0–1) while the hero scrolls away
 *  [data-parallax]   sets --parallax (px) from the element's distance to the viewport centre
 *  [data-scroll-x]   sets --sx (number) as the element travels through the viewport
 *  [data-pointer]    sets --px / --py (-1…1) from the cursor position over the element
 *  [data-magnetic]   nudges the element toward the cursor
 *  [data-spotlight]  sets --mx / --my on each child for a cursor-following glow
 */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const q = <T extends HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s));
    const off: (() => void)[] = [];
    const on = (el: EventTarget, type: string, fn: EventListener, opts?: AddEventListenerOptions) => { el.addEventListener(type, fn, opts); off.push(() => el.removeEventListener(type, fn)); };

    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const parallax = q("[data-parallax]");
    const scrollX = q("[data-scroll-x]");
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      if (hero) hero.style.setProperty("--hero-scroll", Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1).toFixed(3));
      parallax.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        el.style.setProperty("--parallax", `${((r.top + r.height / 2 - vh / 2) * (Number(el.dataset.parallax) || 0.12)).toFixed(1)}px`);
      });
      scrollX.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        el.style.setProperty("--sx", (vh - r.top).toFixed(1));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    on(window, "scroll", schedule, { passive: true });
    on(window, "resize", schedule);

    if (fine) {
      q("[data-pointer]").forEach((el) => {
        on(el, "pointermove", (e) => {
          const { clientX, clientY } = e as PointerEvent, r = el.getBoundingClientRect();
          el.style.setProperty("--px", (((clientX - r.left) / r.width) * 2 - 1).toFixed(3));
          el.style.setProperty("--py", (((clientY - r.top) / r.height) * 2 - 1).toFixed(3));
        });
        on(el, "pointerleave", () => { el.style.setProperty("--px", "0"); el.style.setProperty("--py", "0"); });
      });

      q("[data-magnetic]").forEach((el) => {
        let rect: DOMRect;
        on(el, "pointerenter", () => { el.style.translate = ""; rect = el.getBoundingClientRect(); });
        on(el, "pointermove", (e) => {
          if (!rect) return;
          const { clientX, clientY } = e as PointerEvent;
          el.style.translate = `${((clientX - rect.left - rect.width / 2) * 0.3).toFixed(1)}px ${((clientY - rect.top - rect.height / 2) * 0.3).toFixed(1)}px`;
        });
        on(el, "pointerleave", () => { el.style.translate = ""; });
      });

      q("[data-spotlight] > *").forEach((el) => {
        on(el, "pointermove", (e) => {
          const { clientX, clientY } = e as PointerEvent, r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${clientX - r.left}px`);
          el.style.setProperty("--my", `${clientY - r.top}px`);
        });
      });
    }

    return () => { off.forEach((f) => f()); cancelAnimationFrame(frame); };
  }, [pathname]);

  return null;
}
