// app/about/page.tsx
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AboutHero from "@/app/components/about/aboutHero";
import AboutStory from "@/app/components/about/aboutStory";
import AboutMVA from "@/app/components/about/aboutMVA";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

export default async function AboutPage() {
  const [hero, story, mva] = await Promise.all([
    client.fetch(`*[_type == "aboutHero"][0]`),
    client.fetch(`*[_type == "aboutStory"][0]{
    ...,
    image{
      asset->
    }
    }`),
    client.fetch(`*[_type == "aboutMVA"][0]`),
  ]);

  return (
    <>
      <Navbar />
      <AboutHero {...hero} />
      <AboutStory {...story} />
      <AboutMVA {...mva} />
      <Footer />
    </>
  );
}
