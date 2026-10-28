import { memo, useMemo, useState } from 'react';
import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCard from './ProjectCard';
import Reveal from '../motion/Reveal';
import { Skeleton } from '../ui/skeleton';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { isLoading, error, data } = useFetchProjects('all');

  const tags = useMemo(
    () => [
      'all',
      ...new Set(
        data?.data.flatMap((p) => p.tags.map((tag) => tag.toLowerCase()))
      ),
    ],
    [data]
  );

  const projects = useMemo(
    () =>
      (data?.data ?? []).filter(
        (p) =>
          filter === 'all' ||
          p.tags.map((tag) => tag.toLowerCase()).includes(filter)
      ),
    [data, filter]
  );

  if (error) {
    return (
      <p role="alert" className="text-muted-foreground">
        Couldn't load projects right now. Please try again later.
      </p>
    );
  }

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={tag === filter}
            onClick={() => setFilter(tag)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              tag === filter
                ? 'border-primary bg-primary text-primary-foreground'
                : 'hover:border-primary/60 hover:text-primary-text'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <Skeleton className="aspect-[4/3] w-full rounded-xl" />
              </li>
            ))
          : projects.map((project, i) => (
              <li key={project.id}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
      </ul>
    </>
  );
};

export default memo(Projects);
