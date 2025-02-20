interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`inline-block m-0 px-[30px] py-2.5 uppercase tracking-[2px] text-lg font-lato font-light bg-[#F5F5F5] text-primary ${className}`}>
      {title}
    </h2>
  );
}