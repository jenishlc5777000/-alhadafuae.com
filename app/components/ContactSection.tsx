"use client";
import { FormEvent, useState } from "react";
import { Arrow } from "./Brand";
import { site, waLink } from "../lib/content";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    setSent(true);
    window.open(waLink(`Hello Al Hadaf, I am ${d.get("name")}. I would like to discuss a project.\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nDetails: ${d.get("message") || "Not provided"}`), "_blank", "noopener");
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-watermark" aria-hidden="true">TALK</div>
      <div className="contact-intro" data-reveal>
        <p className="kicker red-text"><i />YOUR BUILDING, OUR NEXT CONVERSATION</p>
        <h2 className="display">Start with<br /><em>a clear view.</em></h2>
        <p>Share the challenge. We will help you decide the next sensible move.</p>
        <div className="contact-direct">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <form onSubmit={submit} data-reveal>
        <div className="form-row">
          <label>YOUR NAME<input name="name" required autoComplete="name" placeholder="How should we address you?" /></label>
          <label>PHONE NUMBER<input name="phone" type="tel" required autoComplete="tel" placeholder="+971" /></label>
        </div>
        <label>WORK EMAIL<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
        <label>PROJECT DETAILS<textarea name="message" rows={3} placeholder="What is happening at the site?" /></label>
        <button className="button primary" type="submit"><span>Send on WhatsApp</span> <Arrow /></button>
        {sent && <small className="sent" role="status">Your WhatsApp conversation is opening now.</small>}
      </form>
    </section>
  );
}
