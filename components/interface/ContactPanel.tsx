"use client";

import { useState } from "react";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

export function ContactPanel({ onReturn }: { onReturn: () => void }) {
  const [message, setMessage] = useState("Prototype only — this form does not send yet.");

  return (
    <div className="interface-panel contact-panel">
      <div className="panel-coordinate">FINAL CHECKPOINT / HOME SIGNAL</div>
      <p className="eyebrow">Journey complete · contact</p>
      <h2>Thanks for exploring.</h2>
      <p className="contact-callout">Let's build something with positive impact.</p>
      <div className="contact-layout">
        <div>
          <a className="email-link" href={`mailto:iwc3@outlook.com`}>iwc3@outlook.com</a>
          <div className="contact-links">
            {socialLinks.map((link) => <a key={link.label} href={link.href}>{link.label} <small>{link.placeholder}</small></a>)}
          </div>
          <button className="text-button" onClick={onReturn}>↗ Return to the universe</button>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setMessage("Message staged locally. Connect a form service before launch.");
          }}
        >
          <h4>TO DO - Doesn't send yet</h4>
          <label htmlFor="contact-email">Your email</label>
          <input id="contact-email" type="email" placeholder="you@example.com" required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" placeholder="Tell me about the idea…" rows={3} required />
          <button type="submit">Stage message</button>
          <p className="form-status" aria-live="polite">{message}</p>
        </form>
      </div>
    </div>
  );
}
