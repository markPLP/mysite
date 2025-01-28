import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCarousel from './ProjectCarousel';
import { memo, useEffect, useState, useCallback, useTransition } from 'react';
import ProjectTabs from './ProjectTabs';
import ProjectInfo from './ProjectInfo';
import { ProjectItem } from '@/utils/types';
import ProjectLoading from '../global/ProjectLoading';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const { isLoading, error, data } = useFetchProjects(filter || 'all');
  const [prodBg, setProdBg] = useState<string>('');
  const [websiteInfo, setWebsiteInfo] = useState<ProjectItem | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (data && data.data.length > 0) {
      setWebsiteInfo(data.data[0]);
      setProdBg(data.data[0].largeImage);
    }
  }, [data]);

  const handleClick = useCallback((project: ProjectItem) => {
    const newLargeImage = project.largeImage;
    setProdBg(newLargeImage);
    setWebsiteInfo(project);
  }, []);

  const handleGetTag = useCallback((tag: string) => {
    startTransition(() => {
      setFilter(tag);
    });
  }, []);

  if (isLoading || isPending) return <ProjectLoading />;
  if (error) return <div>Failed to load projects.</div>;

  return (
    <div className="align-element flex flex-col m-auto pb-0 px-0 max-w-[calc(100%-50px)] md:max-w-[calc(100%-77px)] md:mr-0 md:px-8 lg:max-w-[88%] lg:gap-y-[10px] xl:mr-auto">
      <div className="mb-7 p-0 from-[#0d122498] bg-gradient-to-r to-[#0a0d3798] border-0 md:border md:p-9 md:mr-0 md:border-[#1b2c68a0] relative rounded-lg ">
        <ProjectTabs handleGetTag={handleGetTag} />
        <ProjectCarousel data={data} handleClick={handleClick} />
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-8">
        <figure className="flex self-center relative pt-[50%] overflow-hidden">
          <img
            src={prodBg}
            alt="Project Preview"
            className="object-contain w-full h-full rounded-lg absolute top-0 left-0 object-left"
          />
        </figure>
        <div className="from-[#0d122498] bg-gradient-to-r to-[#0a0d3798] border-[#1b2c68a0] rounded-lg border relative z-10 lg:mb-0">
          <ProjectInfo data={websiteInfo} className="" />
        </div>
      </div>
    </div>
  );
};

export default memo(Projects);
