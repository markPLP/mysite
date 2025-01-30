function SectionTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`${className} animate-fadeInUp`}>
      <h2
        className="text-4xl md:text-7xl font-bold tracking-wider uppercase md:mb-8 text-center"
        aria-label="Page section title"
      >
        {text}
      </h2>
    </div>
  );
}
export default SectionTitle;
