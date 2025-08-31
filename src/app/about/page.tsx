export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About Us</h1>
      <div className="mt-6 grid gap-12 md:grid-cols-2">
        <section>
          <p className="text-black/70">
            We provide thoughtful, evidence-informed care for individuals and clinicians. Our approach is collaborative and practical—clear goals, steady progress, and respect for your pace and preferences.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Fees</h2>
            <ul className="mt-3 space-y-2 text-black/70">
              <li>Initial consultation (15–20 minutes): Complimentary</li>
              <li>Individual therapy session (50 minutes): $XXX</li>
              <li>Clinical supervision (50 minutes): $XXX</li>
              <li>Coaching &amp; consulting: Scoped per engagement</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Insurance</h2>
            <p className="mt-3 text-black/70">
              Many PPO plans reimburse a portion of behavioral health services for out-of-network providers. Consider asking your plan: (1) your deductible and (2) the percentage reimbursed for out-of-network behavioral health. Upon request, we provide a detailed receipt (superbill).
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-xl font-semibold">Hours</h2>
            <ul className="mt-3 space-y-2 text-black/70">
              <li>Weekdays: 9:00 AM – 6:00 PM</li>
              <li>Limited evening availability by request</li>
              <li>Virtual appointments available</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Our Approach</h2>
            <p className="mt-3 text-black/70">
              We tailor care to your needs, drawing from cognitive and behavioral therapies, acceptance and commitment strategies, and strengths-based frameworks. Sessions are structured yet flexible, with clear takeaways and space to reflect.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

