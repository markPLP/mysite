import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import SiteHeader from '@/components/navbar/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useFetchProjects } from '@/hooks/usefetchProjects';
import { usePageMeta } from '@/hooks/usePageMeta';

const ProjectPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useFetchProjects('all');

  const projects = data?.data ?? [];
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;
  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index >= 0 ? projects[index + 1] : undefined;

  usePageMeta(project?.title, project?.description);

  return (
    <>
      <SiteHeader />
      <main className="align-element min-h-screen py-10 md:py-16">
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary-text"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
        </Link>

        {isLoading && (
          <div aria-busy="true">
            <Skeleton className="mb-4 h-14 w-2/3 md:h-20" />
            <Skeleton className="mb-6 h-14 w-full max-w-3xl" />
            <Skeleton className="mb-8 h-10 w-40" />
            <Skeleton className="aspect-[16/10] w-full rounded-xl" />
          </div>
        )}

        {!isLoading && (error || !project) && (
          <div role="alert">
            <h1 className="mb-3 text-4xl">Project not found</h1>
            <p className="text-muted-foreground">
              That project doesn't exist or couldn't be loaded.
            </p>
          </div>
        )}

        {project && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="mb-4 text-5xl md:text-7xl">{project.title}</h1>
            <p className="mb-6 max-w-3xl text-lg text-muted-foreground">
              {project.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit live site <ExternalLink aria-hidden="true" />
                  </a>
                </Button>
              )}
              {project.ghUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.ghUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github aria-hidden="true" /> Source code
                  </a>
                </Button>
              )}
            </div>

            {project.largeImage && (
              <img
                src={project.largeImage}
                alt={`${project.title} preview`}
                width={1440}
                height={900}
                className="mb-10 aspect-[16/10] w-full rounded-xl border object-cover object-top shadow-xl"
              />
            )}

            {project.tech && project.tech.length > 0 && (
              <section aria-labelledby="project-tech" className="mb-12">
                <h2 id="project-tech" className="mb-4 text-2xl">
                  Built with
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <nav
              aria-label="More projects"
              className="flex justify-between gap-4 border-t pt-6"
            >
              {prev ? (
                <Link
                  to={`/projects/${prev.slug}`}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-primary-text"
                >
                  <ArrowLeft
                    className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      Previous
                    </span>
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={`/projects/${next.slug}`}
                  className="group inline-flex items-center gap-2 text-right transition-colors hover:text-primary-text"
                >
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      Next
                    </span>
                    {next.title}
                  </span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </nav>
          </motion.article>
        )}
      </main>
      <SiteFooter />
    </>
  );
};

export default ProjectPage;
