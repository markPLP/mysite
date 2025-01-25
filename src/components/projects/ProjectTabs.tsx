import { AllTags, ProjectsQueryResponse } from '@/utils/types';

const ProjectTabs = ({
  tags,
  handleGetTag,
}: {
  tags: string[] | undefined;
  handleGetTag: (tag: string) => void;
}) => {
  // const tags: string[] | undefined = [
  //   ...new Set(data?.data.flatMap((item) => item.tags)),
  // ];

  // const tags: AllTags | undefined = [
  //   ...new Set(
  //     data?.data.flatMap((item) =>
  //       item.metadata?.tags.map((tag) => tag.toLowerCase())
  //     )
  //   ),
  // ];

  console.log(tags, 'data des');
  return (
    <section className="w-1/2 ml-auto">
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

export default ProjectTabs;
