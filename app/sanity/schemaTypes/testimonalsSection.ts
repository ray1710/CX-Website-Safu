import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description:
        'Small uppercase label above the heading (e.g. "Testimonials")',
      initialValue: "Testimonials",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'Section heading (e.g. "What clients say")',
      initialValue: "What clients say",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
              rows: 3,
              description: "The client's testimonial (without quotation marks)",
            }),
            defineField({
              name: "author",
              title: "Author",
              type: "string",
              description:
                'Name or identifier of the person (e.g. "Client", "Jane Smith")',
            }),
            defineField({
              name: "role",
              title: "Role / Industry",
              type: "string",
              description:
                'Role or industry label shown below the author (e.g. "SaaS Industry")',
            }),
          ],
          preview: {
            select: {
              author: "author",
              role: "role",
              quote: "quote",
            },
            prepare({ author, role, quote }) {
              return {
                title: `${author ?? "Unknown"} · ${role ?? ""}`,
                subtitle: quote ?? "",
              };
            },
          },
        },
      ],
      initialValue: [
        {
          quote:
            "Safira helped us transform our onboarding and support experience. Our customer satisfaction scores increased within months.",
          author: "Client",
          role: "SaaS Industry",
        },
        {
          quote:
            "Her training changed the way our team communicates with customers. The impact was immediate.",
          author: "Director of Customer Support",
          role: "Enterprise Tech",
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
        title: "Testimonials Section",
        subtitle: `${label} — ${heading}`,
      };
    },
  },
});
