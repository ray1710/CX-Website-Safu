import { defineField, defineType } from "sanity";

export default defineType({
  name: "bookHero",
  title: "Book Hero",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      description:
        'Small uppercase label above the heading (e.g. "Work With Me")',
      initialValue: "Work With Me",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'Main hero heading (e.g. "Book a Discovery Call")',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
      description: "Supporting paragraph beneath the heading",
      validation: (Rule) => Rule.required().max(200),
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "eyebrow",
    },
  },
});
