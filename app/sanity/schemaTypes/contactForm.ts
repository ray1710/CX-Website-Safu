import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactForm",
  title: "Contact Form",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: 'Small uppercase label above the form (e.g. "Contact")',
      initialValue: "Contact",
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: "serviceOptions",
      title: "Service Options",
      type: "array",
      description: 'Options shown in the "Service of Interest" dropdown',
      of: [
        defineField({
          name: "serviceOption",
          title: "Service Option",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description:
                'Text shown in the dropdown (e.g. "Customer Service Training")',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description: 'Value submitted with the form (e.g. "training")',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
      description: "Shown after a successful submission",
      initialValue: "Message sent! I'll be in touch within one business day.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "errorMessage",
      title: "Error Message",
      type: "string",
      description:
        "Shown if submission fails (fallback email is appended automatically)",
      initialValue:
        "Something went wrong. Please try again or reach out directly at",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fallbackEmail",
      title: "Fallback Email",
      type: "string",
      description: "Email shown in the error state as a backup contact method",
      validation: (Rule) =>
        Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }),
    }),
  ],
  preview: {
    select: {
      title: "sectionLabel",
    },
  },
});
