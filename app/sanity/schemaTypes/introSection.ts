import { defineField, defineType } from "sanity";

export default defineType({
  name: "introSection",
  title: "Intro Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description:
        'Small uppercase label above the headline (e.g. "The Philosophy")',
      initialValue: "The Philosophy",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description:
        'Main heading on the left (e.g. "More than fast responses.")',
      initialValue: "More than fast responses.",
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "object",
      description:
        "The paragraph on the right side, split around the italic phrase",
      fields: [
        defineField({
          name: "beforeItalic",
          title: "Text Before Italic Phrase",
          type: "text",
          rows: 3,
          description:
            'e.g. "Today\'s customers expect more than fast responses — they expect"',
          initialValue:
            "Today's customers expect more than fast responses — they expect",
        }),
        defineField({
          name: "italic",
          title: "Italic Phrase",
          type: "string",
          description:
            'The serif italic phrase (e.g. "empathy, clarity, and consistency.")',
          initialValue: "empathy, clarity, and consistency.",
        }),
        defineField({
          name: "afterItalic",
          title: "Text After Italic Phrase",
          type: "text",
          rows: 4,
          description: "Remaining paragraph text after the italic phrase",
          initialValue:
            "I help organizations build the systems, skills, and culture required to deliver world-class customer experiences. Through consulting, training, and hands-on transformation support, I partner with leaders to elevate service quality, strengthen customer loyalty, and empower teams to perform at their best.",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      label: "label",
      headline: "headline",
    },
    prepare({ label, headline }) {
      return {
        title: "Intro Section",
        subtitle: `${label} — ${headline}`,
      };
    },
  },
});
