import { memo, useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { useFetchProjects } from '@/hooks/usefetchProjects';

const ProjectTabs = ({
  handleGetTag,
  filter,
}: {
  handleGetTag: (tag: string) => void;
  filter?: string;
}) => {
  const { data } = useFetchProjects('all');
  const [activeTag, setActiveTag] = useState<string>(filter ?? 'all');

  console.log(activeTag, 'activeTag');

  const handleClick = (tag: string) => {
    // Correctly update the state and notify the parent
    setActiveTag(tag);
    handleGetTag(tag);
  };

  // Generate tags dynamically based on fetched data
  const tags = useMemo(() => {
    if (!data?.data) return ['all']; // Fallback to "all" if no data
    return [
      'all',
      ...new Set(
        data.data.flatMap((item) => item.tags.map((tag) => tag.toLowerCase()))
      ),
    ];
  }, [data]);

  return (
    <section className="m-auto relative z-10 justify-center gap-2 mb-6 flex-wrap grid grid-cols-2 lg:flex">
      {tags.map((tag, index) => (
        <div key={index}>
          <Button
            className={`${
              tag === activeTag ? 'active' : ''
            } text-[12px] w-full lg:w-auto`}
            variant={tag === activeTag ? 'outline' : 'default'}
            onClick={() => handleClick(tag)} // Correctly handle click events
          >
            {tag}
          </Button>
        </div>
      ))}
    </section>
  );
};

export default memo(ProjectTabs);
