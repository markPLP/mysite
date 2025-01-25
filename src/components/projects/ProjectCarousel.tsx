import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ProjectsQueryResponse } from '@/utils/types';
import { memo, useMemo } from 'react';

const ProjectCarousel = ({
  data,
  handleClickId,
}: {
  data: ProjectsQueryResponse | undefined;
  handleClickId: (largeImage: string) => void;
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const projects = useMemo(
    () =>
      data?.data.map((project) => (
        <div key={project.id} className="relative">
          <img
            src={project.logoImage}
            alt={`${project.title} Preview`}
            className="w-full h-auto"
          />
          <span
            onClick={() => handleClickId(project.largeImage)}
            className="absolute top-0 left-0 w-full h-full z-10 text-xl cursor-pointer"
          >
            {project.id}
          </span>
        </div>
      )),
    [data, handleClickId]
  );

  return (
    <section className="w-1/2 ml-auto">
      {/* <Container> */}
      <Slider {...settings}>{projects}</Slider>
    </section>
  );
};

export default memo(ProjectCarousel);
