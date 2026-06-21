import { defineField, defineType } from "sanity";

export default defineType({
  name: "finalCta",
  title: "Final CTA",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description:
        'Small uppercase label above the heading (e.g. "Let\'s Work Together")',
      initialValue: "Let's Work Together",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "object",
      description: "Main heading split around the italic phrase",
      fields: [
        defineField({
          name: "beforeItalic",
          title: "Text Before Italic Phrase",
          type: "string",
          description: 'e.g. "Ready to elevate your"',
          initialValue: "Ready to elevate your",
        }),
        defineField({
          name: "italic",
          title: "Italic Phrase",
          type: "string",
          description: 'The gold italic phrase (e.g. "customer experience?")',
          initialValue: "customer experience?",
        }),
      ],
    }),
    defineField({
      name: "subtext",
      title: "Subtext",
      type: "text",
      rows: 2,
      description: "Supporting paragraph below the heading",
      initialValue:
        "Book a consultation and let's build a customer-centric organization together.",
    }),
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          description: 'Button text (e.g. "Book a Consultation")',
          initialValue: "Book a Consultation",
        }),
        defineField({
          name: "href",
          title: "Link",
          type: "string",
          description: 'URL the button points to (e.g. "/book")',
          initialValue: "/book",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      label: "label",
      beforeItalic: "heading.beforeItalic",
      italic: "heading.italic",
    },
    prepare({ label, beforeItalic, italic }) {
      return {
        title: "Final CTA",
        subtitle: `${label} — ${beforeItalic} ${italic}`,
      };
    },
  },
});
