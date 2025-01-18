import { useState } from 'react';
import { aboutData } from '../../utils/data';
import AboutButton from './AboutButton';
import AboutInfo from './AboutInfo';
const About = () => {
  //const [data, setData] = useState(aboutData);
  const [currentItemId, setCurrentItemId] = useState(aboutData[0]?.id || null);
  console.log(currentItemId);

  return (
    <section id="about" className="align-element h-screen">
      <article className="grid grid-cols-[1fr,2fr] gap-12">
        <div>
          <p className="text-right mb-3 text-3xl">I am</p>
          <h2 className="text-3xl font-bold text-right text-primary mb-6 pb-4">
            A Frontend Developer
          </h2>
          <AboutButton data={aboutData} setCurrentItem={setCurrentItemId} />
        </div>
        <div>
          <AboutInfo currentItemId={currentItemId} data={aboutData} />
        </div>
      </article>
    </section>
  );
};

export default About;
