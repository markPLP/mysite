import { Download, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { ResumeData } from '@/utils/types';

type Props = Pick<
  ResumeData,
  'name' | 'role' | 'summary' | 'email' | 'location' | 'pdfUrl'
>;

const ResumeIntro = ({
  name,
  role,
  summary,
  email,
  location,
  pdfUrl,
}: Props) => {
  return (
    <div className="resume-intro mb-12">
      <h1 className="text-5xl md:text-6xl font-bold tracking-wider uppercase mb-2">
        {name}
      </h1>
      <p className="resume-accent text-primary-text text-xl uppercase tracking-[0.2em] mb-6">
        {role}
      </p>

      <p className="max-w-[70ch] mb-6">{summary}</p>

      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
        <li>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 underline-offset-4 hover:underline hover:text-primary-text"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            {email}
          </a>
        </li>
        <li className="inline-flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" aria-hidden="true" />
          {location}
        </li>
      </ul>

      <Button asChild className="print:hidden">
        <a href={pdfUrl} download>
          <Download className="w-4 h-4" aria-hidden="true" />
          Download PDF
        </a>
      </Button>
    </div>
  );
};

export default ResumeIntro;
