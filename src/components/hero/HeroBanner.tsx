import Container from '../global/Container';
import HeroInfo from './HeroInfo';
import HeroIntro from './HeroIntro';

const HeroBanner = () => {
  return (
    <section className="scroll-mt-16 lg:h-screen h-md:h-auto">
      <Container className="pt-24 gap-y-8 grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-8">
        <HeroIntro className="flex flex-col items-start justify-center p-2 md:pb-10 lg:pt-10" />
        <HeroInfo className=" from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]" />
      </Container>
    </section>
  );
};

export default HeroBanner;
