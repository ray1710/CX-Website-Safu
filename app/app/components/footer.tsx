const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e1320] border-t border-white/10 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl text-white font-light tracking-wide">
              Safira<span className="text-[#c9a464]">.</span>
            </span>
            <p className="text-white/40 text-sm font-light leading-relaxed mt-4 max-w-xs">
              Consulting, training, and advisory support that transforms how
              your organization serves and retains customers.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-light mb-5">
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm font-light hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-light mb-5">
              Get In Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-white/40 text-sm font-light">
                Richmond Hill, ON
              </li>
              <li>
                <a
                  href="mailto:hello@safira.com"
                  className="text-white/40 text-sm font-light hover:text-white transition-colors duration-200"
                >
                  hello@safira.com
                </a>
              </li>
              <li>
                <a
                  href="/book"
                  className="text-[#c9a464] text-sm font-light hover:text-[#d9b474] transition-colors duration-200"
                >
                  Book a Consultation →
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-white/30 text-sm font-light hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Safira. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-light">
            Richmond Hill, ON · Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
