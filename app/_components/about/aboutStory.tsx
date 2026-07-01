// app/components/about/AboutStory.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface AboutStoryProps {
  label: string;
  name: string;
  paragraphs: string[];
  quote: string;
  image?: { asset: { _ref: string } };
}

export default function AboutStory({
  label,
  name,
  paragraphs,
  quote,
  image,
}: AboutStoryProps) {
  return (
    <section className="bg-[#faf8f4] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left — bio */}
        <div>
          <p className="text-xs text-[#1e1d1d] tracking-[0.2em] uppercase font-light mb-5">
            {label}
          </p>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[#2d2d2d] font-normal leading-relaxed mb-5"
            >
              {i === 0 ? (
                <>
                  {"I'm "}
                  <span className="text-[#0e1320] font-semibold">{name}</span>
                  {p.replace(`I'm ${name}`, "")}
                </>
              ) : (
                p
              )}
            </p>
          ))}
          <blockquote className="border-l-2 border-[#c9a464] pl-5 font-serif text-lg text-[#0e1320] italic font-light leading-relaxed">
            "{quote}"
          </blockquote>
        </div>

        {/* Right — photo */}
        {image ? (
          <div className="relative h-105 rounded-sm overflow-hidden">
            <Image
              src={urlFor(image).width(800).url()}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="bg-[#f0ece3] border border-dashed border-[#d4cfc6] rounded-sm flex flex-col items-center justify-center gap-3 text-[#b0ab9e] h-105">
            <svg
              className="w-12 h-12 opacity-40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-sm font-light">
              Professional photo coming soon
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
