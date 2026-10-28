import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/button';
import heroImg from '../../assets/profile-anbu.png';

const HeroIntro = ({ className = '' }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="mb-6 flex items-center gap-4">
        <img
          src={heroImg}
          alt="Portrait of Mark Phillip"
          width={96}
          height={96}
          className="h-20 w-20 rounded-full border-2 border-primary object-cover shadow-lg sm:h-24 sm:w-24"
        />
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary-text">
          Frontend Developer
          <span className="block text-xs tracking-[0.2em] text-muted-foreground">
            React · Shopify · WordPress
          </span>
        </p>
      </div>

      <h1 className="mb-5 text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
        Hi, I'm <span className="text-primary-text">Mark Phillip</span>
      </h1>

      <p className="mb-2 max-w-xl text-lg text-muted-foreground">
        I build fast, accessible, conversion-minded websites — from Figma to
        production, and from A/B experiments to custom themes.
      </p>
      <p className="font-mono text-sm">
        <span className="text-green-500">const </span>
        <span className="text-blue-500">my_GOAL</span> = 2 *
        (your_SATISFACTION);
      </p>

      <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
        <Button asChild size="lg">
          <a href="#projects">
            View my work <ArrowRight aria-hidden="true" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/resume">
            <Download aria-hidden="true" /> Resume
          </Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </div>
  );
};

export default HeroIntro;
