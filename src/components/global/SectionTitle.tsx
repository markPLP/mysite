import Reveal from '../motion/Reveal';

function SectionTitle({
  text,
  eyebrow,
  className = '',
}: {
  text: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <Reveal className={`mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-primary-text">
          <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-bold uppercase tracking-wider md:text-6xl">
        {text}
      </h2>
    </Reveal>
  );
}
export default SectionTitle;
