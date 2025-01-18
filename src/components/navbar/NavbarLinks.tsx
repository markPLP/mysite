import { links } from '../../utils/data';
const NavbarLinks = () => {
  return (
    <ul className="flex flex-col gap-5 items-center justify-center h-full w-full">
      {links.map((link) => {
        const { id, href, text, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              className="flex flex-col justify-center items-center relative pb-4 group"
            >
              <span className="w-6 h-6 block mb-2 text-primary">{icon}</span>
              <span className="absolute bottom-0 opacity-0 transition-all duration-500 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100">
                {text}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
