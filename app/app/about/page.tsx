import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const values = ["Empathy", "Clarity", "Excellence", "Integrity", "Growth"];

const approach = [
  "Deep operational expertise across CS, support, and onboarding.",
  "Practical, actionable frameworks built for real teams.",
  "Hands-on leadership experience — not just advisory.",
  "A coaching mindset that empowers rather than directs.",
  "A relentless focus on measurable, lasting outcomes.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── Headline ─────────────────────────────────────────────────── */}
      <section className="bg-[#0e1320] pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-[#c9a464] tracking-[0.2em] uppercase font-light mb-4">
            About Safira
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.12] max-w-3xl">
            A Customer-Centric Leader Dedicated to Transforming Teams and
            Experiences
          </h1>
        </div>
      </section>

      {/* ── Story: text left, photo right ───────────────────────────── */}
      <section className="bg-[#faf8f4] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-5">
              My Story
            </p>
            <p className="text-[#2d2d2d] font-normal leading-relaxed mb-5">
              I'm{" "}
              <span className="text-[#0e1320] font-semibold">Safira Amin</span>{" "}
              — a fractional leader, consultant, and trainer specializing in
              Customer Success, Customer Service, onboarding transformation, and
              customer-centric organizational design.
            </p>
            <p className="text-[#2d2d2d] font-normal leading-relaxed mb-5">
              Over the past decade, I've led high-performing teams, redesigned
              customer journeys, and built scalable support and success
              operations for organizations across Canada and the U.S.
            </p>
            <p className="text-[#2d2d2d] font-normal leading-relaxed mb-8">
              I bring a blend of strategic clarity, operational discipline, and
              human-centered leadership to every engagement. Whether I'm
              training frontline teams, advising executives, or rebuilding
              processes, my goal is always the same — to create experiences that
              customers remember for the right reasons.
            </p>
            <blockquote className="border-l-2 border-[#c9a464] pl-5 font-serif text-lg text-[#0e1320] italic font-light leading-relaxed">
              "When you take care of your customers and your people, growth
              follows."
            </blockquote>
          </div>

          {/* Right — photo */}
          <div className="bg-[#f0ece3] border border-dashed border-[#d4cfc6] rounded-sm flex flex-col items-center justify-center gap-3 text-[#b0ab9e] h-[420px]">
            <svg
              className="w-12 h-12 opacity-40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-sm font-light">
              Professional photo coming soon
            </span>
          </div>
        </div>
      </section>

      {/* ── Mission / Values / Approach ──────────────────────────────── */}
      <section className="bg-[#faf8f4] border-t border-[#e8e3da]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e8e3da]">
          {/* Mission */}
          <div className="px-8 py-16">
            <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-4">
              Mission
            </p>
            <h3 className="font-serif text-xl text-[#0e1320] font-light mb-4">
              Why I do this work
            </h3>
            <p className="text-[#2d2d2d] text-sm leading-relaxed">
              To help organizations build customer-centric cultures where teams
              feel empowered and customers feel valued.
            </p>
          </div>

          {/* Values */}
          <div className="px-8 py-16">
            <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-4">
              Values
            </p>
            <h3 className="font-serif text-xl text-[#0e1320] font-light mb-5">
              What I stand for
            </h3>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
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
              Approach
            </p>
            <h3 className="font-serif text-xl text-[#0e1320] font-light mb-5">
              How I work
            </h3>
            <div className="flex flex-col gap-3">
              {approach.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a464] mt-1.5 flex-shrink-0" />
                  <p className="text-[#2d2d2d] text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
