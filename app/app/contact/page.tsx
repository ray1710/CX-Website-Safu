import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import ContactHero from "@/_components/contact/hero";
import CalendlyEmbed from "@/_components/contact/calendlyEmbed";
import BookDivider from "@/_components/contact/bookDivider";
import ContactForm from "@/_components/contact/contactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <CalendlyEmbed />
      <BookDivider />
      <ContactForm />
      <Footer />
    </>
  );
}
