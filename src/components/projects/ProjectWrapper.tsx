import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
import Projects from './Projects';

function ProjectWrapper() {
  return (
    <Container className="py-20 md:py-28">
      <SectionTitle eyebrow="Selected work" text="Projects" />
      <Projects />
    </Container>
  );
}

export default ProjectWrapper;
