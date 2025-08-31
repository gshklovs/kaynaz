import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header";

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

export const viewport = {
  width: "device-width",
  initialScale: 1
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

