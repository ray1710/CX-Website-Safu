// sanity/schemas/aboutMVA.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutMVA",
  title: "About — Mission, Values & Approach",
  type: "document",
  fields: [
    defineField({
      name: "mission",
      title: "Mission",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "Mission",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          initialValue: "Why I do this work",
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "text",
          rows: 3,
          initialValue:
            "To help organizations build customer-centric cultures where teams feel empowered and customers feel valued.",
        }),
      ],
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "Values",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          initialValue: "What I stand for",
        }),
        defineField({
          name: "items",
          title: "Values List",
          type: "array",
          of: [{ type: "string" }],
          initialValue: [
            "Empathy",
            "Clarity",
            "Excellence",
            "Integrity",
            "Growth",
          ],
        }),
      ],
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "Approach",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          initialValue: "How I work",
        }),
        defineField({
          name: "items",
          title: "Approach Points",
          type: "array",
          of: [{ type: "string" }],
          initialValue: [
            "Deep operational expertise across CS, support, and onboarding.",
            "Practical, actionable frameworks built for real teams.",
            "Hands-on leadership experience — not just advisory.",
            "A coaching mindset that empowers rather than directs.",
            "A relentless focus on measurable, lasting outcomes.",
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Mission, Values & Approach" };
    },
  },
});
