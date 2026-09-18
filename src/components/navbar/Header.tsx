import { Link } from 'react-router-dom';
import { DarkMode } from '../DarkMode';
import Logo from './Logo';
import Socials from './Socials';

const Header = () => {
  return (
    <header className="relative z-40">
      <nav className="fixed top-0 px-5 gap-4 flex items-center py-4 w-full right-0 md:w-auto bg-neutral-900 bg-opacity-80 md:justify-end md:bg-transparent duration-500 ease-in-out">
        <div className="flex-grow">
          <Logo className="opacity-100 overflow-hidden !m-0 inline-block !flex-row !h-[60px] !w-[100px] duration-500 ease-in-out md:!w-0 md:border-0 md:opacity-0" />
        </div>
        <Link
          to="/resume"
          className="text-sm uppercase tracking-wider whitespace-nowrap underline-offset-4 hover:underline hover:text-primary"
        >
          Resume
        </Link>
        <Socials />
        <DarkMode />
      </nav>
    </header>
  );
};

export default Header;
