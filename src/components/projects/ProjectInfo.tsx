import { ProjectItem } from '@/utils/types';

// const profile_info = {
//   name: 'MARK PHILLIP LAS PINAS',
//   skills: [
//     'PostgreSQL',
//     'Prisma',
//     'Zod',
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'TypeScript',
//     'React',
//     'Next.js',
//     'GraphQL',
//     'Apollo',
//     'REST API',
//     'Tailwind CSS',
//     'Framer Motion',
//     'Shadcn',
//     'DaisyUI',
//     'Vercel',
//     'Netlify',
//     'Git',
//   ],
//   hard_worker: true,
//   quick_learner: true,
//   problem_solver: true,
//   hireable: function () {
//     return this.hard_worker && this.problem_solver && this.skills.length >= 5;
//   },
// };

const ProjectInfo = ({
  className,
  data,
}: {
  className?: string;
  data: ProjectItem;
}) => {
  console.log('projectinfotech', data);

  return (
    <div className={`grid grid-cols-[150px,1fr] ${className}`}>
      {/* {projects} */}
      {/* Sidebar */}
      <aside className="w-1/4 min-w-[150px] bg-gray-800 p-4">
        <h1 className="text-xl font-bold text-blue-400">Explorer</h1>
        <ul className="mt-4 space-y-2">
          <li className="text-sm font-semibold text-gray-300">
            website_info.js
          </li>
          <li className="text-sm font-semibold text-gray-500">
            skills_list.json
          </li>
          <li className="text-sm font-semibold text-gray-500">readme.md</li>
        </ul>
      </aside>
      {/* Main Editor */}
      <div className="flex-1 p-4 sm:p-6 text-neutral-200">
        <div className="mb-6 border-b border-gray-600 pb-4">
          <h2 className="text-lg font-bold text-neutral-200 lowercase">
            website_info.js
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
                <span className="text-green-400">if</span> (
              </p>
              <div className="ml-6">
                <p>
                  <span className="text-pink-400 block">
                    this.website_response_OK
                    <span className="text-neutral-200"> &&</span>
                  </span>
                  <span className="text-pink-400 block">
                    this.website_accessible
                    <span className="text-neutral-200"> &&</span>
                  </span>
                </p>
              </div>
              <p>{') {'}</p>
            </div>
            <div className="ml-6">
              <div className="ml-6">
                return <span>`</span>
                <div className="ml-6">
                  {'<'}a href="{data?.liveUrl.toString()}" target="_blank"
                  rel="noopener noreferrer"
                  {'>'}
                  Website Link{'<'}/a{'>'}
                </div>
                {data?.ghUrl && (
                  <div className="ml-6">
                    {'<'}a href="{data?.ghUrl.toString()}" target="_blank"
                    rel="noopener noreferrer"
                    {'>'}
                    Visit Example 1{'<'}/a{'>'}
                  </div>
                )}
                <span>`;</span>
              </div>
            </div>
            <div className="ml-6">
              <p>
                {'}'} else {'{'}
              </p>
              <div className="ml-4">return 'Not clickable';</div>
              <p>{'}'}</p>
            </div>
          </div>
          <div className="ml-6">{'},'}</div>
          <p>{'};'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
