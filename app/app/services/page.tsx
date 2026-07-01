import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import ServicesHero from "@/_components/services/hero";
import ServicesOverview from "@/_components/services/overview";
import ServicesBlocks from "@/_components/services/serviceblocks";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

export default async function ServicesPage() {
  const [hero, overview, blocks] = await Promise.all([
    client.fetch(`*[_type == "servicesHero"][0]`),
    client.fetch(`*[_type == "servicesOverview"][0]`),
    client.fetch(`*[_type == "servicesBlocks"][0]`),
  ]);

  return (
    <>
      <Navbar />
      <ServicesHero {...hero} />
      <ServicesOverview {...overview} />
      <ServicesBlocks {...blocks} />
      <Footer />
    </>
  );
}
