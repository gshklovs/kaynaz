export default function FormsPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Client Forms</h1>
      <p className="mt-4 text-black/70 max-w-3xl">
        Please review and complete the following forms prior to your initial visit. If you have any questions at any point, feel welcome to reach out—we’re here to help.
      </p>
      <div className="mt-8">
        <a
          className="btn-primary"
          href="/forms/intake-forms.pdf"
          download
        >
          Download Intake Packet (PDF)
        </a>
      </div>
    </div>
  );
}

