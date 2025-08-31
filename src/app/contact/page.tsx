"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(formData: FormData) {
    setStatus("Sending...");
    try {
      const entries = Array.from(formData.entries()) as [string, FormDataEntryValue][];
      const payload: Record<string, string> = Object.fromEntries(
        entries.map(([key, value]) => [key, typeof value === "string" ? value : ""]) 
      );
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("Message sent. We’ll reply shortly.");
    } catch {
      setStatus("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <div className="container py-16 md:py-24 grid gap-10">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-4 text-black/70">
            We offer virtual appointments. Call, email, or send a message below to schedule your complimentary 15–20 minute consultation.
          </p>
          <div className="mt-6 text-black/80 space-y-2">
            <p><strong>Phone</strong>: (XXX) XXX-XXXX</p>
            <p><strong>Email</strong>: example@gmail.com</p>
            <p><strong>Location</strong>: Virtual — Text or email for an appointment</p>
          </div>
        </div>
        <div className="rounded-xl bg-[#E9E4DB] aspect-[4/3] w-full" aria-hidden />
      </div>

      <form action={onSubmit} className="grid gap-4 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1 text-sm">
            <span>Name</span>
            <input name="name" required className="rounded-md border border-black/20 px-3 py-2 bg-white" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Email</span>
            <input type="email" name="email" required className="rounded-md border border-black/20 px-3 py-2 bg-white" />
          </label>
        </div>
        <label className="grid gap-1 text-sm">
          <span>Phone</span>
          <input name="phone" className="rounded-md border border-black/20 px-3 py-2 bg-white" />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Preferred payment method</span>
          <select name="payment" className="rounded-md border border-black/20 px-3 py-2 bg-white">
            <option value="ppo">PPO Insurance</option>
            <option value="hsa-fsa">HSA / FSA</option>
            <option value="cash">Self-pay</option>
            <option value="other">Other / Unsure</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span>Message</span>
          <textarea name="message" rows={6} required className="rounded-md border border-black/20 px-3 py-2 bg-white" />
        </label>
        <button className="btn-primary w-fit" type="submit">Send message</button>
        {status && <p className="text-sm text-black/60">{status}</p>}
      </form>
    </div>
  );
}

