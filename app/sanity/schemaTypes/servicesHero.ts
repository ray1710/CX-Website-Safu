// sanity/schemas/servicesHero.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesHero",
  title: "Services Hero",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: 'Small uppercase label (e.g. "What I Offer")',
      initialValue: "What I Offer",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main hero heading",
      initialValue: "Services Built Around Your Customers",
    }),
  ],
  preview: {
    select: { label: "label", heading: "heading" },
    prepare({ label, heading }) {
      return { title: "Services Hero", subtitle: `${label} — ${heading}` };
    },
  },
});
