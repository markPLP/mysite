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

  const getWidth = useMemo(() => {
    switch (slidesCount) {
      case 4:
        return '740px';
      case 3:
        return '560px';
      case 2:
        return '350px';
      case 1:
        return '200px';
      default:
        return '900px'; // Default width
    }
  }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    // autoplay: true,
    arrow: true,
    lazyLoad: 'progressive' as const,
  };

  const handleClickCarousel = (project: ProjectItem) => {
    // handleClick(project.largeImage);
    handleClick(project);
    console.log('project from handleClickCarousel', project);
  };

  const projects = useMemo(
    () =>
      data?.data.map((project) => {
        // const { id, title, logoImage, largeImage } = project;
        console.log('project from carousel', project);

        return (
          <div
            key={project.id}
            className="relative !flex items-center justify-end h-[70px] border-0 border-white"
          >
            <img
              src={project.logoImage}
              alt={`${project.title} Preview`}
              className="object-contain p-2 w-40 h-14 border-2 border-white"
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
    <section className="ml-auto overflow-hidden " style={{ width: getWidth }}>
      {/* <Container>  min-w-[300px] max-w-[1000px] */}
      <Slider className="pt-6" {...settings}>
        {projects}
      </Slider>
    </section>
  );
};

export default memo(ProjectCarousel);
