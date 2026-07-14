type BookHeroProps = {
  eyebrow: string;
  heading: string;
  subheading: string;
};

export default function BookHero({
  eyebrow,
  heading,
  subheading,
}: BookHeroProps) {
  return (
    <section className="bg-[#0e1320] pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-[#c9a464] tracking-[0.2em] uppercase font-light mb-4">
          {eyebrow}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.12] max-w-3xl">
          {heading}
        </h1>
        <p className="text-white/60 font-light leading-relaxed mt-6 max-w-xl">
          {subheading}
        </p>
      </div>
    </section>
  );
}
