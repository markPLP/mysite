import SectionTitle from '../global/SectionTitle';
import Projects from './Projects';

function ProjectWrapper() {
  return (
    <section className="lg:h-screen relative overflow-hidden h-md:h-auto">
      <SectionTitle className="relative z-10" text="Projects" />
      <Projects />
    </section>
  );
}

export default ProjectWrapper;
