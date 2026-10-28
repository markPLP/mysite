const profile_info = {
  name: 'MARK PHILLIP LAS PINAS',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Shopify Liquid',
    'WordPress',
    'Convert.com',
    'Apollo Client',
    'REST API',
    'Tailwind CSS',
    'Shadcn',
    'DaisyUI',
    'Vercel',
    'Netlify',
    'Git',
    'PostgreSQL',
    'Prisma',
    'Zod',
  ],
  efficient: true,
  quick_learner: true,
  problem_solver: true,
  hireable: function () {
    return this.efficient && this.problem_solver && this.skills.length >= 5;
  },
};

// Decorative "code editor" card — the site's signature element.
const HeroInfo = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] text-neutral-200 shadow-2xl shadow-primary/5 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-neutral-400">
          profile_info.js
        </span>
      </div>
      <div className="p-4 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-sm">
        <p>
          <span className="text-green-400">const </span>
          <span className="text-yellow-300">profile_info</span> = {'{'}
        </p>
        <div className="ml-4 sm:ml-6">
          <p>
            <span className="text-blue-400">name</span>:{' '}
            <span className="text-pink-400">'{profile_info.name}'</span>,
          </p>
          <p>
            <span className="text-blue-400">skills</span>: [
            {profile_info.skills.map((skill, index) => (
              <span key={skill} className="text-green-400">
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
          <div className="ml-4 sm:ml-6">
            <p>
              <span className="text-green-400">return</span> (
            </p>
            <div className="ml-4 sm:ml-6">
              <span className="block text-pink-400">
                this.efficient<span className="text-neutral-200"> &&</span>
              </span>
              <span className="block text-pink-400">
                this.problem_solver
                <span className="text-neutral-200"> &&</span>
              </span>
              <span className="block text-pink-400">
                this.skills.length
                <span className="text-neutral-200"> &gt;= 5</span>
              </span>
            </div>
            <p>);</p>
          </div>
          <p>{'}'}</p>
        </div>
        <p>{'};'}</p>
      </div>
    </div>
  );
};

export default HeroInfo;
