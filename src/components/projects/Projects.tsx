import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCarousel from './ProjectCarousel';
import { AssetFields } from '@/utils/types';
import { useEffect, useState } from 'react';

const Projects = () => {
  const { isLoading, error, data } = useFetchProjects();

  const [prodBg, setProdBg] = useState<string>('');
  console.log(prodBg, 'prodBg');

  useEffect(() => {
    if (data && data.data.length > 0) {
      setProdBg(data.data[0].largeImage);
    }
  }, [data]);

  if (isLoading) return <div>Loading projects...</div>;
  if (error) return <div>Failed to load projects.</div>;

  const handleClickId = (largeImage: string) => {
    console.log(largeImage);
    setProdBg(largeImage);
  };
  console.log(data, 'data1');
  return (
    <section
      id="projects"
      className="h-screen place-content-end !bg-cover bg-center filter brightness-50"
      style={{ background: `url(${prodBg})` }}
    >
      <ProjectCarousel data={data} handleClickId={handleClickId} />
    </section>
  );
};

export default Projects;
