type BookDividerProps = {
  dividerText: string;
};

export default function BookDivider({ dividerText }: BookDividerProps) {
  return (
    <div className="bg-[#faf8f4] py-6 px-6">
      <div className="max-w-4xl mx-auto flex items-center gap-6">
        <div className="flex-1 h-px bg-[#e8e3da]" />
        <p className="text-xs text-[#3d3d5c] tracking-[0.2em] uppercase font-light whitespace-nowrap">
          {dividerText}
        </p>
        <div className="flex-1 h-px bg-[#e8e3da]" />
      </div>
    </div>
  );
}
