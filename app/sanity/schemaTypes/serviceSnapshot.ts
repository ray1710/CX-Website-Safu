import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesSnapshot",
  title: "Services Snapshot",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description:
        'Small uppercase label above the heading (e.g. "What I Offer")',
      initialValue: "What I Offer",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'Section heading (e.g. "Services")',
      initialValue: "Services",
    }),
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
              name: "title",
              title: "Title",
              type: "string",
              description: 'Service name (e.g. "Customer Service Training")',
            }),
            defineField({
              name: "desc",
              title: "Description",
              type: "text",
              rows: 3,
              description: "Short description of the service",
            }),
            defineField({
              name: "cta",
              title: "CTA Label",
              type: "string",
              description: 'Link text (e.g. "Request Training Details")',
            }),
            defineField({
              name: "href",
              title: "CTA Link",
              type: "string",
              description: 'URL or anchor (e.g. "/services#training")',
            }),
          ],
          preview: {
            select: {
              num: "num",
              title: "title",
            },
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
          title: "Customer Service Training",
          desc: "Equip frontline teams with the communication, problem-solving, and service recovery skills that create memorable customer experiences.",
          cta: "Request Training Details",
          href: "/services#training",
        },
        {
          num: "02",
          title: "Customer Success Consulting",
          desc: "Strengthen retention, reduce churn, and build scalable CS operations that drive long-term customer value.",
          cta: "Book a CS Strategy Call",
          href: "/services#consulting",
        },
        {
          num: "03",
          title: "Customer-Centric Transformation",
          desc: "Shift your organization's mindset, processes, and culture to put customers at the center of every decision.",
          cta: "Explore Transformation Support",
          href: "/services#transformation",
        },
        {
          num: "04",
          title: "Fractional Leadership",
          desc: "Hands-on leadership support to stabilize teams, accelerate change, and build operational excellence.",
          cta: "Inquire About Fractional Support",
          href: "/services#fractional",
        },
      ],
    }),
  ],
  preview: {
    select: {
      label: "label",
      heading: "heading",
    },
    prepare({ label, heading }) {
      return {
        title: "Services Snapshot",
        subtitle: `${label} — ${heading}`,
      };
    },
  },
});
