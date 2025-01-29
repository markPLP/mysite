import ProjectLoading from '../global/ProjectLoading';

const ProjectImage = ({
  prodBg,
  isLoading,
}: {
  prodBg: string;
  isLoading: boolean;
}) => {
  if (isLoading) return <ProjectLoading />;
  return (
    <figure className="flex self-center relative pt-[50%] overflow-hidden">
      <img
        src={prodBg}
        alt="Project Preview"
        className="object-cover w-full h-full rounded-lg absolute top-0 left-0 object-left border"
      />
    </figure>
  );
};

export default ProjectImage;
