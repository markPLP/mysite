import { ProjectItem } from '@/utils/types';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import ProjectLoading from '../global/ProjectLoading';
import { useTheme } from '../theme-provider';

const ProjectInfo = ({
  className,
  data,
  isLoading,
}: {
  className?: string;
  data: ProjectItem | null;
  isLoading: boolean;
}) => {
  if (isLoading) return <ProjectLoading />;

  const theme = useTheme();

  return (
    <div
      className={`grid grid-cols-1 from-[#0d122498] bg-gradient-to-r to-[#1a1a1b98] border-[#1b2c68a0] rounded-lg border relative z-10 lg:mb-0 ${className} ${
        theme.theme === 'light' && 'bg-gray-800'
      } `}
    >
      <div className="flex-1 p-4 sm:p-6 text-neutral-200">
        <div className="mb-6 border-b border-gray-600 pb-4">
          <h2 className="text-lg font-bold text-neutral-200 lowercase">
            {data?.title}_info.js
          </h2>
        </div>
        <div className="font-mono text-sm leading-relaxed">
          <p>
            <span className="text-green-400">const </span>
            <span className="text-yellow-300">website_info</span> = {'{'}
          </p>
          <div className="ml-6">
            <p>
              <span className="text-blue-400">website_title</span>:{' '}
              <span className="text-pink-400">'{data?.title}'</span>,
            </p>
            <p>
              <span className="text-blue-400">tech_used</span>: [
              {data?.tech?.map((tag, index) => (
                <span key={index} className="text-green-400">
                  '{tag}'{index < (data?.tech?.length ?? 0) - 1 ? ', ' : ''}
                </span>
              ))}
              ],
            </p>
            <p>
              <span className="text-blue-400">description</span>:{' '}
              <span className="text-purple-400">'{data?.description}'</span>,
            </p>
            <p>
              <span className="text-blue-400">website_response_OK</span>:{' '}
              <span className="text-purple-400">true</span>,
            </p>
            <p>
              <span className="text-blue-400">website_accessible</span>:{' '}
              <span className="text-purple-400">true</span>,
            </p>
            <p>
              <span className="text-blue-400">clickable</span>:
              <span className="text-yellow-300"> function</span> {'() {'}
            </p>
            <div className="ml-6">
              <p>
                <span className="text-green-400">if</span> ({' '}
                <span className="text-pink-400">
                  this.website_response_OK
                  <span className="text-neutral-200"> &&</span>
                  <span className="text-pink-400">
                    {' '}
                    this.website_accessible {')'}
                  </span>
                </span>
              </p>
              {/* <p>{') {'}</p> */}
            </div>
            <div className="ml-6">
              <div className="ml-6">
                return{' '}
                <span className="inline-flex items-center gap-2">
                  <a
                    href={data?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative top-1 inline-block"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
                  </a>
                  {data?.ghUrl && (
                    <a
                      href={data?.ghUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative top-1 inline-block"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    </a>
                  )}
                </span>
              </div>
            </div>
          </div>
          <p>{'};'}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectInfo);
