import { DarkMode } from '../DarkMode';
import Logo from './Logo';
import Socials from './Socials';

const Header = () => {
  return (
    <header className="relative z-40">
      <nav className="fixed top-0 px-5 gap-4 flex items-center py-4 w-full bg-neutral-500 bg-opacity-40 md:justify-end md:bg-transparent">
        <div className="flex-grow">
          <Logo className="md:hidden !m-0 inline-block" />
        </div>
        <Socials />
        <DarkMode />
      </nav>
    </header>
  );
};

export default Header;
