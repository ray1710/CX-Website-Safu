interface ServicesOverviewProps {
  body: string;
}

export default function ServicesOverview({ body }: ServicesOverviewProps) {
  return (
    <section className="bg-[#faf8f4] py-20 px-6 border-b border-[#e8e3da]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#2d2d2d] text-lg font-light leading-relaxed">
          {body}
        </p>
      </div>
    </section>
  );
}
