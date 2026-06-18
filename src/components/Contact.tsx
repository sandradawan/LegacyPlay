"use client";

import { useState } from "react";
import Section from "./Section";
import { site } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi ${site.name}! My name is ${name || "—"}.%0A${encodeURIComponent(
      message || "I'd like to book a session."
    )}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Book a session or ask us anything"
      subtitle="Fastest reply on WhatsApp. We usually respond within minutes during opening hours."
      className="border-t border-border bg-surface/40"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Quick contact */}
        <div className="space-y-3">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-brand"
          >
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-muted">{site.whatsappDisplay}</div>
            </div>
            <span className="text-accent">→</span>
          </a>
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-brand"
          >
            <div>
              <div className="font-semibold">Call us</div>
              <div className="text-sm text-muted">{site.phone}</div>
            </div>
            <span className="text-accent">→</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-brand"
          >
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted">{site.email}</div>
            </div>
            <span className="text-accent">→</span>
          </a>
        </div>

        {/* Message form */}
        <form
          onSubmit={sendWhatsApp}
          className="rounded-2xl border border-border bg-surface p-6"
        >
          <label className="block text-sm font-medium">Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex"
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand"
          />

          <label className="mt-4 block text-sm font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="I'd like to book the Squad Lounge for Saturday night…"
            className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Send via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            Opens WhatsApp with your message ready to send.
          </p>
        </form>
      </div>
    </Section>
  );
}
