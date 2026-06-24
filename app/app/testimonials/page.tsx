import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import TestimonialsHero from "@/app/components/testimonials/hero";
import TestimonialsGrid from "@/app/components/testimonials/grid";
import TestimonialsCTA from "@/app/components/testimonials/cta";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsCTA />
      <Footer />
    </>
  );
}
