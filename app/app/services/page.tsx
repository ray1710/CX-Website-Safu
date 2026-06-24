import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ServicesHero from "@/app/components/services/hero";
import ServicesOverview from "@/app/components/services/overview";
import ServicesBlocks from "@/app/components/services/serviceblocks";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesOverview />
      <ServicesBlocks />
      <Footer />
    </>
  );
}
