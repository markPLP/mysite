import { skillsData } from '@/utils/data';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
import SkillSet from './SkillSet';

const Skills = () => {
  return (
    <section id="skills" className="h-screen scroll-mt-16">
      <SectionTitle text="Skills" />
      <Container className="flex flex-col gap-y-5 md:gap-y-16">
        {skillsData.map((skill) => {
          return (
            <div className="mb-8" key={skill.title}>
              <h3 className="font-bold text-3xl mb-5">{skill.title}</h3>
              <SkillSet skills={skill.skills} />
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Skills;
