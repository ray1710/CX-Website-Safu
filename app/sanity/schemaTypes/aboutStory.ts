// sanity/schemas/aboutStory.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutStory",
  title: "About Story",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: 'Small uppercase label (e.g. "My Story")',
      initialValue: "My Story",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Bold name highlighted in the first paragraph",
      initialValue: "Safira Amin",
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      description: "Bio paragraphs in order",
      initialValue: [
        "I'm Safira Amin — a fractional leader, consultant, and trainer specializing in Customer Success, Customer Service, onboarding transformation, and customer-centric organizational design.",
        "Over the past decade, I've led high-performing teams, redesigned customer journeys, and built scalable support and success operations for organizations across Canada and the U.S.",
        "I bring a blend of strategic clarity, operational discipline, and human-centered leadership to every engagement. Whether I'm training frontline teams, advising executives, or rebuilding processes, my goal is always the same — to create experiences that customers remember for the right reasons.",
      ],
    }),
    defineField({
      name: "quote",
      title: "Blockquote",
      type: "string",
      description: "Italic pull quote shown at the bottom of the bio",
      initialValue:
        "When you take care of your customers and your people, growth follows.",
    }),
    defineField({
      name: "image",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: { label: "label", name: "name" },
    prepare({ label, name }) {
      return { title: "About Story", subtitle: `${label} — ${name}` };
    },
  },
});
