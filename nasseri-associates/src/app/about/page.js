export const metadata = {
  title: "About | Nasseri & Associates",
  description: "Our approach, fees, insurance, and hours."
};

export default function AboutPage() {
  return (
    <div className="prose-custom">
      <h1 className="font-display text-3xl text-brand-secondary">About Us</h1>
      <p>
        We provide thoughtful, evidence‑informed care in a warm, respectful environment. Our work centers on clarity, compassion, and
        meaningful progress—at a pace that honors your goals and circumstances.
      </p>

      <h2>Fees</h2>
      <p>
        Session fees vary by service and clinician. We will review your preferences and provide transparent rates before scheduling.
      </p>

      <h2>Insurance</h2>
      <p>
        Many clients use PPO insurance for out‑of‑network behavioral health benefits. Consider calling your plan to ask:
      </p>
      <ul>
        <li>The amount of your deductible</li>
        <li>The percentage covered for out‑of‑network behavioral health services</li>
      </ul>
      <p>Upon request, our office provides a detailed receipt you may submit for reimbursement.</p>

      <h2>Hours</h2>
      <p>Appointments are offered by arrangement. Virtual sessions are available. Please contact us to discuss current availability.</p>
    </div>
  );
}

