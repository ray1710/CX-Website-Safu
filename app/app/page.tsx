import HeroSection from "@/app/components/hero";
import Navbar from "./components/navbar";
import IntroSection from "./components/intro";
import ServicesSnapshot from "./components/servicesnapshot";
import TestimonialsSection from "./components/testimonials";
import Footer from "./components/footer";
import FinalCTA from "./components/finalCTA";
import { Fragment } from "react/jsx-runtime";

export default function Page() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
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
