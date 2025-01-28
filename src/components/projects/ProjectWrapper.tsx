import SectionTitle from '../global/SectionTitle';
import Projects from './Projects';

function ProjectWrapper() {
  return (
    <section
      id="projects"
      className="h-screen relative scroll-mt-16 overflow-hidden lg:py-16"
    >
      <SectionTitle className="relative z-10" text="Projects" />
      <Projects />
    </section>
  );
}

export default ProjectWrapper;
