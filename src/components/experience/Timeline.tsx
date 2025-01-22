import { timelineElements } from '@/utils/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';

// import schoolIcon from '../../assets/school.svg';
// import workIcon from '../../assets/work.svg';

export default function Timeline({ defaultColor }: { defaultColor?: string }) {
  return (
    <section
      id="experience"
      className="scroll-mt-16 lg:h-screen mb-12 mx-auto xl:place-items-center md:max-w-[600px] lg:max-w-[80%] h-md:h-auto"
    >
      <SectionTitle text="Experience" />
      <Container className="flex flex-col gap-y-[100px]">
        {timelineElements.map((element, index) => {
          const { id, title, company, description, date, icon, tech } = element;
          // const colors = [
          //   'bg-red-500',
          //   'bg-blue-500',
          //   'bg-yellow-500',
          //   'bg-purple-500',
          //   'bg-orange-500',
          // ];
          const isLeft = index % 2 === 0;

          const color = defaultColor || `bg-${element.color}-500`;

          return (
            <article
              key={id}
              className={`${
                isLeft && 'l-left'
              } md:grid md:grid-cols-[auto,1fr] lg:grid-cols-[1fr,auto,1fr] border-0 relative lg:w-full`}
            >
              <div
                className={`${
                  isLeft
                    ? 'l-left hidden order-none xl:block lg:order-3'
                    : 'order-1 hidden lg:block'
                } w-full`}
              ></div>
              <div className="hidden order-none pt-0.5 relative mx-7 items-center md:order-1 md:flex md:ml-0 lg:order-2 lg:mx-7">
                <div
                  className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
                ></div>
                <span className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-primary bg-custom-gradient relative">
                  {date}
                </span>
                {/* <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div> */}
              </div>
              <Card
                className={`${
                  isLeft ? 'l-left order-none md:order-1 md:block' : 'order-3'
                } border border-gray-600 rounded-lg px-5 py-4 bg-gray-800 w-full z-10 relative`}
              >
                <CardHeader className="p-0">
                  <CardTitle className="text-3xl font-medium">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 !mb-3 text-sm">
                    {company}
                    {/* <span className="sm:hidden">| {element.date}</span> */}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <h4 className="text-[19px] mb-1">Responsibilities:</h4>
                  <ul className="mb-4 text-left">
                    {/* {element.description} */}
                    {/* {renderDescription(description)} */}
                    {description.map((item, index) => {
                      return (
                        <li key={index} className="mb-2">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {element.tech.map((tech, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-0"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <span className="sm:md:hidden z-20 absolute left-0 -top-[70px]  w-14 h-14 flex items-center justify-center rounded-full border-2 border-primary bg-custom-gradient">
                    {element.date}
                  </span>
                  {/* <a
                  className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}
                >
                  {element.buttonText}
                </a> */}
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={`${
                      isLeft
                        ? '-right-[15px] transform -translate-y-2/4 rotate-180'
                        : '-left-[15px] transform -translate-y-2/4'
                    } absolute top-2/4`}
                  />
                </CardContent>
              </Card>
            </article>
          );
        })}
      </Container>
    </section>
  );
}
