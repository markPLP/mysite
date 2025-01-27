const profile_info = {
  name: 'MARK PHILLIP LAS PINAS',
  skills: [
    'PostgreSQL',
    'Prisma',
    'Zod',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'GraphQL',
    'Apollo',
    'REST API',
    'Tailwind CSS',
    'Framer Motion',
    'Shadcn',
    'DaisyUI',
    'Vercel',
    'Netlify',
    'Git',
  ],
  efficient: true,
  quick_learner: true,
  problem_solver: true,
  hireable: function () {
    return this.efficient && this.problem_solver && this.skills.length >= 5;
  },
};

const HeroInfo = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {/* Sidebar */}
      {/* <aside className="w-1/4 min-w-[250px] bg-gray-800 p-4">
        <h1 className="text-xl font-bold text-blue-400">Explorer</h1>
        <ul className="mt-4 space-y-2">
          <li className="text-sm font-semibold text-gray-300">
            profile_info.js
          </li>
          <li className="text-sm font-semibold text-gray-500">
            skills_list.json
          </li>
          <li className="text-sm font-semibold text-gray-500">readme.md</li>
        </ul>
      </aside> */}
      {/* Main Editor */}
      <div className="flex-1 p-4 sm:p-6 text-neutral-200">
        <div className="mb-6 border-b border-gray-600 pb-4">
          <h2 className="text-lg font-bold text-neutral-200">
            profile_info.js
          </h2>
        </div>
        <div className="font-mono text-sm leading-relaxed">
          <p>
            <span className="text-green-400">const </span>
            <span className="text-yellow-300">profile_info</span> = {'{'}
          </p>
          <div className="ml-6">
            <p>
              <span className="text-blue-400">name</span>:{' '}
              <span className="text-pink-400">'{profile_info.name}'</span>,
            </p>
            <p>
              <span className="text-blue-400">skills</span>: [
              {profile_info.skills.map((skill, index) => (
                <span key={index} className="text-green-400">
                  '{skill}'{index < profile_info.skills.length - 1 ? ', ' : ''}
                </span>
              ))}
              ],
            </p>
            <p>
              <span className="text-blue-400">efficient</span>:{' '}
              <span className="text-purple-400">
                {profile_info.efficient.toString()}
              </span>
              ,
            </p>
            <p>
              <span className="text-blue-400">quick_learner</span>:{' '}
              <span className="text-purple-400">
                {profile_info.quick_learner.toString()}
              </span>
              ,
            </p>
            <p>
              <span className="text-blue-400">problem_solver</span>:{' '}
              <span className="text-purple-400">
                {profile_info.problem_solver.toString()}
              </span>
              ,
            </p>
            <p>
              <span className="text-blue-400">hireable</span>:
              <span className="text-yellow-300"> function</span> {'() {'}
            </p>
            <div className="ml-6">
              <p>
                <span className="text-green-400">return</span> (
              </p>
              <div className="ml-6">
                <p>
                  <span className="text-pink-400 block">
                    this.efficient
                    <span className="text-neutral-200"> &&</span>
                  </span>
                  <span className="text-pink-400 block">
                    this.problem_solver
                    <span className="text-neutral-200"> &&</span>
                  </span>
                  <span className="text-pink-400 block">
                    this.skills.length
                    <span className="text-neutral-200"> &gt;= 5</span>
                  </span>
                </p>
              </div>
              <p>);</p>
            </div>
            <p>{'}'}</p>
          </div>
          <p>{'};'}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
