function SectionTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-3xl md:text-7xl font-bold tracking-wider uppercase mb-8 text-center">
        {text}
      </h2>
    </div>
  );
}
export default SectionTitle;
