import { links } from '../../utils/data';
const NavbarLinks = () => {
  return (
    <ul className="flex flex-col gap-6 items-center justify-center h-full">
      {links.map((link) => {
        const { id, href, text, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              className="flex flex-col justify-center items-center"
            >
              <span className="w-8 h-8 block mb-2">{icon}</span>
              <span>{text}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
