"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="border-b border-slate-200 bg-brand-sand/30">
      <div className="container-responsive py-5 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2" onClick={closeMenu}>
          <span className="text-2xl font-semibold font-display text-brand-secondary">Nasseri &amp; Associates</span>
          <span className="text-sm text-slate-600 hidden sm:inline">Therapy and Clinical Supervision</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/clinicians">Clinicians</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/forms">Client Forms</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-md bg-brand-primary text-white hover:bg-brand-secondary">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          <span className="sr-only">Toggle navigation</span>
          {/* Icon: hamburger / close */}
          {!isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden border-t border-slate-200 bg-white`}>
        <nav id="primary-navigation" className="container-responsive py-4 flex flex-col gap-3 text-sm">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/clinicians" onClick={closeMenu}>Clinicians</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/forms" onClick={closeMenu}>Client Forms</Link>
          <Link href="/contact" className="mt-1 inline-block px-3 py-2 rounded-md bg-brand-primary text-white hover:bg-brand-secondary" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

