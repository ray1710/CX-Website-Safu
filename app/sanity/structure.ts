import type { StructureResolver } from "sanity/structure";
import { HomeIcon, UsersIcon, StarIcon, EnvelopeIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Pages")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Home")
            .items([
              S.documentTypeListItem("heroSection").title("Hero Section"),
              S.documentTypeListItem("introSection").title("Intro Section"),
              S.documentTypeListItem("servicesSnapshot").title(
                "Services Snapshot",
              ),
              S.documentTypeListItem("testimonialsSection").title(
                "Testimonials Section",
              ),
              S.documentTypeListItem("finalCta").title("Final CTA"),
            ]),
        ),

      S.listItem().title("About").icon(UsersIcon).child(
        S.list().title("About").items([
          // Add about schemas here
        ]),
      ),

      S.listItem().title("Services").icon(StarIcon).child(
        S.list().title("Services").items([
          // Add services schemas here
        ]),
      ),

      S.listItem().title("Contact").icon(EnvelopeIcon).child(
        S.list().title("Contact").items([
          // Add contact schemas here
        ]),
      ),
    ]);
