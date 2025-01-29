import { useState, useEffect } from 'react';
import { links } from '../../utils/data';
import { sectionIntersectionObserver } from '@/utils/misc';

const NavbarLinks = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    sectionIntersectionObserver(setActiveSection);
  }, []);

  return (
    <ul className="flex flex-col gap-5 items-center justify-center h-full w-full">
      {links.map((link) => {
        const { id, href, text, icon } = link;
        const isActive = activeSection === href.substring(1); // Remove "#" from href

        return (
          <li key={id}>
            <a
              href={href}
              className={`flex flex-col justify-center items-center relative pb-4 group ${
                isActive ? 'text-primary' : ''
              }`}
            >
              <span className="w-6 h-6 block mb-2">{icon}</span>
              <span
                className={`absolute bottom-0 opacity-0 transition-all duration-500 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 ${
                  isActive ? 'translate-x-0 opacity-100' : ''
                }`}
              >
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
