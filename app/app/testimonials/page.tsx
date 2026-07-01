import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#faf8f4]">
        <p className="text-sm uppercase tracking-widest text-[#c9a464] mb-4 font-medium">
          Coming Soon
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0e1320] mb-6">
          Client Stories Are on Their Way
        </h1>
        <p className="text-[#3d3d5c] max-w-xl text-lg leading-relaxed">
          Safira is currently working with clients to gather their experiences.
          Check back soon to read real stories of transformation and results.
        </p>
      </section>

      <Footer />
    </>
  );
}
