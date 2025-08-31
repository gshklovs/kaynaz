export const metadata = {
  title: "Contact | Nasseri & Associates",
  description: "Get in touch to schedule a complimentary consultation."
};
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-start">
      <section>
        <h1 className="font-display text-3xl text-brand-secondary">Contact</h1>
        <p className="mt-3 text-slate-700">
          Sessions are currently offered virtually. Please text or email to request an appointment.
          We also offer a complimentary 15–20 minute consultation.
        </p>
        <div className="mt-4 text-slate-700 space-y-1">
          <p><strong>Phone:</strong> (555) 555‑5555</p>
          <p><strong>Email:</strong> example@gmail.com</p>
        </div>
        <div className="mt-6 h-40 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-secondary/70">
          Scenic image placeholder
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

