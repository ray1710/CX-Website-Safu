interface Service {
  num: string;
  id: string;
  title: string;
  description: string;
  whoItsFor: string[];
  outcomes: string[];
  cta: string;
  href: string;
}

const services: Service[] = [
  {
    num: "01",
    id: "training",
    title: "Customer Service Training",
    description:
      "Equip your frontline teams with the communication, problem-solving, and service recovery skills that turn everyday interactions into memorable customer experiences. My training programs are practical, engaging, and built around real scenarios your team actually faces.",
    whoItsFor: [
      "Customer service and support teams",
      "Frontline staff in retail, SaaS, or enterprise environments",
      "Team leads looking to upskill their direct reports",
      "Organizations experiencing high customer complaint volumes",
    ],
    outcomes: [
      "Improved first-contact resolution rates",
      "Stronger customer satisfaction and NPS scores",
      "Confident, empathetic frontline communicators",
      "Consistent service standards across your team",
    ],
    cta: "Request Training Details",
    href: "/contact#training",
  },
  {
    num: "02",
    id: "consulting",
    title: "Customer Success Consulting",
    description:
      "Strengthen retention, reduce churn, and build scalable Customer Success operations that drive long-term value. I work alongside your team to design CS frameworks, refine onboarding journeys, and create the systems that turn customers into advocates.",
    whoItsFor: [
      "SaaS and tech companies scaling their CS function",
      "Founders and executives without a dedicated CS leader",
      "CS teams struggling with churn or low engagement",
      "Organizations launching a formal Customer Success practice",
    ],
    outcomes: [
      "Reduced churn and improved retention metrics",
      "Scalable onboarding and success playbooks",
      "Clearer customer health scoring and segmentation",
      "A CS function that operates with consistency and purpose",
    ],
    cta: "Book a CS Strategy Call",
    href: "/contact#consulting",
  },
  {
    num: "03",
    id: "transformation",
    title: "Customer-Centric Transformation",
    description:
      "Shift your organization's mindset, processes, and culture to put customers at the center of every decision. This engagement goes beyond training — it's a structured transformation that aligns your people, systems, and strategy around the customer experience.",
    whoItsFor: [
      "Mid-size to enterprise organizations undergoing change",
      "Leadership teams committed to culture transformation",
      "Companies with siloed departments and inconsistent CX",
      "Organizations recovering from customer experience failures",
    ],
    outcomes: [
      "A unified, customer-first organizational culture",
      "Cross-functional alignment on customer experience goals",
      "Redesigned processes that reduce friction for customers",
      "Leadership equipped to sustain the transformation long-term",
    ],
    cta: "Explore Transformation Support",
    href: "/contact#transformation",
  },
  {
    num: "04",
    id: "fractional",
    title: "Fractional Leadership",
    description:
      "Access senior Customer Experience or Customer Success leadership without the full-time cost. I embed with your team on a part-time or project basis to stabilize operations, lead through change, and build the foundations your organization needs to scale.",
    whoItsFor: [
      "Startups and scale-ups without a CX or CS executive",
      "Companies in leadership transition or rapid growth",
      "Teams that need hands-on direction, not just advice",
      "Organizations preparing to hire a permanent CX leader",
    ],
    outcomes: [
      "Immediate operational stability and leadership presence",
      "Documented processes and team structures ready to scale",
      "A clear roadmap for your permanent hire to inherit",
      "Faster progress than a traditional consulting engagement",
    ],
    cta: "Inquire About Fractional Support",
    href: "/contact#fractional",
  },
];

export default function ServicesBlocks() {
  return (
    <section className="bg-[#faf8f4] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {services.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
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
                className="inline-block bg-[#0e1320] text-white text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-[#1a2540] transition-colors duration-200 tracking-wide"
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
