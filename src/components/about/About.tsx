import { useState } from 'react';
import { aboutData } from '../../utils/data';
import AboutButton from './AboutButton';
import AboutInfo from './AboutInfo';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
const About = () => {
  //const [data, setData] = useState(aboutData);
  const [currentItemId, setCurrentItemId] = useState<string | null>(
    aboutData[0]?.id || null
  );

  return (
    <section id="about" className="scroll-mt-16 lg:h-screen h-md:h-auto">
      <SectionTitle text="About" />
      <Container className="flex">
        <article className="grid grid-cols-[1fr,2fr] gap-12">
          <div>
            <p className="text-right mb-3 text-xl uppercase">I am</p>
            <h2 className="text-3xl font-bold text-right text-primary mb-6 pb-4">
              A Frontend Developer
            </h2>
            <AboutButton data={aboutData} setCurrentItem={setCurrentItemId} />
          </div>
          <div>
            <AboutInfo currentItemId={currentItemId} data={aboutData} />
          </div>
        </article>
      </Container>
    </section>
  );
};

export default About;
