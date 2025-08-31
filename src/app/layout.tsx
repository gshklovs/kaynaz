import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasseri & Associates — Therapy and Clinical Supervision",
  description:
    "Compassionate, evidence-based care for individuals and clinicians. Therapy, clinical supervision, and consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="text-base font-semibold tracking-tight">Nasseri &amp; Associates</span>
              <span className="text-sm text-black/60">Therapy &amp; Clinical Supervision</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:underline underline-offset-4">About</Link>
              <Link href="/clinicians" className="hover:underline underline-offset-4">Clinicians</Link>
              <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
              <Link href="/forms" className="hover:underline underline-offset-4">Client Forms</Link>
              <Link href="/contact" className="btn-primary">Book a consult</Link>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="mt-24 border-t border-black/5">
          <div className="container py-10 text-sm text-black/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Nasseri &amp; Associates. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
