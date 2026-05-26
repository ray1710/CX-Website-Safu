export default function FinalCTA() {
  return (
    <section id="contact" className="bg-[#faf8f4] py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-[#3d3d5c] tracking-[0.2em] uppercase font-light mb-4">
          Let's Work Together
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0e1320] font-light leading-tight mb-6">
          Ready to elevate your{" "}
          <span className="italic text-[#c9a464]">customer experience?</span>
        </h2>

        <p className="text-[#3d3d5c] font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Book a consultation and let's build a customer-centric organization
          together.
        </p>

        <a
          href="/book"
          className="inline-block bg-[#0e1320] text-white text-sm font-medium px-10 py-4 rounded-sm hover:bg-[#1a2540] transition-colors duration-200 tracking-wide"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
