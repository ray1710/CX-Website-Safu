interface Service {
  num: string;
  id: { current: string };
  title: string;
  description: string;
  whoItsFor: string[];
  outcomes: string[];
  cta: string;
  href: string;
}

interface ServicesBlocksProps {
  services: Service[];
}

export default function ServicesBlocks({ services }: ServicesBlocksProps) {
  return (
    <section className="bg-[#faf8f4] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {services.map((s) => (
          <div
            key={s.id.current}
            id={s.id.current}
            className="grid md:grid-cols-2 gap-16 items-start pb-24 border-b border-[#e8e3da] last:border-b-0 last:pb-0"
          >
            {/* Left — main content */}
            <div>
              <span className="font-serif text-5xl text-[#0e1320] font-light block mb-4">
                {s.num}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0e1320] font-light leading-snug mb-6">
                {s.title}
              </h2>
              <p className="text-[#2d2d2d] font-light leading-relaxed mb-8">
                {s.description}
              </p>
              <a
                href={s.href}
                className="inline-block bg-[#0e1320] text-white text-sm
              font-medium px-8 py-3.5 rounded-sm hover:bg-[#1a2540]
              transition-colors duration-200 tracking-wide"
              >
                {s.cta}
              </a>
            </div>

            {/* Right — lists */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-4">
                  Who It's For
                </p>
                <div className="flex flex-col gap-3">
                  {s.whoItsFor.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a464] mt-1.5 shrink-0" />
                      <p className="text-[#2d2d2d] text-sm font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-4">
                  Outcomes
                </p>
                <div className="flex flex-col gap-3">
                  {s.outcomes.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="text-[#c9a464] text-[8px] mt-1.5 shrink-0">
                        ◆
                      </span>
                      <p className="text-[#2d2d2d] text-sm font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
