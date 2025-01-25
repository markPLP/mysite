import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCarousel from './ProjectCarousel';
import { memo, useEffect, useState } from 'react';
import ProjectTabs from './ProjectTabs';
import ProjectFetchSample from './ProjectFetchSample';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');

  const { isLoading, error, data } = useFetchProjects(filter);
  const [prodBg, setProdBg] = useState<string>('');
  console.log('from projects', data);

  // filter tags
  const tags = [
    ...new Set(
      data?.data.flatMap((item) => item.tags?.map((tag) => tag.toLowerCase()))
    ),
  ];

  console.log('from projects tags', tags);

  useEffect(() => {
    if (data && data.data.length > 0) {
      setProdBg(data.data[0].largeImage);
    }
  }, [data]);

  if (isLoading) return <div>Loading projects...</div>;
  if (error) return <div>Failed to load projects.</div>;

  const handleClickId = (largeImage: string) => {
    setProdBg(largeImage);
  };

  const handleGetTag = (tag: string) => {
    console.log(tag);
  };

  return (
    <section
      id="projects"
      className="h-screen place-content-end !bg-cover bg-center filter brightness-50"
      style={{ background: `url(${prodBg})` }}
    >
      <ProjectTabs tags={tags} handleGetTag={handleGetTag} />
      <ProjectCarousel data={data} handleClickId={handleClickId} />
      <ProjectFetchSample />
    </section>
  );
};

export default memo(Projects);
