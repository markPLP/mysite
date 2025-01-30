import { Button } from '../ui/button';
import heroImg from '../../assets/profile-anbu.png';

const HeroIntro = ({ className }: { className: string }) => {
  return (
    <article className={className}>
      <figure className="max-w-[350px] h-[350px] rounded-[400px] overflow-hidden shadow-lg flex items-center mb-8">
        <img
          src={heroImg}
          alt="hero image"
          className="object-cover w-full h-full"
          aria-label="Mark Phillip"
        />
      </figure>
      <h1
        className="text-4xl sm:text-[54px] font-bold mb-3 leading-tight"
        aria-label="Mark Phillip"
      >
        Hi, i'm <span className="text-primary">Mark Phillip</span>
      </h1>
      <p>
        {/* <span className="text-purple-400">export </span> */}
        <span className="text-green-400">const </span>{' '}
        <span className="text-blue-400">my_GOAL</span> = 2 *
        (your_SATISFACTION);
      </p>
      <div className="mt-8 flex flex-wrap gap-3 md:gap-4 ">
        <Button asChild size="lg">
          <a href="#contact" aria-label="contact form">
            Get in touch
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a
            href="https://drive.google.com/file/d/1BzpKZFf95O1wlI3jRk-MUoevtoN1CM2t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Mark Phillip's CV"
          >
            Download CV
          </a>
        </Button>
      </div>
    </article>
  );
};

export default HeroIntro;
