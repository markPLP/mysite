import { Button } from '../ui/button';
import heroImg from '../../assets/hero-img.svg';

const HeroIntro = ({ className }) => {
  return (
    <article className={className}>
      <figure className="w-[200px] h-[200px] m-auto rounded-[300px] overflow-hidden shadow-lg">
        <img src={heroImg} alt="hero image" />
      </figure>
      <h1 className="text-4xl sm:text-[54px] font-bold mb-3 leading-tight">
        Hi, i'm <span className="text-primary">Mark Phillip</span>
      </h1>
      {/* <p className="font-bold text-2xl sm:text-3xl">
        and I&apos;m a <span className="text-primary">Frontend Developer</span>
      </p> */}
      <p>
        <span className="text-purple-400">export </span>
        <span className="text-green-400">const </span>{' '}
        <span className="text-blue-400">my_GOAL</span> = 2 *
        (your_SATISFACTION);
      </p>
      <div className="mt-8 flex gap-4">
        <Button size="lg">Get in touch</Button>
        <Button size="lg" variant="outline">
          Download CV
        </Button>
      </div>
      {/* <article className="max-w-[600px] m-auto mt-6 ">
          <p> Welcome to my corner of the web! 🚀</p>
          <p>
            I am currently diving into the React framework and its rich
            ecosystem, exploring the art of building dynamic and interactive
            user interfaces. Alongside this, I’m immersing myself in the
            fascinating world of full-stack development, learning how to craft
            seamless applications from front to back.
          </p>
        </article> */}
    </article>
  );
};

export default HeroIntro;
