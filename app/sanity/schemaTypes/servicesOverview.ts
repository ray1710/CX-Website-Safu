// sanity/schemas/servicesOverview.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesOverview",
  title: "Services Overview",
  type: "document",
  fields: [
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 3,
      description: "Overview paragraph shown below the hero",
      initialValue:
        "Every engagement is tailored to where your organization is today and where you need to go. Whether you're building a CS function from scratch, recovering from a CX breakdown, or investing in your frontline team — there's a path forward. Here's how I can help.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Services Overview" };
    },
  },
});
