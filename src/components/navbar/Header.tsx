import { DarkMode } from '../DarkMode';
import Logo from './Logo';
import Socials from './Socials';

const Header = () => {
  return (
    <header className="relative z-40">
      <nav className="fixed top-0 px-5 gap-4 flex items-center py-4 w-full bg-neutral-900 bg-opacity-80 md:justify-end md:bg-transparent duration-500 ease-in-out">
        <div className="flex-grow">
          <Logo className="opacity-100 overflow-hidden !m-0 inline-block !flex-row !h-[60px] !w-[100px] duration-500 ease-in-out md:!w-0 md:border-0 md:opacity-0" />
        </div>
        <Socials />
        <DarkMode />
      </nav>
    </header>
  );
};

export default Header;
