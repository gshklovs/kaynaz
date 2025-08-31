import Image from "next/image";

export default function CliniciansPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Clinicians</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <article className="rounded-lg border border-black/10 bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-24 w-24 rounded-md overflow-hidden bg-[#E9E4DB]">
              <Image src="/portrait-placeholder.svg" alt="Portrait placeholder" fill />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Kaynaz Nasseri</h2>
              <p className="text-black/60">Clinical Supervision • Therapy</p>
              <div className="mt-3 text-black/70 text-sm">
                We all navigate complex demands. Thoughtful, evidence-informed care—and supervision—can help you find steadier ground. My style is collaborative, structured, and compassionate, with practical steps between sessions.
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <section>
              <h3 className="font-semibold">Fees</h3>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>Individual therapy (50 minutes): $XXX</li>
                <li>Clinical supervision (50 minutes): $XXX</li>
              </ul>
            </section>
            <section>
              <h3 className="font-semibold">Credentials</h3>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>Licensed [Credential], [State]</li>
                <li>[Graduate Degree], [University]</li>
                <li>Special interests: supervision, anxiety, life transitions</li>
              </ul>
            </section>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">About Me</h3>
            <p className="mt-2 text-black/70 text-sm">
              I believe meaningful change is built through steady, manageable steps. In our work, we’ll clarify what matters most, set realistic goals, and practice skills that fit your life. Sessions balance reflection with action.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

