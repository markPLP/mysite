import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { AssetFields, ProjectItem, ProjectsQueryResponse } from '@/utils/types';

const ProjectCarousel = ({
  data,
  handleClickId,
}: {
  data: ProjectsQueryResponse | undefined;
  handleClickId: (largeImage: string) => void;
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="w-1/2 ml-auto">
      {/* <Container> */}
      <Slider {...settings}>
        {data?.data.map((project) => {
          return (
            <div key={project.id} className="relative">
              <div
                // style={{ background: `url(${project.largeImage})` }}
                className="relative"
              >
                {/* <h2>{project.title}</h2>
                <p>
                  Live URL: <a href={project.liveUrl}>{project.liveUrl}</a>
                </p>
                <p>
                  GitHub: <a href={project.ghUrl}>{project.ghUrl}</a>
                </p> */}
                {/* <p>Tags: {project.tags.join(', ')}</p> */}
                <img src={project.logoImage} alt={`${project.title} Preview`} />
                <span
                  onClick={() => handleClickId(project.largeImage)}
                  className="absolute top-0 left-0 w-full h-full z-10 text-1xl"
                >
                  {project.id}
                </span>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default ProjectCarousel;
