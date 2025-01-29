import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ProjectItem, ProjectsQueryResponse } from '@/utils/types';
import { memo, useMemo } from 'react';
import ProjectLoading from '../global/ProjectLoading';
import { useTheme } from '../theme-provider';

const ProjectCarousel = ({
  data,
  handleClick,
  isLoading,
}: {
  data: ProjectsQueryResponse | undefined;
  // handleClick: (largeImage: string) => void;
  handleClick: (project: ProjectItem) => void;
  isLoading: boolean;
}) => {
  const slidesCount =
    (data?.data?.length ?? 0) > 8 ? 8 : data?.data?.length ?? 0;

  const getWidth = useMemo(() => {
    const defaultWidth = 188 + 20;

    switch (slidesCount) {
      case 6:
        return defaultWidth * 6 + 'px';
      case 5:
        return defaultWidth * 5 + 'px';
      case 4:
        return defaultWidth * 4 + 'px';
      case 3:
        return defaultWidth * 3 + 'px';
      case 2:
        return defaultWidth * 2 + 'px';
      case 1:
        return '300px';
      default:
        return '100%'; // Default width
    }
  }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    // lazyLoad: 'progressive' as const,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 530,
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
            className="relative !flex items-center h-[70px] border-0 border-white"
          >
            <img
              src={project.logoImage}
              alt={`${project.title} Preview`}
              className="p-2 w-full h-full object-contain"
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

  if (isLoading) return <ProjectLoading />;

  return (
    <section className="m-auto overflow-hidden w-full">
      <section
        className={`m-auto`}
        style={{ maxWidth: getWidth }}
        // className={`m-auto w-full max-w-[calc(100vw-30px)] w-${getWidth}`}
      >
        {/* max-w-[calc(100vw-30px)] */}
        {/* <Container>  min-w-[300px] max-w-[1000px]  */}
        <Slider {...settings}>{projects}</Slider>
      </section>
    </section>
  );
};

export default memo(ProjectCarousel);
