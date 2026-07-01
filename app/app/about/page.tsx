// app/about/page.tsx
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import AboutHero from "@/_components/about/aboutHero";
import AboutStory from "@/_components/about/aboutStory";
import AboutMVA from "@/_components/about/aboutMVA";
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
