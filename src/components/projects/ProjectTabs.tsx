import { useFetchProjects } from '@/hooks/usefetchProjects';
import { memo, useMemo } from 'react';

const ProjectTabs = ({
  handleGetTag,
}: {
  handleGetTag: (tag: string) => void;
}) => {
  const { data } = useFetchProjects('all');

  // filter tags
  const tags = useMemo(
    () =>
      Array.from(
        new Set(
          data?.data.flatMap((item) =>
            item.tags.map((tag) => tag.toLowerCase())
          )
        )
      ),
    [data]
  );

  return (
    <section className="w-1/2 ml-auto relative z-10">
      {tags &&
        tags.map((tag, index) => {
          return (
            <div key={index}>
              <button onClick={() => handleGetTag(tag)}>{tag}</button>
            </div>
          );
        })}
    </section>
  );
};

export default memo(ProjectTabs);
