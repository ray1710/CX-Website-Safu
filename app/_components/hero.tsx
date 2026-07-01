type HeroProps = {
  eyebrow: string;
  headline: {
    beforeItalic: string;
    italic: string;
    afterItalic: string;
  };
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export default function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="min-h-screen bg-[#0e1320] flex items-center relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(201,164,100,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Decorative ring */}
      <div className="absolute right-0 top-0 w-125 h-125 opacity-[0.06] pointer-events-none">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="420" cy="80" r="320" stroke="#c9a464" strokeWidth="1" />
          <circle cx="420" cy="80" r="220" stroke="#c9a464" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full pt-28 pb-20">
        <p className="text-[#c9a464] text-xs tracking-[0.25em] uppercase font-light mb-6">
          {eyebrow}
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.25rem] text-white font-light leading-[1.12] tracking-tight max-w-3xl mb-6">
          {headline.beforeItalic}{" "}
          <span className="italic text-[#c9a464]">{headline.italic}</span>{" "}
          {headline.afterItalic}
        </h1>

        <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl mb-12">
          {subheadline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={primaryCta.href}
            className="bg-[#c9a464] text-[#0e1320] text-sm font-medium px-7 py-3.5 rounded-sm hover:bg-[#d9b474] transition-colors duration-200 tracking-wide"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="border border-white/25 text-white text-sm font-light px-7 py-3.5 rounded-sm hover:border-white/50 hover:bg-white/5 transition-all duration-200 tracking-wide"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
