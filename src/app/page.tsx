import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-white">
        <div className="container py-20 md:py-28 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0F2A3A]">
              Care you can trust. Clarity you can grow with.
            </h1>
            <p className="text-lg text-black/70">
              Personalized therapy, thoughtful clinical supervision, and practical consulting. We help you move from uncertainty to steady progress—at a pace that feels right for you.
            </p>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">Book a complimentary consult</Link>
              <Link href="/about" className="link inline-flex items-center">Learn more</Link>
            </div>
          </div>
          <div className="rounded-xl bg-[#E9E4DB] aspect-[4/3] w-full" aria-hidden />
        </div>
      </section>

      {/* Services Overview */}
      <section className="container py-16 md:py-24 space-y-20">
        {/* Clinical Supervision */}
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Clinical Supervision</h2>
            <p className="mt-3 text-black/70 max-w-3xl">
              Support that sharpens judgment and strengthens ethical, client-centered practice. We offer collaborative, reflective supervision to help emerging and experienced clinicians deepen competence, navigate complexity, and stay grounded.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-xl bg-[#E9E4DB] aspect-[4/3] w-full" aria-hidden />
        </div>

        {/* Therapy */}
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="rounded-xl bg-[#E9E4DB] aspect-[4/3] w-full" aria-hidden />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Therapy</h2>
            <p className="mt-3 text-black/70 max-w-3xl">
              Evidence-informed therapy tailored to your goals and values. Together we clarify what matters, build skills that last, and create momentum for sustained change—without pressure or judgment.
            </p>
          </div>
        </div>

        {/* Coaching & Consulting */}
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Coaching &amp; Consulting</h2>
            <p className="mt-3 text-black/70 max-w-3xl">
              Practical guidance for professionals and organizations seeking clarity, strategy, and healthier systems. Engagements are structured, outcome-focused, and respectful of your context.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-xl bg-[#E9E4DB] aspect-[4/3] w-full" aria-hidden />
        </div>
      </section>
    </div>
  );
}
