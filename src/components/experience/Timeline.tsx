import { timelineElements } from '@/utils/data';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
import Reveal from '../motion/Reveal';

// Newest role first. `timelineElements` is stored oldest-first.
const roles = [...timelineElements].reverse();

export default function Timeline() {
  return (
    <Container className="py-20 md:py-28">
      <SectionTitle eyebrow="Career" text="Experience" />
      <ol className="relative ml-3 border-l-2 border-border md:ml-4">
        {roles.map(({ id, title, company, description, date, tech }) => (
          <li key={id} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
            <span
              className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-primary bg-background"
              aria-hidden="true"
            />
            <Reveal>
              <article className="rounded-xl border bg-card p-6 text-card-foreground transition-colors hover:border-primary/60 md:p-8">
                <p className="mb-2 inline-block rounded-full bg-primary/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-foreground">
                  {date}
                </p>
                <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{company}</p>
                <ul className="mb-5 list-disc space-y-1.5 pl-5">
                  {description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Container>
  );
}
