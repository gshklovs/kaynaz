import Link from "next/link";

export const metadata = {
  title: "Client Forms | Nasseri & Associates",
  description: "Please review and complete the following forms before your first visit."
};

export default function FormsPage() {
  return (
    <div className="prose-custom">
      <h1 className="font-display text-3xl text-brand-secondary">Client Forms</h1>
      <p>
        Please review and complete the following forms prior to our initial visit. If you have any questions, feel free to contact us.
      </p>
      <ul>
        <li>
          <Link href="/forms/intake.pdf" target="_blank" className="underline">Client Intake (PDF)</Link>
          <span className="text-slate-500"> — placeholder file</span>
        </li>
        <li>
          <Link href="/forms/privacy.pdf" target="_blank" className="underline">Privacy Practices (PDF)</Link>
          <span className="text-slate-500"> — placeholder file</span>
        </li>
      </ul>
    </div>
  );
}

