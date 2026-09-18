import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ResumeRole } from '@/utils/types';

const ResumeExperience = ({ experience }: { experience: ResumeRole[] }) => {
  return (
    <section aria-labelledby="resume-experience">
      <h2
        id="resume-experience"
        className="text-3xl font-bold uppercase tracking-wider mb-6 pb-2 border-b border-border"
      >
        Work Experience
      </h2>

      <ol className="flex flex-col gap-6">
        {experience.map(({ id, title, company, date, responsibilities }) => (
          <li key={id}>
            <Card className="resume-role border border-border rounded-lg px-5 py-6 bg-card">
              <CardHeader className="p-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <CardTitle className="text-2xl font-medium">{title}</CardTitle>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {date}
                  </span>
                </div>
                <CardDescription className="resume-accent text-primary !mb-3">
                  {company}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="list-disc pl-5 flex flex-col gap-1.5">
                  {responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ResumeExperience;
