export default function IntroSection() {
  return (
    <section className="bg-[#faf8f4] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — label + headline */}
        <div>
          <p className="text-xs text-[#c9a464] tracking-[0.2em] uppercase font-light mb-4">
            The Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0e1320] font-light leading-tight">
            More than fast responses.
          </h2>
        </div>

        {/* Right — paragraph */}
        <div>
          <p className="text-[#3d3d5c] text-lg font-light leading-relaxed">
            Today's customers expect more than fast responses — they expect{" "}
            <span className="font-serif italic text-[#0e1320]">
              empathy, clarity, and consistency.
            </span>{" "}
            I help organizations build the systems, skills, and culture required
            to deliver world-class customer experiences. Through consulting,
            training, and hands-on transformation support, I partner with
            leaders to elevate service quality, strengthen customer loyalty, and
            empower teams to perform at their best.
          </p>
        </div>
      </div>
    </section>
  );
}
