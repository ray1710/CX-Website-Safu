import { type SchemaTypeDefinition } from "sanity";
import heroSection from "./heroSection";
import finalCTA from "./finalCTA";
import introSection from "./introSection";
import serviceSnapshot from "./serviceSnapshot";
import testimonalsSection from "./testimonalsSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    finalCTA,
    introSection,
    serviceSnapshot,
    testimonalsSection,
  ],
};
