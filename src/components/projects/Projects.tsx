import { useFetchProjects } from '@/hooks/usefetchProjects';
import ProjectCarousel from './ProjectCarousel';
import { memo, useEffect, useState, useCallback, lazy } from 'react';
// import ProjectTabs from './ProjectTabs';
const ProjectTabs = lazy(() => import('./ProjectTabs'));
import ProjectInfo from './ProjectInfo';
import { ProjectItem } from '@/utils/types';
import ProjectImage from './ProjectImage';
import { useTheme } from '../theme-provider';

const Projects = () => {
  const [filter, setFilter] = useState<string>('');
  const { isLoading, error, data } = useFetchProjects(filter || 'all');
  const [prodBg, setProdBg] = useState<string>('');
  const [websiteInfo, setWebsiteInfo] = useState<ProjectItem | null>(null);
  console.log(filter, 'filter');

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
    setFilter(tag);
  }, []);

  if (error) return <div>Failed to load projects.</div>;
  const theme = useTheme();

  return (
    <div className="align-element flex flex-col m-auto pb-0 px-0 max-w-[calc(100%-50px)] md:max-w-[calc(100%-77px)] md:mr-0 md:px-8 lg:max-w-[88%] lg:gap-y-[10px] xl:mr-auto">
      <div
        className={`mb-7 p-0 md:from-[#0d122498] md:bg-gradient-to-r md:to-[#0a0d3798] border-0 md:border md:p-9 md:mr-0 md:border-[#1b2c68a0] relative rounded-lg   ${
          theme.theme === 'light' && 'bg-gray-800'
        }`}
      >
        <ProjectTabs handleGetTag={handleGetTag} filter={filter} />
        <ProjectCarousel
          isLoading={isLoading}
          data={data}
          handleClick={handleClick}
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-8">
        <ProjectImage prodBg={prodBg} isLoading={isLoading} />
        <ProjectInfo data={websiteInfo} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default memo(Projects);
