import { Github, Linkedin } from 'lucide-react';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/markmacz/',
    Icon: Linkedin,
  },
  { label: 'GitHub', href: 'https://github.com/markPLP', Icon: Github },
];

const Socials = ({ className }: { className?: string }) => {
  return (
    <ul className={`flex items-center gap-1 ${className ?? ''}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground/80 transition-colors hover:bg-accent hover:text-primary-text"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
