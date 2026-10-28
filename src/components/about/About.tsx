import { useState } from 'react';
import { aboutData } from '../../utils/data';
import AboutButton from './AboutButton';
import AboutInfo from './AboutInfo';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
import Reveal from '../motion/Reveal';

const About = () => {
  const [currentItemId, setCurrentItemId] = useState<string>(aboutData[0].id);

  return (
    <Container className="py-20 md:py-28">
      <SectionTitle eyebrow="I am" text="A Frontend Developer" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px,minmax(0,1fr)] md:gap-12">
        <Reveal>
          <AboutButton
            data={aboutData}
            setCurrentItem={setCurrentItemId}
            currentItemId={currentItemId}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <AboutInfo currentItemId={currentItemId} data={aboutData} />
        </Reveal>
      </div>
    </Container>
  );
};

export default About;
