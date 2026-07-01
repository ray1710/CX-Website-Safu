// app/components/about/AboutMVA.tsx
interface AboutMVAProps {
  mission: {
    label: string;
    heading: string;
    body: string;
  };
  values: {
    label: string;
    heading: string;
    items: string[];
  };
  approach: {
    label: string;
    heading: string;
    items: string[];
  };
}

export default function AboutMVA({ mission, values, approach }: AboutMVAProps) {
  return (
    <section className="bg-[#faf8f4] border-t border-[#e8e3da]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e8e3da]">
        {/* Mission */}
        <div className="px-8 py-16">
          <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-4">
            {mission.label}
          </p>
          <h3 className="font-serif text-xl text-[#0e1320] font-light mb-4">
            {mission.heading}
          </h3>
          <p className="text-[#2d2d2d] text-sm leading-relaxed">
            {mission.body}
          </p>
        </div>

        {/* Values */}
        <div className="px-8 py-16">
          <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-4">
            {values.label}
          </p>
          <h3 className="font-serif text-xl text-[#0e1320] font-light mb-5">
            {values.heading}
          </h3>
          <div className="flex flex-wrap gap-2">
            {values.items.map((v) => (
              <span
                key={v}
                className="flex items-center gap-1.5 px-4 py-2 border border-[#ddd8cc] text-[#0e1320] text-xs font-light rounded-full"
              >
                <span className="text-[#c9a464] text-[8px]">◆</span>
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="px-8 py-16">
          <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-4">
            {approach.label}
          </p>
          <h3 className="font-serif text-xl text-[#0e1320] font-light mb-5">
            {approach.heading}
          </h3>
          <div className="flex flex-col gap-3">
            {approach.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a464] mt-1.5 shrink-0" />
                <p className="text-[#2d2d2d] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
