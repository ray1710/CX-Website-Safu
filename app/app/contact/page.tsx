import { client } from "@/sanity/lib/client";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";
import ContactHero from "@/_components/contact/hero";
import CalendlyEmbed from "@/_components/contact/calendlyEmbed";
import BookDivider from "@/_components/contact/bookDivider";
import ContactForm from "@/_components/contact/contactForm";

export const revalidate = 0;

const bookHeroQuery = `*[_type == "bookHero"][0]{ eyebrow, heading, subheading }`;
const bookDividerQuery = `*[_type == "bookDivider"][0]{ dividerText }`;
const contactFormQuery = `*[_type == "contactForm"][0]{
  sectionLabel,
  serviceOptions,
  successMessage,
  errorMessage,
  fallbackEmail
}`;

export default async function ContactPage() {
  const [bookHero, bookDivider, contactForm] = await Promise.all([
    client.fetch(bookHeroQuery, {}, { useCdn: false }),
    client.fetch(bookDividerQuery, {}, { useCdn: false }),
    client.fetch(contactFormQuery, {}, { useCdn: false }),
  ]);

  return (
    <>
      <Navbar />
      <ContactHero {...bookHero} />
      <CalendlyEmbed />
      <BookDivider {...bookDivider} />
      <ContactForm {...contactForm} />
      <Footer />
    </>
  );
}
