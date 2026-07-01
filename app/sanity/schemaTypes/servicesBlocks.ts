// sanity/schemas/servicesBlocks.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesBlocks",
  title: "Services Blocks",
  type: "document",
  fields: [
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "num",
              title: "Number",
              type: "string",
              description: 'Display number (e.g. "01", "02")',
            }),
            defineField({
              name: "id",
              title: "ID",
              type: "slug",
              description:
                "Used as the anchor link ID (e.g. training, consulting)",
              options: { source: "title" },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),
            defineField({
              name: "whoItsFor",
              title: "Who It's For",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "outcomes",
              title: "Outcomes",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "cta",
              title: "CTA Label",
              type: "string",
              description: 'Button text (e.g. "Request Training Details")',
            }),
            defineField({
              name: "href",
              title: "CTA Link",
              type: "string",
              description: 'URL or anchor (e.g. "/contact#training")',
            }),
          ],
          preview: {
            select: { num: "num", title: "title" },
            prepare({ num, title }) {
              return {
                title: `${num ?? "—"} · ${title ?? "Untitled Service"}`,
              };
            },
          },
        },
      ],
      initialValue: [
        {
          num: "01",
          id: { current: "training" },
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
          id: { current: "consulting" },
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
          id: { current: "transformation" },
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
          id: { current: "fractional" },
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
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Services Blocks" };
    },
  },
});
