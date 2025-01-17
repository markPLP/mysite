import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
//import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../ui/button';
import { DarkMode } from '../DarkMode';
//import { useSidebar } from '../../context/SidebarContext';

const Header = () => {
  //const { toggleSidebar } = useSidebar();
  return (
    <header className="relative z-10">
      <nav className="fixed top-0 px-5 gap-4 flex items-center justify-end py-4 w-full">
        <ul className="flex gap-2 items-center">
          <li>
            <Button variant="link" className="p-0 ">
              <FontAwesomeIcon className="!w-8 !h-8" icon={faFacebook} />
            </Button>
          </li>
          <li>
            <Button variant="link" className="p-0">
              <FontAwesomeIcon className="!w-8 !h-8" icon={faLinkedin} />
            </Button>
          </li>
          <li>
            <Button variant="link" className="p-0">
              <FontAwesomeIcon className="!w-8 !h-8" icon={faGithub} />
            </Button>
          </li>
        </ul>
        <DarkMode />
      </nav>
    </header>
  );
};

export default Header;
