"use client";

/** Hero background: a single looping clip, with a poster frame extracted from the clip itself
 *  used while the video downloads so there's never a blank fade-in. */
export default function HeroVideo() {
  return (
    <video
      className="hero-video visible"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.webp"
      aria-hidden="true"
    >
      <source src="/video1.mp4" type="video/mp4" />
    </video>
  );
}
