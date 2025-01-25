import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCarousel from './ProjectCarousel';
import { memo, useEffect, useState, useCallback } from 'react';
import ProjectTabs from './ProjectTabs';
import ProjectFetchSample from './ProjectFetchSample';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const { isLoading, error, data } = useFetchProjects(filter || 'all');
  const [prodBg, setProdBg] = useState<string>('');

  useEffect(() => {
    if (data && data.data.length > 0) {
      setProdBg(data.data[0].largeImage);
    }
  }, [data]);

  const handleClickId = useCallback((largeImage: string) => {
    setProdBg(largeImage);
  }, []);

  const handleGetTag = useCallback((tag: string) => {
    setFilter(tag);
  }, []);

  if (isLoading)
    return <div className="h-screen bg-black">Loading projects...</div>;
  if (error) return <div>Failed to load projects.</div>;

  return (
    <section id="projects" className="h-screen place-content-end relative">
      <div
        className="!bg-cover absolute inset-0 brightness-50"
        style={{ background: `url(${prodBg})` }}
      ></div>
      <ProjectTabs handleGetTag={handleGetTag} />
      <ProjectCarousel data={data} handleClickId={handleClickId} />
    </section>
  );
};

export default memo(Projects);
