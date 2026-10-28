import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/button';
import heroImg from '../../assets/profile-anbu.png';

const NINJA_SKILLS = [
  'Frontend',
  'CSS',
  'WordPress',
  'Shopify',
  'CRO',
  'JavaScript',
];

// "I am a <skill> Ninja!" — only the skill is typed/deleted. Screen readers get
// one static phrase; reduced-motion users see the first skill, no typing.
const TYPE_MS = 90;
const DELETE_MS = 50;
const HOLD_MS = 1400;

const NinjaLine = () => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(NINJA_SKILLS[0].length);
  const [deleting, setDeleting] = useState(true);

  useEffect(() => {
    if (reduceMotion) return;
    const word = NINJA_SKILLS[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && count === word.length) delay = HOLD_MS;
    const timer = setTimeout(() => {
      if (!deleting && count === word.length) {
        setDeleting(true);
      } else if (deleting && count === 0) {
        setIndex((i) => (i + 1) % NINJA_SKILLS.length);
        setDeleting(false);
      } else {
        setCount((c) => c + (deleting ? -1 : 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [reduceMotion, index, count, deleting]);

  const shown = reduceMotion ? NINJA_SKILLS[0] : NINJA_SKILLS[index].slice(0, count);

  return (
    <p className="mb-5 text-xl font-semibold uppercase tracking-wide sm:text-2xl lg:text-3xl">
      <span className="sr-only">I am a Frontend Ninja!</span>
      <span aria-hidden="true" className="flex flex-wrap items-baseline gap-x-3">
        <span>I am a</span>
        <span className="text-primary-text">
          {shown}
          {!reduceMotion && (
            <span className="ml-0.5 inline-block w-[0.08em] animate-pulse bg-current align-baseline">
              &nbsp;
            </span>
          )}
        </span>
        <span>Ninja!</span>
      </span>
    </p>
  );
};

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

      <NinjaLine />

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
