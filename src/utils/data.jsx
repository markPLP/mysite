import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebook,
//   faGithub,
//   faLinkedin,
// } from '@fortawesome/free-brands-svg-icons';
import {
  faHouse,
  faUser,
  faTrophy,
  faUserNinja,
  faFolderOpen,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';

export const links = [
  {
    id: nanoid(),
    href: '#home',
    text: 'home',
    icon: (
      <FontAwesomeIcon icon={faHouse} className="w-full h-full object-cover" />
    ),
  },
  {
    id: nanoid(),
    href: '#about',
    text: 'about',
    icon: (
      <FontAwesomeIcon icon={faUser} className="w-full h-full object-cover" />
    ),
  },
  {
    id: nanoid(),
    href: '#experience',
    text: 'experience',
    icon: (
      <FontAwesomeIcon icon={faTrophy} className="w-full h-full object-cover" />
    ),
  },
  {
    id: nanoid(),
    href: '#skills',
    text: 'skills',
    icon: (
      <FontAwesomeIcon
        icon={faUserNinja}
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    id: nanoid(),
    href: '#projects',
    text: 'projects',
    icon: (
      <FontAwesomeIcon
        icon={faFolderOpen}
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    id: nanoid(),
    href: '#contact',
    text: 'contact',
    icon: (
      <FontAwesomeIcon
        icon={faAddressBook}
        className="w-full h-full object-cover"
      />
    ),
  },
];

export const aboutData = [
  {
    id: nanoid(),
    label: 'about me',
    title: 'Welcome to my corner of the web! 🚀',
    description:
      'I am a passionate web developer with a strong foundation in front-end development. I specialize in crafting responsive, user-friendly websites and applications that deliver seamless user experiences. My goal now is to learn new technologies and expand my skill set to stay ahead of the curve in the ever-evolving tech industry.',
  },
  {
    id: nanoid(),
    label: 'whats going on?',
    title: 'Full-stack developer in the making',
    description:
      'I am currently diving into the React framework and its rich ecosystem, exploring the art of building dynamic and interactive user interfaces. Alongside this, I’m immersing myself in the fascinating world of full-stack development, learning how to craft seamless applications from front to back.',
  },
  {
    id: nanoid(),
    label: 'site info',
    title: 'Tech stack',
    description: [
      "This portfolio reflects my web development skills and dedication to delivering top-quality websites. Please don't hesitate to reach out if you need one too. Here's my tech stack for this project:",
      {
        type: 'list',
        items: [
          'Next.js: SEO-friendly, fast-loading sites.',
          'TypeScript: Error prevention and code readability.',
          'Tailwind CSS: Stylish designs without custom CSS.',
          'GraphQL: Efficient data retrieval.',
          'Contentful: Easy content management.',
          'Yarn: Smooth dependency management.',
        ],
      },
      "I've also prioritized:",
      {
        type: 'list',
        items: ['Accessibility (a11y).', 'Clean, modern UI.', 'Seamless UX.'],
      },
      "Thank you for visiting my portfolio website. Whether you're here to explore my work, seek inspiration, or discuss potential collaborations, I'm excited to have you here. Feel free to reach out, and let's embark on a journey of creativity and innovation together.",
    ],
  },
];
