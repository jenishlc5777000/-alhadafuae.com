import Link from "next/link";
import { Arrow, Brand } from "./Brand";
import { services, site, waLink } from "../lib/content";

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>{site.address.join(" ")}</p>
          </div>
          <div>
            <span className="footer-label">EXPLORE</span>
            <Link href="/about">About us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <span className="footer-label">CAPABILITIES</span>
            {services.map((s) => <Link key={s.n} href="/#services">{s.title}</Link>)}
          </div>
          <div>
            <span className="footer-label">TALK TO US</span>
            <a href={site.phoneHref}>Call {site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={waLink()} target="_blank" rel="noreferrer">WhatsApp us <Arrow /></a>
          </div>
        </div>
        <div className="footer-word" aria-hidden="true">AL HADAF</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AL HADAF CONCRETE RESTORATION</span>
          <span>DESIGNED FOR DURABILITY</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
      <a className="floating-wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat with Al Hadaf on WhatsApp">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" /></svg>
        <i>WHATSAPP</i>
      </a>
    </>
  );
}
