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
  {
    quote:
      "Safira brought structure and clarity to our CS function. We finally have a playbook our team can actually follow.",
    author: "VP of Customer Success",
    role: "B2B SaaS",
  },
  {
    quote:
      "The fractional engagement exceeded every expectation. She was embedded, hands-on, and genuinely invested in our outcomes.",
    author: "CEO",
    role: "Scale-up, Canada",
  },
  {
    quote:
      "Our NPS jumped 22 points in the first quarter after working with Safira. The transformation was real and lasting.",
    author: "Head of CX",
    role: "Retail Technology",
  },
  {
    quote:
      "She doesn't just advise — she builds. We left every session with something concrete to implement.",
    author: "Director of Operations",
    role: "Professional Services",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="bg-[#faf8f4] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-[#e8e3da] p-8 flex flex-col gap-6"
          >
            {/* Quote mark */}
            <span className="font-serif text-4xl text-[#c9a464] font-light leading-none">
              "
            </span>

            {/* Quote */}
            <p className="font-serif text-lg text-[#0e1320] font-light italic leading-relaxed flex-1">
              {t.quote}
            </p>

            {/* Divider */}
            <div className="w-8 h-px bg-[#c9a464]" />

            {/* Author */}
            <div>
              <p className="text-[#0e1320] text-sm font-medium">{t.author}</p>
              <p className="text-[#3d3d5c] text-xs font-light tracking-widest uppercase mt-1">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
