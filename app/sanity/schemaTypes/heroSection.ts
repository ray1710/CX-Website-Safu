import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      description:
        'Small text above the headline (e.g. "Customer Experience Consulting")',
      initialValue: "Customer Experience Consulting",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "object",
      fields: [
        defineField({
          name: "beforeItalic",
          title: "Text Before Italic Word",
          type: "string",
          description: 'e.g. "Build Customer-Centric"',
        }),
        defineField({
          name: "italic",
          title: "Italic Word",
          type: "string",
          description: 'The gold italic word, e.g. "Teams"',
        }),
        defineField({
          name: "afterItalic",
          title: "Text After Italic Word",
          type: "string",
          description: 'e.g. "That Deliver Exceptional Experiences"',
        }),
      ],
    }),
    defineField({
      name: "subheadline",
      title: "Sub-headline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "href", title: "Link", type: "string" }),
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "href", title: "Link", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: {
      eyebrow: "eyebrow",
    },
    prepare({ eyebrow }) {
      return {
        title: "Hero Section",
        subtitle: eyebrow,
      };
    },
  },
});
