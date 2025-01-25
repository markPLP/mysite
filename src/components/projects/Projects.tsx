import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCarousel from './ProjectCarousel';
import { memo, useEffect, useState, useCallback } from 'react';
import ProjectTabs from './ProjectTabs';
import ProjectInfo from './ProjectInfo';
import { ProjectItem } from '@/utils/types';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const { isLoading, error, data } = useFetchProjects(filter || 'all');
  const [prodBg, setProdBg] = useState<string>('');
  const [websiteInfo, setWebsiteInfo] = useState<any>(null);
  console.log('data from projects', websiteInfo);

  useEffect(() => {
    if (data && data.data.length > 0) {
      setWebsiteInfo(data.data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.data.length > 0) {
      setProdBg(data.data[0].largeImage);
    }
  }, [data, setProdBg]);

  const handleClick = useCallback((project: ProjectItem) => {
    const newLargeImage = project.largeImage;
    setProdBg(newLargeImage);
    setWebsiteInfo(project);
  }, []);

  const handleGetTag = useCallback((tag: string) => {
    setFilter(tag);
  }, []);

  if (isLoading)
    return <div className="h-screen bg-black">Loading projects...</div>;
  if (error) return <div>Failed to load projects.</div>;
  console.log('websiteInfowebsiteInfo', websiteInfo);

  return (
    <section id="projects" className="h-screen place-content-end relative px-8">
      <div
        className="!bg-cover absolute inset-0 brightness-50"
        style={{ background: `url(${prodBg})` }}
      ></div>
      <div className="grid grid-cols-2">
        <div className="relative z-10">
          <ProjectInfo
            data={websiteInfo}
            className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]"
          />
        </div>
        <div>
          <ProjectTabs handleGetTag={handleGetTag} />
          <ProjectCarousel data={data} handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
