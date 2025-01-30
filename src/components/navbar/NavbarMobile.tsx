import { useEffect, useState } from 'react';
import { links } from '../../utils/data';
import { sectionIntersectionObserver } from '@/utils/observers';

const NavbarMobile = () => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    sectionIntersectionObserver(setActiveSection);
  }, []);

  const calculateTransform = (id: string) => {
    switch (id) {
      case 'home':
        return 'translateX(calc(50px * 0))';
      case 'about':
        return 'translateX(calc(50px * 1 + (11px * 2)))';
      case 'experience':
        return 'translateX(calc(50px * 2 + (20px * 2) + 2px))';
      case 'projects':
        return 'translateX(calc(50px * 3 + (30px * 2) + 2px))';
      case 'contact':
        return 'translateX(calc(50px * 4 + (42px * 2) + 2px))';
      default:
        return 'translateX(0)';
    }
  };

  return (
    <div
      className="fixed bottom-0 flex justify-center items-center w-full bg-primary z-20 transform duration-500 ease-in-out translate-y-0 md:-translate-y-[-200%]"
      style={{ boxShadow: '0 -8px 0 0 #0c0a09' }}
    >
      <div className="relative flex items-center px-5 w-[375px]">
        <ul className="flex justify-between w-full">
          {links.map((item) => {
            const { id, href, text, icon } = item;
            const isActive = activeSection === href.substring(1); // Remove "#" from href
            return (
              <li
                key={id}
                className={`relative w-[50px] h-[50px] flex flex-col justify-center items-center cursor-pointer transition-all z-10 ${
                  isActive ? 'text-white' : 'text-[#222327]'
                }`}
              >
                <a
                  href={href}
                  className="relative flex flex-col justify-center items-center text-center"
                >
                  <i
                    className={`w-6 h-6 block transition-all duration-1000 ${
                      isActive
                        ? '-translate-y-[25px] text-white w-5 h-5 '
                        : 'text-[#222327]'
                    }`}
                  >
                    {icon}
                  </i>
                  <span
                    className={`absolute transition-all ${
                      isActive
                        ? 'opacity-100 translate-y-2'
                        : 'opacity-0 translate-y-5'
                    }`}
                  >
                    {text}
                  </span>
                </a>
              </li>
            );
          })}

          <li
            id="indicator"
            className="absolute w-[50px] h-[50px] top-[-50%] rounded-full border-4 border-[#0c0a09] bg-custom-gradient transition-transform duration-500 z-0"
            style={{
              transform: calculateTransform(activeSection),
            }}
          >
            <span
              style={{
                boxShadow: '1px -7px 0 0 #0c0a09',
                textIndent: '-9999px',
              }}
              className="w-5 h-5 absolute top-1/2 left-[-20px] rounded-tr-[20px] transparent text-indent-[-9999px]"
            >
              before
            </span>
            <span
              style={{
                boxShadow: '-1px -7px 0 0 #0c0a09',
                textIndent: '-9999px',
              }}
              className="w-5 h-5 absolute top-1/2 right-[-20px] rounded-tl-[20px] bg-transparent text-indent-[-9999px]"
            >
              after
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
