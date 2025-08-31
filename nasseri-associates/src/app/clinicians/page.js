export const metadata = {
  title: "Clinicians | Nasseri & Associates",
  description: "Meet our clinicians and explore services, fees, and credentials."
};

export default function CliniciansPage() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-3xl text-brand-secondary">Our Clinicians</h1>
        <p className="mt-3 text-slate-700">Profiles represent examples; additional clinicians may be added.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="aspect-[3/4] w-full rounded-lg bg-slate-100 border border-slate-200" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-display text-brand-secondary">Kaynaz Nasseri, LMFT</h2>
          <p className="mt-2 text-slate-700">
            I provide clinical supervision and therapy grounded in collaboration, curiosity, and care. My approach integrates
            evidence‑informed methods with practical strategies, supporting clarity, confidence, and growth.
          </p>

          <h3 className="mt-6 font-semibold">Fees</h3>
          <ul className="list-disc pl-5 text-slate-700">
            <li>45‑50 minute session: $ABC</li>
            <li>60‑75 minute session: $EFG</li>
          </ul>

          <h3 className="mt-6 font-semibold">Additional Information</h3>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Licensed Marriage and Family Therapist (LMFT)</li>
            <li>Supervisor experience with associate clinicians across varied settings</li>
            <li>Advanced training in integrative, evidence‑informed modalities</li>
          </ul>

          <h3 className="mt-6 font-semibold">About Me</h3>
          <p className="text-slate-700">
            We all navigate complexities—responsibilities, expectations, and change. My role is to offer a steady space to reflect,
            practice new skills, and move toward what matters most to you. Together, we’ll set thoughtful goals and work at a pace
            that respects your context.
          </p>
        </div>
      </section>
    </div>
  );
}

