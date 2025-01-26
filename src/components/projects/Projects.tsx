import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCarousel from './ProjectCarousel';
import { memo, useEffect, useState, useCallback } from 'react';
import ProjectTabs from './ProjectTabs';
import ProjectInfo from './ProjectInfo';
import { ProjectItem } from '@/utils/types';
import SectionTitle from '../global/SectionTitle';

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
    <section
      id="projects"
      className="h-screen place-content-end relative py-28"
    >
      <div
        className="!bg-cover absolute inset-0 brightness-50"
        style={{ background: `url(${prodBg})` }}
      ></div>
      <SectionTitle className="relative z-10" text="Projects" />
      <div className="align-element flex flex-col m-auto lg:max-w-[88%] lg:gap-y-[50px]">
        <div className="lg:grid lg:grid-cols-2 gap-8 align-bottom">
          <div className="relative z-10 mb-7 lg:mb-0">
            <ProjectInfo
              data={websiteInfo}
              className="from-[#0d122495] bg-gradient-to-r to-[#0a0d3795] border-[#1b2c68a0] relative rounded-lg border"
            />
          </div>
          <div className="flex flex-col self-end from-[#0d122495] bg-gradient-to-r to-[#0a0d3795] border-[#1b2c68a0] relative rounded-lg border p-7">
            <ProjectTabs handleGetTag={handleGetTag} />
            <ProjectCarousel data={data} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
