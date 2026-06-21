// sanity/schemas/aboutHero.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutHero",
  title: "About Hero",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: 'Small uppercase label (e.g. "About Safira")',
      initialValue: "About Safira",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main hero heading",
      initialValue:
        "A Customer-Centric Leader Dedicated to Transforming Teams and Experiences",
    }),
  ],
  preview: {
    select: { label: "label", heading: "heading" },
    prepare({ label, heading }) {
      return { title: "About Hero", subtitle: `${label} — ${heading}` };
    },
  },
});
