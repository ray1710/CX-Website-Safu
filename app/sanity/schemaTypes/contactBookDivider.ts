import { defineField, defineType } from "sanity";

export default defineType({
  name: "bookDivider",
  title: "Book Divider",
  type: "document",
  fields: [
    defineField({
      name: "dividerText",
      title: "Divider Text",
      type: "string",
      description:
        'The text shown between the two horizontal lines (e.g. "Prefer to reach out instead?")',
      validation: (Rule) => Rule.required().max(60),
    }),
  ],
  preview: {
    select: {
      title: "dividerText",
    },
  },
});
