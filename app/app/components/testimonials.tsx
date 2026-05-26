"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Safira helped us transform our onboarding and support experience. Our customer satisfaction scores increased within months.",
    author: "Client",
    role: "SaaS Industry",
  },
  {
    quote:
      "Her training changed the way our team communicates with customers. The impact was immediate.",
    author: "Director of Customer Support",
    role: "Enterprise Tech",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      5500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="bg-[#0e1320] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-xs text-[#c9a464] tracking-[0.2em] uppercase font-light mb-3">
          Testimonials
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-16">
          What clients say
        </h2>

        {/* Quotes */}
        <div className="relative min-h-40 flex items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-600"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(12px)",
                pointerEvents: i === active ? "auto" : "none",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p className="font-serif text-xl md:text-2xl text-white/85 font-light italic leading-relaxed mb-8 max-w-2xl">
                "{t.quote}"
              </p>
              <div className="w-10 h-px bg-[#c9a464] mb-5" />
              <p className="text-white text-sm font-light tracking-wide">
                {t.author}
              </p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1 font-light">
                {t.role}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-1.5 bg-[#c9a464]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
