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
