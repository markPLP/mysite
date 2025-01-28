import { useFetchProjects } from '@/hooks/usefetchProjects';
import { memo, useMemo, useState } from 'react';
import { Button } from '../ui/button';

const ProjectTabs = ({
  handleGetTag,
}: {
  handleGetTag: (tag: string) => void;
}) => {
  const { data } = useFetchProjects('all');
  const [activeTag, setActiveTag] = useState<string>('all');

  const handleClick = (tag: string) => {
    handleGetTag(tag);
    setActiveTag(tag);
  };
  // filter tags
  const tags = useMemo(
    () => [
      'all',
      ...new Set(
        data?.data.flatMap((item) => item.tags.map((tag) => tag.toLowerCase()))
      ),
    ],
    [data]
  );

  return (
    <section className="m-auto relative z-10 justify-center gap-2 mb-6 flex-wrap grid grid-cols-2 lg:flex">
      {tags &&
        tags.map((tag, index) => {
          return (
            <div key={index}>
              <Button
                // size="sm"
                className={`${
                  tag === activeTag ? 'active' : ''
                } text-[12px] w-full lg:w-auto`}
                variant={tag === activeTag ? 'outline' : 'default'}
                onClick={() => handleClick(tag)}
              >
                {tag}
              </Button>
            </div>
          );
        })}
    </section>
  );
};

export default memo(ProjectTabs);
