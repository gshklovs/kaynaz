import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Nasseri & Associates | Therapy and Clinical Supervision",
  description: "Compassionate, evidence-informed care for growth, wellbeing, and professional development.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nasseri & Associates",
    description: "Therapy and Clinical Supervision",
    url: "https://example.com",
    siteName: "Nasseri & Associates",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasseri & Associates",
    description: "Therapy and Clinical Supervision"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="container-responsive py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-200 bg-brand-sand/30">
      <div className="container-responsive py-5 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold font-display text-brand-secondary">Nasseri &amp; Associates</span>
          <span className="text-sm text-slate-600">Therapy and Clinical Supervision</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/clinicians">Clinicians</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/forms">Client Forms</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-md bg-brand-primary text-white hover:bg-brand-secondary">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-responsive py-8 text-sm text-slate-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {year} Nasseri &amp; Associates. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/contact">Contact</Link>
          <Link href="/about">Fees &amp; Insurance</Link>
        </div>
      </div>
    </footer>
  );
}

