"use client";
import { useState } from "react";

const paymentOptions = [
  { value: "ppo", label: "PPO Insurance (out-of-network)" },
  { value: "hsa_fsa", label: "HSA/FSA" },
  { value: "private_pay", label: "Private Pay" },
  { value: "other", label: "Other" }
];

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("pending");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) setStatus("success"); else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Your Name</label>
        <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email Address</label>
        <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <input name="phone" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div>
        <label className="block text-sm font-medium">Preferred Payment Method</label>
        <select name="payment" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent">
          {paymentOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows={6} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <button type="submit" className="px-4 py-2 rounded-md bg-brand-primary text-white hover:bg-brand-secondary">Send</button>
      {status === "pending" && <p className="text-slate-600 text-sm">Sending…</p>}
      {status === "success" && <p className="text-green-700 text-sm">Thank you. Your message has been sent.</p>}
      {status === "error" && <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
}

