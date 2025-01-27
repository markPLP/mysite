import { ProjectItem } from '@/utils/types';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectInfo = ({
  className,
  data,
}: {
  className?: string;
  data: ProjectItem;
}) => {
  return (
    <div className={`grid grid-cols-1 ${className}`}>
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
                <span>
                  <a
                    href={data?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative top-1"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mr-2" />
                  </a>
                  {data?.ghUrl && (
                    <a
                      href={data?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative top-1"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    </a>
                  )}
                </span>
                {/* <div className="ml-6">
                  {'<'}a href="{data?.liveUrl.toString()}" target="_blank"
                  rel="noopener noreferrer"
                  {'>'}
                  Website Link{'<'}/a{'>'}
                </div> */}
                {/* {data?.ghUrl && (
                  <div className="ml-6">
                    {'<'}a href="{data?.ghUrl.toString()}" target="_blank"
                    rel="noopener noreferrer"
                    {'>'}
                    Visit Example 1{'<'}/a{'>'}
                  </div>
                )} */}
              </div>
            </div>
            {/* <div className="ml-6">
              <p>
                {'}'} else {'{'}
              </p>
              <div className="ml-4">return 'Not clickable';</div>
              <p>{'}'}</p>
            </div> */}
          </div>
          {/* <div className="ml-6">{'},'}</div> */}
          <p>{'};'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
