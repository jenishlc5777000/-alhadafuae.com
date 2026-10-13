"use client";
import { useEffect, useRef, useState } from "react";

const scenes = [
  { label: "FIELD", src: "/video1.mp4", poster: "/projects/quay-1.jpg" },
  { label: "URBAN", src: "/video2.mp4", poster: "/projects/warehouse-1.jpg" },
];

/** Plays each scene once, then auto-advances to the next; the user can switch at any time. */
export default function HeroVideo() {
  const [scene, setScene] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === scene) {
        try { v.currentTime = 0; } catch { /* ignore seek errors on streaming sources */ }
        v.play().catch(() => { /* autoplay may be blocked; the poster still shows */ });
      } else {
        v.pause();
      }
    });
  }, [scene]);

  const next = () => setScene((s) => (s + 1) % scenes.length);

  return (
    <>
      {scenes.map((s, i) => (
        <video
          key={s.src}
          ref={(el) => { refs.current[i] = el; }}
          className={`hero-video${scene === i ? " visible" : ""}`}
          autoPlay={i === 0}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          poster={s.poster}
          aria-hidden="true"
          onEnded={() => { if (scene === i) next(); }}
        >
          <source src={s.src} type="video/mp4" />
        </video>
      ))}
      <div className="scene-switcher" role="group" aria-label="Choose background video">
        {scenes.map((s, i) => (
          <button key={s.label} type="button" className={scene === i ? "active" : ""} aria-pressed={scene === i} onClick={() => setScene(i)}>
            0{i + 1} <span>{s.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
