import Logo from './Logo';
import NavbarLinks from './NavbarLinks';
const Navbar = () => {
  return (
    <nav className="fixed h-full min-w-[100px] border-r-2 bg-transparent shadow-primary grid -translate-x-full md:translate-x-0 sm:grid-rows-[60px,1fr,60px] align-center justify-center z-20 transform duration-500 ease-in-out">
      <Logo className="relative z-40" />
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
