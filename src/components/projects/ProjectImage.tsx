import { useEffect, useState } from 'react';
import ProjectLoading from '../global/ProjectLoading';

const ProjectImage = ({
  prodBg,
  isLoading,
  className,
}: {
  prodBg: string;
  isLoading: boolean;
  className?: string;
}) => {
  const [imageKey, setImageKey] = useState(Date.now()); // Unique key to trigger re-mount

  // Track changes to the image src (prodBg)
  useEffect(() => {
    setImageKey(Date.now()); // Update key when the image source changes
  }, [prodBg]);

  if (isLoading) return <ProjectLoading />;

  return (
    <figure
      className={`flex self-center relative pt-[50%] overflow-hidden ${className}`}
    >
      <img
        key={imageKey} // Changing the key will force React to unmount and remount the image
        src={prodBg}
        alt="Project Preview"
        className="object-cover w-full h-full rounded-lg absolute top-0 left-0 object-left border fade-in-up" // Initial class
      />
    </figure>
  );
};

export default ProjectImage;
