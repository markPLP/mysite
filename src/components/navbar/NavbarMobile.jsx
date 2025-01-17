import { useState } from 'react';
import { links } from '../../utils/data';

const NavbarMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const calculateTransform = (index) => {
    switch (index) {
      case 0:
        return 'translateX(calc(50px * 0))';
      case 1:
        return 'translateX(calc(50px * 1 + (4px * 2)))';
      case 2:
        return 'translateX(calc(50px * 2 + (6px * 2) + 2px))';
      case 3:
        return 'translateX(calc(50px * 3 + (4px * 5) + 2px))';
      case 4:
        return 'translateX(calc(50px * 4 + (5px * 5) + 2px))';
      case 5:
        return 'translateX(calc(50px * 5 + (5px * 7) + 1px))';
      default:
        return 'translateX(0)';
    }
  };

  return (
    <div
      className="md:hidden fixed bottom-0 flex justify-center items-center w-full bg-primary"
      style={{ boxShadow: '0 -8px 0 0 red' }}
    >
      <div className="relative flex items-center px-5 w-[375px]">
        <ul className="flex justify-between w-full">
          {links.map((item, index) => {
            const { id, href, text, icon } = item;

            return (
              <li
                key={id}
                className={`relative w-[50px] h-[50px] flex flex-col justify-center items-center cursor-pointer transition-all z-10 ${
                  activeIndex === index ? 'text-white' : 'text-[#222327]'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <a
                  href={href}
                  className="relative flex flex-col justify-center items-center text-center"
                >
                  <i
                    className={`w-6 h-6 block transition-all ${
                      activeIndex === index
                        ? '-translate-y-[25px] text-white w-5 h-5 '
                        : 'text-[#222327]'
                    }`}
                  >
                    {icon}
                  </i>
                  <span
                    className={`absolute transition-all ${
                      activeIndex === index
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
            className="absolute w-[50px] h-[50px] top-[-50%] rounded-full border-4 border-[#222327] bg-custom-gradient transition-transform z-0"
            style={{
              transform: calculateTransform(activeIndex),
            }}
          >
            <span
              style={{
                boxShadow: '1px -7px 0 0 #222327',
                textIndent: '-9999px',
              }}
              className="w-5 h-5 absolute top-1/2 left-[-20px] rounded-tr-[20px] transparent text-indent-[-9999px]"
            >
              before
            </span>
            <span
              style={{
                boxShadow: '-1px -7px 0 0 #222327',
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
