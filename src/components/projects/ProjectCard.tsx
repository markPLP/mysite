import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '@/utils/types';

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const { slug, title, description, largeImage, tech = [] } = project;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl focus-within:border-primary/60">
      <div className="aspect-[16/10] overflow-hidden border-b bg-muted">
        {largeImage && (
          <img
            src={largeImage}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 flex items-start justify-between gap-2 text-2xl">
          <Link
            to={`/projects/${slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {title}
          </Link>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary-text"
            aria-hidden="true"
          />
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5">
          {tech.slice(0, 4).map((item) => (
            <li
              key={item}
              className="rounded-md border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {item}
            </li>
          ))}
          {tech.length > 4 && (
            <li className="px-1 py-0.5 text-xs text-muted-foreground">
              +{tech.length - 4}
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
