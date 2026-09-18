import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DarkMode } from '@/components/DarkMode';
import ResumeAside from '@/components/resume/ResumeAside';
import ResumeExperience from '@/components/resume/ResumeExperience';
import ResumeIntro from '@/components/resume/ResumeIntro';
import { resumeData } from '@/utils/data';

const ResumePage = () => {
  const { name, role, summary, email, location, pdfUrl, skills, experience, education } =
    resumeData;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Resume — ${name}`;
    return () => {
      document.title = previousTitle;
    };
  }, [name]);

  return (
    <>
      <header className="relative z-40">
        <nav className="flex items-center justify-between gap-4 px-5 py-4 print:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 uppercase tracking-wider underline-offset-4 hover:underline hover:text-primary"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
            Back to site
          </Link>
          <DarkMode />
        </nav>
      </header>

      <main>
        <div className="resume-page mx-auto w-full max-w-5xl px-5 py-12 md:px-8">
          <ResumeIntro
            name={name}
            role={role}
            summary={summary}
            email={email}
            location={location}
            pdfUrl={pdfUrl}
          />

          <div className="resume-grid grid gap-12 lg:grid-cols-[2fr,1fr] lg:gap-16">
            <ResumeExperience experience={experience} />
            <ResumeAside skills={skills} education={education} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumePage;
