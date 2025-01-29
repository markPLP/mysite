import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { Button } from '../ui/button';
const Socials = () => {
  return (
    <ul className="flex gap-2 items-center">
      <li>
        <Button
          variant="link"
          className="p-0 transition-colors duration-300 ease-in-out hover:text-accent-foreground hover:bg-accent-background"
          asChild
        >
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="!w-8 !h-8 " icon={faFacebook} />
          </a>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="p-0 transition-colors duration-300 ease-in-out hover:text-accent-foreground hover:bg-accent-background"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/markmacz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="!w-8 !h-8" icon={faLinkedin} />
          </a>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="p-0 transition-colors duration-300 ease-in-out hover:text-accent-foreground hover:bg-accent-background"
          asChild
        >
          <a
            href="https://github.com/markPLP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="!w-8 !h-8" icon={faGithub} />
          </a>
        </Button>
      </li>
    </ul>
  );
};

export default Socials;
