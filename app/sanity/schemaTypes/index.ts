import { type SchemaTypeDefinition } from "sanity";
import heroSection from "./heroSection";
import finalCTA from "./finalCTA";
import introSection from "./introSection";
import serviceSnapshot from "./serviceSnapshot";
import testimonalsSection from "./testimonalsSection";
import aboutHero from "./aboutHero";
import aboutStory from "./aboutStory";
import aboutMVA from "./aboutMVA";
import servicesHero from "./servicesHero";
import servicesOverview from "./servicesOverview";
import servicesBlocks from "./servicesBlocks";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    finalCTA,
    introSection,
    serviceSnapshot,
    testimonalsSection,
    aboutHero,
    aboutMVA,
    aboutStory,
    servicesHero,
    servicesOverview,
    servicesBlocks,
  ],
};
