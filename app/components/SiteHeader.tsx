"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow, Brand } from "./Brand";
import { site, waLink } from "../lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 40);
      headerRef.current?.style.setProperty("--progress", String(max > 0 ? Math.min(window.scrollY / max, 1) : 0));
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", open);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));

  return (
    <>
      <header ref={headerRef} className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-menu-open" : ""}`}>
        <Brand />
        <nav className="main-nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : undefined}>{l.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-cta" href="#contact" onClick={() => setOpen(false)}><span>Start a project</span><Arrow /></a>
          <button type="button" className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-panel" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
        <span className="scroll-progress" aria-hidden="true" />
      </header>
      <div id="mobile-panel" className={`mobile-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} style={{ "--i": i } as React.CSSProperties} className={isActive(l.href) ? "is-active" : undefined} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>0{i + 1}</span>{l.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-panel-foot">
          <a href={site.phoneHref} tabIndex={open ? 0 : -1}>{site.phone}</a>
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>{site.email}</a>
          <a href={waLink()} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>WhatsApp <Arrow /></a>
        </div>
      </div>
    </>
  );
}
