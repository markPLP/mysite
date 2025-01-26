import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ProjectItem, ProjectsQueryResponse } from '@/utils/types';
import { memo, useMemo } from 'react';

const ProjectCarousel = ({
  data,
  handleClick,
}: {
  data: ProjectsQueryResponse | undefined;
  // handleClick: (largeImage: string) => void;
  handleClick: (project: ProjectItem) => void;
}) => {
  const slidesCount =
    (data?.data?.length ?? 0) > 5 ? 5 : data?.data?.length ?? 0;

  // const getWidth = useMemo(() => {
  //   switch (slidesCount) {
  //     case 4:
  //       return '740px';
  //     case 3:
  //       return '560px';
  //     case 2:
  //       return '350px';
  //     case 1:
  //       return '200px';
  //     default:
  //       return '900px'; // Default width
  //   }
  // }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoad: 'progressive' as const,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickCarousel = (project: ProjectItem) => {
    handleClick(project);
  };

  const projects = useMemo(
    () =>
      data?.data.map((project) => {
        return (
          <div
            key={project.id}
            className="relative !flex items-center justify-end h-[70px] border-0 border-white"
          >
            <img
              src={project.logoImage}
              alt={`${project.title} Preview`}
              className="object-contain p-2 w-full h-full object-position-right"
            />
            <span
              onClick={() => handleClickCarousel(project)}
              className="absolute top-0 left-0 w-full h-full z-10 text-xl cursor-pointer"
            ></span>
          </div>
        );
      }),
    [data, handleClick]
  );

  return (
    <section
      className="ml-auto overflow-hidden w-full max-w-[calc(100vw-30px)]"
      // style={{ maxWidth: getWidth }}
    >
      {/* <Container>  min-w-[300px] max-w-[1000px]  */}
      <Slider className="pt-6" {...settings}>
        {projects}
      </Slider>
    </section>
  );
};

export default memo(ProjectCarousel);
