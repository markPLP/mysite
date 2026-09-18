import { ResumeEducation } from '@/utils/types';

type Props = {
  skills: string[];
  education: ResumeEducation[];
};

const ResumeAside = ({ skills, education }: Props) => {
  return (
    <div className="resume-aside flex flex-col gap-10">
      <section aria-labelledby="resume-skills">
        <h2
          id="resume-skills"
          className="text-3xl font-bold uppercase tracking-wider mb-6 pb-2 border-b border-border"
        >
          Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border px-3 py-1 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="resume-education">
        <h2
          id="resume-education"
          className="text-3xl font-bold uppercase tracking-wider mb-6 pb-2 border-b border-border"
        >
          Education
        </h2>
        <ul className="flex flex-col gap-4">
          {education.map(({ id, qualification, institution, date }) => (
            <li key={id}>
              <p className="font-bold">{qualification}</p>
              <p className="resume-accent text-primary">{institution}</p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-sm text-muted-foreground">
        References available on request.
      </p>
    </div>
  );
};

export default ResumeAside;
