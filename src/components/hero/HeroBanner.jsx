import HeroInfo from './HeroInfo';
import HeroIntro from './HeroIntro';

const HeroBanner = () => {
  return (
    <section className="pt-20 align-element h-screen grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-8 gap-y-8">
      <HeroIntro className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10" />
      <HeroInfo className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]" />
    </section>
  );
};

export default HeroBanner;
