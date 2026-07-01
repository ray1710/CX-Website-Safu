"use client";

import { InlineWidget } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/placeholder";

export default function CalendlyEmbed() {
  return (
    <section className="bg-[#faf8f4] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <InlineWidget
          url={CALENDLY_URL}
          styles={{ height: "700px", minWidth: "320px" }}
        />
      </div>
    </section>
  );
}
