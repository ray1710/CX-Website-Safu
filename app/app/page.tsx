import HeroSection from "@/app/components/hero";
import Navbar from "./components/navbar";
import IntroSection from "./components/intro";
import ServicesSnapshot from "./components/servicesnapshot";
import TestimonialsSection from "./components/testimonials";
import Footer from "./components/footer";
import FinalCTA from "./components/finalCTA";
import { client } from "@/sanity/lib/client";
import { Fragment } from "react/jsx-runtime";

export const revalidate = 0;

export default async function Page() {
  const hero = await client.fetch(`*[_type == "heroSection"][0]`);

  return (
    <Fragment>
      <Navbar />
      <HeroSection {...hero} />
      <div className="bg-[#faf8f4]">
        <IntroSection />
        <ServicesSnapshot />
        <TestimonialsSection />
        <FinalCTA />
        <Footer />
      </div>
    </Fragment>
  );
}
