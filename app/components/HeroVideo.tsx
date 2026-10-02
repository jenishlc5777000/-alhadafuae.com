"use client";
import { useState } from "react";
import { img, images } from "../lib/content";

const scenes = [
  { label: "FIELD", src: "/watermarked_preview.mp4", poster: img(images.pour, 1800) },
  { label: "URBAN", src: "https://cdn.coverr.co/videos/coverr-construction-workers-in-the-city-hmisd9bkec/1080p.mp4", poster: img(images.team, 1800) },
];

export default function HeroVideo() {
  const [scene, setScene] = useState(0);
  return (
    <>
      {scenes.map((s, i) => (
        <video key={s.src} className={`hero-video${scene === i ? " visible" : ""}`} autoPlay muted loop playsInline preload={i === 0 ? "auto" : "none"} poster={s.poster} aria-hidden="true">
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
