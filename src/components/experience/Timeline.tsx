import { timelineElements } from '@/utils/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Container from '../global/Container';
import SectionTitle from '../global/SectionTitle';
import { Button } from '../ui/button';

export default function Timeline({ defaultColor }: { defaultColor?: string }) {
  return (
    <section
      className="scroll-mt-16 mb-12 mx-auto xl:place-items-center"
      // md:max-w-[600px] lg:max-w-[80%]
    >
      <SectionTitle text="Experience" />
      <Container className="flex flex-col gap-y-[50px]">
        {timelineElements.map((element, index) => {
          const { id, title, company, description, date } = element;
          const isLeft = index % 2 === 0;
          const color = defaultColor || `bg-${element.color}-500`;

          return (
            <article
              key={id}
              className={`md:grid md:grid-cols-[auto,1fr] lg:grid-cols-[1fr,auto,1fr] border-0 relative lg:w-full`}
            >
              <div
                className={`${
                  isLeft
                    ? 'hidden order-none xl:block lg:order-3'
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
              </div>
              <Card
                className={`${
                  isLeft ? 'l-left order-none md:order-1 md:block' : 'order-3'
                } border border-gray-600 rounded-lg px-5 py-7 bg-gray-800 w-full z-10 relative`}
              >
                <CardHeader className="p-0">
                  <CardTitle className="text-3xl font-medium text-white">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 !mb-3 text-sm">
                    {company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <h4 className="text-[19px] mb-1 text-white">
                    Responsibilities:
                  </h4>
                  <ul className="mb-4 text-left">
                    {description.map((item, index) => {
                      return (
                        <li key={index} className="mb-2 text-white">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {element.tech.map((tech, index) => {
                      return (
                        <Button
                          key={index}
                          // className="text-white rounded-xl px-2 py-1 text-sm m-0"
                          size="sm"
                        >
                          {tech}
                        </Button>
                      );
                    })}
                  </div>
                  <span className="sm:md:hidden z-20 absolute left-0 -top-[70px]  w-14 h-14 flex items-center justify-center rounded-full border-2 border-primary bg-custom-gradient">
                    {element.date}
                  </span>
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
