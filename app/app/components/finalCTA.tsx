interface FinalCTAProps {
  label: string;
  heading: {
    beforeItalic: string;
    italic: string;
  };
  subtext: string;
  cta: {
    label: string;
    href: string;
  };
}

export default function FinalCTA({
  label,
  heading,
  subtext,
  cta,
}: FinalCTAProps) {
  return (
    <section id="contact" className="bg-[#faf8f4] py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-[#3d3d5c] tracking-[0.2em] uppercase font-light mb-4">
          {label}
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0e1320] font-light leading-tight mb-6">
          {heading.beforeItalic}{" "}
          <span className="italic text-[#c9a464]">{heading.italic}</span>
        </h2>

        <p className="text-[#3d3d5c] font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          {subtext}
        </p>

        <a
          href={cta.href}
          className="inline-block bg-[#0e1320] text-white text-sm font-medium px-10 py-4 rounded-sm hover:bg-[#1a2540] transition-colors duration-200 tracking-wide"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
