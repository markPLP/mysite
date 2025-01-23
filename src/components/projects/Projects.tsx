import { useFetchProjects } from '../../hooks/usefetchProjects';
import Container from '../global/Container';

const Projects = () => {
  const { isLoading, error, data } = useFetchProjects();

  if (isLoading) return <div>Loading projects...</div>;
  if (error) return <div>Failed to load projects.</div>;

  return (
    <section id="projects" className="lg:h-screen h-md:h-auto">
      <Container>
        {data?.data.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            {/* <img src={project.largeImage} alt={`${project.title} Preview`} /> */}
            <p>
              Live URL: <a href={project.liveUrl}>{project.liveUrl}</a>
            </p>
            <p>
              GitHub: <a href={project.ghUrl}>{project.ghUrl}</a>
            </p>
            <p>Tags: {project.tags.join(', ')}</p>
            <img src={project.logoImage} alt={`${project.title} Preview`} />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
