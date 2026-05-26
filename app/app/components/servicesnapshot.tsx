const services = [
  {
    num: "01",
    title: "Customer Service Training",
    desc: "Equip frontline teams with the communication, problem-solving, and service recovery skills that create memorable customer experiences.",
    cta: "Request Training Details",
    href: "/services#training",
  },
  {
    num: "02",
    title: "Customer Success Consulting",
    desc: "Strengthen retention, reduce churn, and build scalable CS operations that drive long-term customer value.",
    cta: "Book a CS Strategy Call",
    href: "/services#consulting",
  },
  {
    num: "03",
    title: "Customer-Centric Transformation",
    desc: "Shift your organization's mindset, processes, and culture to put customers at the center of every decision.",
    cta: "Explore Transformation Support",
    href: "/services#transformation",
  },
  {
    num: "04",
    title: "Fractional Leadership",
    desc: "Hands-on leadership support to stabilize teams, accelerate change, and build operational excellence.",
    cta: "Inquire About Fractional Support",
    href: "/services#fractional",
  },
];

export default function ServicesSnapshot() {
  return (
    <section id="services" className=" py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-3">
            What I Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0e1320] font-light">
            Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="group bg-[#faf8f4] border border-[#e8e3da] hover:border-[#c9a464]/50 p-8 flex flex-col transition-all duration-300"
            >
              {/* Number */}
              <span className="font-serif text-4xl text-[#0e1320] group-hover:text-[#c9a464] font-light transition-colors duration-300 mb-6 block">
                {s.num}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl text-[#0e1320] font-normal leading-snug mb-4">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[#3d3d5c] text-sm font-light leading-relaxed flex-1 mb-8">
                {s.desc}
              </p>

              {/* CTA */}
              <a
                href={s.href}
                className="text-xs text-[#0e1320] font-medium tracking-wide uppercase border-b border-[#0e1320]/30 hover:border-[#c9a464] hover:text-[#c9a464] pb-0.5 transition-all duration-200 self-start"
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
