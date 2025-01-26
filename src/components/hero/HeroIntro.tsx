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
        />
      </figure>
      <h1 className="text-4xl sm:text-[54px] font-bold mb-3 leading-tight">
        Hi, i'm <span className="text-primary">Mark Phillip</span>
      </h1>
      <p>
        <span className="text-purple-400">export </span>
        <span className="text-green-400">const </span>{' '}
        <span className="text-blue-400">my_GOAL</span> = 2 *
        (your_SATISFACTION);
      </p>
      <div className="mt-8 flex gap-4 flex-wrap">
        <Button size="lg">Get in touch</Button>
        <Button size="lg" variant="outline">
          Download CV
        </Button>
      </div>
    </article>
  );
};

export default HeroIntro;
