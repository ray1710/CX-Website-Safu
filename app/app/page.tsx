import HeroSection from "@/app/components/hero";
import Navbar from "./components/navbar";
import IntroSection from "./components/intro";
import { Fragment } from "react/jsx-runtime";

export default function Page() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <IntroSection />
    </Fragment>
  );
}
