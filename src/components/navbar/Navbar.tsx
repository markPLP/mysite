import Logo from './Logo';
import NavbarLinks from './NavbarLinks';
//import { useSidebar } from '../../context/SidebarContext';
const Navbar = () => {
  //const { isSidebarOpen } = useSidebar();
  return (
    <nav
      // className={`-translate-x-full fixed h-full min-w-[100px] border-r-2 shadow-primary transition-transform bg-neutral-400 ${
      //   isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      // }`}
      className="hidden -translate-x-full fixed h-full min-w-[100px] border-r-2 bg-transparent shadow-primary md:grid sm:grid-rows-[60px,1fr,60px] sm:translate-x-0 align-center justify-center z-20"
    >
      <Logo />
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
