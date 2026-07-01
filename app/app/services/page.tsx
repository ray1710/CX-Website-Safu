import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ServicesHero from "@/app/components/services/hero";
import ServicesOverview from "@/app/components/services/overview";
import ServicesBlocks from "@/app/components/services/serviceblocks";
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
