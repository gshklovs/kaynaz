import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="font-display text-4xl sm:text-5xl text-brand-secondary">Therapy and Clinical Supervision</h1>
        <p className="mt-4 text-lg text-slate-700">Compassionate, evidence-informed care to support your wellbeing and growth.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/contact" className="px-5 py-2.5 rounded-md bg-brand-primary text-white hover:bg-brand-secondary">Book a consultation</Link>
          <Link href="/about" className="px-5 py-2.5 rounded-md border border-brand-primary text-brand-primary hover:bg-brand-primary/5">Learn more</Link>
        </div>
      </section>

      <ServiceSection
        title="Clinical Supervision"
        body="Supportive, structured supervision for developing and seasoned clinicians. Strengthen case formulation, refine interventions, uphold ethics, and cultivate professional identity in a collaborative, reflective space."
        href="/contact"
        ctaLabel="Inquire about supervision"
      />

      <ServiceSection
        title="Individual Therapy"
        body="Personalized, goal-aligned care for concerns such as stress, anxiety, life transitions, and burnout. We pair evidence‑informed approaches with attentive guidance to help you build skills, insight, and resilience."
        href="/contact"
        ctaLabel="Schedule a consultation"
      />

      <ServiceSection
        title="Coaching & Consulting (temporary)"
        body="Short-term, outcomes-focused support for professional growth, wellbeing strategies, and organizational clarity. This service is non-clinical and tailored to practical goals."
        href="/contact"
        ctaLabel="Discuss your goals"
      />
    </div>
  );
}

function ServiceSection({ title, body, href, ctaLabel }) {
  return (
    <section className="grid gap-6 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="font-display text-2xl text-brand-secondary">{title}</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">{body}</p>
        <div className="mt-5">
          <Link href={href} className="inline-block px-4 py-2 rounded-md bg-brand-primary text-white hover:bg-brand-secondary">{ctaLabel}</Link>
        </div>
      </div>
      <div className="h-40 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-secondary/70">
        Illustration placeholder
      </div>
    </section>
  );
}

