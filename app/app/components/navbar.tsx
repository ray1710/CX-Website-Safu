"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0e1320]/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-light text-white tracking-wide"
        >
          Safira<span className="text-[#c9a464]">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide font-light"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#"
            className="ml-2 text-sm bg-[#c9a464] text-[#0e1320] font-medium px-5 py-2 rounded-sm hover:bg-[#d9b474] transition-colors duration-200 tracking-wide"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e1320]/98 border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#"
            className="text-sm bg-[#c9a464] text-[#0e1320] font-medium px-5 py-2.5 text-center rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
